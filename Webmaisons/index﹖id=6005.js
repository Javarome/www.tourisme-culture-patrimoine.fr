//LMSOFT Web Creator Pro, Version:7.2.0.7
//LMSOFT Kernel 10

var Form1_formv1="00140015009100930082008c004f00180080009b0091007700150019001e0089000f0014001700c600930082008f004c001a00800098009200700015001a001c008e000f0017001600920093008000d8004c001a0083009e009200700016001a"
var Form1_formv2=""
var Form1_formv3="00140015009500970082008c004a004c0080009b0095007500150019001a008c000f00140013009b00930082008b004f001a0080009d00c600700015001f0018008e000f00160041009200930084008f004c001a0087009e009200700013004a001d008e000800100015009200940087008c004c001d0082009b0092007600100019001d008c005b00140015009400960082008c004b001e0080009b0090002400150019001a008e000f00140013009300930082008b0048001a0080009c009000700015001f0014008e000f0012004100920093008400da004c001a00860092009200700013004c001d008e000900110015009200970082008c004c001c00d6009b0092007700170019001d0088000e00140015009400c60082008c004a001d0080009b0094007500150019001f00db000f00140013009400930082008b004e"
var Form1_formv4="00140015009100930082008c004f00180080009b0091007700150019001e0089000f0014001700c600930082008f004c001a00800098009200700015001a001c008e000f0017001600920093008000d8004c001a0083009e009200700016001a"
var Form1_formv5="00140015009100910082008c004f001e0080009b0091007100150019001e008b000f0014001700c600930082008f0044001a00800098009b00700015001a001b008e000f0017001d00920093008000d8004c001a0083009d0092007000160018"
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
FormBindSubmitReset('Form1_form');
LMObjects[objindex++] = LMInputSimpleField('Form1_Label_0','Form1_form',1,1,0,null,0,null,false,false,false,false);
LMObjects[objindex++] = LMInputSimpleField('Form1_Label_1','Form1_form',1,1,0,null,0,null,false,false,false,false);
LMObjects[objindex++] = LMInputSimpleField('Form1_Label_2','Form1_form',1,1,0,null,0,null,false,false,false,false);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
branchlist = new Array();
LMObjects[objindex++] = LMText("Obj1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But12",1,1,0,null,0,null,new LMBranchEx("0","./la-carte.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/index.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
if(is.ns) Img4=FindTagFromId('Img4');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f3,0x3fb,0x79);
LMObjectAnimate();

InitFormValidationResources(language);
InitFormValidation();
jQuery18("#Form1").validationEngine({autoPositionUpdate:true,autoHidePrompt:true});
$('#Form1 .datepicker').datepicker($.datepicker.regional[ $('html').attr('lang') ]);
function Img4_OnMouseLeave()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Show();
   //LMSOFT End Event-Action

}


function Img4_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Text4=document.getElementById("Text4");
   Text4.Hide();
   //LMSOFT End Event-Action

}