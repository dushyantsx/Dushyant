 
//Purpose : To input the value in text filled
//Input: obj: Object on which perform the actions.
//Input : strInputValue : String value. 
 
var blnFlag;



 function inputValue(obj,strInputValue){
  obj.Keys("^A")
  obj.Keys("[BS]")
  obj.Keys(strInputValue)
 }
 
//Purpose : Input value using wvalue
// Input any value
function wInput(obj,strInput){
 obj.wValue= strInput;    

}
 

//Purpose : To Click on any button. 
//Input: obj: Object on which we click. 
 function clickBtn(obj){
  obj.ClickButton();
 } 

//'Purpose : To Click. 
//Input: obj: Object on which we click.
function click(obj,objpath){
  obj.Click(objpath)
 }
 
//Purpose : To Click. 
//Input: obj: Object on which we click.
//Input : strItem : item value which we need to select the from list
 function clickOnListItem(Obj,strItemText){
  Obj.ClickItem(strItemText)
 }


//Purpose : To click right mouse button
//Input Object on which we click
//Intput Str content we click on (not mandatory)

function clickRight(Obj,NameIndex,Key){
  Obj.ClickItemR(NameIndex,Key)     

}
 
 
 
  
//Purpose : To get the text. 
//Input: obj: To get the text value of obj. 
 function getText(obj){
  textValue=obj.GetText
  strLength=aqString.GetLength(textValue)
   if (strLength>0){
     getText=textValue}
  else {
     LogsUtils.errorMessage("No data found")
  }}

  
//--------------------------------------'To check particular object  exists or not 
  function  objExists(obj){
  if (aqObject.CheckProperty(obj, "Exists", cmpEqual, true)){ 
    blnFlag= true;
   }
  else{
      blnFlag=false;
        }
  return blnFlag;
   //End If 
   //objExists=blnFlag
  }

//---------------------------------------'To check particular object is visible on screen or not
  function objVisibleOnScreen(obj){
   if  (aqObject.CheckProperty(obj, "Visible", cmpEqual, true)){
     blnFlag=true;  
     }
   else{
     blnFlag=false;
     }
   return blnFlag;   
     }
//   objVisibleOnScreen=blnFlag

//---------------------------------------'To check object is enabled or not

function objEnabled(obj){
   if  (aqObject.CheckProperty(obj, "Enabled", cmpEqual, true)){
     blnFlag=true;  
     }
   else{
     blnFlag=false;
     }
   return blnFlag;   
     }  
  
//-----------------------------------------Generate random string

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

  
  
 
//--------------------- 'To get the column value in a list from grid view
//  function getColumnValues(obj,strColumnName){
//  Set list=CreateObject("System.Collections.Arraylist")
//  totalVisibleColumn=obj.GridView.ColumnCount
//   for i=0 To totalVisibleColumn-1
//    visbleColumn=obj.GridView.Columns(i).Caption
//    If visbleColumn=strColumnName Then
//        totalRecords=obj.GridView.ViewData.RowCount
//          for j=0 to totalRecords-1
//           columnValue=obj.GridView.ViewData.Rows(j).DisplayTexts(i)
//           list.add columnValue
//          Next
//     Set getColumnValues=list
//     Exit Function 
//   End If   
//  Next
//    Log.Error strColumnName & " has not been displayed"
//  End Function
//  
//  ----------------------'Purpose: To open the tab by their name
//  Sub openTabByTabName(obj,strTabName)
//    totalTabs=obj.PageCount
//    for i=0 To totalTabs-1
//     Tab=obj.Pages(i).Caption
//      If Tab=strTabName Then 
//        Log.Event "Clicked on " &  strTabName &  " tab to open" & obj.SetActivePageIndex(i)
//        Exit Sub         
//      End if 
//     Next
//    LogsUtils.errorMessage strTabName & " Tab is not displayed and hence unable to clicked and opened" 
//  End Sub 
//  
//  -----------------------'PurposE: To verify the tab has sbeen opened 
//  Function verifyTabIsOpened(obj,strTabName)
//    activeTab =obj.ViewInfo.ActivePage.Caption
//   if activeTab=strTabName Then 
//     blnFlag=True
//    Else
//     blnFlag=False
//   End if
//   verifyTabIsOpened=blnFlag
//  End Function 
//  
//  ------------------------'To verify Tab has been displayed on page.
//  Function verifyTabIsDisplayed(obj,strTabName)
//   totalTabs=obj.PageCount
//    for i=0 To totalTabs-1
//     Tab=obj.Pages(i).Caption
//     if obj.Pages(i).TabVisible=True Then
//          If Tab=strTabName Then 
//            blnFlag=True
//            verifyTabIsDisplayed=blnFlag
//            Exit Function         
//          End if 
//     Else
//        blnFlag=False 
//        verifyTabIsDisplayed=blnFlag   
//      End If
//     Next
//      blnFlag=False 
//      verifyTabIsDisplayed=blnFlag
//  End Function
//  
//  ------------------------'Purpose: verify specific column name that is visible on pages 
//  Function verifyColumnIsDisplayed(obj,strColumnValue)
//   totalVisibleColumnCount=obj.GridView.VisibleColumnCount
//    For i=0 To totalVisibleColumnCount-1
//     visibleColum= obj.GridView.VisibleColumns(i).Caption
//      If visibleColum= strColumnValue Then 
//         LogsUtils.message strColumnValue & " has been displayed"
//         Exit Function
//      End if 
//    Next
//    LogsUtils.errorMessage strColumnValue & " has not been displayed"
//  End Function
//  
//  --------------------------'Purpose: verify that specific cloumn is not visible on the page
//  Sub verifyColumnIsNotDisplayed(obj,strColumnValue)
//   totalVisibleColumnCount=obj.GridView.VisibleColumnCount
//    For i=0 To totalVisibleColumnCount-1
//     visibleColum= obj.GridView.VisibleColumns(i).Caption
//      If visibleColum= strColumnValue Then 
//         log.Error strColumnValue & " should not displayed"
//         Exit Sub
//      End if 
//    Next
//    Log.Message strColumnValue & " has not been displayed"  
//  End Sub 
//  
//  --------------------------'To verify vertical scroll bar has been displayed on page
//  Function verifyVerticalScrollBarIsDisplayed(obj)
//   maxPos= obj.VScroll.Max
//   if maxPos>0 Then 
//    blnFlag=True
//   Else 
//    blnFlag=False
//   End If 
//   verifyVerticalScrollBarIsDisplayed =blnFlag
//  End Function 
//  
//  ---------------------------'To scroll page up by using scroll bar and verified page has been scrolled to top of the page or not
//  Function doPageScrollUpByScrollBar(obj)
//   minPagePos=obj.VScroll.Min
//   maxPagePos=obj.VScroll.Max
//     for i=maxPagePos To 0 Step-1
//       obj.VScroll.Pos=i
//     Next
//   If minPagePos=obj.VScroll.Pos Then
//     blnFlag=True 
//   Else
//    blnFlag=False  
//   end if 
//   doPageScrollUpByScrollBar=blnFlag
//  End Function 
//  
//  ----------------------------'To scroll page down by using scroll bar and verified page has been scrolled to bottom of the page or not
//  Function doPageScrollDownByScrollBar(obj)
//   maxPagePos=obj.VScroll.Max
//     for i=1 To maxPagePos
//       obj.VScroll.Pos=i
//     Next
//   If maxPagePos=obj.VScroll.Pos Then 
//     blnFlag=True
//   Else
//    blnFlag=False  
//   end if 
//   doPageScrollDownByScrollBar=blnFlag
//  End Function 
//  
//  -----------------------------'To scroll page down by using Mouse whell and verified page has been scrolled to bottom of the page or not
//  Function doPageDownByMouseWheel(obj)
//   maxPagePos=obj.VScroll.Max
//    for i=1 To maxPagePos
//     Call obj.MouseWheel(-i)
//    Next    
//    If   maxPagePos=obj.VScroll.pos Then 
//     blnFlag=True
//    Else
//     blnFlag=false    
//    end if   
//   doPageDownByMouseWheel=blnFlag 
//  End Function 
//  
//  -------------------------------'To scroll page up by using Mouse whell and verified page has been scrolled to top of the page or not
//  Function doPageUpByMouseWheel(obj)
//    minPos=obj.VScroll.Min
//    maxPos=obj.VScroll.Max
//    For i=maxPos To 1 Step-1
//    Call obj.MouseWheel(i)
//    Next
//    If minPos=obj.VScroll.Pos Then 
//      blnFlag=true   
//    Else
//     blnFlag=false   
//    End If 
//    doPageUpByMouseWheel=blnFlag   
//  End Function  
// 
// ----------------------------------' Generate Random String 
//Function RandomString()
//    Dim str, min, max
//    Const LETTERS = "abcdefghijklmnopqrstuvwxyz"
//    min = 1
//    max = Len(LETTERS)
//
//    Randomize
//    For i = 1 to 5
//        str = str & Mid( LETTERS, Int((max-min+1)*Rnd+min), 1 )
//    Next
//    updatedValue= "Test_" & str
//
//    RandomString = updatedValue
//End Function
//
//------------------------------------'Generate random number
//Function randomNumber()
//  Dim str, min, max
//    Const numbers = "1234567890"
//    min = 1
//    max = Len(numbers)
//
//    Randomize
//    For i = 1 to 7
//        str = str & Mid( numbers, Int((max-min+1)*Rnd+min), 1 )
//    Next
//    randomNumber=  str
//End Function 
//



//--------------------------------------  'Purpose: Verify today's date from pages 
//  Sub verifyTodaysDate(obj)
//    currentDate=obj.Caption
//    todaysDate=DateTimeUtil.getDate
//     If  Instr(currentDate,DateTimeUtil.getDate) >0 Then
//    LogsUtils.message "Current date is being displayed" 
//   Else 
//     LogsUtils.errorMessage "Current date is not being displayed"
//    End if
//  End Sub
//  
// ---------------------------------------'Purpose: Match two string using contains function.
//  function verifyTextUsingContains(str1,str2)
//    Res = aqString.Contains(str1,str2,,False) 
//       If  Res <> -1 Then
//        flag=true 
//        verifyTextUsingContains=flag
//        Else
//        LogsUtils.errorMessage "Text does not matched"
//       End if
//  End function