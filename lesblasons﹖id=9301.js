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
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,null,null,null,null,0,0,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box3",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img2",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
LMObjects[objindex++] = LMImage("Img1",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f1,0x3fa,0x6e);
LMObjectAnimate();

function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   Img5.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   Box3.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img1.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But3_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   Img1.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   Box3.Show();
   //LMSOFT End Event-Action

}


function But2_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img5=document.getElementById("Img5");
   Box3.Show();
   Img5.Show();
   //LMSOFT End Event-Action

}


function But1_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   Img4.Show();
   //LMSOFT End Event-Action

}


function But4_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img2=document.getElementById("Img2");
   Img2.Show();
   //LMSOFT End Event-Action

}


function But4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img2=document.getElementById("Img2");
   Box3.Hide();
   Img2.Hide();
   //LMSOFT End Event-Action

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   Box3.Show();
   //LMSOFT End Event-Action

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img4=document.getElementById("Img4");
   Box3.Hide();
   Img4.Hide();
   //LMSOFT End Event-Action

}


function But1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text2=document.getElementById("Text2");
   Text2.Hide();
   //LMSOFT End Event-Action

}


function Img3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text2=document.getElementById("Text2");
   Text2.Show();
   //LMSOFT End Event-Action

}