//The method will export the entire test log.
function saveAsHTML(){
Log.SaveResultsAs("C:\\orders\\Log", lsHTML);  
}

//If your project has several test items whose results you want to export, call Log.SaveResultsAs from the last test item only.

//To compress test results exported in the HTML format into a ZIP archive, use the lsPackedHTML parameter value of the SaveResultsAs method:
function zipHtmlReport(){
  
Log.SaveResultsAs("C:\\Work\\Log\\Log.zip", lsPackedHTML);
}



