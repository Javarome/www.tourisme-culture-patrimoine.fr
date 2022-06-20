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
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./tcp.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But16",1,1,0,null,0,null,new LMBranchEx("0","./m22maison-50-langevin-puis-raspillier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./m22maison-50-langevin-puis-raspillier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-49-fortin-davy-langevin-poilpre.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./maison-52-ancien-grenier-a-sel.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./m22maison-50-langevin-puis-raspillier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./m20maison-47-n-guillon-et-jardin-langevin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-47-ecu-de-france-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-45-le-pigeon.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./m18maison-43-marchand.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","./m32maison-43-marchand-normand-la-courtille.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./m16bmaisons-nb041-et-42-de-1755-ou-829-et-833-cadastre.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./m27maison-44-nord-jardins-saint-sernin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text7",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./m18maison-44-cote-grande-rue-saint-sernin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But14",1,1,0,null,0,null,new LMBranchEx("0","./m16amaison-42-besnier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But15",1,1,0,null,0,null,new LMBranchEx("0","./maison-36-et-partie-37-roullier-de-besnier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But17",1,1,0,null,0,null,new LMBranchEx("0","./m33maison-41-sardine-bellabger-gaudry-normand.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But18",1,1,0,null,0,null,new LMBranchEx("0","./m16amaison-39-et-40-leproust-pineau.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But19",1,1,0,null,0,null,new LMBranchEx("0","./maison-36-et-partie-37-roullier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But20",1,1,0,null,0,null,new LMBranchEx("0","./maison-36-et-partie-37-roullier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But21",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-35-et-38-croix-de-lorraine-lebreton-desgranges-28229.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But22",1,1,0,null,0,null,new LMBranchEx("0","./maison-35-et-38-croix-de-lorraine-lebreton.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But23",1,1,0,null,0,null,new LMBranchEx("0","./maison-35-et-38-croix-de-lorraine-lebreton.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But24",1,1,0,null,0,null,new LMBranchEx("0","./m20maison-35-et-38-croix-de-lorraine-et-partie-37.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But25",1,1,0,null,0,null,new LMBranchEx("0","./m15maison-36-et-38-guy-roullier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But26",1,1,0,null,0,null,new LMBranchEx("0","./maison-35-et-38-croix-de-lorraine-lebreton.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But27",1,1,0,null,0,null,new LMBranchEx("0","./m15maison-36-et-38-guy-roullier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But28",1,1,0,null,0,null,new LMBranchEx("0","./maison-36-et-partie-37-roullier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But29",1,1,0,null,0,null,new LMBranchEx("0","./m20maison-35-et-38-croix-de-lorraine-et-partie-37.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text18",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But30",1,1,0,null,0,null,new LMBranchEx("0","./m27maison-51-soudry-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But31",1,1,0,null,0,null,new LMBranchEx("0","./maison-36-et-partie-37-roullier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But32",1,1,0,null,0,null,new LMBranchEx("0","./maison-35-et-38-croix-de-lorraine-lebreton.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But33",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-33-34-lion-d27or-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But34",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-33-lion-d27or-partie-guillon-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But35",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-33-34-lion-d27or-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But36",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-33-34-lion-d27or-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But37",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-35-et-38-croix-de-lorraine-lebreton-desgranges-28229.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But38",1,1,0,null,0,null,new LMBranchEx("0","./maison-33-et-34-lion-d27or-auberge-guillon-bore.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But39",1,1,0,null,0,null,new LMBranchEx("0","./maison-36-et-partie-37-roullier-de-besnier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But40",1,1,0,null,0,null,new LMBranchEx("0","./m20maison-48-guillon-langevin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But41",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-32-la-croix-blanche.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But42",1,1,0,null,0,null,new LMBranchEx("0","./m16amaison-39-et-40-leproust-pineau.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img2",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img3",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMButton("But43",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-40-sud-cote-loire.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But44",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-45-sud-quai-pigeon.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But45",1,1,0,null,0,null,new LMBranchEx("0","./m32maison-55-est-nb0784-cad.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f2,0x3fb,0x74);
LMObjectAnimate();

function But8_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img3=FindTagFromId("Img3");
   Img3.RollOut();
   //LMSOFT End RollOver

}


function But8_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img3=FindTagFromId("Img3");
   Img3.RollIn();
   //LMSOFT End RollOver

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img2=FindTagFromId("Img2");
   Img2.RollOut();
   //LMSOFT End RollOver

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img2=FindTagFromId("Img2");
   Img2.RollIn();
   //LMSOFT End RollOver

}


function But16_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img2=FindTagFromId("Img2");
   Img2.RollOut();
   //LMSOFT End RollOver

}


function But16_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img2=FindTagFromId("Img2");
   Img2.RollIn();
   //LMSOFT End RollOver

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img2=FindTagFromId("Img2");
   Img2.RollOut();
   //LMSOFT End RollOver

}


function But1_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Img2=FindTagFromId("Img2");
   Img2.RollIn();
   //LMSOFT End RollOver

}


function But30_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text18=FindTagFromId("Text18");
   Text18.RollOut();
   //LMSOFT End RollOver

}


function But30_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text18=FindTagFromId("Text18");
   Text18.RollIn();
   //LMSOFT End RollOver

}


function But13_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text7=FindTagFromId("Text7");
   Text7.RollOut();
   //LMSOFT End RollOver

}


function But13_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text7=FindTagFromId("Text7");
   Text7.RollIn();
   //LMSOFT End RollOver

}


function But12_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text7=FindTagFromId("Text7");
   Text7.RollOut();
   //LMSOFT End RollOver

}


function But12_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text7=FindTagFromId("Text7");
   Text7.RollIn();
   //LMSOFT End RollOver

}