function Test25()
{
  //Clicks the 'Edit' object.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.Edit.Click(126, 5);
  //Enters the text 'abc' in the 'ComboBox' text editor.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText("abc");
  //Clicks the 'btnSave' button.
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
}