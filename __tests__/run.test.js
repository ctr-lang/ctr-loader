const _      = require('lodash');
const glob   = require('glob-all');
const should = require('should');
const fs     = require('fs');
const del    = require('del');
const colur  = require('colur');

/**
 * Helper for reading the css
 * @param  {str} filePath -> string filePath
 * @return {str}          -> utf-8 file, css
 */
const readCSS = function (filePath) {
  return fs.readFileSync(filePath, 'utf-8').replace(/\r/g, '').trim();
};

/**
 * Deletes copys of ctr-files in watch
 */
const delCtrrcFiles = function (silent = false) {
  //del .ctrrc in root if present + watch copies
  if (!silent) { colur('Deleting copy .ctrrc.yml files'); }
  del.sync('./.ctrrc.yml', {dot: true});
  del.sync('./__tests__/cases/watch/ctrrc/**/src/**/*.yml', {dot: true});
  if (!silent) { colur('Copy .ctrrc.yml files deleted', {end: true}); }
};

/**
 * Deletes the old tests results
 */
const delOldTest = function () {
  delCtrrcFiles();
  colur('Deleting Old Test Results');
  //clean out old tests
  _.forEach(glob.sync(['./__tests__/**/test-res']), function (val) {
    del.sync(val);
  });
  //clean out old test files from write test
  _.forEach(glob.sync(['./__tests__/**/style.res.css']), function (val) {
    del.sync(val);
  });
  colur('Old Test Results Deleted', {end: true});
};

/**
 * Runs all `.test.js` test
 */
const runTest = function () {
  colur('Starting Tests');
  //grab test glob
  const basicTests  = glob.sync(['./__tests__/cases/basic/**/*.test.js']);
  const watchTests  = glob.sync(['./__tests__/cases/watch/**/*.test.js']);
  const pluginTests = glob.sync(['./__tests__/cases/plugin/**/*.test.js']);
  const testGlob    = _.union(basicTests, watchTests, pluginTests);

  //reset assets
  const ctrReset = `
  ======================================================
  =---------------> ctr instance reset <---------------=
  =-------------> runs between each test <-------------=
  ======================================================`;
  const resetRunner = require('./cases/__ctr-reset__/run.test.js');


  //cycle cases tests
  _.forEach(testGlob, function (testLoc) {
    const testRunner = require(testLoc.replace('/__tests__', ''));
    const testDesc = fs.readFileSync(testLoc.replace('run.test.js', 'desc.test.md'), 'utf-8');

    /**
     * Run test
     */
    describe(testLoc, function() {
      //bumps the timeout limit
      this.timeout(20000);
      //tests need to be sync
      it(testDesc, function(done) {
        testRunner(function (err) {
          if (err) {
            return done(err);
          }
          done();
        }, should, readCSS);
      });
    });


    /**
     * Reset ctr instance
     */
    describe(ctrReset, function() {
      //bumps the timeout limit
      this.timeout(20000);
      //tests need to be sync
      it('Should reset ctr instance for next test', function(done) {
        resetRunner(function (err) {
          if (err) {
            return done(err);
          }
          done();
        }, should, readCSS);
      });
    });

  });

  //delete ctrrc after every test so that it does not get picked up
  //by other tests it also gives webpack some breather room since it
  //various tests can trip other tests up
  afterEach(function (done) {
    delCtrrcFiles(true);
    setTimeout(function () {
      done();
    }, 500);
  });

  //removes watch directories
  after(function () {
    colur('Tests Complete', {end: true});
    colur('Deleting /styles-copy directories');
    const styleCopy = glob.sync(['./__tests__/cases/**/styles-copy/']);
    _.forEach(styleCopy, function (dir) {
      del.sync(dir);
    });
    //del old
    delCtrrcFiles();
    colur('/styles-copy directories deleted', {end: true});
  });
};

//god speed
const test = _.flow([delOldTest, runTest]);
test();
