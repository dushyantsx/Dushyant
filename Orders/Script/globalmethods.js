
function logs(msgtxt){
  Log.Message(msgtxt);
}

function TimeoutTimer()
{
//  Log.Message("The test timeout has been reached... Stopping the test.");
  logs("The test timeout has been reached... Stopping the test.");
  Runner.Stop();
}





