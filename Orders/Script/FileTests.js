//USEUNIT Helper_Useunits
//USEUNIT Globalvariables

function openfile(){
  aqTestCase.Begin("Open a file");
  FileHelper.clickopenfile();
  FileHelper.enterfilepathtinOpenDialogueBox(Globalvariables.dbexistingpath);
  aqTestCase.End();
}

function saveFile(){
aqTestCase.Begin("Save a file");

FileHelper.savefileas();
FileHelper.enterFilenameSaveAs(5);
FileHelper.clickOnSavebutton()
aqTestCase.End();  

}

