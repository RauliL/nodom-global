const NODOM_KEYS = [
  'Document',
  'HTMLElement',
  'Node',
  'SVGElement',
  'TextNode'
];

module.exports = function globalNoDom () {
  const nodom = require('nodom');
  const originalGlobals = {
    document: global.document,
    window: global.window
  };

  NODOM_KEYS.forEach(function (key) {
    originalGlobals[key] = global[key];
    global[key] = nodom[key];
  });

  global.document = new nodom.Document();
  global.document.destroy = function () {
    Object.keys(originalGlobals).forEach(function (key) {
      global[key] = originalGlobals[key];
    });
  };
  global.window = {};

  return global.document.destroy;
};
