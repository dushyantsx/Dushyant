function Test19()
{
  //Clicks the 'ButtonCancel' button.
  Aliases.Orders.OrderForm.ButtonCancel.ClickButton();
  //Clicks the 'MyMoney' subitem of the 'A' item of the 'OrdersView' list view with the right mouse button.
  Aliases.Orders.MainForm.OrdersView.ClickItemR("A", "MyMoney");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.OrdersView.PopupMenu.Click("Edit order...");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
}