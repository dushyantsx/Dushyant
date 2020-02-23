function Test6()
{
  //Clicks the 1 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(1, false);
  //Clicks the 'btnCancel' button.
  Aliases.Orders.dlgOpen.btnCancel.ClickButton();
}