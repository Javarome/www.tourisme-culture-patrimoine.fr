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
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img4=FindTagFromId('Img4');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,new LMBranchEx("0","http://www.ingrandes-lefresnesurloire.fr/",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img5=FindTagFromId('Img5');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ee,0x3fd,0x76);
LMObjectAnimate();

function Img5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj2=document.getElementById("Obj2");
   Obj2.Hide();
   //LMSOFT End Event-Action

}


function Img5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj2=document.getElementById("Obj2");
   Obj2.Show();
   //LMSOFT End Event-Action

}


function Img4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Hide();
   //LMSOFT End Event-Action

}


function Img4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Show();
   //LMSOFT End Event-Action

}