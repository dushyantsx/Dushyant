﻿//USEUNIT F_Useunits

function ReadWholeFile(AFileName)
{
  var s = aqFile.ReadWholeTextFile(AFileName, aqFile.ctANSI);
//  Log.Message("File entire contents:");
//  Log.Message(s);
  return s;
}


//function ReadFileLines(AFileName)
//{
//  var F, s;
//   
//  F = aqFile.OpenTextFile(AFileName, aqFile.faRead, aqFile.ctANSI);
//  F.Cursor = 0;
//  LogUtilities.message("File by lines:");
//  while(! F.IsEndOfFile()){
//    s = F.ReadLine();
//    LogUtilities.message(s);
//  }
//  F.Close();
//}


function singleLineTextToJSON(csv){
  
  var lines=csv.split("\r\n");
  var result = [];
  var headers=lines[0].split("~~");
  
  LogUtilities.message(headers);
//  logs(headers);  
  for(var i=1;i<lines.length;i++){


        var obj = {};
        var currentline=lines[i].split("~~");


        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
//        logs(obj);
        result.push(obj);
    }


  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}
function csvtojson(filepath){
    var allText = ReadWholeFile(filepath);
    var jso =    csvJSON(allText);
   // logs(jso);
    return jso;
}
 








