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
LMObjects[objindex++] = LMDiv("But1",1,1,0,null,0,null,new LMBranchEx("0","./louis-gay.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But2",1,1,0,null,0,null,new LMBranchEx("0","./louis-gay.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But3",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("But4",1,1,0,null,0,null,new LMBranchEx("0","./louis-gay.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But5",1,1,0,null,0,null,new LMBranchEx("0","./pan25_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But6",1,1,0,null,0,null,new LMBranchEx("0","./pan20_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
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
LMObjects[objindex++] = LMDiv("But7",1,1,0,null,0,null,new LMBranchEx("0","./pan19_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But8",1,1,0,null,0,null,new LMBranchEx("0","./bresdin.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But9",1,1,0,null,0,null,new LMBranchEx("0","./pan16_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But10",1,1,0,null,0,null,new LMBranchEx("0","./pan15_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But11",1,1,0,null,0,null,new LMBranchEx("0","./pan14_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But12",1,1,0,null,0,null,new LMBranchEx("0","./pan12_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But13",1,1,0,null,0,null,new LMBranchEx("0","./pan9_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But14",1,1,0,null,0,null,new LMBranchEx("0","./la-verreerie-royalet.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But15",1,1,0,null,0,null,new LMBranchEx("0","./pan4_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But16",1,1,0,null,0,null,new LMBranchEx("0","./panneau-0.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But17",1,1,0,null,0,null,new LMBranchEx("0","./pan1_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But18",1,1,0,null,0,null,new LMBranchEx("0","./pan2_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But19",1,1,0,null,0,null,new LMBranchEx("0","./pan23_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But20",1,1,0,null,0,null,new LMBranchEx("0","./pan22_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But21",1,1,0,null,0,null,new LMBranchEx("0","./pan21_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But22",1,1,0,null,0,null,new LMBranchEx("0","./pan17_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But23",1,1,0,null,0,null,new LMBranchEx("0","./pan13_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But24",1,1,0,null,0,null,new LMBranchEx("0","./pan11_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But25",1,1,0,null,0,null,new LMBranchEx("0","./pan10_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But26",1,1,0,null,0,null,new LMBranchEx("0","./la-boule-de-fort.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But27",1,1,0,null,0,null,new LMBranchEx("0","./pan8_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But28",1,1,0,null,0,null,new LMBranchEx("0","./la-boule-de-fort.jpg",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But29",1,1,0,null,0,null,new LMBranchEx("0","./pan7_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But30",1,1,0,null,0,null,new LMBranchEx("0","./pan6_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But31",1,1,0,null,0,null,new LMBranchEx("0","./pan5_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But32",1,1,0,null,0,null,new LMBranchEx("0","./pan3_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But33",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But34",1,1,0,null,0,null,new LMBranchEx("0","./pan18_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But35",1,1,0,null,0,null,new LMBranchEx("0","./pan0_1.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img12",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
LMObjects[objindex++] = LMImage("Img13",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMImage("Img14",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img14=FindTagFromId('Img14');
LMObjects[objindex++] = LMImage("Img15",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img15=FindTagFromId('Img15');
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMDiv("But37",1,1,0,null,0,null,new LMBranchEx("0","./p1-les-foires-d27ingrandes-et-le-champ-de-foire.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But36",1,1,0,null,0,null,new LMBranchEx("0","./p2-les-voies-d27acces-a-ingrandes-.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But38",1,1,0,null,0,null,new LMBranchEx("0","./p3-le-mesurage-et-le-port.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But39",1,1,0,null,0,null,new LMBranchEx("0","./p4-les-prisons-et-logis-du-prevo-t-devenue-salle-d27audience.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But40",1,1,0,null,0,null,new LMBranchEx("0","./p5-maison-pierre-tourmeau-voiturier-par-eau.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But41",1,1,0,null,0,null,new LMBranchEx("0","./p6-les-halles-d27ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But42",1,1,0,null,0,null,new LMBranchEx("0","./p7-maison-notaire-royal-et-chate_au.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But43",1,1,0,null,0,null,new LMBranchEx("0","./p9-renou-et-maison-renou.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But44",1,1,0,null,0,null,new LMBranchEx("0","./p0-periodes-de-l27histoire-d27ingr-andes.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But46",1,1,0,null,0,null,new LMBranchEx("0","./p10-le-pont-suspendu-d27ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But47",1,1,0,null,0,null,new LMBranchEx("0","./p11-les-eglises-d27ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But49",1,1,0,null,0,null,new LMBranchEx("0","./p13-les-auberges-d27ingrande-et-le-quartier-des-auberges.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But50",1,1,0,null,0,null,new LMBranchEx("0","./p14-origines-de-la-boule-de-fort-a-ingrande---un-jeu-typ-ique-de-l27anjou.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But51",1,1,0,null,0,null,new LMBranchEx("0","./p15-la-verrerie-royale-d27ingrande.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But52",1,1,0,null,0,null,new LMBranchEx("0","./pan9_3.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But53",1,1,0,null,0,null,new LMBranchEx("0","./p16-la-pierre-d27ingrande-ou-pierre-de-bretagne.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But45",1,1,0,null,0,null,new LMBranchEx("0","./p19-la-maison-d27une-petite-fille-walsh-de-serrant.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMImage("Img16",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img16=FindTagFromId('Img16');
LMObjects[objindex++] = LMDiv("But62",1,1,0,null,0,null,new LMBranchEx("0","./p12-le-bureau-de-la-douane-et-le_s-droits-percus-sur-le-commerce-_de-loire.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
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
LMObjects[objindex++] = LMImage("Img29",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img29=FindTagFromId('Img29');
LMObjects[objindex++] = LMImage("Img30",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img30=FindTagFromId('Img30');
LMObjects[objindex++] = LMImage("Img31",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img31=FindTagFromId('Img31');
LMObjects[objindex++] = LMImage("Img32",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img32=FindTagFromId('Img32');
LMObjects[objindex++] = LMImage("Img33",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img33=FindTagFromId('Img33');
LMObjects[objindex++] = LMImage("Img34",0,1,0,null,0,null,null,null,null,0);
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
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ef,0x3fd,0x73);
LMObjectAnimate();

function But44_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img44=document.getElementById("Img44");
   Img44.Hide();
   //LMSOFT End Event-Action

}


function But44_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img44=document.getElementById("Img44");
   Img44.Show();
   //LMSOFT End Event-Action

}


function But49_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=document.getElementById("Img16");
   if(is.ns) Img41=document.getElementById("Img41");
   Img16.Hide();
   Img41.Hide();
   //LMSOFT End Event-Action

}


function But49_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=document.getElementById("Img16");
   if(is.ns) Img41=document.getElementById("Img41");
   Img16.Show();
   Img41.Show();
   //LMSOFT End Event-Action

}


function But62_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img36=document.getElementById("Img36");
   if(is.ns) Img43=document.getElementById("Img43");
   Img36.Hide();
   Img43.Hide();
   //LMSOFT End Event-Action

}


function But62_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img36=document.getElementById("Img36");
   if(is.ns) Img43=document.getElementById("Img43");
   Img36.Show();
   Img43.Show();
   //LMSOFT End Event-Action

}


function But38_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   if(is.ns) Img42=document.getElementById("Img42");
   Img26.Hide();
   Img42.Hide();
   //LMSOFT End Event-Action

}


function But38_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   if(is.ns) Img42=document.getElementById("Img42");
   Img26.Show();
   Img42.Show();
   //LMSOFT End Event-Action

}


function But40_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   if(is.ns) Img42=document.getElementById("Img42");
   Img29.Hide();
   Img42.Hide();
   //LMSOFT End Event-Action

}


function But40_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   if(is.ns) Img42=document.getElementById("Img42");
   Img29.Show();
   Img42.Show();
   //LMSOFT End Event-Action

}


function But43_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img35=document.getElementById("Img35");
   if(is.ns) Img45=document.getElementById("Img45");
   Img35.Hide();
   Img45.Hide();
   //LMSOFT End Event-Action

}


function But43_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img35=document.getElementById("Img35");
   if(is.ns) Img45=document.getElementById("Img45");
   Img35.Show();
   Img45.Show();
   //LMSOFT End Event-Action

}


function But52_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img31=document.getElementById("Img31");
   if(is.ns) Img43=document.getElementById("Img43");
   Img31.Hide();
   Img43.Hide();
   //LMSOFT End Event-Action

}


function But52_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img31=document.getElementById("Img31");
   if(is.ns) Img43=document.getElementById("Img43");
   Img31.Show();
   Img43.Show();
   //LMSOFT End Event-Action

}


function But50_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img37=document.getElementById("Img37");
   if(is.ns) Img43=document.getElementById("Img43");
   Img37.Hide();
   Img43.Hide();
   //LMSOFT End Event-Action

}


function But50_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img37=document.getElementById("Img37");
   if(is.ns) Img43=document.getElementById("Img43");
   Img37.Show();
   Img43.Show();
   //LMSOFT End Event-Action

}


function But51_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img34=document.getElementById("Img34");
   if(is.ns) Img43=document.getElementById("Img43");
   Img34.Hide();
   Img43.Hide();
   //LMSOFT End Event-Action

}


function But51_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img34=document.getElementById("Img34");
   if(is.ns) Img43=document.getElementById("Img43");
   Img34.Show();
   Img43.Show();
   //LMSOFT End Event-Action

}


function But45_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img38=document.getElementById("Img38");
   if(is.ns) Img40=document.getElementById("Img40");
   Img38.Hide();
   Img40.Hide();
   //LMSOFT End Event-Action

}


function But45_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img38=document.getElementById("Img38");
   if(is.ns) Img40=document.getElementById("Img40");
   Img38.Show();
   Img40.Show();
   //LMSOFT End Event-Action

}


function But53_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img39=document.getElementById("Img39");
   if(is.ns) Img40=document.getElementById("Img40");
   Img39.Hide();
   Img40.Hide();
   //LMSOFT End Event-Action

}


function But53_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img39=document.getElementById("Img39");
   if(is.ns) Img40=document.getElementById("Img40");
   Img39.Show();
   Img40.Show();
   //LMSOFT End Event-Action

}


function But47_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img33=document.getElementById("Img33");
   if(is.ns) Img41=document.getElementById("Img41");
   Img33.Hide();
   Img41.Hide();
   //LMSOFT End Event-Action

}


function But47_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img33=document.getElementById("Img33");
   if(is.ns) Img41=document.getElementById("Img41");
   Img33.Show();
   Img41.Show();
   //LMSOFT End Event-Action

}


function But46_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img32=document.getElementById("Img32");
   if(is.ns) Img41=document.getElementById("Img41");
   Img32.Hide();
   Img41.Hide();
   //LMSOFT End Event-Action

}


function But46_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img32=document.getElementById("Img32");
   if(is.ns) Img41=document.getElementById("Img41");
   Img32.Show();
   Img41.Show();
   //LMSOFT End Event-Action

}


function But42_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img30=document.getElementById("Img30");
   if(is.ns) Img45=document.getElementById("Img45");
   Img30.Hide();
   Img45.Hide();
   //LMSOFT End Event-Action

}


function But42_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img30=document.getElementById("Img30");
   if(is.ns) Img45=document.getElementById("Img45");
   Img30.Show();
   Img45.Show();
   //LMSOFT End Event-Action

}


function But41_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=document.getElementById("Img28");
   if(is.ns) Img42=document.getElementById("Img42");
   Img28.Hide();
   Img42.Hide();
   //LMSOFT End Event-Action

}


function But41_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=document.getElementById("Img28");
   if(is.ns) Img42=document.getElementById("Img42");
   Img28.Show();
   Img42.Show();
   //LMSOFT End Event-Action

}


function But39_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   if(is.ns) Img44=document.getElementById("Img44");
   Img27.Hide();
   Img44.Hide();
   //LMSOFT End Event-Action

}


function But39_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img27=document.getElementById("Img27");
   if(is.ns) Img44=document.getElementById("Img44");
   Img27.Show();
   Img44.Show();
   //LMSOFT End Event-Action

}


function But36_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=document.getElementById("Img25");
   if(is.ns) Img44=document.getElementById("Img44");
   Img25.Hide();
   Img44.Hide();
   //LMSOFT End Event-Action

}


function But36_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img25=document.getElementById("Img25");
   if(is.ns) Img44=document.getElementById("Img44");
   Img25.Show();
   Img44.Show();
   //LMSOFT End Event-Action

}


function But37_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   if(is.ns) Img44=document.getElementById("Img44");
   Img24.Hide();
   Img44.Hide();
   //LMSOFT End Event-Action

}


function But37_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   if(is.ns) Img44=document.getElementById("Img44");
   Img24.Show();
   Img44.Show();
   //LMSOFT End Event-Action

}