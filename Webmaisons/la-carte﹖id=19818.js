//LMSOFT Web Creator Pro, Version:7.2.0.7
//LMSOFT Kernel 10

var projectroot="./";
InitResources2('en');
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
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./maison-21.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But44",1,1,0,null,0,null,new LMBranchEx("0","./maison-4-et-6-grand-louis.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But21",1,1,0,null,0,null,new LMBranchEx("0","./tcp.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,"Ingrandes coté Ouest",null,0,0,1);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./tcppag2.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,"Ingrandes coté Ouest",null,0,0,1);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./m22combaudiere.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./m14la-chaussee.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./m14la-bouvraie-historique-et-aveux.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./m32boisbaudet-historique.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text5",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img2",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img3",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./villemoisant-aveux-histoire.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","./m15valiniere-aveux.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./lespinay-aveux_2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./le-verger-fief-pres-chantoce.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./pont-thibaud-pres-chantoce.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text6",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text7",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text8",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text9",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text10",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,new LMBranchEx("0","./combaudiere.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
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
LMObjects[objindex++] = LMImage("Img15",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img15=FindTagFromId('Img15');
LMObjects[objindex++] = LMButton("But14",1,1,0,null,0,null,new LMBranchEx("0","./m16bperiodes-de-l27histoire-d27ingrande-complete-socio-et-eco.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,"Ingrandes coté Ouest",null,0,0,1);
LMObjects[objindex++] = LMImage("Img16",1,1,0,null,0,null,new LMBranchEx("0","./m29la-riottiere-auberges-et-moulin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img16=FindTagFromId('Img16');
LMObjects[objindex++] = LMImage("Img17",1,1,0,null,0,null,new LMBranchEx("0","./m29auberge-relais-de-tournebride.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,1);
if(is.ns) Img17=FindTagFromId('Img17');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj2",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img18",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img18=FindTagFromId('Img18');
LMObjects[objindex++] = LMImage("Img19",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img19=FindTagFromId('Img19');
LMObjects[objindex++] = LMImage("Img20",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img20=FindTagFromId('Img20');
LMObjects[objindex++] = LMImage("Img21",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img21=FindTagFromId('Img21');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f1,0x3fb,0x6f);
LMObjectAnimate();

function Img17_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj2=document.getElementById("Obj2");
   if(is.ns) Img21=document.getElementById("Img21");
   if(is.ns) Img20=document.getElementById("Img20");
   Obj2.Hide();
   Img21.Hide();
   Img20.Hide();
   //LMSOFT End Event-Action

}


function Img17_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj2=document.getElementById("Obj2");
   if(is.ns) Img21=document.getElementById("Img21");
   if(is.ns) Img20=document.getElementById("Img20");
   Obj2.Show();
   Img21.Show();
   Img20.Show();
   //LMSOFT End Event-Action

}


function Img16_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj1=document.getElementById("Obj1");
   if(is.ns) Img19=document.getElementById("Img19");
   if(is.ns) Img18=document.getElementById("Img18");
   Obj1.Hide();
   Img19.Hide();
   Img18.Hide();
   //LMSOFT End Event-Action

}


function Img16_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj1=document.getElementById("Obj1");
   if(is.ns) Img19=document.getElementById("Img19");
   if(is.ns) Img18=document.getElementById("Img18");
   Obj1.Show();
   Img19.Show();
   Img18.Show();
   //LMSOFT End Event-Action

}


function But11_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img7=FindTagFromId("Img7");
   Img7.RollOut();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollOut();
   if(is.ns) Text10=FindTagFromId("Text10");
   Text10.RollOut();
   //LMSOFT End RollOver

}


function But11_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img7=FindTagFromId("Img7");
   Img7.RollIn();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollIn();
   if(is.ns) Text10=FindTagFromId("Text10");
   Text10.RollIn();
   //LMSOFT End RollOver

}


function But10_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img8=FindTagFromId("Img8");
   Img8.RollOut();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollOut();
   if(is.ns) Text9=FindTagFromId("Text9");
   Text9.RollOut();
   //LMSOFT End RollOver

}


function But10_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img8=FindTagFromId("Img8");
   Img8.RollIn();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollIn();
   if(is.ns) Text9=FindTagFromId("Text9");
   Text9.RollIn();
   //LMSOFT End RollOver

}


function But4_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img9=FindTagFromId("Img9");
   Img9.RollOut();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollOut();
   if(is.ns) Text8=FindTagFromId("Text8");
   Text8.RollOut();
   //LMSOFT End RollOver

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img9=FindTagFromId("Img9");
   Img9.RollIn();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollIn();
   if(is.ns) Text8=FindTagFromId("Text8");
   Text8.RollIn();
   //LMSOFT End RollOver

}


function But13_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img10=FindTagFromId("Img10");
   Img10.RollOut();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollOut();
   if(is.ns) Text7=FindTagFromId("Text7");
   Text7.RollOut();
   //LMSOFT End RollOver

}


function But13_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img10=FindTagFromId("Img10");
   Img10.RollIn();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollIn();
   if(is.ns) Text7=FindTagFromId("Text7");
   Text7.RollIn();
   //LMSOFT End RollOver

}


function But12_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img11=FindTagFromId("Img11");
   Img11.RollOut();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollOut();
   if(is.ns) Text6=FindTagFromId("Text6");
   Text6.RollOut();
   //LMSOFT End RollOver

}


function But12_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img11=FindTagFromId("Img11");
   Img11.RollIn();
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.RollIn();
   if(is.ns) Text6=FindTagFromId("Text6");
   Text6.RollIn();
   //LMSOFT End RollOver

}


function But8_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img15=FindTagFromId("Img15");
   Img15.RollOut();
   if(is.ns) Text1=FindTagFromId("Text1");
   Text1.RollOut();
   //LMSOFT End RollOver

}


function But8_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img15=FindTagFromId("Img15");
   Img15.RollIn();
   if(is.ns) Text1=FindTagFromId("Text1");
   Text1.RollIn();
   //LMSOFT End RollOver

}


function But7_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img14=FindTagFromId("Img14");
   Img14.RollOut();
   if(is.ns) Text5=FindTagFromId("Text5");
   Text5.RollOut();
   //LMSOFT End RollOver

}


function But7_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img14=FindTagFromId("Img14");
   Img14.RollIn();
   if(is.ns) Text5=FindTagFromId("Text5");
   Text5.RollIn();
   //LMSOFT End RollOver

}


function But9_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img12=FindTagFromId("Img12");
   Img12.RollOut();
   if(is.ns) Text4=FindTagFromId("Text4");
   Text4.RollOut();
   //LMSOFT End RollOver

}


function But9_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img12=FindTagFromId("Img12");
   Img12.RollIn();
   if(is.ns) Text4=FindTagFromId("Text4");
   Text4.RollIn();
   //LMSOFT End RollOver

}


function But6_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img13=FindTagFromId("Img13");
   Img13.RollOut();
   if(is.ns) Text2=FindTagFromId("Text2");
   Text2.RollOut();
   //LMSOFT End RollOver

}


function But6_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img13=FindTagFromId("Img13");
   Img13.RollIn();
   if(is.ns) Text2=FindTagFromId("Text2");
   Text2.RollIn();
   //LMSOFT End RollOver

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text3=FindTagFromId("Text3");
   Text3.RollOut();
   //LMSOFT End RollOver

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text3=FindTagFromId("Text3");
   Text3.RollIn();
   //LMSOFT End RollOver

}