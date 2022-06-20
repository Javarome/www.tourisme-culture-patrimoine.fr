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
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./m38l27eglise-notre-dame-d27ingrande-28129.pdf",null,0.0,null,null,1,0,0,0,0,0,0,500,400,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box3",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMButton("But1",0,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMButton("But3",0,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMButton("But5",0,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img8",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
LMObjects[objindex++] = LMButton("But6",0,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img9",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img9=FindTagFromId('Img9');
LMObjects[objindex++] = LMImage("Img11",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
LMObjects[objindex++] = LMImage("Img13",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,new LMBranchEx("0","./batimentsvisibles.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMDiv("But7",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ed,0x3fd,0x71);
LMObjectAnimate();

function Img3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But7=document.getElementById("But7");
   But7.Hide();
   //LMSOFT End Event-Action

}


function Img1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text2=document.getElementById("Text2");
   Text2.Hide();
   //LMSOFT End Event-Action

}


function Img1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text2=document.getElementById("Text2");
   Text2.Show();
   //LMSOFT End Event-Action

}


function But6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=document.getElementById("Img9");
   if(is.ns) Box3=document.getElementById("Box3");
   Img9.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But6_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=document.getElementById("Img9");
   if(is.ns) Box3=document.getElementById("Box3");
   Img9.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But4_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But5=document.getElementById("But5");
   if(is.ns) But6=document.getElementById("But6");
   But5.Show();
   But6.Show();
   //LMSOFT End Event-Action

}


function But5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   if(is.ns) Box3=document.getElementById("Box3");
   Img8.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But5_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   if(is.ns) Box3=document.getElementById("Box3");
   Img8.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img11=document.getElementById("Img11");
   Img6.Hide();
   Box3.Hide();
   Img11.Hide();
   //LMSOFT End Event-Action

}


function But3_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img11=document.getElementById("Img11");
   Img6.Show();
   Box3.Show();
   Img11.Show();
   //LMSOFT End Event-Action

}


function But2_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But1=document.getElementById("But1");
   if(is.ns) But3=document.getElementById("But3");
   But1.Show();
   But3.Show();
   //LMSOFT End Event-Action

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img12=document.getElementById("Img12");
   Img5.Hide();
   Box3.Hide();
   Img12.Hide();
   //LMSOFT End Event-Action

}


function But1_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img12=document.getElementById("Img12");
   Img5.Show();
   Box3.Show();
   Img12.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img13=document.getElementById("Img13");
   Img4.Hide();
   Box3.Hide();
   Img13.Hide();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img13=document.getElementById("Img13");
   Img4.Show();
   Box3.Show();
   Img13.Show();
   //LMSOFT End Event-Action

}


function But4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img7=document.getElementById("Img7");
   Box3.Hide();
   Img7.Hide();
   //LMSOFT End Event-Action

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img7=document.getElementById("Img7");
   Box3.Show();
   Img7.Show();
   //LMSOFT End Event-Action

}


function Img3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But7=document.getElementById("But7");
   But7.Show();
   //LMSOFT End Event-Action

}