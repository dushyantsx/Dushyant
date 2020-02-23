function Test13()
{
  //Checks whether the 'Visible' property of the Aliases.Orders.OrderForm.Group.ProductNames object equals True.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "Visible", cmpEqual, true);
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.ProductNames object equals 'MyMoney'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "MyMoney");
}