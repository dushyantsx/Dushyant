//USEUNIT useunits
var customer = orderform.Group.Customer;
var productnames = orderform.Group.ProductNames;
var quantity=  orderform.Group.Quantity;
var updownedit=  orderform.Group.Quantity.UpDownEdit;
var price = orderform.Group.Price;
var discount = orderform.Group.Discount;
var total = orderform.Group.groupBox1.Total;
var date = orderform.Group.Date;
var street = orderform.Group.Street;
var city = orderform.Group.City;
var state = orderform.Group.State;
var zip = orderform.Group.Zip;
var cardno = orderform.Group.CardNo;
var expdate = orderform.Group.ExpDate;
var visa =   orderform.Group.Visa;
var mastercard = orderform.Group.MasterCard;
var ae = orderform.Group.AE;

function testtimer(){
 Utils.Timers.Add(30000, "globalmethods.TimeoutTimer", true);
// This loop will be stopped after about the 30th iteration
  for (var i = 1; i <= 100; i++)
  {
    Log.Message(i);
    Delay(1000);
  }
}

function submitform(){
orderform.ButtonOK.ClickButton();  
}

function editorder(){
  orderview.ClickItemR("John Smith Jr");
  orderview.PopupMenu.Click("Edit order...");
  quantity.wValue = 2;
  price.SetText("$1000");
  discount.SetText("10%");
  total.SetText("2000");
  date.wDate = "06-04-2018";
  customer.SetText("vikram");
  street.SetText("street");
  city.SetText("city");
  state.SetText("state");
  zip.SetText("zip");
  cardno.SetText("cardno");
  expdate.wDate = "06-04-2018";
  visa.ClickButton();
  mastercard.ClickButton();
  ae.ClickButton();
  
  aqObject.CheckProperty(ae, "wChecked", cmpEqual, true);
  aqObject.CheckProperty(customer, "wText", cmpEqual, "vikram");
  aqObject.CheckProperty(street, "wText", cmpEqual, "street");
  aqObject.CheckProperty(city, "wText", cmpEqual, "city");
  
  submitform();
}

function createneworder(){
  Utils.Timers.Add(30000, "globalmethods.TimeoutTimer", true);

  openneworderscreen();  
  quantity.wValue = 2;
  price.SetText("$1000");
  discount.SetText("10%");
  total.SetText("2000");
  date.wDate = "06-04-2018";
  customer.SetText("vikram");
  street.SetText("street");
  city.SetText("city");
  state.SetText("state");
  zip.SetText("zip");
  cardno.SetText("cardno");
  expdate.wDate = "06-04-2018";
  visa.ClickButton();
  mastercard.ClickButton();
  ae.ClickButton();
  submitform();
}

function createneworderfromexcel(driver){
while (! driver.EOF())
  {
  openneworderscreen();  
  customer.SetText(driver.Value(0));
  productnames.ClickItem(driver.Value(1));
  quantity.wValue = driver.Value(2);;
  date.wDate = driver.Value(3);
  street.SetText(driver.Value(4));
  city.SetText(driver.Value(5));
  state.SetText(driver.Value(6));
  zip.SetText(driver.Value(7));
  orderform.Group.WinFormsObject(driver.Value(8)).ClickButton();
  cardno.SetText(driver.Value(9));
  expdate.wDate = driver.Value(10);
  price.SetText(driver.Value(11));
  discount.SetText(driver.Value(12));
  total.SetText(driver.Value(13));
  Checkpoint(driver);
  submitform();
  driver.Next();
  }
}

function createneworderfromjson(){
  var jso = csvtojson(singlefilepath);
  var data = JSON.parse(jso);
  var fieldsnames = data[0];
  for(var i=1;i<Object.keys(data).length;i++){
      openneworderscreen();  
      
      for (var key in fieldsnames) {
        var fields = key.split('#');
        var fieldname = fields[0];
        var fieldtype = fields[1];
        switch(fieldtype) {
          case "settext":
             orderform.Group.WinFormsObject(fieldname).SetText(data[i][key]);
            break;
          case "wvalue":
            logs(data[i][key]);
             orderform.Group.WinFormsObject(fieldname).wValue = aqConvert.StrToInt(data[i][key]);
            break;
          case "wdate":
             orderform.Group.WinFormsObject(fieldname).wDate = aqConvert.StrToDate(data[i][key]);
            break;
        default:
              // code block
        }
      }
      submitform();
  }
}

function Checkpoint(driver)
{
  aqObject.CheckProperty(price,"wText", cmpEqual, driver.Value(11), false);
  aqObject.CheckProperty(discount,"wText", cmpEqual, driver.Value(12), false);
  aqObject.CheckProperty(total,"wText", cmpEqual, driver.Value(13), false);
}

function deleteorder()
{
  orderview.ClickItem("vikram", 0);
  opendeleteorderalert();
  orders.dlgConfirmation.btnYes.ClickButton();
}