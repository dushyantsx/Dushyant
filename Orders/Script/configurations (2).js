var app;
var orders;
var mainform;
var dbexistingpath;
var orderview ;
var orderform;
var csvfilepath;
var csvdriver;

app = TestedApps.Orders;
orders = Aliases.Orders;
mainform = orders.MainForm;
orderview = mainform.OrdersView;

orderform = orders.OrderForm;
csvfilepath = "E:\\projects\\automation\\testcomplete\\orders\\Orders\\DataProviders\\TestBook.txt";
singlefilepath = "E:\\projects\\automation\\testcomplete\\orders\\Orders\\DataProviders\\singlefield.txt";
dbexistingpath = "C:\\Users\\Public\\Documents\\TestComplete 14 Samples\\Desktop\\Orders\\C#\\TCProjects\\MyTable.tbl";
csvdriver = DDT.CSVDriver(csvfilepath);

