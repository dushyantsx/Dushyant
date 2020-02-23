function Test14()
{
  //Checks whether the 'Enabled' property of the Aliases.Orders.OrderForm.Group.Customer object equals True.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "Enabled", cmpEqual, true);
  //Checks whether the 'Exists' property of the Aliases.Orders.OrderForm.Group.Customer object equals True.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "Exists", cmpEqual, true);
  //Checks whether the 'WndCaption' property of the Aliases.Orders.OrderForm.Group.Customer object equals ''.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "WndCaption", cmpEqual, "");
  //Checks whether the 'wSelection' property of the Aliases.Orders.OrderForm.Group.Customer object equals ''.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wSelection", cmpEqual, "");
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.Customer object equals ''.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "");
}



