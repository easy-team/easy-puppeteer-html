'use strict';
const path = require('path');
const expect = require('chai').expect;
// http://chaijs.com/api/bdd/
const { evaluate } = require('../lib');
describe('index.test.js', () => {
  before(() => {
  });

  after(() => {
  });

  beforeEach(() => {
  });

  afterEach(() => {
  });

  describe('#puppeteer test', async () => {
    it('should evaluate work', async () => {
        const html = await evaluate({
          url: 'https://eggjs.org/zh-cn/intro/',
          selector: '#title-Intro',
          // waitSelector: '#ReactApp',
        });
        console.log(html);
    });
  });
});