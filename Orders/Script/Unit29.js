function Test26()
{
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Save");
  //Clicks the 2 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(2, false);
  //Clicks the 2 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(2, false);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Save As...");
  //Clicks the 'Edit' object.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.Edit.Click(501, 7);
  //Clicks the 'btnSave' button.
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmSaveAs.Confirm_Save_As.CtrlNotifySink.btnYes.ClickButton();
}