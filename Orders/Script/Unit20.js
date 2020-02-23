function Test18()
{
  //Clicks the 'OrdersView' object with the right mouse button.
  Aliases.Orders.MainForm.OrdersView.ClickR();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.OrdersView.PopupMenu.Click("Edit order...");
  //Clicks the 'btnOK' button.
  Aliases.Orders.dlgWarning.btnOK.ClickButton();
}