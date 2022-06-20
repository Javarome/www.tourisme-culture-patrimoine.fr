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
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img6=FindTagFromId('Img6');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj14",0,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj19",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMDiv("But1",1,1,0,null,0,null,new LMBranchEx("0","./louis-gay.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But2",1,1,0,null,0,null,new LMBranchEx("0","./louis-gay.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But3",1,1,0,null,0,null,new LMBranchEx("0","./pan24.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But4",1,1,0,null,0,null,new LMBranchEx("0","./louis-gay.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But5",1,1,0,null,0,null,new LMBranchEx("0","./pan25_2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But6",1,1,0,null,0,null,new LMBranchEx("0","./pan20_2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
LMObjects[objindex++] = LMImage("Img9",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img9=FindTagFromId('Img9');
LMObjects[objindex++] = LMImage("Img10",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMImage("Img17",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img17=FindTagFromId('Img17');
LMObjects[objindex++] = LMImage("Img18",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img18=FindTagFromId('Img18');
LMObjects[objindex++] = LMImage("Img19",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img19=FindTagFromId('Img19');
LMObjects[objindex++] = LMImage("Img20",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img20=FindTagFromId('Img20');
LMObjects[objindex++] = LMImage("Img21",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img21=FindTagFromId('Img21');
LMObjects[objindex++] = LMImage("Img22",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img22=FindTagFromId('Img22');
LMObjects[objindex++] = LMImage("Img23",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img23=FindTagFromId('Img23');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj18",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("But7",1,1,0,null,0,null,new LMBranchEx("0","./pan19_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But8",1,1,0,null,0,null,new LMBranchEx("0","./bresdin.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But9",1,1,0,null,0,null,new LMBranchEx("0","./pan16_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But10",1,1,0,null,0,null,new LMBranchEx("0","./pan15_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But11",1,1,0,null,0,null,new LMBranchEx("0","./pan14_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But12",1,1,0,null,0,null,new LMBranchEx("0","./pan12_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But13",1,1,0,null,0,null,new LMBranchEx("0","./pan9_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But14",1,1,0,null,0,null,new LMBranchEx("0","./la-verreerie-royalet.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But15",1,1,0,null,0,null,new LMBranchEx("0","./pan4_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But16",1,1,0,null,0,null,new LMBranchEx("0","./panneau-0.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But17",1,1,0,null,0,null,new LMBranchEx("0","./pan1_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But18",1,1,0,null,0,null,new LMBranchEx("0","./pan2_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But19",1,1,0,null,0,null,new LMBranchEx("0","./pan23_2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But20",1,1,0,null,0,null,new LMBranchEx("0","./pan22_2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But21",1,1,0,null,0,null,new LMBranchEx("0","./pan21_2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But22",1,1,0,null,0,null,new LMBranchEx("0","./pan17_2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But23",1,1,0,null,0,null,new LMBranchEx("0","./pan13_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But24",1,1,0,null,0,null,new LMBranchEx("0","./pan11_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But25",1,1,0,null,0,null,new LMBranchEx("0","./pan10_4.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But26",1,1,0,null,0,null,new LMBranchEx("0","./la-boule-de-fort.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But27",1,1,0,null,0,null,new LMBranchEx("0","./pan8_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But28",1,1,0,null,0,null,new LMBranchEx("0","./la-boule-de-fort.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But29",1,1,0,null,0,null,new LMBranchEx("0","./pan7_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But30",1,1,0,null,0,null,new LMBranchEx("0","./pan6_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But31",1,1,0,null,0,null,new LMBranchEx("0","./pan5_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But32",1,1,0,null,0,null,new LMBranchEx("0","./pan3_4.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But33",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But34",1,1,0,null,0,null,new LMBranchEx("0","./pan18_2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But35",1,1,0,null,0,null,new LMBranchEx("0","./pan0_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMImage("Img11",1,1,1000,null,3000,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
LMObjects[objindex++] = LMImage("Img13",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMImage("Img15",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img15=FindTagFromId('Img15');
LMObjects[objindex++] = LMImage("Img24",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img24=FindTagFromId('Img24');
LMObjects[objindex++] = LMImage("Img16",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img16=FindTagFromId('Img16');
LMObjects[objindex++] = LMImage("Img25",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img25=FindTagFromId('Img25');
LMObjects[objindex++] = LMImage("Img26",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img26=FindTagFromId('Img26');
LMObjects[objindex++] = LMImage("Img27",0,1,0,null,0,null,null,null,null,1);
if(is.ns) Img27=FindTagFromId('Img27');
LMObjects[objindex++] = LMImage("Img28",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img28=FindTagFromId('Img28');
LMObjects[objindex++] = LMImage("Img29",0,1,0,null,0,null,new LMBranchEx("0","./pan9.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img29=FindTagFromId('Img29');
LMObjects[objindex++] = LMImage("Img30",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img30=FindTagFromId('Img30');
LMObjects[objindex++] = LMImage("Img31",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img31=FindTagFromId('Img31');
LMObjects[objindex++] = LMImage("Img32",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img32=FindTagFromId('Img32');
LMObjects[objindex++] = LMImage("Img33",0,1,0,null,0,null,new LMBranchEx("0","./pan13.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img33=FindTagFromId('Img33');
LMObjects[objindex++] = LMImage("Img34",0,1,0,null,0,null,new LMBranchEx("0","./pan14.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img34=FindTagFromId('Img34');
LMObjects[objindex++] = LMImage("Img35",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img35=FindTagFromId('Img35');
LMObjects[objindex++] = LMImage("Img36",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img36=FindTagFromId('Img36');
LMObjects[objindex++] = LMImage("Img37",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img37=FindTagFromId('Img37');
LMObjects[objindex++] = LMImage("Img38",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img38=FindTagFromId('Img38');
LMObjects[objindex++] = LMImage("Img39",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img39=FindTagFromId('Img39');
LMObjects[objindex++] = LMImage("Img40",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img40=FindTagFromId('Img40');
LMObjects[objindex++] = LMImage("Img41",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img41=FindTagFromId('Img41');
LMObjects[objindex++] = LMImage("Img42",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img42=FindTagFromId('Img42');
LMObjects[objindex++] = LMImage("Img43",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img43=FindTagFromId('Img43');
LMObjects[objindex++] = LMImage("Img44",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img44=FindTagFromId('Img44');
LMObjects[objindex++] = LMImage("Img45",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img45=FindTagFromId('Img45');
LMObjects[objindex++] = LMImage("Img46",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img46=FindTagFromId('Img46');
LMObjects[objindex++] = LMImage("Img14",1,1,0,null,3000,null,null,null,null,0);
if(is.ns) Img14=FindTagFromId('Img14');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("But36",1,1,0,DoorOpenW,0,null,new LMBranchEx("0","./histpatri.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But37",1,1,0,DoorOpenW,0,null,new LMBranchEx("0","./les-panneaux2.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMImage("Img47",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img47=FindTagFromId('Img47');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ef,0x3fd,0x74);
LMObjectAnimate();

function But5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img46=document.getElementById("Img46");
   Img46.Hide();
   //LMSOFT End Event-Action

}


function But5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img46=document.getElementById("Img46");
   Img46.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img45=document.getElementById("Img45");
   Img45.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img45=document.getElementById("Img45");
   Img45.Show();
   //LMSOFT End Event-Action

}


function But19_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img44=document.getElementById("Img44");
   Img44.Hide();
   //LMSOFT End Event-Action

}


function But19_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img44=document.getElementById("Img44");
   Img44.Show();
   //LMSOFT End Event-Action

}


function But20_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img43=document.getElementById("Img43");
   Img43.Hide();
   //LMSOFT End Event-Action

}


function But20_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img43=document.getElementById("Img43");
   Img43.Show();
   //LMSOFT End Event-Action

}


function But21_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img42=document.getElementById("Img42");
   Img42.Hide();
   //LMSOFT End Event-Action

}


function But21_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img42=document.getElementById("Img42");
   Img42.Show();
   //LMSOFT End Event-Action

}


function But6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img41=document.getElementById("Img41");
   Img41.Hide();
   //LMSOFT End Event-Action

}


function But6_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img41=document.getElementById("Img41");
   Img41.Show();
   //LMSOFT End Event-Action

}


function But7_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img40=document.getElementById("Img40");
   Img40.Hide();
   //LMSOFT End Event-Action

}


function But7_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img40=document.getElementById("Img40");
   Img40.Show();
   //LMSOFT End Event-Action

}


function But13_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   Img29.Hide();
   //LMSOFT End Event-Action

}


function But13_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   Img29.Show();
   //LMSOFT End Event-Action

}


function But34_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img39=document.getElementById("Img39");
   Img39.Hide();
   //LMSOFT End Event-Action

}


function But34_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img39=document.getElementById("Img39");
   Img39.Show();
   //LMSOFT End Event-Action

}


function But22_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img38=document.getElementById("Img38");
   Img38.Hide();
   //LMSOFT End Event-Action

}


function But22_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img38=document.getElementById("Img38");
   Img38.Show();
   //LMSOFT End Event-Action

}


function But11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img37=document.getElementById("Img37");
   Img37.Hide();
   //LMSOFT End Event-Action

}


function But11_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img37=document.getElementById("Img37");
   Img37.Show();
   //LMSOFT End Event-Action

}


function But23_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img33=document.getElementById("Img33");
   Img33.Hide();
   //LMSOFT End Event-Action

}


function But23_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img33=document.getElementById("Img33");
   Img33.Show();
   //LMSOFT End Event-Action

}


function But9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img36=document.getElementById("Img36");
   Img36.Hide();
   //LMSOFT End Event-Action

}


function But9_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img36=document.getElementById("Img36");
   Img36.Show();
   //LMSOFT End Event-Action

}


function But10_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img35=document.getElementById("Img35");
   Img35.Hide();
   //LMSOFT End Event-Action

}


function But10_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img35=document.getElementById("Img35");
   Img35.Show();
   //LMSOFT End Event-Action

}


function Img33_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img33=document.getElementById("Img33");
   Img33.Hide();
   //LMSOFT End Event-Action

}


function Img33_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img33=document.getElementById("Img33");
   Img33.Show();
   //LMSOFT End Event-Action

}


function But12_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img32=document.getElementById("Img32");
   Img32.Hide();
   //LMSOFT End Event-Action

}


function But12_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img32=document.getElementById("Img32");
   Img32.Show();
   //LMSOFT End Event-Action

}


function But24_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img31=document.getElementById("Img31");
   Img31.Hide();
   //LMSOFT End Event-Action

}


function But24_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img31=document.getElementById("Img31");
   Img31.Show();
   //LMSOFT End Event-Action

}


function But25_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img30=document.getElementById("Img30");
   Img30.Hide();
   //LMSOFT End Event-Action

}


function But25_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img30=document.getElementById("Img30");
   Img30.Show();
   //LMSOFT End Event-Action

}


function But32_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   Img24.Hide();
   //LMSOFT End Event-Action

}


function But32_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   Img24.Show();
   //LMSOFT End Event-Action

}


function Img29_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   Img29.Hide();
   //LMSOFT End Event-Action

}


function Img29_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   Img29.Show();
   //LMSOFT End Event-Action

}


function But27_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=document.getElementById("Img28");
   Img28.Hide();
   //LMSOFT End Event-Action

}


function But27_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=document.getElementById("Img28");
   Img28.Show();
   //LMSOFT End Event-Action

}


function But29_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   Img27.Hide();
   //LMSOFT End Event-Action

}


function But29_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   Img27.Show();
   //LMSOFT End Event-Action

}


function Img27_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   Img27.Hide();
   //LMSOFT End Event-Action

}


function Img27_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   Img27.Show();
   //LMSOFT End Event-Action

}


function But30_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   Img26.Hide();
   //LMSOFT End Event-Action

}


function But30_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   Img26.Show();
   //LMSOFT End Event-Action

}


function But31_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=document.getElementById("Img25");
   Img25.Hide();
   //LMSOFT End Event-Action

}


function But31_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=document.getElementById("Img25");
   Img25.Show();
   //LMSOFT End Event-Action

}


function But15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=document.getElementById("Img16");
   Img16.Hide();
   //LMSOFT End Event-Action

}


function But15_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=document.getElementById("Img16");
   Img16.Show();
   //LMSOFT End Event-Action

}


function But18_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=document.getElementById("Img15");
   Img15.Hide();
   //LMSOFT End Event-Action

}


function But18_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=document.getElementById("Img15");
   Img15.Show();
   //LMSOFT End Event-Action

}


function But35_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=document.getElementById("Img13");
   Img13.Hide();
   //LMSOFT End Event-Action

}


function But35_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img13=document.getElementById("Img13");
   Img13.Show();
   //LMSOFT End Event-Action

}


function But17_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   Img12.Hide();
   //LMSOFT End Event-Action

}


function But17_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   Img12.Show();
   //LMSOFT End Event-Action

}