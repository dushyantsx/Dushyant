var app;
var orders;
var mainform;
var dbexistingpath;

app = TestedApps.Orders;
orders = Aliases.Orders;
mainform = orders.MainForm;
dbexistingpath = "C:\\Users\\Public\\Documents\\TestComplete 14 Samples\\Desktop\\Orders\\C#\\TCProjects\\MyTable.tbl";


module.exports.app = app;
module.exports.orders = orders;
module.exports.mainform = mainform;
module.exports.dbexistingpath = dbexistingpath;
