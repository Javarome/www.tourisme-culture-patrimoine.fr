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
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./tourismeindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./patrimoineindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","./cultureindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But18",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But19",1,1,0,null,0,null,new LMBranchEx("0","./peages-1ere-et-4eme-de-couverture.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But20",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/Webmaisons/index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img1",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img19",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img19=FindTagFromId('Img19');
LMObjects[objindex++] = LMButton("But21",1,1,0,null,0,null,new LMBranchEx("0","./cdhorloges002.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img20",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img20=FindTagFromId('Img20');
LMObjects[objindex++] = LMButton("But22",1,1,0,null,0,null,new LMBranchEx("0","./noscartespostales.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img21",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img21=FindTagFromId('Img21');
LMObjects[objindex++] = LMButton("But23",1,1,0,null,0,null,new LMBranchEx("0","./les-liens.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But24",1,1,0,null,0,null,new LMBranchEx("0","./lafrontieresesouvient.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But25",1,1,0,null,0,null,new LMBranchEx("0","./les-cartes-de-la-frontiere.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img18",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img18=FindTagFromId('Img18');
LMObjects[objindex++] = LMButton("But28",1,1,0,null,0,null,new LMBranchEx("0","./couv-ingrandes.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img22",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img22=FindTagFromId('Img22');
LMObjects[objindex++] = LMImage("Img24",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img24=FindTagFromId('Img24');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./partage6-1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./ingrandes-au-13eme-siecle-6.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./historique-des-peages-2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./cadastre-le-fresne.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f3,0x3fa,0x78);
LMObjectAnimate();

function But4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=document.getElementById("Img20");
   Img20.Hide();
   //LMSOFT End Event-Action

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=document.getElementById("Img20");
   Img20.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   Img7.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   Img7.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   Img6.Hide();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   Img6.Show();
   //LMSOFT End Event-Action

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   Img5.Hide();
   //LMSOFT End Event-Action

}


function But1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   Img5.Show();
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


function But24_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   Img24.Hide();
   //LMSOFT End Event-Action

}


function But24_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   Img24.Show();
   //LMSOFT End Event-Action

}


function But28_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img22=document.getElementById("Img22");
   Img22.Hide();
   //LMSOFT End Event-Action

}


function But28_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img22=document.getElementById("Img22");
   Img22.Show();
   //LMSOFT End Event-Action

}


function But25_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img18=document.getElementById("Img18");
   Img18.Hide();
   //LMSOFT End Event-Action

}


function But25_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img18=document.getElementById("Img18");
   Img18.Show();
   //LMSOFT End Event-Action

}


function But22_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img21=document.getElementById("Img21");
   Img21.Hide();
   //LMSOFT End Event-Action

}


function But22_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img21=document.getElementById("Img21");
   Img21.Show();
   //LMSOFT End Event-Action

}


function But20_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=document.getElementById("Img20");
   Img20.Hide();
   //LMSOFT End Event-Action

}


function But20_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=document.getElementById("Img20");
   Img20.Show();
   //LMSOFT End Event-Action

}


function But21_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img19=document.getElementById("Img19");
   Img19.Hide();
   //LMSOFT End Event-Action

}


function But21_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img19=document.getElementById("Img19");
   Img19.Show();
   //LMSOFT End Event-Action

}


function But19_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   Img1.Hide();
   //LMSOFT End Event-Action

}


function But19_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   Img1.Show();
   //LMSOFT End Event-Action

}


function But18_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But20=document.getElementById("But20");
   if(is.ns) But19=document.getElementById("But19");
   if(is.ns) But21=document.getElementById("But21");
   if(is.ns) But22=document.getElementById("But22");
   if(is.ns) But24=document.getElementById("But24");
   if(is.ns) But25=document.getElementById("But25");
   if(is.ns) But28=document.getElementById("But28");
   But20.Show();
   But19.Show();
   But21.Show();
   But22.Show();
   But24.Show();
   But25.Show();
   But28.Show();
   //LMSOFT End Event-Action

}