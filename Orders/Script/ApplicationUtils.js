//USEUNIT F_Useunits

//purpose: To verify the msg box form has been displayed or not
 function verifyMsgBoxFormIsDisplayed(){
   if (msgBoxForm.VisibleOnScreen=True) { 
     LogUtilities.message(msgBoxForm.MsgText.GetText & " Popup has been displayed")}
   else{msgBoxForm
     LogUtilities.warningMessage("No confirmation popup has been displayed"); 
   }
 } 
 
//purpose: To verify theLookupDialog has been displayed or not
 function verifyLookupDialogIsDisplayed(){
  if (lookupDialog.VisibleOnScreen=True){ 
    LogUtilities.message(lookupDialog.GetText & " Pop up has been displayed");}
  else {
    LogUtilities.warningMessage("Popup has not been opened"); 
  }}

//Purpose: To click on yes button of msg box form 
 function clickOnYesButtonOfMsgBoxFormPopUp(){
   verifyMsgBoxFormIsDisplayed();
   LogUtilities.eventMessage("Clicked on yes button of popup" & WindowsUtils.click(msgBoxForm.PanelBoarder.btnLeft));
 }

//Purpose: To click on No button of msg box form
 function clickOnNoButtonOfMsgBoxFormPopUp(){
   verifyMsgBoxFormIsDisplayed();
   LogUtilities.eventMessage("Clicked on No button of popup" & WindowsUtils.click(msgBoxForm.PanelBoarder.btnCenter));
 }
 
//Purpose: To click on Ok button of msg box form
 function clickOnOkButtonOfMsgBoxFormPopUp(){
  if (msgBoxForm.Exists=True){ 
     LogUtilities.message(msgBoxForm.MsgText.GetText & " Popup has been displayed")
     LogUtilities.eventMessage("Clicked on Ok button of popup" & WindowsUtils.click(msgBoxForm.PanelBoarder.btnCenter));}
   else{ 
     LogUtilities.warningMessage("No confirmation popup has been displayed");
   }}

//Purpose: To click on cancel button of msg box form
 function clickOnCancelButtonOfMsgBoxFormPopUp(){ 
   verifyMsgBoxFormIsDisplayed();
   LogUtilities.eventMessage("Clicked on Cancel button of popup" & WindowsUtils.click(msgBoxForm.PanelBoarder.btnRight));
 }
 
//Purpose: To click on ok button of LookupDialog
 function clickOnOkButtonOfLookupDialog(){
 if (autobasedebug.LookupDialog.Exists=True){
  LogUtilities.eventMessage("Clicked on ok button" & WindowsUtils.click (lookupDialog.PanelBoarder.PanelBack.pnlButtons.OKBtn));
 }}
 

//Purpose: To select the item from look up list popup
 function selectLookupDialogListItem(strItem){
  if (lookupDialog.VisibleOnScreen=True){
    LogUtilities.message(lookupDialog.GetText & " Pop up has been displayed");
    LogUtilities.eventMessage(strItem & " Selecting from the list" &  WindowsUtils.clickOnListItem (lookupDialog.PanelBoarder.PanelBack.ListBox,strItem));
  }
  else{ 
    LogUtilities.errorMessage("Dialog box has not been opened"); 
 }} 

//Purpose: To verify password popup has been displayed and input the password in it
 function verifyPasswordPopupIsDisplayedAndEnterPassword(strPassword){
   if (autobasedebug.VerifyPasswordDialog.Exists=True){ 
     LogUtilities.message(autobasedebug.VerifyPasswordDialog.VCLObject("Label1").GetText & "Popup has been displayed");
     LogUtilities.eventMessage(strPassword & " Entering in password field" & WindowsUtils.inputValue (autobasedebug.VerifyPasswordDialog.Password,strPassword));
     ClickOnOkButtonOfverifyPasswordPopup();
   }else{ 
    LogUtilities.warningMessage("Password popup has not been displayed");
   }}
 
// //Purpose: Select list item for Lookuplist dialog
// function selectLookupListItem(strItemName){
//  if (lookupListDialog.Exists=true){  
//  // WindowUtilities.clickOnListItem lookupListDialog.PanelBack.ListBox(strItemName)
//  // lookupListDialog.PanelBack.pnlButtons.btnOk.Click();}
//} 
// else{
//    LogUtilities.errorMessage("Lookuplist dialog does not exists");
//    }}