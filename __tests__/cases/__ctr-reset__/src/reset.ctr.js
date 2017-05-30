
/**
 * Resets, all "set" ctr and removes and lingering rc ref
 */
module.exports = function (ctr) {
  ctr.setReset();
  //needed cus we don't want previous rc vars/options
  ctr.setOption({reset: true, ctrrc: false});
  ctr.setVariable({reset: true, ctrrc: false});
  //remove any rc ref links
  ctr._rcConfigRan = false;
  ctr._rcFilePath = null;
  ctr._rcMtime = null;
  ctr._rcUserPath = null;
};
