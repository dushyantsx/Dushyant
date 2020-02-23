//USEUNIT F_Useunits

  var todayDate ,date,formatedDate
  todayDate=aqDateTime.Today;
  currenttime=aqDateTime.Time;
  
//purpose:Delay for specified Time duration
  function waitFor(intDur){
    
  aqUtils.Delay(intDur)
   LogUtilities.message("Execution Wait for " + intDur + " msec");
  }
  
//Purpose to get the current system date 
 function today(){
  currentDate=aqConvert.DateTimeToFormatStr(TodayDate,"%m%d%Y")
  today=currentDate
 } 
 
// Purpose : to get the one day back date from today date. 
 function pastDate(){
  date=aqDateTime.AddDays(TodayDate,-1);
  formatedDate=aqConvert.DateTimeToFormatStr(Date,"%m%d%Y");
  pastDate=formatedDate
} 

// Purpose : to get the one future date from today date. 
 function futureDate(){
  date=aqDateTime.AddDays(TodayDate,1);
  formatedDate=aqConvert.DateTimeToFormatStr(Date,"%m%d%Y");
  futureDate=formatedDate
  }

 
// Purpose : to get the current system time. 
 function timeNow(){
  strNowValue = aqConvert.DateTimeToStr(Currenttime)
  formatedTime = aqConvert.DateTimeToFormatStr(strNowValue, "%I:%M %p")
  timeNow=formatedTime 
  }
 
// Purpose : to get the one hour past time from current system time.
 function pastTime(){
    updatedTime= aqDateTime.AddTime(Currenttime,0,-1,0,0);
    formatedTime=aqConvert.DateTimeToFormatStr(updatedTime," %I:%M %p");
    pastTime=formatedTime
} 
 
// 'purpose : to get the one hour future time from current system time.
 function futureTime(){
   updatedTime= aqDateTime.AddTime(Currenttime,0,1,0,0)
   formatedTime=aqConvert.DateTimeToFormatStr(updatedTime," %I:%M %p")
   futureTime=formatedTime
 }

//Purpose: To get the date in monthName Day,Year Format
 function getDate(){
  CalendarValue= MonthName(Month(Now)) & " " & (Day(Now)) &", "& Year(Now)
  getDate=CalendarValue
 }
  
//Purpose: To get the Tomorrow date from the system date. 
  function getTomorrowDate(){
   date=aqDateTime.AddDays(TodayDate,1)
   formatedDate=aqConvert.DateTimeToFormatStr(date,"%B %#d, %Y")
   getTomorrowDate=formatedDate   
 }
 
//Purpose: get time stamp in millisecond
 function getTimeStampInMilliSecond(){
	var intSeconds, intMilliseconds, strMilliseconds, intDatePart, intTimePart	
	intSeconds = (Hour(Now) * 3600) + (Minute(Now) * 60) + Second(Now)  ;
	intMilliseconds = Timer() - intSeconds ;  
	intMilliseconds = Fix(intMilliseconds * 100);	
	intTime1 = ((Hour(Now) * 1000000)+ (Minute(Now) * 10000) + (Second(Now) * 100) + intMilliseconds);
	getTimeStampInMilliSecond=intTime1;
}

//Purpose: Get difference between two date 
 function getTwoDateDifference(date1, date2){
        arraylist=Split(date1," ");
        testvalue=ubound(arraylist);        
        changesvalue= arraylist(2); 
        //From here we are getting the changed value      
        myDate=changesvalue 
        d = (Day(myDate));
        m = (Month(myDate));    
        y = Year(myDate);
        myDateFormat= d & "/" & m & "/" & y ;
        formatedtest =aqConvert.StrToDate(myDateFormat);
        fromDate=aqConvert.DateTimeToFormatStr(formatedtest,"%d-%B-%Y");
        
        arraylist=Split(date2," ");
        testvalue1=ubound(arraylist);
        changesvalue2= arraylist(2);        
        myDate1=changesvalue2;
        d = (Day(myDate1));
        m = (Month(myDate1));    
        y = Year(myDate1);
        myDateFormat= d & "/" & m & "/" & y;       
       curntDate =aqConvert.StrToDate(myDateFormat);
       currentDate=aqConvert.DateTimeToFormatStr(curntDate,"%d-%B-%Y");
        finalDateDifferece=(DateDiff("d",fromDate,currentDate));
        getTwoDateDifference=finalDateDifferece;
       LogUtilities.message("Difference between start date and end date is: " & finalDateDifferece)
 }