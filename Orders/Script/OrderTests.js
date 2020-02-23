//USEUNIT F_Useunits
//USEUNIT Global_useunits
//USEUNIT Helper_Useunits

function createOrder(){
aqTestCase.Begin("CreateOrderform")
  
OrdersHelper.clickNewOrder();

OrdersHelper.selectproduct("FamilyAlbum");

OrdersHelper.setQuantity(100);

OrdersHelper.setCustomerName("Abhijit");

OrdersHelper.clickOk();
//CSVDriverExample("C:\\Users\\Nuval Dream\\Desktop\\orders\\orderinput.csv");
aqTestCase.End();

}


function deleteOrderfromOrderView(){
  
aqTestCase.Begin("DeleteanOrder")

HomePageHelper.selectRecordbyName("Abhijit");

HomePageHelper.deletefromOrderview();

aqTestCase.End();
}


function createNewOrderfromJson(){
  
aqTestCase.Begin("CreateOrdersfromJSON")

  var jso = csvtojson(singlefilepath);
  var data = JSON.parse(jso);
  var fieldsnames = data[0];
  for(var i=1;i<Object.keys(data).length;i++){
     
  
  
      OrdersHelper.clickNewOrder();
     
      for (var key in fieldsnames) {
       
        LogUtilities.eventMessage(key)
        var fields = key.split('#');
        var fieldname = fields[0];
        LogUtilities.eventMessage(fieldname);       
        var fieldtype = fields[1];           //  orderform.Group.WinFormsObject(key).ClickButton();
        LogUtilities.eventMessage(fieldtype);       
                                           //  orderform.Group.WinFormsObject(key).ClickButton();
        Globalvariables.orderform.Group.WinFormsObject(fieldname).SetText(data[i][key]);
         
                                          // orderform.Group.WinFormsObject(key).SetText(data[i][key]);
                                          //   logs(key);
                                          //  logs(data[i][key]);
      }
      OrdersHelper.clickOk();
  }
aqTestCase.End()
}
