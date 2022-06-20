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
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMButton("But17",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-29s-sud-pasquier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-29nn-nord-du-28-tourmeau-gaudin-jarry.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./m27maison-30-veuve-ch-gaudin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./m16amaison-31-nord-rue-du-cimetiere-nb0701-702.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-zz-chapeau-rouge.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./m33maison-w-mahe-rince-lemancois-28229.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./m15maison-24-chapelle-des-letards.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./m25maison-47n-guillon-jardin-langevin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./m18maison-26-langevin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./m25maison-25-la-scholastique.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-27-coullion-gautreau.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-28-mondouet-vve-gaudin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text10",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-17-presbytere-28229.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./maison-18-sanson-gaudin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But14",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-18-sanson-puis-jj-gaudin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But27",1,1,0,null,0,null,new LMBranchEx("0","./tcp.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But15",1,1,0,null,0,null,new LMBranchEx("0","./maison-20-guillois-madin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But16",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-23-pissot-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But18",1,1,0,null,0,null,new LMBranchEx("0","./maison-19-guillois-madin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But19",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-19-guillois-madin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But20",1,1,0,null,0,null,new LMBranchEx("0","./m25maison-25b-maison-de-l27ecole-dependant-de-la-scolastique.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But21",1,1,0,null,0,null,new LMBranchEx("0","./maison-21.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But22",1,1,0,null,0,null,new LMBranchEx("0","./maison-21.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text18",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But23",1,1,0,null,0,null,new LMBranchEx("0","./maison-45-n-saillard.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But24",1,1,0,null,0,null,new LMBranchEx("0","./m34maison-17bcure-vigne-blanche-courtille.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But25",1,1,0,null,0,null,new LMBranchEx("0","./m18maison-51-s...pdf.url",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But26",1,1,0,null,0,null,new LMBranchEx("0","./m15maison-41-sardine.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But28",1,1,0,null,0,null,new LMBranchEx("0","./22maison-44-nord-jardins-saint-sernin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But29",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-22-mahe-bore-marasse.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text24",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But30",1,1,0,null,0,null,new LMBranchEx("0","./maison-22-mahe-bore.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But31",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-23-pissot.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text25",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text26",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text27",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But32",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-20-sanson-guillois-madin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But33",1,1,0,null,0,null,new LMBranchEx("0","./maison-19-guillois-madin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But34",1,1,0,null,0,null,new LMBranchEx("0","./m16amaison-11-bourgeault-crispiel-beauvoisin-rochard.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But35",1,1,0,null,0,null,new LMBranchEx("0","./m29maison-29n-coursillon-reverier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f3,0x3fb,0x79);
LMObjectAnimate();

function But20_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text18=FindTagFromId("Text18");
   Text18.RollOut();
   //LMSOFT End RollOver

}


function But20_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text18=FindTagFromId("Text18");
   Text18.RollIn();
   //LMSOFT End RollOver

}


function But18_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text27=FindTagFromId("Text27");
   Text27.RollOut();
   //LMSOFT End RollOver

}


function But18_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text27=FindTagFromId("Text27");
   Text27.RollIn();
   //LMSOFT End RollOver

}


function But16_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text25=FindTagFromId("Text25");
   Text25.RollOut();
   //LMSOFT End RollOver

}


function But16_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text25=FindTagFromId("Text25");
   Text25.RollIn();
   //LMSOFT End RollOver

}


function But15_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text26=FindTagFromId("Text26");
   Text26.RollOut();
   //LMSOFT End RollOver

}


function But15_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text26=FindTagFromId("Text26");
   Text26.RollIn();
   //LMSOFT End RollOver

}


function But19_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text27=FindTagFromId("Text27");
   Text27.RollOut();
   //LMSOFT End RollOver

}


function But19_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text27=FindTagFromId("Text27");
   Text27.RollIn();
   //LMSOFT End RollOver

}


function But33_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text27=FindTagFromId("Text27");
   Text27.RollOut();
   //LMSOFT End RollOver

}


function But33_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text27=FindTagFromId("Text27");
   Text27.RollIn();
   //LMSOFT End RollOver

}


function But32_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text26=FindTagFromId("Text26");
   Text26.RollOut();
   //LMSOFT End RollOver

}


function But32_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text26=FindTagFromId("Text26");
   Text26.RollIn();
   //LMSOFT End RollOver

}


function But31_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text25=FindTagFromId("Text25");
   Text25.RollOut();
   //LMSOFT End RollOver

}


function But31_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text25=FindTagFromId("Text25");
   Text25.RollIn();
   //LMSOFT End RollOver

}


function But30_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text24=FindTagFromId("Text24");
   Text24.RollOut();
   //LMSOFT End RollOver

}


function But30_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text24=FindTagFromId("Text24");
   Text24.RollIn();
   //LMSOFT End RollOver

}


function But29_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text24=FindTagFromId("Text24");
   Text24.RollOut();
   //LMSOFT End RollOver

}


function But29_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text24=FindTagFromId("Text24");
   Text24.RollIn();
   //LMSOFT End RollOver

}


function But22_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text1=FindTagFromId("Text1");
   Text1.RollOut();
   //LMSOFT End RollOver

}


function But22_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text1=FindTagFromId("Text1");
   Text1.RollIn();
   //LMSOFT End RollOver

}


function But21_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text18=FindTagFromId("Text18");
   Text18.RollOut();
   //LMSOFT End RollOver

}


function But21_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text18=FindTagFromId("Text18");
   Text18.RollIn();
   //LMSOFT End RollOver

}


function But11_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text10=FindTagFromId("Text10");
   Text10.RollOut();
   //LMSOFT End RollOver

}


function But11_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text10=FindTagFromId("Text10");
   Text10.RollIn();
   //LMSOFT End RollOver

}