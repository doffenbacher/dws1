/*!CK:193943130!*//*1402976191,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UVWJq"]); }

__d("CensorLogger",["Event","Banzai","DOM","debounce","ge","Keys"],function(a,b,c,d,e,f,g,h,i,j,k){var l=10*60*1000,m=b('Keys').RETURN,n=function(q){var r=(q.target||q.srcElement).id,s=(q.target||q.srcElement).value.trim().length,t=o.tracker(r);if(!t)return;if(s>5&&!t.submitted){if(t.type=='comment'&&t.parent_fbid=='unknown'){if(!o.syncTrackerWithForm(r))o.snowliftSync(r);t=o.tracker(r);}h.post('censorlogger',{impid:t.impid,clearcounter:t.clearcounter,instrument:t.type,elementid:r,parent_fbid:(t.parent_fbid=='unknown'?null:t.parent_fbid),version:"original"},h.VITAL);o.setSubmitted(r,true);}else if(s===0&&t.submitted&&q.which!=m){o.debouncers[r]=p(r);o.debouncers[r]();}else if(s>0&&t.submitted)if(o.debouncers[r])o.debouncers[r].reset();},o={init:function(q){this.impressionID=q;for(var r in this.trackedElements)if(!k(r))this.stopTracking(r);for(var s in this.unmatchedForms)if(!k(s))delete this.unmatchedForms[s];},trackElement:function(q,r,s){var t,u,v;this.debouncers=this.debouncers||{};this.trackedElements=this.trackedElements||{};this.unmatchedForms=this.unmatchedForms||{};r=r.toLowerCase();if(r=='composer'){t=(s?i.find(q,'div.uiMetaComposerMessageBox textarea.input'):i.find(q,'div.uiComposerMessageBox textarea.input'));u=i.find(q,'form.attachmentForm');var w=i.scry(q,'input[name="xhpc_targetid"]')[0];if(w)v=w.value;}else if(r=='comment')t=i.find(q,'div.commentBox textarea.textInput');if(t==null)return;var x=i.getID(t);if(u)this.addJoinTableInfoToForm(u,i.getID(t));g.listen(t,'keyup',n.bind(this));this.trackedElements[x]={submitted:false,clearcounter:0,type:r,impid:this.impressionID,parent_fbid:v||'unknown',formID:(u?i.getID(u):null)};if(r=='comment')this.syncTrackerWithForm(x);},registerForm:function(q,r){this.unmatchedForms=this.unmatchedForms||{};this.unmatchedForms[q]=r;},syncTrackerWithForm:function(q){for(var r in this.unmatchedForms){var s=k(r);if(s){var t=i.scry(s,'div.commentBox textarea.textInput')[0];if(t){var u=i.getID(t);if(u&&u==q){this.trackedElements[q].parent_fbid=this.unmatchedForms[r];this.trackedElements[q].formID=r;this.addJoinTableInfoToForm(s,q);delete this.unmatchedForms[r];return true;}}}}return false;},snowliftSync:function(q){var r,s=k(q);if(s&&(r=i.scry(s,'^.fbPhotosSnowboxFeedbackInput')[0])){var t=i.find(r,'input[name="feedback_params"]'),u=JSON.parse(t.value).target_fbid;this.trackedElements[q].parent_fbid=u;this.trackedElements[q].formID=r.id;this.addJoinTableInfoToForm(r,q);return true;}return false;},stopTracking:function(q){delete this.trackedElements[q];if(this.debouncers[q]){this.debouncers[q].reset();delete this.debouncers[q];}},tracker:function(q){return this.trackedElements[q];},getSubmitted:function(q){return (this.trackedElements[q]?this.trackedElements[q].submitted:false);},setSubmitted:function(q,r){if(this.trackedElements[q])this.trackedElements[q].submitted=r;},incrementClearCounter:function(q){if(!this.tracker(q))return;this.trackedElements[q].clearcounter++;this.trackedElements[q].submitted=false;var r=i.scry(k(this.trackedElements[q].formID),'input[name="clp"]')[0];if(r)r.value=JSON.stringify({censorlogger_impid:this.trackedElements[q].impid,clearcounter:this.trackedElements[q].clearcounter,element_id:q});},addJoinTableInfoToForm:function(q,r){i.prependContent(q,i.create('input',{type:'hidden',name:'clp',value:JSON.stringify({censorlogger_impid:this.impressionID,clearcounter:0,element_id:r,version:"original"})}));}},p=function(q){return j(function(){o.incrementClearCounter(q);},l,o);};e.exports=o;},null);
__d("legacy:ScrollAwareDOM",["ScrollAwareDOM"],function(a,b,c,d){a.ScrollAwareDOM=b('ScrollAwareDOM');},3);
__d("ManagedError",[],function(a,b,c,d,e,f){function g(h,i){Error.prototype.constructor.call(this,h);this.message=h;this.innerError=i;}g.prototype=new Error();g.prototype.constructor=g;e.exports=g;},null);
__d("FeedTrackingAsync",["Arbiter","collectDataAttributes","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(){g.subscribe('AsyncRequest/send',function(k,l){var m=l.request,n=m.getRelativeTo();if(n){var o=m.getData(),p=h(n,['ft']);if(Object.keys(p.ft).length)i(o,p);}});}e.exports={init:j};},null);
__d("XProfilePhotoActionLogControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/profile_photo\/logger\/",{event:{type:"Enum",required:true},source:{type:"Enum",required:true},method:{type:"Enum",required:true}});},null);
__d("ProfilePhotoActionLogger",["AsyncSignal","XProfilePhotoActionLogControllerURIBuilder"],function(a,b,c,d,e,f,g,h){var i={EVENT_SELECT_METHOD:'select_method',SOURCE_SUGGESTIONS:'suggestions',SOURCE_TIMELINE:'timeline',SOURCE_NUX:'nux',METHOD_EXISTING:'existing',METHOD_UPLOAD:'upload',log:function(j,k,l){new g((new h()).setEnum('event',j).setEnum('source',k).setEnum('method',l).getURI().toString()).send();}};e.exports=i;},null);
__d("TimelineProfilePicConfig",["fbt"],function(a,b,c,d,e,f,g){var h={loading:'timeline/profile_pic/loading',success:'timeline/profile_pic/success',leavingMessage:"Your profile picture is still uploading, are you sure you want to leave?"};e.exports=h;},null);
__d("AssertionError",["ManagedError"],function(a,b,c,d,e,f,g){function h(i){g.prototype.constructor.apply(this,arguments);}h.prototype=new g();h.prototype.constructor=h;e.exports=h;},null);
__d("Assert",["AssertionError","sprintf"],function(a,b,c,d,e,f,g,h){function i(n,o){if(typeof n!=='boolean'||!n)throw new g(o);return n;}function j(n,o,p){var q;if(o===undefined){q='undefined';}else if(o===null){q='null';}else{var r=Object.prototype.toString.call(o);q=/\s(\w*)/.exec(r)[1].toLowerCase();}i(n.indexOf(q)!==-1,p||h('Expression is of type %s, not %s',q,n));return o;}function k(n,o,p){i(o instanceof n,p||'Expression not instance of type');return o;}function l(n,o){m['is'+n]=o;m['maybe'+n]=function(p,q){if(p!=null)o(p,q);};}var m={isInstanceOf:k,isTrue:i,isTruthy:function(n,o){return i(!!n,o);},type:j,define:function(n,o){n=n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();l(n,function(p,q){i(o(p),q);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(n){l(n,j.bind(null,n.toLowerCase()));});e.exports=m;},null);
__d("FbFeedCommentUFIScroller",["Arbiter","DOMScroll","containsNode","ge"],function(a,b,c,d,e,f,g,h,i,j){g.subscribe('comment/focus',function(k,l){var m=l.element,n=j('content');if(n&&i(n,m))h.ensureVisible(m,null,60,250);});e.exports={};},null);
__d("MenuStaticItem",["DOM","MenuItemBase","React","copyProperties","cx","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){for(var m in h)if(h.hasOwnProperty(m))o[m]=h[m];var n=h===null?null:h.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=h;function o(p){"use strict";h.call(this);this._data=p;}o.prototype._renderItemContent=function(){"use strict";var p=g.create('span',{className:"_54nc _54ah"});if(this._data.reactChildren){i.renderComponent(i.DOM.span({className:"_54nh"},this._data.reactChildren),p);}else g.setContent(p,g.create('span',{className:"_54nh"},this._data.markup));return p;};j(o.prototype,{handleClick:l});e.exports=o;},null);
__d("ContextualLayerPositionClassOnContext",["CSS","copyProperties","cx"],function(a,b,c,d,e,f,g,h,i){function j(l){"use strict";this._layer=l;}j.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe('reposition',this._updateClassName.bind(this));if(this._layer.isShown())this._updateClassName();};j.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;if(this._prevClassName){g.removeClass(this._layer.getContext(),this._prevClassName);this._prevClassName=null;}};j.prototype._updateClassName=function(l,m){"use strict";var n=this._layer.getContext(),o=k(m);if(this._prevClassName){if(this._prevClassName===o)return;g.removeClass(n,this._prevClassName);}g.addClass(n,o);this._prevClassName=o;};function k(l){var m=l.getAlignment(),n=l.getPosition();if(n==='below'){if(m==='left'){return "_nk";}else if(m==='right'){return "_nl";}else return "_nm";}else if(n==='above'){if(m==='left'){return "_nn";}else if(m==='right'){return "_no";}else return "_np";}else if(n==='left'){return "_nq";}else return "_nr";}h(j.prototype,{_subscription:null,_prevClassName:null});e.exports=j;},null);
__d("Hovercard",["AccessibleLayer","Arbiter","AsyncRequest","ContextualDialog","ContextualDialogXUITheme","ContextualThing","DOM","Event","JSXDOM","LayerAutoFocus","Parent","Rect","Style","Vector","clickRefAction","csx","cx","tx","userAction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){var z={},aa={},ba=null,ca=null,da=null,ea=null,fa=150,ga=700,ha=1000,ia=250,ja=50,ka=null,la=null,ma=null,na=null;function oa(event){var fb=q.byTag(event.getTarget(),'a');eb.processNode(fb)&&event.stop();}function pa(fb){ca=fb;if(!qa(fb)){var gb;if(!fb||!(gb=ra(fb))||cb(fb)){aa.moveToken&&aa.moveToken.remove();aa={};return false;}if(aa.node!=fb){aa.moveToken&&aa.moveToken.remove();aa={node:fb,endpoint:gb,pos:null};}}return true;}function qa(fb){return fb&&ba&&aa.node==fb;}function ra(fb){return fb.getAttribute('data-hovercard');}function sa(fb){var gb=m.scry(fb,"^._5jmm ._2orz").length;if(gb)return;var hb=n.listen(fb,'mouseleave',function(){clearTimeout(ka);clearTimeout(la);hb.remove();ca=null;if(!eb.contains(fb))eb.hide();});if(!aa.moveToken)aa.moveToken=n.listen(fb,'mousemove',function(event){aa.pos=t.getEventPosition(event);});clearTimeout(ka);clearTimeout(la);clearTimeout(na);var ib=fa,jb=ba?ia:ga;if(fb.getAttribute('data-hovercard-instant'))ib=jb=ja;ka=setTimeout(xa.bind(null,fb),ib);la=setTimeout(ta.bind(null,fb),jb);}function ta(fb,gb){if(aa.node!=fb)return;var hb=z[ra(fb)];if(hb){va(hb);}else if(gb){va(ab());}else{var ib=ba?ia:ga;ma=setTimeout(ta.bind(null,fb,true),ha-ib);}}function ua(){eb.hide(true);clearTimeout(la);}function va(fb){var gb=aa.node,hb=ba,ib=hb!=gb;if(ea){var jb=ea.getContentRoot();if(!l.containsIncludingLayers(jb,gb))ea.hide();}if(!m.contains(document.body,gb)){eb.hide(true);return;}ba=gb;ea=fb;fb.setContextWithBounds(gb,wa(gb)).show();if(ib)setTimeout(function(){u('himp',ba,null,'FORCE',{ft:{evt:39}});y('hovercard',ba).uai('show');},0);}function wa(fb){var gb=aa.pos,hb=fb.getClientRects();if(!gb||hb.length===0)return r.getElementBounds(fb);var ib,jb=false;for(var kb=0;kb<hb.length;kb++){var lb=new r(Math.round(hb[kb].top),Math.round(hb[kb].right),Math.round(hb[kb].bottom),Math.round(hb[kb].left),'viewport').convertTo('document'),mb=lb.getPositionVector(),nb=mb.add(lb.getDimensionVector());if(!ib||(mb.x<=ib.l&&mb.y>ib.t)){if(jb)break;ib=new r(mb.y,nb.x,nb.y,mb.x,'document');}else{ib.t=Math.min(ib.t,mb.y);ib.b=Math.max(ib.b,nb.y);ib.r=nb.x;}if(lb.contains(gb))jb=true;}return ib;}function xa(fb){if(fb.id&&z[fb.id]!=null)return;var gb=ra(fb);if(z[gb]!=null)return;ya(gb);var hb=function(){eb.dirty(gb);ua();};new i(gb).setData({endpoint:gb}).setMethod('GET').setReadOnly(true).setErrorHandler(hb).setTransportErrorHandler(hb).send();}function ya(fb){z[fb]=false;}function za(fb){var gb=aa.node.getAttribute('data-hovercard-offset-x')||0;fb.setOffsetX(parseInt(gb,10));var hb=aa.node.getAttribute('data-hovercard-offset-y')||0;fb.setOffsetY(parseInt(hb,10));}var ab=function(){if(!da){da=new j({width:275,theme:k},o.div({className:"_7lk"},"Loading..."));da.disableBehavior(g).disableBehavior(p);bb(da);}var fb=aa.node.getAttribute('data-hovercard-position');da.setPosition(fb);za(da);return da;};function bb(fb){var gb=[fb.subscribe('mouseenter',function(){clearTimeout(na);ca=aa.node;}),fb.subscribe('mouseleave',function(){fb.hide();ca=null;}),fb.subscribe('destroy',function(){while(gb.length)gb.pop().unsubscribe();gb=null;})];}function cb(fb){return (q.byClass(fb,"_7lu")!==null);}var db=true,eb={hide:function(fb){if(!ba)return;if(fb){if(ea)ea.hide();ca=null;ba=null;ea=null;}else{var gb=aa.node.getAttribute('data-hovercard-instant')?ja:ia;na=setTimeout(eb.hide.bind(null,true),gb);}},setDialog:function(fb,gb){gb.disableBehavior(g).disableBehavior(p);z[fb]=gb;bb(gb);if(aa.endpoint==fb&&ca==aa.node){ab().hide();var hb=aa.node.getAttribute('data-hovercard-position');hb&&gb.setPosition(hb);za(gb);va(gb);}},getDialog:function(fb){return z[fb];},contains:function(fb){if(ea)return l.containsIncludingLayers(ea.getContentRoot(),fb);return false;},dirty:function(fb){var gb=z[fb];if(gb){gb.destroy();delete z[fb];}},dirtyAll:function(){for(var fb in z){var gb=z[fb];gb&&eb.dirty(fb);}h.inform('Hovercard/dirty');},processNode:function(fb){if(fb&&pa(fb)){sa(fb);return true;}return false;},setDirtyAllOnPageTransition:function(fb){db=fb;}};(function(){n.listen(document.documentElement,'mouseover',oa);n.listen(window,'scroll',function(){if(ba&&s.isFixed(ba))eb.hide(true);});h.subscribe('page_transition',function(){ua();db&&eb.dirtyAll();},h.SUBSCRIBE_NEW);})();e.exports=eb;},null);
__d("VideoPlayerFlashApi",[],function(a,b,c,d,e,f){function g(i){return [].slice.call(i);}function h(i,j){"use strict";this.$VideoPlayerFlashApi0=i;this.$VideoPlayerFlashApi1=j;}h.prototype.getDOMElement=function(){"use strict";return this.$VideoPlayerFlashApi0;};h.prototype.pause=function(i){"use strict";this.$VideoPlayerFlashApi2(this.$VideoPlayerFlashApi0.pauseVideo,g(arguments));};h.prototype.play=function(i){"use strict";this.$VideoPlayerFlashApi2(this.$VideoPlayerFlashApi0.playVideo,g(arguments),true);};h.prototype.seek=function(i){"use strict";this.$VideoPlayerFlashApi2(this.$VideoPlayerFlashApi0.seekVideo,g(arguments));};h.prototype.setScriptPath=function(i){"use strict";this.$VideoPlayerFlashApi2(this.$VideoPlayerFlashApi0.setScriptPath,g(arguments));};h.prototype.setFTData=function(i){"use strict";this.$VideoPlayerFlashApi2(this.$VideoPlayerFlashApi0.setFTData,g(arguments));};h.prototype.switchVideo=function(i){"use strict";this.$VideoPlayerFlashApi2(this.$VideoPlayerFlashApi0.switchVideo,g(arguments));};h.prototype.unmute=function(){"use strict";this.$VideoPlayerFlashApi2(this.$VideoPlayerFlashApi0.unmuteVideo,g(arguments));};h.prototype.$VideoPlayerFlashApi2=function(i,j,k){"use strict";try{i.apply(this.$VideoPlayerFlashApi0,j);}catch(l){this.$VideoPlayerFlashApi1&&this.$VideoPlayerFlashApi1(l,k);}};e.exports=h;},null);
__d("VideoPlayerHTML5Api",["Arbiter","Event","Run","SubscriptionsHandler"],function(a,b,c,d,e,f,g,h,i,j){function k(l){"use strict";this.$VideoPlayerHTML5Api0=l;this.$VideoPlayerHTML5Api1=l.id;this.$VideoPlayerHTML5Api2=new j();i.onLeave(function(){return this.$VideoPlayerHTML5Api2.release();}.bind(this));this.$VideoPlayerHTML5Api3();}k.prototype.getDOMElement=function(){"use strict";return this.$VideoPlayerHTML5Api0;};k.prototype.pause=function(l){"use strict";this.$VideoPlayerHTML5Api0.pause();};k.prototype.play=function(l){"use strict";this.$VideoPlayerHTML5Api0.play();};k.prototype.seek=function(l){"use strict";};k.prototype.setFTData=function(l){"use strict";};k.prototype.switchVideo=function(l){"use strict";};k.prototype.unmute=function(){"use strict";this.$VideoPlayerHTML5Api0.muted=false;};k.prototype.$VideoPlayerHTML5Api3=function(){"use strict";this.$VideoPlayerHTML5Api2.addSubscriptions(h.listen(this.$VideoPlayerHTML5Api0,'playing',function(){this.$VideoPlayerHTML5Api4('flash/beginPlayback');}.bind(this)),h.listen(this.$VideoPlayerHTML5Api0,'ended',function(){this.$VideoPlayerHTML5Api4('flash/finishPlayback');}.bind(this)),h.listen(this.$VideoPlayerHTML5Api0,'pause',function(){this.$VideoPlayerHTML5Api4('flash/pausePlayback');}.bind(this)));};k.prototype.$VideoPlayerHTML5Api4=function(event){"use strict";g.inform(event,{divID:this.$VideoPlayerHTML5Api1});};e.exports=k;},null);
__d("VideoPlayerApiFactory",["DOMQuery","VideoPlayerFlashApi","VideoPlayerHTML5Api","invariant"],function(a,b,c,d,e,f,g,h,i,j){var k={create:function(l,m){var n=null;if(l.tagName==='VIDEO'){n=new i(l);}else{var o=g.scry(l,'embed');if(!o.length)o=g.scry(l,'object');if(o.length)n=new h(o[0],m);}return n;}};e.exports=k;},null);