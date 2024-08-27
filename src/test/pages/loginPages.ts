import { expect } from "@playwright/test"
import { BrowserHelper } from "../helper/browserHelper"

let orgText = "[data-test='loginFormComponentcompanyIdInput']"
let emailText = "//input[@id='inputUsernameLogin']"
let passText = "//input[@id='inputPasswordLogin']"
let btnLogin = "//button[@id='loginButton']"
let loginForm = "//div[@class='auth__leftContent-text']"
let successLogin = "[data-test='mainLayoutSidebarMenuList']"
let compIdError = "[data-test='companyIdErrorerrorBox']"
let emailError = "[data-test='userNameErrorerrorBox']"

export class LoginPage extends BrowserHelper{
    async gotoDashboard(url: string){
        await this.openUrl(url)
        await this.waitElementToBeDisplayed(loginForm)
        await this.waitFor(2000)
    }
    async addOrgText(org: string){
        await this.waitElementToBeDisplayed(orgText)
        await this.setValue(orgText, org);
        await this.waitFor(2000)
    }
    async addEmailText(email:string){
        await this.setValue(emailText,email);
        await this.waitFor(2000)
    }
    async addPassText(pass:string){
        await this.setValue(passText,pass);
        await this.waitFor(2000)
    }
    async clickBtnLogin(){
        await this.clickOn(btnLogin);
        await this.waitFor(2000)
    }
    async verifySuccessLogin(){
        await this.waitElementToBeDisplayed(successLogin);
        await this.waitFor(5000)
    }
    async errorCompId(){
        await this.waitElementToBeDisplayed(compIdError);
    await this.waitFor(2000)
    }
    async errorTextInvalidEmail(){
        let errorMssg = " Please enter a valid email address. "
        let text = await this.getText(emailError)
        expect(text).toBe(errorMssg)
     await this.waitFor(2000)
    }
}