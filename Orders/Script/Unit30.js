function Test28()
{
  //Clicks the 2 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(2, false);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Save");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Save As...");
  //Clicks the 'Edit' object.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.Edit.Click(501, 10);
  //Enters the text 'C:\Users\Public\Documents\TestComplete 14 Samples\Desktop\Orders\C#\TCProjects\abcd' in the 'ComboBox' text editor.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText("C:\\Users\\Public\\Documents\\TestComplete 14 Samples\\Desktop\\Orders\\C#\\TCProjects\\abcd");
  //Clicks the 'btnSave' button.
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
}