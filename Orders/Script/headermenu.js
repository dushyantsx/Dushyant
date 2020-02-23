//USEUNIT useunits

function createnewdatabase(){
  mainform.MainMenu.Click("File|New");
  
}
function openexitingdatabase(){
  mainform.MainMenu.Click("File|open...");
  openfile(orders.dlgOpen,dbexistingpath);
  logs("File is loaded from File|open... option");
  
}
function openneworderscreen(){
  mainform.MainMenu.Click("Orders|New order...");
  logs("New Order Screen is opened Orders|New order... option");
 }

function opendeleteorderalert(){
  mainform.MainMenu.Click("Orders|Delete order");
  logs("Order Deletion window is opened to deleted an order using Orders|Delete option");
  
}

