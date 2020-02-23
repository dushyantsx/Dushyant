

function newOrder()
{
  
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  Project.Variables.newOrdersLoop.Reset();
  for(; !Project.Variables.newOrdersLoop.IsEOF();)
  {
    //Moves the mouse cursor to the menu item specified and then simulates a single click.
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
    //Selects the KeywordTests.newOrder.Variables.newOrdersLoop("Product") item of the 'ProductNames' combo box.
    Aliases.Orders.OrderForm.Group.ProductNames.ClickItem(Project.Variables.newOrdersLoop.Value("Product"));
    //Clicks the 'UpDownEdit' object.
    Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit.Click(16, 8);
    //Sets the value of the UpDown control 'Quantity' to KeywordTests.newOrder.Variables.newOrdersLoop("Quantity").
    Aliases.Orders.OrderForm.Group.Quantity.wValue = Project.Variables.newOrdersLoop.Value("Quantity");
    //Clicks the 'Price' object.
    Aliases.Orders.OrderForm.Group.Price.Click(33, 4);
    //Enters the text KeywordTests.newOrder.Variables.newOrdersLoop("Quantity") in the 'Price' text editor.
    Aliases.Orders.OrderForm.Group.Price.SetText(Project.Variables.newOrdersLoop.Value("Quantity"));
    //Clicks the 'Customer' object.
    Aliases.Orders.OrderForm.Group.Customer.Click(75, 8);
    //Enters the text 'Vik' in the 'Customer' text editor.
    Aliases.Orders.OrderForm.Group.Customer.SetText("Vik");
    //Clicks the 'Customer' object.
    Aliases.Orders.OrderForm.Group.Customer.Click(47, 9);
    //Enters the text KeywordTests.newOrder.Variables.newOrdersLoop("C_Name") in the 'Customer' text editor.
    Aliases.Orders.OrderForm.Group.Customer.SetText(Project.Variables.newOrdersLoop.Value("C_Name"));
    //Enters '[Tab]' in the 'Customer' object.
    Aliases.Orders.OrderForm.Group.Customer.Keys("[Tab]");
    //Enters the text KeywordTests.newOrder.Variables.newOrdersLoop("Street") in the 'Street' text editor.
    Aliases.Orders.OrderForm.Group.Street.SetText(Project.Variables.newOrdersLoop.Value("Street"));
    //Enters KeywordTests.newOrder.Variables.newOrdersLoop("Street") in the 'Street' object.
    Aliases.Orders.OrderForm.Group.Street.Keys(Project.Variables.newOrdersLoop.Value("Street"));
    //Enters the text KeywordTests.newOrder.Variables.newOrdersLoop("City") in the 'City' text editor.
    Aliases.Orders.OrderForm.Group.City.SetText(Project.Variables.newOrdersLoop.Value("City"));
    //Enters KeywordTests.newOrder.Variables.newOrdersLoop("City") in the 'City' object.
    Aliases.Orders.OrderForm.Group.City.Keys(Project.Variables.newOrdersLoop.Value("City"));
    //Enters the text KeywordTests.newOrder.Variables.newOrdersLoop("State") in the 'State' text editor.
    Aliases.Orders.OrderForm.Group.State.SetText(Project.Variables.newOrdersLoop.Value("State"));
    //Enters KeywordTests.newOrder.Variables.newOrdersLoop("State") in the 'State' object.
    Aliases.Orders.OrderForm.Group.State.Keys(Project.Variables.newOrdersLoop.Value("State"));
    //Enters the text '133001' in the 'Zip' text editor.
    Aliases.Orders.OrderForm.Group.Zip.SetText("133001");
    //Clicks the 'MasterCard' button.
    Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
    //Clicks the 'CardNo' object.
    Aliases.Orders.OrderForm.Group.CardNo.Click(38, 9);
    //Enters the text KeywordTests.newOrder.Variables.newOrdersLoop("Card_No") in the 'CardNo' text editor.
    Aliases.Orders.OrderForm.Group.CardNo.SetText(Project.Variables.newOrdersLoop.Value("Card_No"));
    //Sets the date KeywordTests.newOrder.Variables.newOrdersLoop("Date") in the 'ExpDate' date/time picker.
    Aliases.Orders.OrderForm.Group.ExpDate.wDate = Project.Variables.newOrdersLoop.Value("Date");
    //Clicks the 'ButtonOK' button.
    Aliases.Orders.OrderForm.ButtonOK.ClickButton();
    Project.Variables.newOrdersLoop.Next();
  }
}