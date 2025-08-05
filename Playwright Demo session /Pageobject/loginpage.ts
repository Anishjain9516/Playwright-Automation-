import { test, expect, Page } from '@playwright/test'
import {loginpagelocator} from '../Locator/Loginpagelocator'


export class loginpage{
    readonly page:Page
    lp = new loginpagelocator();

    constructor(page:Page){
        this.page=this.page;
    }

    async navigateTo(){
    await this.page.goto("https://magento.softwaretestingboard.com/") //page will be navigated to this website.
    
}

    async validlogin(){

    //await this.page.goto("https://magento.softwaretestingboard.com/") //page will be navigated to this website.
    await this.page.locator("//div[@class='panel header']//a[contains(.,'Sign In')]").click()
    await this.page.locator("//input[@id='email']").fill("anishjain9516@gmail.com")
    await this.page.locator("//input[@name='login[password]']").fill("Sid@1212")
    await this.page.locator("(//div[@class='actions-toolbar']//button[contains(.,'Sign In')])[1]").click()
    }
}