function Test7()
{
  //Clicks the 'ButtonCancel' button.
  Aliases.Orders.wndWindowsForms10Window8app0141b42ar6ad1.ButtonCancel.ClickButton();
  //Clicks the 1 item of the 'Item' toolbar.
  Aliases.Orders.wndWindowsForms10Window8app0141b42ar6ad1.Item.ClickItem(1, false);
  //Opens the 'C:\Users\Public\Documents\TestComplete 14 Samples\Desktop\Orders\C#\TCProjects\MyTable.tbl' file via the 'dlgOpen' dialog.
  Aliases.Orders.dlgOpen.OpenFile("C:\\Users\\Public\\Documents\\TestComplete 14 Samples\\Desktop\\Orders\\C#\\TCProjects\\MyTable.tbl", "Table (*.tbl)");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.wndWindowsForms10Window8app0141b42ar6ad1.MainMenu.Click("Orders|New order...");
  //Clicks the 'MasterCard' button.
  Aliases.Orders.wndWindowsForms10Window8app0141b42ar6ad1.Group.MasterCard.ClickButton();
  //Clicks the 'AE' button.
  Aliases.Orders.wndWindowsForms10Window8app0141b42ar6ad1.Group.AE.ClickButton();
  //Clicks the 'ButtonCancel' button.
  Aliases.Orders.wndWindowsForms10Window8app0141b42ar6ad1.ButtonCancel.ClickButton();
  //Clicks the 2 item of the 'Item' toolbar.
  Aliases.Orders.wndWindowsForms10Window8app0141b42ar6ad1.Item.ClickItem(2, false);
  //Clicks the 1 item of the 'Item' toolbar.
  Aliases.Orders.wndWindowsForms10Window8app0141b42ar6ad1.Item.ClickItem(1, false);
  //Clicks the 'btnCancel' button.
  Aliases.Orders.dlgOpen.btnCancel.ClickButton();
}