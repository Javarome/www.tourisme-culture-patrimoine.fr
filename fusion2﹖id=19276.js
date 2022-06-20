//LMSOFT Web Creator Pro, Version:7.2.0.7
//LMSOFT Kernel 10

var projectroot="./";
InitResources2('fr');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(4.00,4.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=1300;
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("But1",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img6=FindTagFromId('Img6');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text5",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj2",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj6",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./547565lacharted27union.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj5",0,1,0,null,0,null,branchlist,null,null);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f2,0x3f8,0x81);
LMObjectAnimate();

function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj5=document.getElementById("Obj5");
   if(is.ns) Img4=document.getElementById("Img4");
   Obj5.Hide();
   Img4.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj5=document.getElementById("Obj5");
   if(is.ns) Img4=document.getElementById("Img4");
   Obj5.Show();
   Img4.Show();
   //LMSOFT End Event-Action

}


function Img6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But1=document.getElementById("But1");
   But1.Hide();
   //LMSOFT End Event-Action

}


function Img6_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But1=document.getElementById("But1");
   But1.Show();
   //LMSOFT End Event-Action

}