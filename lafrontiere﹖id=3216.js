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
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMImage("Img13",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj3",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img14",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img14=FindTagFromId('Img14');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./1461-09-21gilles-de-rais-et-les-foires2008-2009.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./a_on_rend_la_justice.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./b_la_gabelle.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./h_les_armateurs.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./c_les_pr-curseurs.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./g_sortie_de_prison.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","./d_pierre_de_bretagne.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./j_naufrage.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./lays2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./e_a_la_voile_et_a_la_vapeur.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But17",0,1,0,null,0,null,new LMBranchEx("0","./la_frontsesouv2016-1_.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But6",0,1,0,null,0,null,new LMBranchEx("0","./la_frontsesouv2016-2_.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But7",0,1,0,null,0,null,new LMBranchEx("0","./la_frontsesouv3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But14",0,1,0,null,0,null,new LMBranchEx("0","./la_frontsesouv4.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",0,1,0,null,0,null,new LMBranchEx("0","./la_frontsesouv6.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But15",0,1,0,null,0,null,new LMBranchEx("0","./la_frontsesouv20165.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("But16",1,1,0,null,0,null,null,null,null,1);
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img1",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img2",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMImage("Img8",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
LMObjects[objindex++] = LMDiv("But18",1,1,0,null,0,null,null,null,null,1);
LMObjects[objindex++] = LMButton("But19",0,1,0,null,0,null,new LMBranchEx("0","./la-frontiere2018-7.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But20",0,1,0,null,0,null,new LMBranchEx("0","./la-frontiere2018-8.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But21",0,1,0,null,0,null,new LMBranchEx("0","./la-frontiere2018-9.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But22",0,1,0,null,0,null,new LMBranchEx("0","./la-frontiere2018-10.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img9",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img9=FindTagFromId('Img9');
LMObjects[objindex++] = LMImage("Img10",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f1,0x3f9,0x88);
LMObjectAnimate();

function But22_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   Img12.Hide();
   //LMSOFT End Event-Action

}


function But22_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   Img12.Show();
   //LMSOFT End Event-Action

}


function But21_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   Img10.Hide();
   //LMSOFT End Event-Action

}


function But21_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   Img10.Show();
   //LMSOFT End Event-Action

}


function But20_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=document.getElementById("Img9");
   Img9.Hide();
   //LMSOFT End Event-Action

}


function But20_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=document.getElementById("Img9");
   Img9.Show();
   //LMSOFT End Event-Action

}


function But19_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   Img4.Hide();
   //LMSOFT End Event-Action

}


function But19_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   Img4.Show();
   //LMSOFT End Event-Action

}


function But18_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But22=document.getElementById("But22");
   if(is.ns) But21=document.getElementById("But21");
   if(is.ns) But20=document.getElementById("But20");
   if(is.ns) But19=document.getElementById("But19");
   But22.Show();
   But21.Show();
   But20.Show();
   But19.Show();
   //LMSOFT End Event-Action

}


function But17_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   Img8.Hide();
   //LMSOFT End Event-Action

}


function But17_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   Img8.Show();
   //LMSOFT End Event-Action

}


function But6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   Img5.Hide();
   //LMSOFT End Event-Action

}


function But6_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   Img5.Show();
   //LMSOFT End Event-Action

}


function But7_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   Img6.Hide();
   //LMSOFT End Event-Action

}


function But7_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   Img6.Show();
   //LMSOFT End Event-Action

}


function But14_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   Img7.Hide();
   //LMSOFT End Event-Action

}


function But14_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   Img7.Show();
   //LMSOFT End Event-Action

}


function But5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img2=document.getElementById("Img2");
   Img2.Hide();
   //LMSOFT End Event-Action

}


function But5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img2=document.getElementById("Img2");
   Img2.Show();
   //LMSOFT End Event-Action

}


function But15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   Img1.Hide();
   //LMSOFT End Event-Action

}


function But15_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   Img1.Show();
   //LMSOFT End Event-Action

}


function But16_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But15=document.getElementById("But15");
   if(is.ns) But5=document.getElementById("But5");
   if(is.ns) But14=document.getElementById("But14");
   if(is.ns) But6=document.getElementById("But6");
   if(is.ns) But17=document.getElementById("But17");
   if(is.ns) But7=document.getElementById("But7");
   But15.Show();
   But5.Show();
   But14.Show();
   But6.Show();
   But17.Show();
   But7.Show();
   //LMSOFT End Event-Action

}


function Img14_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Show();
   //LMSOFT End Event-Action

}

function Img14_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Hide();
   //LMSOFT End Event-Action

}