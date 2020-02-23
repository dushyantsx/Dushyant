//USEUNIT F_Useunits
//USEUNIT Global_useunits

//Verify Product field is available on New Order page.

function productfieldAvaliable(){
  
if(WindowsHelper.objVisibleOnScreen(productnames)== true){
  LogUtilities.eventMessage("Product field is available"); 

}else
 LogUtilities.eventMessage("Product field is not available");
}


//Verify Quantity field is available and editable

function quantityfieldAv(){
  
if(WindowsHelper.objVisibleOnScreen(productnames)== true){
  LogUtilities.eventMessage("Product field is available"); 

}else{
 LogUtilities.eventMessage("Product field is not available");
}
}
