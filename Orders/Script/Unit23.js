function Test21()
{
  //Clicks the 'MyMoney' subitem of the 'A' item of the 'OrdersView' list view with the right mouse button.
  Aliases.Orders.MainForm.OrdersView.ClickItemR("A", "MyMoney");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.OrdersView.PopupMenu.Click("Delete order");
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
}