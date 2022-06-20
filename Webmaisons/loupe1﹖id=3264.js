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
LMObjects[objindex++] = LMButton("But14",1,1,0,null,0,null,new LMBranchEx("0","./m32maison-56-et-55oo-ouest-ouest-qu_ai-et-terrain-pr-frontiere.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./maison-64-raspillier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./m16amaison-67-langevin-ecurie-marechaussee.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./tcp.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./m33maison-66-langevin-landais-tourmeau-dugrez.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./m33maison-65-langevin-avrillaut-tourmeau.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text16",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./m22maison-64-langevin-hardou-raspillier.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./m18maison-63-chetou-langevin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./m20maison-62-langevin-vallin.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-61-grand-batiment-langevin-chetou.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-59-marault-delaunay.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./m22maison-60-roullet-huet.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./maison-59-marault.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But15",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-57-patas-lebreton-28129.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But16",1,1,0,null,0,null,new LMBranchEx("0","./m32maison-55-ouest-quai-nb0s-774-a-7_83.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But18",1,1,0,null,0,null,new LMBranchEx("0","./m32verrerie-28329.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But17",1,1,0,null,0,null,new LMBranchEx("0","./m26maison-58-patas-guerin-fourmy.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f2,0x3fb,0x74);
LMObjectAnimate();

function But18_OnMouseLeave()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text16=FindTagFromId("Text16");
   Text16.RollOut();
   //LMSOFT End RollOver

}


function But18_OnMouseEnter()
{

   //LMSOFT Begin RollOver
   if(is.ns) Text16=FindTagFromId("Text16");
   Text16.RollIn();
   //LMSOFT End RollOver

}