//@TestCase
//@HighPriority
//@OrdersAppSmokeTest
var configurations = require("configurations");


function launchApp()
{
 
 configurations.app.Run(); 
}

function closeApp()
{
  configurations.app.Close();
}

function openfile(){
  configurations.orders.MainForm.MainMenu.Click("File|Open...");
  configurations.orders.dlgOpen.OpenFile(configurations.dbexistingpath, "Table (*.tbl)");
}

function closeDialog(){
  let dlgConfirmation = configurations.orders.dlgConfirmation;
  if(dlgConfirmation.Exists)
  {
    dlgConfirmation.Activate();
    dlgConfirmation.btnYes.ClickButton();
    while (configurations.orders.dlgConfirmation.Exists)
    {
      Delay(100);
    }
  }  
}

module.exports.launchApp = launchApp;
module.exports.closeApp = closeApp;
module.exports.closeDialog = closeDialog;
module.exports.openfile = openfile;
