//USEUNIT F_Useunits
//USEUNIT Global_useunits

var ordersview =  Globalvariables.mainform.OrdersView;

function selectRecordbyName(Name)
{
WindowsHelper.clickRight(ordersview,Name);

}

function editfromOrderView(){

let popupmenu= ordersview.PopupMenu;
WindowsHelper.click(popupmenu,"Edit order...");

}

function deletefromOrderview(){

let popupmenu= ordersview.PopupMenu;  
WindowsHelper.click(popupmenu,"Delete order");


}
