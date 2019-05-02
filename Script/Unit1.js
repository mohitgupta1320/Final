function Test1()
{
  Browsers.Item(btChrome).Run("chrome://extensions/");
  let browser = Aliases.browser;
  let page = browser.pageExtensions;
  page.Keys("[F5]");
  page.Wait();
  page = browser.pageCreateANewRepository;
  page.Wait();
  let form = page.formNewRepository;
  let textbox = form.textboxRepositoryName;
  textbox.Click(86, 22);
  textbox.SetText("Final");
  form.buttonCreateRepository.ClickButton();
  page = browser.pageFinal;
  page.Wait();
  page.textboxEmptySetupCloneUrl.Click(280, 11);
  page.panel.panel.panel.panel.panel.panel.panel.panel.vg.Click(12, 4);
}