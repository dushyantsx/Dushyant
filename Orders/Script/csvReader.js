// 
//
//function CSVDriverExample(fileNameWithPath)
// {
//  // Creates a driver
//  var csvDriver=DDT.CSVDriver(fileNameWithPath);
//  var productdata;
//  var quantitydata;
//  var datedata;
//  var c_namedata;
//  var streetdata;
//  var citydata;
//  var statedata;
//  var zipdata;
//  var carddata;
//  var cardnodata;
//  var expirationdata;  
// 
// //C:\\Users\\Nuval Dream\\Desktop\\orders\\orderinput.csv
//  // Iterates through records
//  while (! DDT.CurrentDriver.EOF()){
//  
//  productdata=DDT.CurrentDriver.Value(0);
//  quantitydata=DDT.CurrentDriver.Value(1);
//  datedata=DDT.CurrentDriver.Value(2);
//  c_namedata=DDT.CurrentDriver.Value(3);
//  streetdata=DDT.CurrentDriver.Value(4);
//  citydata=DDT.CurrentDriver.Value(5);
//  statedata=DDT.CurrentDriver.Value(6);
//  zipdata=DDT.CurrentDriver.Value(7);
//  carddata=DDT.CurrentDriver.Value(8);
//  cardnodata=DDT.CurrentDriver.Value(9);
//  expirationdata=DDT.CurrentDriver.Value(10);
//  let rnum = DDT.CurrentDriver.ColumnCount;
//
//  Log.message(rnum);
//  
//  
//  
//
//  // Closes the driver
//   Log.Message(productdata=DDT.CurrentDriver.Value(0));
//   Log.Message(quantitydata=DDT.CurrentDriver.Value(1));
//   Log.Message(datedata=DDT.CurrentDriver.Value(2));
//   Log.Message(c_namedata=DDT.CurrentDriver.Value(3));
//   Log.Message(streetdata=DDT.CurrentDriver.Value(4));
//   Log.Message(citydata=DDT.CurrentDriver.Value(5));
//   Log.Message(statedata=DDT.CurrentDriver.Value(6));
//   Log.Message(zipdata=DDT.CurrentDriver.Value(7));
//   Log.Message(carddata=DDT.CurrentDriver.Value(8));
//   Log.Message(cardnodata=DDT.CurrentDriver.Value(9));
//   Log.Message(expirationdata=DDT.CurrentDriver.Value(10));
//
//   csvDriver.Next();
//      }
//  DDT.CloseDriver(csvDriver.Name);
//}  
//  
//
////   function getCsvDriver(fileNameWithPath)
////   if aqFile.Exists(fileNameWithPath) = false Then
////        Logger.Error("Specified file " + fileNameWithPath + " does not exist")
////        return null
////    End If
////
////    var csvDriver = DDT.CSVDriver(fileNameWithPath)
////'    csvDriver.Name = "CsvReaderDriver"
////'    getCsvDriver =csvDriver
////'
////'End Function
////'function closeCsvDriver(csvDriverName)
////'        DDT.CloseDriver(csvDriverName)
////'        Logger.Error(e.message)
////'End Function
////'
////'
////'function getDataRowCount(fileNameWithPath)
////'    var rowCount = 0
////'
////'    var csvDriver = UtilsCsvFile.getCsvDriver(fileNameWithPath)
////'    if (NullValidator.isNullObject(csvDriver)) Then
////'        return rowCount
////'    End If
////'   
////'
////'    csvDriver.First()
////'    'Iterates through records
////''    while (!csvDriver.EOF())  then
////''        rowCount++;
////''        csvDriver.Next();
////'   
////'
////'' Closes the driver
////''    UtilsCsvFile.closeCsvDriver(csvDriver.Name)
////''    return rowCount
////'End Function
////'
////'*******Till now we are not using this useunit but keep it there for future purpose******
////'
////'function getCsvDriver(fileNameWithPath)
////'    if aqFile.Exists(fileNameWithPath) = false Then
////'        Logger.Error("Specified file " + fileNameWithPath + " does not exist")
////'        return null
////'    End If
////'
////'    var csvDriver = DDT.CSVDriver(fileNameWithPath)
////'    csvDriver.Name = "CsvReaderDriver"
////'    getCsvDriver =csvDriver
////'
////'End Function
////'function closeCsvDriver(csvDriverName)
////'        DDT.CloseDriver(csvDriverName)
////'        Logger.Error(e.message)
////'End Function
////'
////'
////'function getDataRowCount(fileNameWithPath)
////'    var rowCount = 0
////'
////'    var csvDriver = UtilsCsvFile.getCsvDriver(fileNameWithPath)
////'    if (NullValidator.isNullObject(csvDriver)) Then
////'        return rowCount
////'    End If
////'   
////'
////'    csvDriver.First()
////'    'Iterates through records
////''    while (!csvDriver.EOF())  then
////''        rowCount++;
////''        csvDriver.Next();
////'   
////'
////'' Closes the driver
////''    UtilsCsvFile.closeCsvDriver(csvDriver.Name)
////''    return rowCount
////'End Function
////'
//// 
