/*!CK:2567043699!*//*1402977165,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/ZjWx"]); }

__d("ContainerDimensionsUtils",["Event","Style","Vector","EagleEye","DOM"],function(a,b,c,d,e,f,g,h,i,j,k){f.onDimensionsReady=function(l,m){var n=k.scry(l,'img.img'),o=n.length;if(o){var p=function(){--o;if(!o)setTimeout(m,0);};n.forEach(function(q){if(q.complete){p();}else g.listen(q,{load:p,error:p,abort:p});});}else setTimeout(m,0);};f.log=function(l,m,n,o){var p=l.parentNode;if(p)f.onDimensionsReady(p,function(){var q=i.getElementDimensions(p),r=i.getElementPosition(p),s=parseInt(h.get(p,'marginBottom'),10);j.log(m,[o,q.x,q.y+s,r.x,r.y,n]);});};},null);
__d("legacy:mobile-hub",["MobileHub"],function(a,b,c,d){a.MobileHub=b('MobileHub');},3);