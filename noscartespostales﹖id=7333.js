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
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img8=FindTagFromId('Img8');
LMObjects[objindex++] = LMDiv("Box3",0,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img4",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMImage("Img9",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img9=FindTagFromId('Img9');
LMObjects[objindex++] = LMImage("Img10",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMImage("Img11",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img11=FindTagFromId('Img11');
LMObjects[objindex++] = LMImage("Img12",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img12=FindTagFromId('Img12');
LMObjects[objindex++] = LMImage("Img13",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img13=FindTagFromId('Img13');
LMObjects[objindex++] = LMImage("Img14",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img14=FindTagFromId('Img14');
LMObjects[objindex++] = LMImage("Img15",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img15=FindTagFromId('Img15');
LMObjects[objindex++] = LMImage("Img16",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img16=FindTagFromId('Img16');
LMObjects[objindex++] = LMImage("Img17",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img17=FindTagFromId('Img17');
LMObjects[objindex++] = LMImage("Img18",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img18=FindTagFromId('Img18');
LMObjects[objindex++] = LMImage("Img19",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img19=FindTagFromId('Img19');
LMObjects[objindex++] = LMImage("Img20",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img20=FindTagFromId('Img20');
LMObjects[objindex++] = LMImage("Img21",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img21=FindTagFromId('Img21');
LMObjects[objindex++] = LMImage("Img22",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img22=FindTagFromId('Img22');
LMObjects[objindex++] = LMImage("Img23",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img23=FindTagFromId('Img23');
LMObjects[objindex++] = LMImage("Img24",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img24=FindTagFromId('Img24');
LMObjects[objindex++] = LMImage("Img25",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img25=FindTagFromId('Img25');
LMObjects[objindex++] = LMImage("Img26",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img26=FindTagFromId('Img26');
LMObjects[objindex++] = LMImage("Img27",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img27=FindTagFromId('Img27');
LMObjects[objindex++] = LMImage("Img28",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img28=FindTagFromId('Img28');
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img29",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img29=FindTagFromId('Img29');
LMObjects[objindex++] = LMImage("Img30",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img30=FindTagFromId('Img30');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f0,0x3f9,0x77);
LMObjectAnimate();

function But7_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   if(is.ns) Box3=document.getElementById("Box3");
   Img29.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function But7_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img29=document.getElementById("Img29");
   if(is.ns) Box3=document.getElementById("Box3");
   Img29.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img27_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=document.getElementById("Img28");
   if(is.ns) Box3=document.getElementById("Box3");
   Img28.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img27_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img28=document.getElementById("Img28");
   if(is.ns) Box3=document.getElementById("Box3");
   Img28.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img25_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   if(is.ns) Box3=document.getElementById("Box3");
   Img26.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img25_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img26=document.getElementById("Img26");
   if(is.ns) Box3=document.getElementById("Box3");
   Img26.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img23_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   if(is.ns) Box3=document.getElementById("Box3");
   Img24.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img23_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img24=document.getElementById("Img24");
   if(is.ns) Box3=document.getElementById("Box3");
   Img24.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img21_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img22=document.getElementById("Img22");
   if(is.ns) Box3=document.getElementById("Box3");
   Img22.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img21_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img22=document.getElementById("Img22");
   if(is.ns) Box3=document.getElementById("Box3");
   Img22.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img19_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=document.getElementById("Img20");
   if(is.ns) Box3=document.getElementById("Box3");
   Img20.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img19_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img20=document.getElementById("Img20");
   if(is.ns) Box3=document.getElementById("Box3");
   Img20.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img17_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img18=document.getElementById("Img18");
   if(is.ns) Box3=document.getElementById("Box3");
   Img18.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img17_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img18=document.getElementById("Img18");
   if(is.ns) Box3=document.getElementById("Box3");
   Img18.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img15_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=document.getElementById("Img16");
   if(is.ns) Box3=document.getElementById("Box3");
   Img16.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img15_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img16=document.getElementById("Img16");
   if(is.ns) Box3=document.getElementById("Box3");
   Img16.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img13_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img14=document.getElementById("Img14");
   if(is.ns) Box3=document.getElementById("Box3");
   Img14.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img13_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img14=document.getElementById("Img14");
   if(is.ns) Box3=document.getElementById("Box3");
   Img14.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   if(is.ns) Box3=document.getElementById("Box3");
   Img12.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img11_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img12=document.getElementById("Img12");
   if(is.ns) Box3=document.getElementById("Box3");
   Img12.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img9_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   Img10.Hide();
   //LMSOFT End Event-Action

}


function Img9_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=document.getElementById("Img10");
   if(is.ns) Box3=document.getElementById("Box3");
   Img10.Show();
   Box3.Show();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img8_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Box3=document.getElementById("Box3");
   Img7.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img8_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Box3=document.getElementById("Box3");
   Img7.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img5_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Box3=document.getElementById("Box3");
   Img6.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img5_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Box3=document.getElementById("Box3");
   Img6.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   Img4.Hide();
   Box3.Hide();
   //LMSOFT End Event-Action

}


function Img2_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=document.getElementById("Img4");
   if(is.ns) Box3=document.getElementById("Box3");
   Img4.Show();
   Box3.Show();
   //LMSOFT End Event-Action

}


function Img3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text2=document.getElementById("Text2");
   Text2.Hide();
   //LMSOFT End Event-Action

}


function Img3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text2=document.getElementById("Text2");
   Text2.Show();
   //LMSOFT End Event-Action

}