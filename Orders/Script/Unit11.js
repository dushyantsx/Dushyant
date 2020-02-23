function Test9()
{
  //Clicks the 1 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(1, false);
  //Clicks the 'btnNo' button.
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
  //Clicks the 'btnCancel' button.
  Aliases.Orders.dlgOpen.btnCancel.ClickButton();
  //Clicks the 'MainForm' object.
  Aliases.Orders.MainForm.Click(25, 42);
  //Clicks the 'OrdersView' object.
  Aliases.Orders.MainForm.OrdersView.Click(207, 67);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Selects the 'FamilyAlbum' item of the 'ProductNames' combo box.
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
  //Selects the 'ScreenSaver' item of the 'ProductNames' combo box.
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("ScreenSaver");
  //Sets the value of the UpDown control 'Quantity' to 6.
  Aliases.Orders.OrderForm.Group.Quantity.wValue = 6;
  //Clicks the 'Price' object.
  Aliases.Orders.OrderForm.Group.Price.Click(44, 12);
  //Enters the text '$200' in the 'Price' text editor.
  Aliases.Orders.OrderForm.Group.Price.SetText("$200");
  //Clicks the 'Discount' object.
  Aliases.Orders.OrderForm.Group.Discount.Click(15, 9);
  //Clicks the 'Discount' object.
  Aliases.Orders.OrderForm.Group.Discount.Click(4, 8);
  //Enters the text '90%' in the 'Discount' text editor.
  Aliases.Orders.OrderForm.Group.Discount.SetText("90%");
  //Clicks the 'Total' object.
  Aliases.Orders.OrderForm.Group.groupBox1.Total.Click(30, 12);
  //Enters the text '1200' in the 'Total' text editor.
  Aliases.Orders.OrderForm.Group.groupBox1.Total.SetText("1200");
  //Sets the date '1/6/2005' in the 'Date' date/time picker.
  Aliases.Orders.OrderForm.Group.Date.wDate = "1/6/2005";
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(122, 8);
  //Enters the text 'Ab' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Ab");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(78, 7);
  //Enters the text 'a' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("a");
  //Clicks the 'City' object.
  Aliases.Orders.OrderForm.Group.City.Click(45, 16);
  //Enters the text 'a11' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("a11");
  //Clicks the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Click(42, 8);
  //Enters the text '111' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("111");
  //Clicks the 'State' object.
  Aliases.Orders.OrderForm.Group.State.Click(102, 9);
  //Enters the text 'abc' in the 'State' text editor.
  Aliases.Orders.OrderForm.Group.State.SetText("abc");
  //Clicks the 'MasterCard' button.
  Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
  //Clicks the 'AE' button.
  Aliases.Orders.OrderForm.Group.AE.ClickButton();
  //Clicks the 'Visa' button.
  Aliases.Orders.OrderForm.Group.Visa.ClickButton();
  //Clicks the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Click(35, 9);
  //Enters the text '1212' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("1212");
  //Sets the date '1/6/2005' in the 'ExpDate' date/time picker.
  Aliases.Orders.OrderForm.Group.ExpDate.wDate = "1/6/2005";
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Save");
  //Clicks the 'btnSave' button.
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
  //Drags the 'OrdersView' object.
  Aliases.Orders.MainForm.OrdersView.Drag(416, 146, -71, -57);
}