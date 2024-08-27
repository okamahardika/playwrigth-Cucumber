import { Given } from "@cucumber/cucumber"
import { When } from "@cucumber/cucumber"
import { Then } from "@cucumber/cucumber"
import { LoginPage } from "../pages/loginPages";

let loginPage: LoginPage = new LoginPage();

  Given('user access dashboard {string}', async function (url: string) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.gotoDashboard(url);
  });

  When('user input org ID {string}', async function (org: string) {
    await loginPage.addOrgText(org);
  });

  Given('user input Email {string}', async function (email: string) {
    await loginPage.addEmailText(email);
  });

  Given('user input Password {string}', async function (pass: string) {
    await loginPage.addPassText(pass);
  });

  Given('user click login button', async function () {
    await loginPage.clickBtnLogin()
  });

  Then('user should can login and see overview page', async function () {
    await loginPage.verifySuccessLogin()
  });

  Then('email should showing error {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.errorTextInvalidEmail()
  });

  Then('organisation ID should showing error {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.errorCompId()
  });