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
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./m36la-maison-des-renou-a-ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img29",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img29=FindTagFromId('Img29');
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./leseglises.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./m36le-pont-d27ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box3",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img27",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img27=FindTagFromId('Img27');
LMObjects[objindex++] = LMImage("Img26",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img26=FindTagFromId('Img26');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img23",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img23=FindTagFromId('Img23');
LMObjects[objindex++] = LMImage("Img22",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img22=FindTagFromId('Img22');
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./m36les-halles.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./m36les-prisons-d27ingrande-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./m36l27auberge-du-grand-louis.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./m36l27auberge-du-pigeon.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./m36l27auberge-du-lion-d27or.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./m36la-maison-de-pierre-tourmeau.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./manoir-de-hauterive.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But15",1,1,0,null,0,null,new LMBranchEx("0","./m36maison-et-bureaux-du-notaire-royal.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But16",1,1,0,null,0,null,new LMBranchEx("0","./m36le-logis-du-prevot-devenu-salle-d27audience-du-tribunal-.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But17",1,1,0,null,0,null,new LMBranchEx("0","./le-pigeonnier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But18",1,1,0,null,0,null,new LMBranchEx("0","./m36la-maison-d27une-petite-fille-walsh-au-fresne.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But19",1,1,0,null,0,null,new LMBranchEx("0","./lafresnaye_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img2",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
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
LMObjects[objindex++] = LMImage("Img11",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
LMObjects[objindex++] = LMImage("Img13",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMImage("Img14",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img14=FindTagFromId('Img14');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj3",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./m36la-controlerie-28329.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img15",0,1,0,null,0,null,new LMBranchEx("0","./la-controlerie.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img15=FindTagFromId('Img15');
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./m21maison-maupoint.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img1",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img17",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img17=FindTagFromId('Img17');
LMObjects[objindex++] = LMImage("Img18",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img18=FindTagFromId('Img18');
LMObjects[objindex++] = LMButton("But14",1,1,0,null,0,null,new LMBranchEx("0","./1989-3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img19",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img19=FindTagFromId('Img19');
LMObjects[objindex++] = LMButton("But20",1,1,0,null,0,null,new LMBranchEx("0","./bresdin2_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img20",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img20=FindTagFromId('Img20');
LMObjects[objindex++] = LMButton("But21",1,1,0,null,0,null,new LMBranchEx("0","./laprison2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But22",1,1,0,null,0,null,new LMBranchEx("0","./labrellerie3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img21",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img21=FindTagFromId('Img21');
LMObjects[objindex++] = LMButton("But23",1,1,0,null,0,null,new LMBranchEx("0","./allains3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img24",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img24=FindTagFromId('Img24');
LMObjects[objindex++] = LMImage("Img25",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img25=FindTagFromId('Img25');
LMObjects[objindex++] = LMButton("But24",1,1,0,null,0,null,new LMBranchEx("0","./latour.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img16",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/Webmaisons/index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img16=FindTagFromId('Img16');
LMObjects[objindex++] = LMButton("But25",1,1,0,null,0,null,new LMBranchEx("0","./m21quai-legendre-moreau-maison-boutinet.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But26",1,1,0,null,0,null,new LMBranchEx("0","./m38la-verrerie-royale-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ed,0x3fd,0x71);
LMObjectAnimate();

function But6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   Img29.Hide();
   //LMSOFT End Event-Action

}


function But6_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   Img29.Show();
   //LMSOFT End Event-Action

}


function But26_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   if(is.ns) Box3=document.getElementById("Box3");
   Img27.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But26_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   if(is.ns) Box3=document.getElementById("Box3");
   Img27.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But25_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   if(is.ns) Box3=document.getElementById("Box3");
   Img10.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But25_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   if(is.ns) Box3=document.getElementById("Box3");
   Img10.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img16_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj3=document.getElementById("Obj3");
   Obj3.Show();
   Obj3.Hide();
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


function But24_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=document.getElementById("Img25");
   if(is.ns) Box3=document.getElementById("Box3");
   Img25.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But24_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=document.getElementById("Img25");
   if(is.ns) Box3=document.getElementById("Box3");
   Img25.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But23_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   if(is.ns) Box3=document.getElementById("Box3");
   Img24.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But23_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   if(is.ns) Box3=document.getElementById("Box3");
   Img24.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But22_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img21=document.getElementById("Img21");
   if(is.ns) Box3=document.getElementById("Box3");
   Img21.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But22_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img21=document.getElementById("Img21");
   if(is.ns) Box3=document.getElementById("Box3");
   Img21.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But21_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=document.getElementById("Img20");
   if(is.ns) But2=document.getElementById("But2");
   Img20.Hide();
   But2.Hide();
   //LMSOFT End Event-Action

}


function But21_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=document.getElementById("Img20");
   if(is.ns) Box3=document.getElementById("Box3");
   Img20.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But20_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img19=document.getElementById("Img19");
   if(is.ns) Box3=document.getElementById("Box3");
   Img19.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But20_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img19=document.getElementById("Img19");
   if(is.ns) Box3=document.getElementById("Box3");
   Img19.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But14_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img18=document.getElementById("Img18");
   Box3.Show();
   Img18.Show();
   //LMSOFT End Event-Action

}


function But14_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img18=document.getElementById("Img18");
   if(is.ns) Box3=document.getElementById("Box3");
   Img18.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But18_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img17=document.getElementById("Img17");
   if(is.ns) Box3=document.getElementById("Box3");
   Img17.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But18_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img17=document.getElementById("Img17");
   if(is.ns) Box3=document.getElementById("Box3");
   Img17.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But19_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img1.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But19_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img1.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But7_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img26=document.getElementById("Img26");
   Box3.Hide();
   Img26.Hide();
   //LMSOFT End Event-Action

}


function But7_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img26=document.getElementById("Img26");
   Box3.Show();
   Img26.Show();
   //LMSOFT End Event-Action

}


function But5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=document.getElementById("Img15");
   if(is.ns) Box3=document.getElementById("Box3");
   Img15.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=document.getElementById("Img15");
   if(is.ns) Box3=document.getElementById("Box3");
   Img15.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=document.getElementById("Img15");
   if(is.ns) Box3=document.getElementById("Box3");
   Img15.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img15_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=document.getElementById("Img15");
   if(is.ns) Box3=document.getElementById("Box3");
   Img15.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But17_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img14=document.getElementById("Img14");
   if(is.ns) Box3=document.getElementById("Box3");
   Img14.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But17_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img14=document.getElementById("Img14");
   if(is.ns) Box3=document.getElementById("Box3");
   Img14.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But13_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=document.getElementById("Img13");
   if(is.ns) Box3=document.getElementById("Box3");
   Img13.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But13_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=document.getElementById("Img13");
   if(is.ns) Box3=document.getElementById("Box3");
   Img13.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   if(is.ns) Box3=document.getElementById("Box3");
   Img12.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But15_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   if(is.ns) Box3=document.getElementById("Box3");
   Img12.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But16_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img11=document.getElementById("Img11");
   if(is.ns) Box3=document.getElementById("Box3");
   Img11.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But16_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img11=document.getElementById("Img11");
   if(is.ns) Box3=document.getElementById("Box3");
   Img11.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But12_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=document.getElementById("Img9");
   if(is.ns) Box3=document.getElementById("Box3");
   Img9.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But12_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=document.getElementById("Img9");
   if(is.ns) Box3=document.getElementById("Box3");
   Img9.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   if(is.ns) Box3=document.getElementById("Box3");
   Img8.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But11_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   if(is.ns) Box3=document.getElementById("Box3");
   Img8.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Box3=document.getElementById("Box3");
   Img7.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But9_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Box3=document.getElementById("Box3");
   Img7.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But8_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Box3=document.getElementById("Box3");
   Img6.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But8_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Box3=document.getElementById("Box3");
   Img6.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   if(is.ns) Box3=document.getElementById("Box3");
   Img5.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   if(is.ns) Box3=document.getElementById("Box3");
   Img5.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   Img4.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   Img4.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img22=document.getElementById("Img22");
   if(is.ns) Img23=document.getElementById("Img23");
   Box3.Hide();
   Img22.Hide();
   Img23.Hide();
   //LMSOFT End Event-Action

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img22=document.getElementById("Img22");
   if(is.ns) Img23=document.getElementById("Img23");
   Box3.Show();
   Img22.Show();
   Img23.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img2=document.getElementById("Img2");
   Box3.Hide();
   Img2.Hide();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img2=document.getElementById("Img2");
   Box3.Show();
   Img2.Show();
   //LMSOFT End Event-Action

}