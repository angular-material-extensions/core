import { CoreDemoPage } from './app.po';

describe('core-demo App', () => {
  let page: CoreDemoPage;

  beforeEach(() => {
    page = new CoreDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
