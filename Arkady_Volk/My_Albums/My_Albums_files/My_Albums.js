// Created by iWeb 3.0.4 local-build-20120311

function createMediaStream_id1()
{return IWCreateMediaCollection("http://www.volk.pro/Arkady_Volk/My_Albums/My_Albums_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.volk.pro/Arkady_Volk/My_Albums',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget6'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.volk.pro/Arkady_Volk/My_Albums',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(287,215),new IWSize(287,58),new IWSize(344,288),27,27,0,new IWSize(29,29)),new IWPhotoFrame([IWCreateImage('My_Albums_files/ul.png'),IWCreateImage('My_Albums_files/top.png'),IWCreateImage('My_Albums_files/ur.png'),IWCreateImage('My_Albums_files/right.png'),IWCreateImage('My_Albums_files/lr.png'),IWCreateImage('My_Albums_files/bottom.png'),IWCreateImage('My_Albums_files/ll.png'),IWCreateImage('My_Albums_files/left.png')],null,0,0.500000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget6',null,'widget7',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:7,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.500000}),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,0.0000),color:'#3a060f',opacity:1.000000}),shadow_2:new IWShadow({blurRadius:7,offset:new IWPoint(1.0000,-0.0000),color:'#3a060f',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('My_Albums_files/My_AlbumsMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
