// Created by iWeb 3.0.4 local-build-20120311

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.volk.pro/Arkady_Volk/My_Albums/Pages/album_..._files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.volk.pro/Arkady_Volk/My_Albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.volk.pro/Arkady_Volk/My_Albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(184,184),new IWSize(184,34),new IWSize(221,233),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-3,3,8,175),url:'album_..._files/stroke.png'},{rect:new IWRect(-4,-6,9,9),url:'album_..._files/stroke_1.png'},{rect:new IWRect(5,-3,175,6),url:'album_..._files/stroke_2.png'},{rect:new IWRect(180,-6,11,9),url:'album_..._files/stroke_3.png'},{rect:new IWRect(180,3,11,175),url:'album_..._files/stroke_4.png'},{rect:new IWRect(180,178,6,11),url:'album_..._files/stroke_5.png'},{rect:new IWRect(5,178,175,7),url:'album_..._files/stroke_6.png'},{rect:new IWRect(-6,178,11,11),url:'album_..._files/stroke_7.png'}],new IWSize(184,184)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:7,offset:new IWPoint(7.0000,-0.0000),color:'#3a060f',opacity:0.500000}),shadow_0:new IWShadow({blurRadius:7,offset:new IWPoint(7.0000,-0.0000),color:'#3a060f',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('album_..._files/album_...Moz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
