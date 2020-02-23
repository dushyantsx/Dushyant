function Test12()
{
  //Activates the 'OrderForm' window.
  Aliases.Orders.OrderForm.Activate();
  //Checks whether the 'Enabled' property of the Aliases.Orders.OrderForm.Group.ProductNames object equals True.
  

aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "Enabled", cmpEqual, true);
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.ProductNames object equals 'MyMoney'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "MyMoney");
}