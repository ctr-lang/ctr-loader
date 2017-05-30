/**
 * Sets color var, process yaml ctr styles, returens
 */
module.exports = function (ctr) {
  //sets global var to be picked up in yml
  ctr.setVar({
    color: 'red'
  });
  //process yaml
  ctr.yaml('./box.ctr.yml');
  //->
  return ctr.getRes();
};
