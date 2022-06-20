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
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./soudry.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./bm1-n17.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./bm1-n26.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./bm1-n27.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./ingrandes_sur_loire_la_chouannerie.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./bm2-n16b.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./saintbleu.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box3",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img2",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img8",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
LMObjects[objindex++] = LMImage("Img9",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img9=FindTagFromId('Img9');
LMObjects[objindex++] = LMImage("Img10",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMImage("Img1",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,new LMBranchEx("0","./jeanmenager.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img11=FindTagFromId('Img11');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./passage-d27un-convoi-de-pretres-deportes-en-espagne-a-ingrandes-le-12-et-13-septembre-1792.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f3,0x3f9,0x89);
LMObjectAnimate();

function But9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   Img12.Hide();
   //LMSOFT End Event-Action

}


function But9_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   Img12.Show();
   //LMSOFT End Event-Action

}


function Img11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text2=document.getElementById("Text2");
   Text2.Hide();
   //LMSOFT End Event-Action

}


function Img11_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text2=document.getElementById("Text2");
   Text2.Show();
   //LMSOFT End Event-Action

}


function But8_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img1=document.getElementById("Img1");
   Box3.Hide();
   Img1.Hide();
   //LMSOFT End Event-Action

}


function But8_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img1=document.getElementById("Img1");
   Box3.Show();
   Img1.Show();
   //LMSOFT End Event-Action

}


function But6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img2=document.getElementById("Img2");
   Img2.Hide();
   //LMSOFT End Event-Action

}


function But7_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img6=document.getElementById("Img6");
   Box3.Hide();
   Img6.Hide();
   //LMSOFT End Event-Action

}


function But7_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img6=document.getElementById("Img6");
   Box3.Show();
   Img6.Show();
   //LMSOFT End Event-Action

}


function But6_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But6_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img2=document.getElementById("Img2");
   Box3.Show();
   Img2.Show();
   //LMSOFT End Event-Action

}


function But5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img10=document.getElementById("Img10");
   Box3.Hide();
   Img10.Hide();
   //LMSOFT End Event-Action

}


function But5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img10=document.getElementById("Img10");
   Box3.Show();
   Img10.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img9=document.getElementById("Img9");
   Box3.Hide();
   Img9.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img9=document.getElementById("Img9");
   Box3.Show();
   Img9.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img8=document.getElementById("Img8");
   Box3.Hide();
   Img8.Hide();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img8=document.getElementById("Img8");
   Box3.Show();
   Img8.Show();
   //LMSOFT End Event-Action

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img7=document.getElementById("Img7");
   Box3.Hide();
   Img7.Hide();
   //LMSOFT End Event-Action

}


function But1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img7=document.getElementById("Img7");
   Box3.Show();
   Img7.Show();
   //LMSOFT End Event-Action

}


function But4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img4=document.getElementById("Img4");
   Box3.Hide();
   Img4.Hide();
   //LMSOFT End Event-Action

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img4=document.getElementById("Img4");
   Box3.Show();
   Img4.Show();
   //LMSOFT End Event-Action

}


function Img3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj1=document.getElementById("Obj1");
   Obj1.Hide();
   //LMSOFT End Event-Action

}


function Img3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj1=document.getElementById("Obj1");
   Obj1.Show();
   //LMSOFT End Event-Action

}