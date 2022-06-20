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
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./jeanmenager5.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img4=FindTagFromId('Img4');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./la-loire-et-les-bateaux.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./la-route-et-le-pont.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./l27administration2c-les-impots.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./le-commerce-et-les-services.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./l27agriculture2c-le-vin.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./despersonnagescelebres2.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/Webmaisons/index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./les-edifices-et-la-vie-avant-la-revolution.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./la-revolutionet-la-chouannerie.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./depuis-le-xixemesiecle.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box2",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img22",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img22=FindTagFromId('Img22');
LMObjects[objindex++] = LMImage("Img13",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMImage("Img3",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMImage("Img20",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img20=FindTagFromId('Img20');
LMObjects[objindex++] = LMImage("Img11",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img21",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img21=FindTagFromId('Img21');
LMObjects[objindex++] = LMImage("Img16",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img16=FindTagFromId('Img16');
LMObjects[objindex++] = LMImage("Img14",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img14=FindTagFromId('Img14');
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
LMObjects[objindex++] = LMImage("Img10",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMImage("Img15",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img15=FindTagFromId('Img15');
LMObjects[objindex++] = LMImage("Img8",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
LMObjects[objindex++] = LMImage("Img19",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img19=FindTagFromId('Img19');
LMObjects[objindex++] = LMImage("Img9",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img9=FindTagFromId('Img9');
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMImage("Img23",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img23=FindTagFromId('Img23');
LMObjects[objindex++] = LMImage("Img18",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img18=FindTagFromId('Img18');
LMObjects[objindex++] = LMImage("Img17",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img17=FindTagFromId('Img17');
LMObjects[objindex++] = LMImage("Img24",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img24=FindTagFromId('Img24');
LMObjects[objindex++] = LMImage("Img25",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img25=FindTagFromId('Img25');
LMObjects[objindex++] = LMImage("Img26",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img26=FindTagFromId('Img26');
LMObjects[objindex++] = LMImage("Img27",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img27=FindTagFromId('Img27');
LMObjects[objindex++] = LMImage("Img28",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img28=FindTagFromId('Img28');
LMObjects[objindex++] = LMButton("But14",1,1,0,null,0,null,new LMBranchEx("0","./histoiredufresne.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But16",1,1,0,null,0,null,new LMBranchEx("0","./lesartistes.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But17",1,1,0,null,0,null,new LMBranchEx("0","./bm2-n24b.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But18",1,1,0,null,0,null,new LMBranchEx("0","./m37periodes-de-l27histoire-d27ingrand-e-et-reamenagements-de-l27espace--urbain.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./m37la-gabelle---repression-et-peine_s-encourues.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But15",1,1,0,null,0,null,new LMBranchEx("0","./m38la-pierre-d27ingrande-ou-pierre-de-bretagne-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But19",1,1,0,null,0,null,new LMBranchEx("0","./m37l27ancien-chateau-d27ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But20",1,1,0,null,0,null,new LMBranchEx("0","./m38les-foires-d27ingrande-et-le-champ-de-foire-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But21",1,1,0,null,0,null,new LMBranchEx("0","./okm37les-origines-de-la-boule-de-fort_-a-ingrandes.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But22",1,1,0,null,0,null,new LMBranchEx("0","./m38les-principales-auberges-etablies-a-ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But23",1,1,0,null,0,null,new LMBranchEx("0","./m37les-principales-voies-d27acces-a--ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ed,0x3fd,0x71);
LMObjectAnimate();

function But23_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=document.getElementById("Img28");
   if(is.ns) Box2=document.getElementById("Box2");
   Img28.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But23_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=document.getElementById("Img28");
   if(is.ns) Box2=document.getElementById("Box2");
   Img28.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But22_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   if(is.ns) Box2=document.getElementById("Box2");
   Img27.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But22_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   if(is.ns) Box2=document.getElementById("Box2");
   Img27.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But20_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   if(is.ns) Box2=document.getElementById("Box2");
   Img26.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But20_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   if(is.ns) Box2=document.getElementById("Box2");
   Img26.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But21_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=document.getElementById("Img13");
   if(is.ns) Box2=document.getElementById("Box2");
   Img13.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But21_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=document.getElementById("Img13");
   if(is.ns) Box2=document.getElementById("Box2");
   Img13.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But19_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img25=document.getElementById("Img25");
   Box2.Show();
   Img25.Show();
   //LMSOFT End Event-Action

}


function But19_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img25=document.getElementById("Img25");
   Box2.Hide();
   Img25.Hide();
   //LMSOFT End Event-Action

}


function But15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   if(is.ns) Box2=document.getElementById("Box2");
   Img24.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But15_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   if(is.ns) Box2=document.getElementById("Box2");
   Img24.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But13_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img23=document.getElementById("Img23");
   if(is.ns) Box2=document.getElementById("Box2");
   Img23.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But13_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img23=document.getElementById("Img23");
   if(is.ns) Box2=document.getElementById("Box2");
   Img23.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But16_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img22=document.getElementById("Img22");
   Box2.Hide();
   Img22.Hide();
   //LMSOFT End Event-Action

}


function But16_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img22=document.getElementById("Img22");
   Box2.Show();
   Img22.Show();
   //LMSOFT End Event-Action

}


function But18_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Box2=document.getElementById("Box2");
   Img6.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But18_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Box2=document.getElementById("Box2");
   Img6.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But17_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=document.getElementById("Img13");
   if(is.ns) Box2=document.getElementById("Box2");
   Img13.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But17_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=document.getElementById("Img13");
   if(is.ns) Box2=document.getElementById("Box2");
   Img13.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   if(is.ns) Box2=document.getElementById("Box2");
   Img10.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But14_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img18=document.getElementById("Img18");
   if(is.ns) Box2=document.getElementById("Box2");
   Img18.Hide();
   Box2.Hide();
   //LMSOFT End Event-Action

}


function But14_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img18=document.getElementById("Img18");
   if(is.ns) Box2=document.getElementById("Box2");
   Img18.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But12_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img14=document.getElementById("Img14");
   Box2.Hide();
   Img14.Hide();
   //LMSOFT End Event-Action

}


function But12_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img14=document.getElementById("Img14");
   Box2.Show();
   Img14.Show();
   //LMSOFT End Event-Action

}


function But11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img20=document.getElementById("Img20");
   Box2.Hide();
   Img20.Hide();
   //LMSOFT End Event-Action

}


function But11_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img20=document.getElementById("Img20");
   Box2.Show();
   Img20.Show();
   //LMSOFT End Event-Action

}


function But9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img16=document.getElementById("Img16");
   Box2.Hide();
   Img16.Hide();
   //LMSOFT End Event-Action

}


function But9_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img16=document.getElementById("Img16");
   Box2.Show();
   Img16.Show();
   //LMSOFT End Event-Action

}


function But7_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img11=document.getElementById("Img11");
   Box2.Hide();
   Img11.Hide();
   //LMSOFT End Event-Action

}


function But7_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img11=document.getElementById("Img11");
   Box2.Show();
   Img11.Show();
   //LMSOFT End Event-Action

}


function But6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img12=document.getElementById("Img12");
   Box2.Hide();
   Img12.Hide();
   //LMSOFT End Event-Action

}


function But6_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img12=document.getElementById("Img12");
   Box2.Show();
   Img12.Show();
   //LMSOFT End Event-Action

}


function But5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   if(is.ns) Box2=document.getElementById("Box2");
   Img10.Show();
   Box2.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img9=document.getElementById("Img9");
   Box2.Show();
   Img9.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img9=document.getElementById("Img9");
   Box2.Show();
   Img9.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img8=document.getElementById("Img8");
   Box2.Hide();
   Img8.Hide();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img8=document.getElementById("Img8");
   Box2.Show();
   Img8.Show();
   //LMSOFT End Event-Action

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img21=document.getElementById("Img21");
   Box2.Hide();
   Img21.Hide();
   //LMSOFT End Event-Action

}


function But1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img21=document.getElementById("Img21");
   Box2.Show();
   Img21.Show();
   //LMSOFT End Event-Action

}


function But4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img3=document.getElementById("Img3");
   Box2.Hide();
   Img3.Hide();
   //LMSOFT End Event-Action

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box2=document.getElementById("Box2");
   if(is.ns) Img3=document.getElementById("Img3");
   Box2.Show();
   Img3.Show();
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