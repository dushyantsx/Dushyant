//USEUNIT useunits
function launchApp(app)
{
  app.Run(); 
  logs("App is in running Mode");
}

function closeApp(app)
{
  app.Close();
}
function openfile(element, filepath)
{
  element.OpenFile(filepath, "Table (*.tbl)");
}



