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
LMObjects[objindex++] = LMButton("But11",1,1,0,null,0,null,new LMBranchEx("0","./lafrontiere.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,new LMBranchEx("0","./la-maison-du-tourisme.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But8",1,1,0,null,0,null,new LMBranchEx("0","./horaires-maison-du-tourisme.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,new LMBranchEx("0","./index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMButton("But7",1,1,0,null,0,null,new LMBranchEx("0","./tourismeindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But13",1,1,0,null,0,null,new LMBranchEx("0","./patrimoineindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But10",1,1,0,null,0,null,null,null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But18",1,1,0,null,0,null,new LMBranchEx("0","./publicationindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But23",1,1,0,null,0,null,new LMBranchEx("0","./les-liens.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img1",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img8",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img8=FindTagFromId('Img8');
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",0,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img6",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img6=FindTagFromId('Img6');
LMObjects[objindex++] = LMImage("Img7",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","https://www.museedestapis.fr/",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,new LMBranchEx("0","https://www.editions-la-salicaire.com/",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_blank"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img9",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img9=FindTagFromId('Img9');
LMObjects[objindex++] = LMImage("Img10",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMImage("Img5",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,new LMBranchEx("0","https://photos.google.com/u/0/share/AF1QipPTFAsDTsZysj4dLQN-SyexEHEhoWAOERkY_PebQkdjXoXwR3MQskj9p6RDdPImXA?hl=fr&key=LTR4aHBocDdnZlNRLWRLVTlIUUdPUm9lY0NrX0pR",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"Inner"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img11",0,1,0,null,0,null,null,null,null,0);
if(is.ns) Img11=FindTagFromId('Img11');
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ef,0x3fd,0x79);
LMObjectAnimate();

function But3_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   if(is.ns) Img11=document.getElementById("Img11");
   Img8.Hide();
   Img11.Hide();
   //LMSOFT End Event-Action

}


function But3_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=document.getElementById("Img8");
   if(is.ns) Img11=document.getElementById("Img11");
   Img8.Show();
   Img11.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=document.getElementById("Img9");
   if(is.ns) Img10=document.getElementById("Img10");
   Img9.Show();
   Img10.Show();
   //LMSOFT End Event-Action

}


function But2_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=document.getElementById("Img9");
   if(is.ns) Img10=document.getElementById("Img10");
   Img9.Hide();
   Img10.Hide();
   //LMSOFT End Event-Action

}


function But1_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Img5=document.getElementById("Img5");
   Img7.Hide();
   Img6.Hide();
   Img5.Hide();
   //LMSOFT End Event-Action

}


function But1_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=document.getElementById("Img7");
   if(is.ns) Img6=document.getElementById("Img6");
   if(is.ns) Img5=document.getElementById("Img5");
   Img7.Show();
   Img6.Show();
   Img5.Show();
   //LMSOFT End Event-Action

}


function Img4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj1=document.getElementById("Obj1");
   Obj1.Show();
   //LMSOFT End Event-Action

}


function Img4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Obj1=document.getElementById("Obj1");
   Obj1.Hide();
   //LMSOFT End Event-Action

}


function But11_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   if(is.ns) Img8=document.getElementById("Img8");
   Img1.Hide();
   Img8.Hide();
   //LMSOFT End Event-Action

}


function But11_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=document.getElementById("Img1");
   if(is.ns) Img8=document.getElementById("Img8");
   Img1.Show();
   Img8.Show();
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


function But10_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) But11=document.getElementById("But11");
   But11.Show();
   //LMSOFT End Event-Action

}