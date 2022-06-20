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
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Box3",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,new LMBranchEx("0","./boules.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMDiv("But1",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./boules.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./lapeche.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./la-plage.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f0,0x3f9,0x7c);
LMObjectAnimate();

function But5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Box3=document.getElementById("Box3");
   Img7.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Box3=document.getElementById("Box3");
   Img7.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img5=document.getElementById("Img5");
   Box3.Hide();
   Img5.Hide();
   //LMSOFT End Event-Action

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img5=document.getElementById("Img5");
   Box3.Show();
   Img5.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   Img4.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   Img4.Show();
   Box3.Show();
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