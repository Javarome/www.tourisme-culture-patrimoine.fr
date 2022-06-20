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
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMDiv("But1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,new LMBranchEx("0","./lesactivites.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img2=FindTagFromId('Img2');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f0,0x3f9,0x73);
LMObjectAnimate();

function Img6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj1=document.getElementById("Obj1");
   Obj1.Hide();
   //LMSOFT End Event-Action

}


function Img6_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj1=document.getElementById("Obj1");
   Obj1.Show();
   //LMSOFT End Event-Action

}


function Img2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But1=document.getElementById("But1");
   But1.Hide();
   //LMSOFT End Event-Action

}


function Img2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But1=document.getElementById("But1");
   But1.Show();
   //LMSOFT End Event-Action

}


