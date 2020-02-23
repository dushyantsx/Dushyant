//USEUNIT OrderTests
//USEUNIT Report_Useunit

function createandDeleteorder(){
  

LaunchApp.launchApp(Globalvariables.appOp);
OrderTests.createOrder();
OrderTests.deleteOrderfromOrderView();
HTMLReport.saveAsHTML();

}



