//USEUNIT F_Useunits
//USEUNIT Global_useunits


//--------------------------------------------------Verify Toolbar is enabled or nbot

function toolbarEnabled(){
  
if(WindowsHelper.objEnabled(Globalvariables.toolbar)== true){
  LogUtilities.eventMessage("Mainmenu toolbar is enabled"); 

}else{
 LogUtilities.eventMessage("Mainmenu toolbar is not enableds");
}
}

