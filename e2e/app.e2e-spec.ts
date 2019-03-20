import { MultiplicationTablesPage } from './app.po';

describe('multiplication-tables App', function() {
  let page: MultiplicationTablesPage;

  beforeEach(() => {
    page = new MultiplicationTablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
