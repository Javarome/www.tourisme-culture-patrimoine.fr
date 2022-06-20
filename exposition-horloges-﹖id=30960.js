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
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./expo-horlo-joue.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,new LMBranchEx("0","http://lmbeauvois.free.fr/horloges.htm",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img9",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img9=FindTagFromId('Img9');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Box3",0,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","./expo-horlo-mg.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","./expo-horlo-million.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,new LMBranchEx("0","./expo-horlo-de-vau.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But5",1,1,0,null,0,null,new LMBranchEx("0","./expo-horlo-genneteil.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But6",1,1,0,null,0,null,new LMBranchEx("0","./expo-horlo-st-marc.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./tiberge.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./expo-horlo-andart.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But9",1,1,0,null,0,null,new LMBranchEx("0","./horloge-008.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./horloge-009.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./horloge-010.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./horloge-011.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But14",1,1,0,null,0,null,new LMBranchEx("0","./horloge-012.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But15",1,1,0,null,0,null,new LMBranchEx("0","./horloge-013.pdf",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But16",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But17",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMImage("Img1",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
LMObjects[objindex++] = LMImage("Img13",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMImage("Img11",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img16",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img16=FindTagFromId('Img16');
LMObjects[objindex++] = LMImage("Img15",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img15=FindTagFromId('Img15');
LMObjects[objindex++] = LMImage("Img14",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img14=FindTagFromId('Img14');
LMObjects[objindex++] = LMImage("Img10",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMImage("Img8",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img2",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMImage("Img17",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img17=FindTagFromId('Img17');
LMObjects[objindex++] = LMImage("Img18",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img18=FindTagFromId('Img18');
LMObjects[objindex++] = LMImage("Img19",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img19=FindTagFromId('Img19');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f2,0x3fc,0x6e);
LMObjectAnimate();

function But7_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img17=document.getElementById("Img17");
   Img17.Hide();
   //LMSOFT End Event-Action

}


function But7_WhenButtonDown()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But7_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img17=document.getElementById("Img17");
   Box3.Show();
   Img17.Show();
   //LMSOFT End Event-Action

}


function But6_WhenButtonDown()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Box3=document.getElementById("Box3");
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img14=document.getElementById("Img14");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img14.Hide();
   Text1.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But15_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img14=document.getElementById("Img14");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img14.Show();
   Text1.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But12_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img11=document.getElementById("Img11");
   if(is.ns) Box3=document.getElementById("Box3");
   Img11.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But12_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img11=document.getElementById("Img11");
   if(is.ns) Box3=document.getElementById("Box3");
   Img11.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But17_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=document.getElementById("Img16");
   if(is.ns) Box3=document.getElementById("Box3");
   Img16.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But17_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=document.getElementById("Img16");
   if(is.ns) Box3=document.getElementById("Box3");
   Img16.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But16_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=document.getElementById("Img15");
   if(is.ns) Box3=document.getElementById("Box3");
   Img15.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But16_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img15=document.getElementById("Img15");
   if(is.ns) Box3=document.getElementById("Box3");
   Img15.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But14_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Img13=document.getElementById("Img13");
   if(is.ns) Box3=document.getElementById("Box3");
   Text1.Hide();
   Img13.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But14_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Img13=document.getElementById("Img13");
   if(is.ns) Box3=document.getElementById("Box3");
   Text1.Show();
   Img13.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But13_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   if(is.ns) Box3=document.getElementById("Box3");
   Img12.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But13_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   if(is.ns) Box3=document.getElementById("Box3");
   Img12.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   if(is.ns) Box3=document.getElementById("Box3");
   Img10.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But11_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   if(is.ns) Box3=document.getElementById("Box3");
   Img10.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   if(is.ns) Box3=document.getElementById("Box3");
   Img8.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But9_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   if(is.ns) Box3=document.getElementById("Box3");
   Img8.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But6_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Text1=document.getElementById("Text1");
   Img7.Hide();
   Text1.Hide();
   //LMSOFT End Event-Action

}


function But6_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img7.Show();
   Text1.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img6.Hide();
   Text1.Hide();
   Box3.ToggleVisibleState();
   //LMSOFT End Event-Action

}


function But5_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img6.Show();
   Text1.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img18=document.getElementById("Img18");
   Text1.Hide();
   Box3.Hide();
   Img18.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   if(is.ns) Img18=document.getElementById("Img18");
   Text1.Show();
   Box3.Show();
   Img18.Show();
   //LMSOFT End Event-Action

}


function But4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img5.Hide();
   Text1.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=document.getElementById("Img5");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img5.Show();
   Text1.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But8_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   Img4.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But8_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   Img4.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img2=document.getElementById("Img2");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img2.Hide();
   Text1.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img2=document.getElementById("Img2");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img2.Show();
   Text1.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img1.Show();
   Text1.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   if(is.ns) Text1=document.getElementById("Text1");
   if(is.ns) Box3=document.getElementById("Box3");
   Img1.Hide();
   Text1.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Hide();
   //LMSOFT End Event-Action

}


function Img9_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Show();
   //LMSOFT End Event-Action

}