const should = require('should');

describe('NO:DOM global', () => {
  afterEach(() => {
    if (global.document && typeof global.document.destroy === 'function') {
      global.document.destroy();
    }
  });

  it('should import and register without throwing exceptions', () => {
    const nodomGlobal = require('./index');

    should(nodomGlobal).be.type('function');
    nodomGlobal();
  });

  it('should be able to create HTML elements', () => {
    require('./index')();

    const div = document.createElement('div');

    document.body.appendChild(div);
    should(document.querySelector('body').innerHTML).be.equal('<div></div>');
  });

  it('should cleanup itself', () => {
    var cleanup = require('./index')();

    cleanup();
    should(global.document).be.undefined();
    should(global.window).be.undefined();
  });
});
