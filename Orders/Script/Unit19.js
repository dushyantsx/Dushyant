function Test17()
{
  //Clicks the 0 subitem of the 'Abhijit' item of the 'OrdersView' list view.
  Aliases.Orders.MainForm.OrdersView.ClickItem("Abhijit", 0);
  //Clicks the 0 subitem of the 'Abhijit' item of the 'OrdersView' list view with the right mouse button.
  Aliases.Orders.MainForm.OrdersView.ClickItemR("Abhijit", 0);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.OrdersView.PopupMenu.Click("Delete order");
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
}