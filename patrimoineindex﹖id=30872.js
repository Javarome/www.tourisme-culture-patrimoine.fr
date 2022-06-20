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
LMObjects[objindex++] = LMImage("Img16",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img16=FindTagFromId('Img16');
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./exposition-horloges-.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./jeanmenager.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,new LMBranchEx("0","./la-maison-du-tourisme.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./horaires-maison-du-tourisme.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMButton("But15",1,1,0,null,0,null,new LMBranchEx("0","./histoire.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
LMObjects[objindex++] = LMImage("Img17",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img17=FindTagFromId('Img17');
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./tourismeindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","./cultureindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But18",1,1,0,null,0,null,new LMBranchEx("0","./publicationindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But23",1,1,0,null,0,null,new LMBranchEx("0","./les-liens.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But26",1,1,0,null,0,null,new LMBranchEx("0","./batimentsvisibles.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But27",1,1,0,null,0,null,new LMBranchEx("0","./lesblasons.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img25",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img25=FindTagFromId('Img25');
LMObjects[objindex++] = LMImage("Img26",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img26=FindTagFromId('Img26');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img1",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f2,0x3fc,0x6d);
LMObjectAnimate();

function But9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   Img1.Hide();
   //LMSOFT End Event-Action

}


function But9_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   Img1.Show();
   //LMSOFT End Event-Action

}


function Img3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Hide();
   //LMSOFT End Event-Action

}


function Img3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Show();
   //LMSOFT End Event-Action

}


function But27_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   Img26.Hide();
   //LMSOFT End Event-Action

}


function But27_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   Img26.Show();
   //LMSOFT End Event-Action

}


function But26_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=document.getElementById("Img25");
   Img25.Hide();
   //LMSOFT End Event-Action

}


function But26_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=document.getElementById("Img25");
   Img25.Show();
   //LMSOFT End Event-Action

}


function But13_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But2=document.getElementById("But2");
   if(is.ns) But9=document.getElementById("But9");
   if(is.ns) But15=document.getElementById("But15");
   if(is.ns) But26=document.getElementById("But26");
   if(is.ns) But27=document.getElementById("But27");
   But2.Show();
   But9.Show();
   But15.Show();
   But26.Show();
   But27.Show();
   //LMSOFT End Event-Action

}


function But15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img17=document.getElementById("Img17");
   Img17.Hide();
   //LMSOFT End Event-Action

}


function But15_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img17=document.getElementById("Img17");
   Img17.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   Img12.Hide();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   Img12.Show();
   //LMSOFT End Event-Action

}