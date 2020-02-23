function Test24()
{
  //Activates the 'MainForm' window.
  Aliases.Orders.MainForm.Activate();
  //Checks whether the 'Enabled' property of the Aliases.Orders.MainForm.ToolBar object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.ToolBar, "Enabled", cmpEqual, true);
  //Checks whether the 'WndCaption' property of the Aliases.Orders.MainForm.ToolBar object equals ''.
  aqObject.CheckProperty(Aliases.Orders.MainForm.ToolBar, "WndCaption", cmpEqual, "");
  //Checks whether the 'wButtonCount' property of the Aliases.Orders.MainForm.ToolBar object equals 12.
  aqObject.CheckProperty(Aliases.Orders.MainForm.ToolBar, "wButtonCount", cmpEqual, 12);
  //Checks whether the 'wButtonText(2, true)' property of the Aliases.Orders.MainForm.ToolBar object equals ''.
  aqObject.CheckProperty(Aliases.Orders.MainForm.ToolBar, "wButtonText(2, true)", cmpEqual, "");
  //Checks whether the 'wChecked(5, false)' property of the Aliases.Orders.MainForm.ToolBar object equals False.
  aqObject.CheckProperty(Aliases.Orders.MainForm.ToolBar, "wChecked(5, false)", cmpEqual, false);
  //Checks whether the 'wEnabled(1, false)' property of the Aliases.Orders.MainForm.ToolBar object equals True.
  aqObject.CheckProperty(Aliases.Orders.MainForm.ToolBar, "wEnabled(1, false)", cmpEqual, true);
}