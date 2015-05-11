// Created by iWeb 3.0.4 local-build-20120311

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:3.00}),shadow_2:new IWShadow({blurRadius:7,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000}),shadow_3:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,0.0000),color:'#3a060f',opacity:1.000000}),shadow_5:new IWShadow({blurRadius:7,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,-0.0000),color:'#3a060f',opacity:1.000000}),shadow_0:new IWShadow({blurRadius:7,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,390),url:'Welcome_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(2,-2,290,2),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(292,-2,5,2),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(292,0,6,390),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(292,390,5,3),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(2,390,290,3),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-2,390,4,3),url:'Welcome_files/stroke_7.png'}],new IWSize(295,391)),shadow_4:new IWShadow({blurRadius:2,offset:new IWPoint(2.0000,0.0000),color:'#3a060f',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
