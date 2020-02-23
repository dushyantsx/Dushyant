
function Test4()
{
  //Clicks the 4 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
  //Selects the 'FamilyAlbum' item of the 'ProductNames' combo box.
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
  //Sets the value of the UpDown control 'Quantity' to 5.
  Aliases.Orders.OrderForm.Group.Quantity.wValue = 5;
  //Clicks the 'Price' object.
  Aliases.Orders.OrderForm.Group.Price.Click(30, 9);
  //Enters the text '$801' in the 'Price' text editor.
  Aliases.Orders.OrderForm.Group.Price.SetText("$801");
  //Clicks the 'Total' object.
  Aliases.Orders.OrderForm.Group.groupBox1.Total.Click(27, 10);
  //Enters the text '40' in the 'Total' text editor.
  Aliases.Orders.OrderForm.Group.groupBox1.Total.SetText("40");
  //Sets the date '7/6/2005' in the 'Date' date/time picker.
  Aliases.Orders.OrderForm.Group.Date.wDate = "7/6/2005";
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(111, 10);
  //Enters the text 'Axv' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Axv");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(93, 11);
  //Enters the text 'mmm' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("mmm");
  //Clicks the 'City' object.
  Aliases.Orders.OrderForm.Group.City.Click(38, 11);
  //Enters the text 'mmm' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("mmm");
  //Clicks the 'State' object.
  Aliases.Orders.OrderForm.Group.State.Click(95, 9);
  //Enters the text 'n' in the 'State' text editor.
  Aliases.Orders.OrderForm.Group.State.SetText("n");
  //Clicks the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Click(32, 12);
  //Enters the text '1' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("1");
  //Clicks the 'MasterCard' button.
  Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
  //Clicks the 'AE' button.
  Aliases.Orders.OrderForm.Group.AE.ClickButton();
  //Clicks the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Click(37, 12);
  //Enters the text '54654' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("54654");
  //Sets the date '8/6/2005' in the 'ExpDate' date/time picker.
  Aliases.Orders.OrderForm.Group.ExpDate.wDate = "8/6/2005";
  //Clicks the 'ButtonCancel' button.
  Aliases.Orders.OrderForm.ButtonCancel.ClickButton();
Aliases.Orders.OrderForm.AcceptButton.PerformClick();
}
