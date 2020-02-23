function Test22()
{
  //Clicks the 1 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(1, false);
  //Clicks the 'Edit' object.
  Aliases.Orders.dlgOpen.cbxFileName.ComboBox.Edit.Click(32, 8);
  //Enters '![ReleaseLast]' in the 'Edit' object.
  Aliases.Orders.dlgOpen.cbxFileName.ComboBox.Edit.Keys("![ReleaseLast]");
  //Opens the 'C:\Users\Public\Documents\TestComplete 14 Samples\Desktop\Orders\C#\TCProjects\MyTable.tbl' file via the 'dlgOpen' dialog.
  Aliases.Orders.dlgOpen.OpenFile("C:\\Users\\Public\\Documents\\TestComplete 14 Samples\\Desktop\\Orders\\C#\\TCProjects\\MyTable.tbl", "Table (*.tbl)");
  //Closes the 'MainForm' window.
  Aliases.Orders.MainForm.Close();
}