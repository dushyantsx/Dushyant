
//Purpose : To Pass the message in exceution logs. 
//Input: strMessage: Message which we want to pass in log. 
 function message(strMessage){
  Log.CallStackSettings.EnableStackOnMessage = true
  Log.Message(strMessage)  
 } 

//Purpose : To Pass the Error message in exceution logs. 
//Input: strErrorMessage: Message which we want to pass in log. 
 function errorMessage(strErrorMessage){
  Log.CallStackSettings.EnableStackOnError = true
  Log.Error(strErrorMessage) 
 }
 
//Purpose : To Pass the Event message in exceution logs. 
//Input: strEventMessage: Message which we want to pass in log. 
 function eventMessage(strEventMessage){
  Log.CallStackSettings.EnableStackOnEvent = true
  Log.Event(strEventMessage)
 }

//Purpose : To Pass the warning message in exceution logs. 
//Input: strWarningMessage: Message which we want to pass in log. 
 function warningMessage (strWarningMessage){
  Log.CallStackSettings.EnableStackOnWarning = true
  Log.Warning(strWarningMessage)
 }

//Purpose : To Stop the excecution if any error comes and logout the application and run next test case from test suite.
  function GeneralEvents_OnLogError(Sender, LogParams){
   Log.Picture(Sys.Desktop.Picture(), "Image of the whole screen", "", pmHigher)
     var p;
      p = Sys.Process("Auto*");
      p.Close;
      if (p.Exists=True){
        p.Terminate;}
      else {
    Runner.Stop(true)}
  }

//Purpose : To take the screen shot of warning pag. 
function GeneralEvents_OnLogWarning(Sender, LogParams){
Log.Picture(Sys.Desktop.Picture(), "Image of the whole screen", "", pmHigher);
}