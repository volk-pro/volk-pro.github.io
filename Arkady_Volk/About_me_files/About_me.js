// Created by iWeb 3.0.4 local-build-20120311

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:7,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,660),url:'About_me_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'About_me_files/stroke_1.png'},{rect:new IWRect(2,-2,435,2),url:'About_me_files/stroke_2.png'},{rect:new IWRect(437,-2,5,2),url:'About_me_files/stroke_3.png'},{rect:new IWRect(437,0,5,660),url:'About_me_files/stroke_4.png'},{rect:new IWRect(437,660,5,4),url:'About_me_files/stroke_5.png'},{rect:new IWRect(2,660,435,4),url:'About_me_files/stroke_6.png'},{rect:new IWRect(-2,660,4,4),url:'About_me_files/stroke_7.png'}],new IWSize(440,661)),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,-0.0000),color:'#3a060f',opacity:1.000000}),reflection_0:new IWReflection({opacity:0.50,offset:3.00}),shadow_0:new IWShadow({blurRadius:7,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('About_me_files/About_meMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
