# Test info

## Thoughts

Like I've said previously I'm still working out the best way to structure `ctr` in Javascript so take the various test structures with a grain of salt.

## General Individual Test Structure

Every test directory has a `desc.test.md` which describes what the test should do. The actual test is in the `/src` directory and all test start through the `index.js` which requires the `ctr` test file(s), does its magic, and produces the results which should equal `style.exp.css`.


## General Test Process

All theses test follow this general process more or less.

__Pipeline__

1. `./run.test.js` globs all test via `**/*.test.js`
2. Each tests `run.test.js` file will config the webpack configuration through `./base.webpack.config.js`, which is you basic run-of-the-mill webpack config
3. Webpack config is then passed to the actual `webpack` instance, and partially applied to `base.webpack.funk.js` which processes the shit and invokes the callback `cb()`
4. The callback is where the testing magic happens, and it will read the `**/*.exp.css` file for the particular test directory and compare that to the actual results

__Notes__

+ Both `/basic` and `/watch` have the test logic centrilized in `basic.test.runner.js` and `watch.test.runner.js` respectivly
+ The individual test directories are copied so we don't fuck up the original copy and cause headaches



## Root Folder Structure

+ `/basic`
  * The tests, in the `/basic` directory are basic tests, in that webpack just runs once and compiles the results. In other terms, it's a webpack build test per se. If you want to look at dev tests/set-ups cruz on over to the `/watch` test directory since that's how you set up a dev environment.
+ `/is-working`
  * Makes sure test shit is working, no `ctr`, just straight `.css` dog
+ `/plugin`
  * Test to make use plugins work with `ctr`, this is less of a `ctr` thing and more of a `webpack` thing. The demos how to use `postcss` & `autoprefixer` plus some CSS module magic
+ `/watch`
  * These test are for webpacks watch/dev functionally ie, `webpack --watch` & `webpack-dev-server`. Also for all intents and purposes, these are the tests you want to look at not `/basic`.

## Basic Folder Structure

+ `/classes` -> Different ways to set up classes, pure `ctr` class solution as well as a YAML class solution. Alternatively, there is also a pure JS solution that acts like a psudeo class.
+ `/ctrrc` -> Makes sure `.ctrrc.yml` gets picked up if present
+ `/external-ctr-require` -> Example of not pulling in the `ctr` instance that the loader passes
+ `/multiple-styles` -> Multipole stlyes
+ `/set-mehtods` -> `ctr` set methods like `setVar`
+ `/write` -> `ctr` write method, ie bypass webpack `ExtractTextPlugin`
+ `/yaml` -> Using/picking up yaml `ctr` styles

## Watch Folder Structure

+ `/array-of-paths` -> Passing an array of paths to `requireWatch`
+ `/basic` -> The basic moves to make the groves
+ `/classes` -> `ctr` class js & yaml, and an alternative to classes which is like a psudeo class
+ `/ctrrc` -> Makes sure `.ctrrc.yml` gets picked up if present both locally and in the root
+ `/multiple-entry` -> An example of setting up the structure of your project, its basically the same way you do it in typical css preproccessor project just in Javascript!
+ `/options` -> Options yo, for the loader yo
+ `/pass-args` -> Passing arguments to `ctr` styles via `requireWatch`
+ `/set-mehtods` -> `ctr` set methods like `setVar`
+ `/write` -> `ctr` write method, ie bypass webpack `ExtractTextPlugin`
+ `/yaml` -> Using/picking up yaml `ctr` styles



