//USEUNIT WindowsHelper
//USEUNIT Globalvariables
//USEUNIT F_Useunits

var productnames = group.ProductNames; 
var quantity =  group.Quantity;
var price = group.Price;
var discount = group.Discount;
var total = group.groupBox1.Total;
var customer = group.Customer;
var date = group.Date;
var buttonCancel = orderforms.ButtonCancel;
var buttonOk = orderforms.ButtonOk;
//var popupmenu= ordersview.PopupMenu;



//----------Click on New Order


function clickNewOrder(){
  
WindowsHelper.click(orders.mainform.MainMenu,"Orders|New Order...");

}


//----------Select product in ORDER FORM

function selectproduct(productN){

WindowsHelper.clickOnListItem(productnames,productN);
 
}

//---------- Set quantity in Order Form

function setQuantity(a){

WindowsHelper.inputValue(quantity,a);
//quantity.wValue=a;
}

//----------- Set price in Order Form

function setPrice(p){
  
price.Click();
price.SetText(p);
}

//------------ Set Total in Order Form

function setTotal(t){
  
total.Click();
total.SetText(t);
}


// Set date in Order Form

function setdate(d){
  
date.wValue=d;
}


// Set customer name in Order Form

function setCustomerName(n){
  
customer.Click();
customer.SetText(n);
}


// Set other value fo different fields on Order form below

//Close order form/ click cancel button

function clickCancel(){
  
WindowsHelper.clickBtn(buttonCancel);

}

//Click Ok on Order form

function clickOk(){
  
WindowsHelper.clickBtn(buttonOk);

}

//-------------------------------------------------------------------------------






