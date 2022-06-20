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
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,new LMBranchEx("0","http://www.fedepeche49.fr/",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","./fusion2.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img1=FindTagFromId('Img1');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,new LMBranchEx("0","./lesactivites.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img11=FindTagFromId('Img11');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj3",1,1,0,null,0,null,branchlist,null,null);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f0,0x3f9,0x76);
LMObjectAnimate();

function Img1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj3=document.getElementById("Obj3");
   Obj3.Hide();
   //LMSOFT End Event-Action

}


function Img1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj3=document.getElementById("Obj3");
   Obj3.Show();
   //LMSOFT End Event-Action

}


function Img11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj2=document.getElementById("Obj2");
   Obj2.Hide();
   //LMSOFT End Event-Action

}


function Img11_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj2=document.getElementById("Obj2");
   Obj2.Show();
   //LMSOFT End Event-Action

}


