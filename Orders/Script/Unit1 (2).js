var appevents = require("appevents");
var configurations = require("configurations");


//@TestCase
//@HighPriority
//@OrdersAppSmokeTest
function main()
{
  Runner.CallMethod("appevents.launchApp");
  Runner.CallMethod("appevents.closeApp");
}

function Test3()
{
  appevents.launchApp();
  appevents.openfile();
  configurations.orders.MainForm.MainMenu.Click("File|New") ; 
  configurations.orders.MainForm.MainMenu.Click("File|Open...");
  configurations.orders.dlgOpen.OpenFile(configurations.dbexistingpath, "Table (*.tbl)");
  configurations.orders.MainForm.OrdersView.ClickItemR("John Smith Jr");
  configurations.orders.MainForm.OrdersView.PopupMenu.Click("Edit order...");
  configurations.orders.OrderForm.Group.Customer.DblClick(44, 7);
  configurations.orders.OrderForm.Group.Customer.Click(44, 7);
  configurations.orders.OrderForm.Group.Customer.ClickR(44, 7);
  configurations.orders.OrderForm.Group.Customer.PopupMenu.Click("Select All");
  configurations.orders.OrderForm.Group.Customer.SetText("Kasana");
  configurations.orders.OrderForm.Group.MasterCard.ClickButton();
  aqObject.CheckProperty(configurations.orders.OrderForm.Group.MasterCard, "wChecked", cmpEqual, true);
  aqObject.CheckProperty(configurations.orders.OrderForm.Group.Customer, "wText", cmpEqual, "Kasana");
  aqObject.CheckProperty(configurations.orders.OrderForm.Group.Street, "wText", cmpEqual, "12, Orange Blvd");
  aqObject.CheckProperty(configurations.orders.OrderForm.Group.City, "wText", cmpEqual, "Grovetown, CA");
  configurations.orders.OrderForm.ButtonOK.ClickButton();
  appevents.closeApp(); 
  appevents.closeDialog();  
}