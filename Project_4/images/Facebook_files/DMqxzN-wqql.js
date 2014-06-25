/*!CK:1693945225!*//*1401157984,178146385*/

if (self.CavalryLogger) { CavalryLogger.start_js(["T3+Qs"]); }

__d("ComposerXPrivacyWidgetTags",["Arbiter","CurrentUser","PrivacySelectorBase","copyProperties","getObjectValues"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m){"use strict";var n=m.getComponent('mainprivacywidget');this._privacyWidget=n.element;this._privacyWidgetInstance=n.instance&&n.instance.getInstance().getInstance();this._mentionsInput=m.getComponent('maininput').instance;this._placeTypeahead=m.getComponent('placetagger')?m.getComponent('placetagger').instance:null;this._friendsTokenizer=m.getComponent('withtagger')?m.getComponent('withtagger').instance:null;this._init();}l.prototype._init=function(){"use strict";this._subscriptions=[this._mentionsInput.subscribe('update',this._informChangedTags.bind(this))];if(this._placeTypeahead){this._subscriptions.push(this._placeTypeahead.subscribe('select',this._onPlaceSelect.bind(this)));this._subscriptions.push(g.subscribe('Events/autoSuggestionSelected',this._onPlaceSelect.bind(this)));this._subscriptions.push(this._placeTypeahead.subscribe('unselect',this._onPlaceUnselect.bind(this)));}if(this._friendsTokenizer)this._subscriptions.push(this._friendsTokenizer.subscribe(['addToken','removeToken'],this._informChangedTags.bind(this)));};l.prototype._getTaggedNamesForAudience=function(){"use strict";var m={},n=this._mentionsInput.getMentions();for(var o in n)if(n[o].type=='user')m[o]=n[o].text;if(this._friendsTokenizer)this._friendsTokenizer.getTokens().map(function(p){m[p.getValue()]=p.getText();});delete m[h.getID()];return k(m);};l.prototype._onPlaceSelect=function(m,n){"use strict";this._placeType=n.selected.place_type;this._informChangedTags();};l.prototype._onPlaceUnselect=function(m,n){"use strict";this._placeType=null;this._informChangedTags();};l.prototype._informChangedTags=function(){"use strict";var m=[];if(this._friendsTokenizer)m=this._friendsTokenizer.getTokens();var n=null;if(this._placeType==='Event')n=this._placeTypeahead.getCore().getHiddenValue();var o={withTags:m,mention:this._mentionsInput.getMentions(),eventTag:n};g.inform('Composer/changedtags',o);if(this._privacyWidgetInstance&&this._privacyWidgetInstance instanceof i)this._privacyWidgetInstance.informTagsChanged(o);};l.prototype.destroy=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};j(l.prototype,{_subscriptions:null,_placeType:null});e.exports=l;},null);
__d("XAggregatedLinkComposerLoggingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/composer\/aggregated_link\/logging\/",{event_type:{type:"Enum",required:true},external_url:{type:"String",required:true}});},null);
__d("ComposerXAggregatedLinkAttachment",["AsyncRequest","DOMQuery","Event","ComposerXAttachment","ComposerXPrivacyWidgetTags","XAggregatedLinkComposerLoggingControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l){for(var m in j)if(j.hasOwnProperty(m))o[m]=j[m];var n=j===null?null:j.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=j;function o(p,q){"use strict";j.call(this);this._root=p;this._url=q;this._privacyWidgetTags=null;this._focusListener=null;}o.prototype.getRoot=function(){"use strict";return this._root;};o.prototype.initWithComponents=function(){"use strict";this._privacyWidgetTags=new k(this);var p=h.find(this.getComponent('maininput').element,'textarea.input');this._focusListener=i.listen(p,'focus',function(){var q=(new l()).setEnum('event_type','open').setString('external_url',this._url).getURI();new g(q).send();}.bind(this));};o.prototype.cleanup=function(){"use strict";if(this._privacyWidgetTags){this._privacyWidgetTags.destroy();this._privacyWidgetTags=null;}if(this._focusListener){this._focusListener.remove();this._focusListener=null;}};o.prototype.canSwitchAway=function(){"use strict";return false;};e.exports=o;},null);
__d("InlineEditor",["DOM","UserAgent","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(k,l,m,n,o,p){this._name=l;this._obj=k;this._root=m;this._target=n;this._more_than_meets_the_eye=true;this._original_value=k.firstChild.nodeValue;this._is_textarea=o;this._max_edit_length=p;this._edit=g.create(o?'textarea':'input',{value:this._original_value,className:'inputtext inline_edit'});if(this._max_edit_length)this._edit.setAttribute('maxLength',p);var q=this._edit;k.parentNode.insertBefore(q,k);k.parentNode.removeChild(k);q.onblur=this._onblur.bind(this);q.onchange=this._onchange.bind(this);q.onkeypress=function(event){return this._onkeypress(event?event:window.event);}.bind(this);q.focus();q.select();}i(j.prototype,{_onkeypress:function(event){switch(event?event.keyCode:0){case 27:if(h.firefox()<3&&this._valueIsWhitespace(this._original_value))this._edit.value=j.FIREFOX_2_BLANK_SUMMARY;this._edit.value=this._original_value;case 13:this._onblur();return false;}},_onblur:function(){if(!this._more_than_meets_the_eye)return false;this._more_than_meets_the_eye=false;this._onchange();var k=this._is_textarea;if(!this._edit.value||this._valueIsWhitespace(this._edit.value))if(h.firefox()<3){this._edit.value=j.FIREFOX_2_BLANK_SUMMARY;}else this._edit.value=j.DEFAULT_BLANK_SUMMARY;var l=this._root,m=this._target,n=this._max_edit_length,o=g.create('a',{href:'#',className:'inline_edit',onmousedown:function(){return false;},onclick:function(){new j(this,name,l,m,k,n);return false;}},this._edit.value);this._edit.parentNode.insertBefore(o,this._edit);this._edit.parentNode.removeChild(this._edit);},_valueIsWhitespace:function(k){return !!!(k.trim().length);},_onchange:function(){if(!this._target){this._target=g.create('input',{name:this._name,type:'hidden'});this._root.appendChild(this._target);}this._target.value=this._edit.value;}});i(j,{FIREFOX_2_BLANK_SUMMARY:'...',DEFAULT_BLANK_SUMMARY:'\u00A0\u00A0\u00A0'});e.exports=j;},null);