function Test20()
{
  //Clicks the 'MainForm' object.
  Aliases.Orders.MainForm.Click(24, 39);
  //Clicks the 'OrdersView' object.
  Aliases.Orders.MainForm.OrdersView.Click(216, 152);
  //Clicks the 1 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(1, false);
  //Clicks the 'btnNo' button.
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}