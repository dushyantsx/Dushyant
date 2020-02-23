function Test10()
{
  //Clicks the 'MainForm' object.
  Aliases.Orders2.MainForm.Click(23, 41);
  //Clicks the 'ToolBar' object.
  Aliases.Orders2.MainForm.ToolBar.Click(388, 10);
  //Clicks the 'OrdersView' object.
  Aliases.Orders2.MainForm.OrdersView.Click(202, 114);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders2.MainForm.MainMenu.Click("File|New");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders2.MainForm.MainMenu.Click("File|New");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders2.MainForm.MainMenu.Click("File|Open...");
  //Clicks the 'btnCancel' button.
  Aliases.Orders2.dlgOpen.btnCancel.ClickButton();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders2.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'Group' object.
  Aliases.Orders2.OrderForm.Group.Click(173, 0);
  //Sets the value of the UpDown control 'Quantity' to 5.
  Aliases.Orders2.OrderForm.Group.Quantity.wValue = 5;
  //Clicks the 'Total' object.
  

  Aliases.Orders.OrderForm.Group.groupBox1.Total.Click(60, 4);
  //Clicks the 'Date' object.
  Aliases.Orders.OrderForm.Group.Date.Click(57, 12);
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(70, 3);
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(62, 14);
  //Clicks the 'State' object.
  Aliases.Orders.OrderForm.Group.State.Click(67, 19);
  //Clicks the 'State' object.
  Aliases.Orders.OrderForm.Group.State.Click(66, 7);
  //Clicks the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Click(20, 7);
  //Clicks the 'MasterCard' button.
  Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
  //Clicks the 'Visa' button.
  Aliases.Orders.OrderForm.Group.Visa.ClickButton();
  //Clicks the 'ButtonCancel' button.
  Aliases.Orders.OrderForm.ButtonCancel.ClickButton();

Aliases.Orders.OrderForm.

}