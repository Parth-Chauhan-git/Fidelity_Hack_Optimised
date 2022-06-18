const puppeteer = require("puppeteer");

async function goandupload(){
    let browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', 
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://tinypng.com/",{
        waitUntil:'networkidle2'
    });
    
    const [fileChooser] = await Promise.all([
        tab.waitForFileChooser(),
        await tab.click( ".target .icon")
      ]);
    await fileChooser.accept([
        'code-feast.jpg',
        'customer-services-homepage.jpg', 
        'finance-homepage.jpg', 
        'home-page-hero.jpg', 
        'investment-research-homepage.jpg', 
        'tech-homepage.jpg']);
    await tab.waitForTimeout(8000);

    var fs = require('fs');

function deleteFiles(files, callback){
  var i = files.length;
  files.forEach(function(filepath){
    fs.unlink(filepath, function(err) {
      i--;
      if (err) {
        callback(err);
        return;
      } else if (i <= 0) {
        callback(null);
      }
    });
  });
}

var files = [
    'code-feast.jpg',
    'customer-services-homepage.jpg', 
    'finance-homepage.jpg', 
    'home-page-hero.jpg', 
    'investment-research-homepage.jpg', 
    'tech-homepage.jpg'];

deleteFiles(files, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('all files removed');
  }
});

await tab.click( ".download");
}
goandupload();




