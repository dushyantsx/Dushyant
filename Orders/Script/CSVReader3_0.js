function CSVDriverExample(fileNameWithPath)
 {
  // Creates a driver
 
  var csvDriver=DDT.CSVDriver(fileNameWithPath);
  var cnum = DDT.CurrentDriver.ColumnCount;
  Log.message(cnum);
  var columnValue=[cnum];
 //C:\\Users\\Nuval Dream\\Desktop\\orders\\orderinput.csv
  // Iterates through records
  while (! DDT.CurrentDriver.EOF()){
  
  
  for(i=1;i<cnum;i++){
    
  let x=DDT.CurrentDriver.Value(i);
    columnValue.push(x);
  
  }
  csvDriver.Next();
  

  // Closes the driver
   Log.Message(productdata=DDT.CurrentDriver.Value(0));
      
      
}
  DDT.CloseDriver(csvDriver.Name);
  
  for(j=0;j<columnValue.length;j++){
    Log.Message(columnValue[j]);
  }
}  
  

