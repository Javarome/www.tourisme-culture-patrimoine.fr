//LMSOFT Web Creator Pro, Version:7.2.0.7
//LMSOFT Kernel 10

var Form2_formv1="00140015009100930082008c004f00180080009b0091007700150019001e0089000f0014001700c600930082008f004c001a00800098009200700015001a001c008e000f0017001600920093008000d8004c001a0083009e009200700016001a"
var Form2_formv2=""
var Form2_formv3="00140015009400c20082008c004a001f0080009b0094007100150019001b00db000f0014001700c600930082008a004e001a0080009d009300700015001e001d008e000f001300110092009300840085004c001a00870098009200700012001d001d008e0009001100150092009100d7008c004c001c0087009b0092007600460019001d0088005900140015009500970082008c004a00130080009b00940025001500190019008e000f00140012009500930082008a004d001a0080009d00c700700015001f001c008e000f0012001100920093008400da004c001a008600cd009200700017004c001d008e000900120015009200940080"
var Form2_formv4="00140015009100930082008c004f00180080009b0091007700150019001e0089000f0014001700c600930082008f004c001a00800098009200700015001a001c008e000f0017001600920093008000d8004c001a0083009e009200700016001a"
var Form2_formv5="00140015009100910082008c004f001e0080009b0091007100150019001e008b000f0014001700c600930082008f0044001a00800098009b00700015001a001b008e000f0017001d00920093008000d8004c001a0083009d0092007000160018"
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
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMDiv("But1",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/horaires-maison-du-tourisme.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But2",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/les-liens.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But3",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/la-maison-du-tourisme.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But4",1,1,0,null,0,null,new LMBranchEx("0","./tourismeindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But5",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/cultureindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But6",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/patrimoineindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
LMObjects[objindex++] = LMDiv("But7",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/publicationindex.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
FormBindSubmitReset('Form2_form');
LMObjects[objindex++] = LMInputSimpleField('Form2_Label_0','Form2_form',1,1,0,null,0,null,false,false,false,false);
LMObjects[objindex++] = LMInputSimpleField('Form2_Label_1','Form2_form',1,1,0,null,0,null,false,false,false,false);
LMObjects[objindex++] = LMInputSimpleField('Form2_Label_2','Form2_form',1,1,0,null,0,null,false,false,false,false);
LMObjects[objindex++] = LMDiv("But8",1,1,0,null,0,null,new LMBranchEx("0","http://www.tourisme-culture-patrimoine.fr/Webnouveauxpanneaux/histpatri.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,1);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3ee,0x3fd,0x87);
LMObjectAnimate();

InitFormValidationResources(language);
InitFormValidation();
jQuery18("#Form2").validationEngine({autoPositionUpdate:true,autoHidePrompt:true});
$('#Form2 .datepicker').datepicker($.datepicker.regional[ $('html').attr('lang') ]);
