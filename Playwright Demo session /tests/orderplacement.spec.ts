import { test, expect } from '@playwright/test'

// test("My first script", async({browser})=>{ //test annotation will take 2 parameters(Name, Function), "=>" pipe  indicator indicates the anonymous Function 
  
//   const context= await browser.newContext(); // context is a refernce variable and const is a datatype , context is creating the new instance browser 
//   const page= await context.newPage() // Page is reference variable and context is creating the new instance 
//   await page.goto("https://magento.softwaretestingboard.com/") //page will be navigated to this website.
//   //await page.pause()  //it will quit the webpage ii the browser
//   console.log(await page.title()) // it will display the title of the page.
//   await expect(await page.title()).toBe("Home Page") // performing the assertion 

// })

// test("verify the user is able to login to application using valid credentials", async ({page})=>{
//   await page.goto("https://magento.softwaretestingboard.com/") //page will be navigated to this website.
//   await page.locator("//div[@class='panel header']//a[contains(.,'Sign In')]").click()
//   await page.locator("//input[@id='email']").fill("anishjain9516@gmail.com")
//   await page.locator("//input[@name='login[password]']").fill("Sid@1212")
//   await page.locator("(//div[@class='actions-toolbar']//button[contains(.,'Sign In')])[1]").click()

//   console.log("successfully logged In")

//   //expect(await page.locator("(//span[contains(.,'Welcome, sid jai!')])[1]")).toHaveText("")
  
// }) 
test("Verify the order placement",{tag: "@regression"},async ({page})=>{
 
//logging in
  await page.goto("https://magento.softwaretestingboard.com/") //page will be navigated to this website.
  await page.locator("//div[@class='panel header']//a[contains(.,'Sign In')]").click()
  await page.locator("//input[@id='email']").fill("anishjain9516@gmail.com")
  await page.locator("//input[@name='login[password]']").fill("Sid@1212")
  await page.locator("(//div[@class='actions-toolbar']//button[contains(.,'Sign In')])[1]").click()

  //hoverr over men dropdoown
  await page.locator("//span[contains(.,'Men')]").click()
  //hover on toops menu
  await page.locator("(//span[contains(.,'Tops')])[1]").click()
  //select & click on the tshirt
  await page.locator("(//img[@class='product-image-photo'])[1]").click()
  //select the size
  await page.locator("//div[@index='2']").click() 
  //select the color 
  await page.locator("//div[@id='option-label-color-93-item-50']").click()
  //enter the quantity
  await page.locator("//input[@id='qty']").fill("2")
  //adding to cart 
  await page.locator("//button[@id='product-addtocart-button']").click() 
  //go to add to cart 
  await page.locator("//a[@class='action showcart active']").click() 
  //click on proced to checkout 
  await page.locator("//button[@id='top-cart-btn-checkout']").click() 
  
  await page.pause()
}) 