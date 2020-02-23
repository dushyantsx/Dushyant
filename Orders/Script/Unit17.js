function Test16()
{
  //Clicks the 'Price' object.
  Aliases.Orders.OrderForm.Group.Price.Click(47, 7);
  //Clicks the 'Group' object.
  Aliases.Orders.OrderForm.Group.Click(270, 83);
  //Double-clicks the 'Price' object.
  Aliases.Orders.OrderForm.Group.Price.DblClick(40, 10);
  //Clicks the 'Price' object.
  Aliases.Orders.OrderForm.Group.Price.Click(40, 10);
  //Enters the text '$1001' in the 'Price' text editor.
  Aliases.Orders.OrderForm.Group.Price.SetText("$1001");
  //Clicks the 'Discount' object.
  Aliases.Orders.OrderForm.Group.Discount.Click(36, 13);
  //Enters the text '10' in the 'Discount' text editor.
  Aliases.Orders.OrderForm.Group.Discount.SetText("10");
  //Clicks the 'Total' object.
  Aliases.Orders.OrderForm.Group.groupBox1.Total.Click(36, 5);
  //Enters the text '1000' in the 'Total' text editor.
  Aliases.Orders.OrderForm.Group.groupBox1.Total.SetText("1000");
  //Clicks the 'Group' object.
  Aliases.Orders.OrderForm.Group.Click(374, 130);
  //Clicks the 'Group' object.
  Aliases.Orders.OrderForm.Group.Click(173, 159);
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(74, 7);
  //Enters the text 'ABhijit Kasana' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("ABhijit Kasana");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(13, 13);
  //Enters the text 'Abhijit Kasana' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Abhijit Kasana");
}