// Created by iWeb 3.0.1 local-build-20100615

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,97),url:'Courses_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Courses_files/stroke_1.png'},{rect:new IWRect(2,-2,138,4),url:'Courses_files/stroke_2.png'},{rect:new IWRect(140,-2,4,4),url:'Courses_files/stroke_3.png'},{rect:new IWRect(140,2,4,97),url:'Courses_files/stroke_4.png'},{rect:new IWRect(140,99,4,4),url:'Courses_files/stroke_5.png'},{rect:new IWRect(2,99,138,4),url:'Courses_files/stroke_6.png'},{rect:new IWRect(-2,99,4,4),url:'Courses_files/stroke_7.png'}],new IWSize(142,101))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Courses_files/CoursesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
