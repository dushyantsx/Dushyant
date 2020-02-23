//USEUNIT Global_useunits


// Open a file from Menubar
function clickopenfile(){

Globalvariables.orders.mainform.MainMenu.Click("File|Open...")

}

// Create a new file from Menubar

function clicknewfile(){

Globalvariables.orders.mainform.MainMenu.Click("File|New")  /// use | for subclicks

}

var newFile=Aliases.Orders.MainForm;



//------------------------------------------- Save file from Menubar

function savefile(){

Globalvariables.orders.mainform.MainMenu.Click("File|Save")  /// use | for subclicks

}

//--------------------------------------------Save file as from Menubar

function savefileas(){

orders.mainform.MainMenu.Click("File|Save As...")  /// use | for subclicks

}

//--------------------------------------------Enter filename in Save as 

function enterFilenameSaveAs(obj){
  
let pathname = "C:\\Users\\Public\\Documents\\TestComplete 14 Samples\\Desktop\\Orders\\C#\\TCProjects\\" + WindowsHelper.makeid(obj);
LogUtilities.eventMessage(pathname);
Globalvariables.orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText(pathname);

}

//-------------------------------------------Enter text in  Open dialogue box
function enterfilepathtinOpenDialogueBox(filepath){
Globalvariables.orders.dlgOpen.OpenFile(filepath, "Table (*.tbl)");
}

//-------------------------------------------Open in Open Dialogue box

function clickopendlg(){
  Delay(1000);
  Globalvariables.orders.dlgOpen.btnOpen;
  
  
}

//-------------------------------------------Cancel/Close in Open Dialogue box

function clickCanceldlg(){
  Globalvariables.orders.dlgOpen.btnCancel;
}


//-------------------------------------------Enter text in  Save dialogue box
function textSaveDialoguebox(){
Globalvariables.orders.dlgSaveAs.OpenFile(dbexistingpath, "Table (*.tbl)");
}

//-------------------------------------------Open in Save Dialogue box

function clickOnSavebutton(){
  Delay(1000);
  WindowsHelper.clickBtn(Globalvariables.orders.dlgSaveAs.btnSave);
}

//-------------------------------------------Cancel/Close in Save Dialogue box

function clickCancelSavedlg(){
  Globalvariables.orders.dlgSaveAs.btnCancel;
}





