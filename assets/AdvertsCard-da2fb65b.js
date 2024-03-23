import{m as Ne,b as Re,R as he,r as N,i as Ie,s as j,j as c,a as Me,c as Le,d as ze}from"./index-7370f056.js";function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ie.apply(this,arguments)}function We(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Be(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var De=function(){function e(t){var n=this;this._insertTag=function(s){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(s,a),n.tags.push(s)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Be(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var a=We(s);try{a.insertRule(n,a.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),k="-ms-",re="-moz-",u="-webkit-",Se="comm",fe="rule",ue="decl",qe="@import",Ce="@keyframes",Ve="@layer",He=Math.abs,te=String.fromCharCode,Ke=Object.assign;function Ge(e,r){return S(e,0)^45?(((r<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}function ke(e){return e.trim()}function Ue(e,r){return(e=r.exec(e))?e[0]:e}function d(e,r,t){return e.replace(r,t)}function ce(e,r){return e.indexOf(r)}function S(e,r){return e.charCodeAt(r)|0}function H(e,r,t){return e.slice(r,t)}function O(e){return e.length}function de(e){return e.length}function J(e,r){return r.push(e),e}function Ye(e,r){return e.map(r).join("")}var ne=1,D=1,$e=0,P=0,w=0,q="";function se(e,r,t,n,s,a,i){return{value:e,root:r,parent:t,type:n,props:s,children:a,line:ne,column:D,length:i,return:""}}function V(e,r){return Ke(se("",null,null,"",null,null,0),e,{length:-e.length},r)}function Ze(){return w}function Je(){return w=P>0?S(q,--P):0,D--,w===10&&(D=1,ne--),w}function _(){return w=P<$e?S(q,P++):0,D++,w===10&&(D=1,ne++),w}function R(){return S(q,P)}function Q(){return P}function U(e,r){return H(q,e,r)}function K(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pe(e){return ne=D=1,$e=O(q=e),P=0,[]}function Ae(e){return q="",e}function X(e){return ke(U(P-1,oe(e===91?e+2:e===40?e+1:e)))}function Qe(e){for(;(w=R())&&w<33;)_();return K(e)>2||K(w)>3?"":" "}function Xe(e,r){for(;--r&&_()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return U(e,Q()+(r<6&&R()==32&&_()==32))}function oe(e){for(;_();)switch(w){case e:return P;case 34:case 39:e!==34&&e!==39&&oe(w);break;case 40:e===41&&oe(e);break;case 92:_();break}return P}function er(e,r){for(;_()&&e+w!==47+10;)if(e+w===42+42&&R()===47)break;return"/*"+U(r,P-1)+"*"+te(e===47?e:_())}function rr(e){for(;!K(R());)_();return U(e,P)}function tr(e){return Ae(ee("",null,null,null,[""],e=Pe(e),0,[0],e))}function ee(e,r,t,n,s,a,i,o,x){for(var v=0,h=0,p=i,A=0,$=0,g=0,f=1,m=1,b=1,y=0,C="",M=s,T=a,E=n,l=C;m;)switch(g=y,y=_()){case 40:if(g!=108&&S(l,p-1)==58){ce(l+=d(X(y),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:l+=X(y);break;case 9:case 10:case 13:case 32:l+=Qe(g);break;case 92:l+=Xe(Q()-1,7);continue;case 47:switch(R()){case 42:case 47:J(nr(er(_(),Q()),r,t),x);break;default:l+="/"}break;case 123*f:o[v++]=O(l)*b;case 125*f:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+h:b==-1&&(l=d(l,/\f/g,"")),$>0&&O(l)-p&&J($>32?pe(l+";",n,t,p-1):pe(d(l," ","")+";",n,t,p-2),x);break;case 59:l+=";";default:if(J(E=le(l,r,t,v,h,s,o,C,M=[],T=[],p),a),y===123)if(h===0)ee(l,r,E,E,M,a,p,o,T);else switch(A===99&&S(l,3)===110?100:A){case 100:case 108:case 109:case 115:ee(e,E,E,n&&J(le(e,E,E,0,0,s,o,C,s,M=[],p),T),s,T,p,o,n?M:T);break;default:ee(l,E,E,E,[""],T,0,o,T)}}v=h=$=0,f=b=1,C=l="",p=i;break;case 58:p=1+O(l),$=g;default:if(f<1){if(y==123)--f;else if(y==125&&f++==0&&Je()==125)continue}switch(l+=te(y),y*f){case 38:b=h>0?1:(l+="\f",-1);break;case 44:o[v++]=(O(l)-1)*b,b=1;break;case 64:R()===45&&(l+=X(_())),A=R(),h=p=O(C=l+=rr(Q())),y++;break;case 45:g===45&&O(l)==2&&(f=0)}}return a}function le(e,r,t,n,s,a,i,o,x,v,h){for(var p=s-1,A=s===0?a:[""],$=de(A),g=0,f=0,m=0;g<n;++g)for(var b=0,y=H(e,p+1,p=He(f=i[g])),C=e;b<$;++b)(C=ke(f>0?A[b]+" "+y:d(y,/&\f/g,A[b])))&&(x[m++]=C);return se(e,r,t,s===0?fe:o,x,v,h)}function nr(e,r,t){return se(e,r,t,Se,te(Ze()),H(e,2,-2),0)}function pe(e,r,t,n){return se(e,r,t,ue,H(e,0,n),H(e,n+1,-1),n)}function B(e,r){for(var t="",n=de(e),s=0;s<n;s++)t+=r(e[s],s,e,r)||"";return t}function sr(e,r,t,n){switch(e.type){case Ve:if(e.children.length)break;case qe:case ue:return e.return=e.return||e.value;case Se:return"";case Ce:return e.return=e.value+"{"+B(e.children,n)+"}";case fe:e.value=e.props.join(",")}return O(t=B(e.children,n))?e.return=e.value+"{"+t+"}":""}function ar(e){var r=de(e);return function(t,n,s,a){for(var i="",o=0;o<r;o++)i+=e[o](t,n,s,a)||"";return i}}function ir(e){return function(r){r.root||(r=r.return)&&e(r)}}var cr=function(r,t,n){for(var s=0,a=0;s=a,a=R(),s===38&&a===12&&(t[n]=1),!K(a);)_();return U(r,P)},or=function(r,t){var n=-1,s=44;do switch(K(s)){case 0:s===38&&R()===12&&(t[n]=1),r[n]+=cr(P-1,t,n);break;case 2:r[n]+=X(s);break;case 4:if(s===44){r[++n]=R()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=te(s)}while(s=_());return r},fr=function(r,t){return Ae(or(Pe(r),t))},xe=new WeakMap,ur=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,s=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!xe.get(n))&&!s){xe.set(r,!0);for(var a=[],i=fr(t,a),o=n.props,x=0,v=0;x<i.length;x++)for(var h=0;h<o.length;h++,v++)r.props[v]=a[x]?i[x].replace(/&\f/g,o[h]):o[h]+" "+i[x]}}},dr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ee(e,r){switch(Ge(e,r)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+re+e+k+e+e;case 6828:case 4268:return u+e+k+e+e;case 6165:return u+e+k+"flex-"+e+e;case 5187:return u+e+d(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return u+e+k+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return u+e+k+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+k+d(e,"shrink","negative")+e;case 5292:return u+e+k+d(e,"basis","preferred-size")+e;case 6060:return u+"box-"+d(e,"-grow","")+u+e+k+d(e,"grow","positive")+e;case 4554:return u+d(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(e)-1-r>6)switch(S(e,r+1)){case 109:if(S(e,r+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+re+(S(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ce(e,"stretch")?Ee(d(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(S(e,r+1)!==115)break;case 6444:switch(S(e,O(e)-3-(~ce(e,"!important")&&10))){case 107:return d(e,":",":"+u)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(S(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+k+"$2box$3")+e}break;case 5936:switch(S(e,r+11)){case 114:return u+e+k+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+k+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+k+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+k+e+e}return e}var hr=function(r,t,n,s){if(r.length>-1&&!r.return)switch(r.type){case ue:r.return=Ee(r.value,r.length);break;case Ce:return B([V(r,{value:d(r.value,"@","@"+u)})],s);case fe:if(r.length)return Ye(r.props,function(a){switch(Ue(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([V(r,{props:[d(a,/:(read-\w+)/,":"+re+"$1")]})],s);case"::placeholder":return B([V(r,{props:[d(a,/:(plac\w+)/,":"+u+"input-$1")]}),V(r,{props:[d(a,/:(plac\w+)/,":"+re+"$1")]}),V(r,{props:[d(a,/:(plac\w+)/,k+"input-$1")]})],s)}return""})}},lr=[hr],pr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(f){var m=f.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var s=r.stylisPlugins||lr,a={},i,o=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(f){for(var m=f.getAttribute("data-emotion").split(" "),b=1;b<m.length;b++)a[m[b]]=!0;o.push(f)});var x,v=[ur,dr];{var h,p=[sr,ir(function(f){h.insert(f)})],A=ar(v.concat(s,p)),$=function(m){return B(tr(m),A)};x=function(m,b,y,C){h=y,$(m?m+"{"+b.styles+"}":b.styles),C&&(g.inserted[b.name]=!0)}}var g={key:t,sheet:new De({key:t,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:a,registered:{},insert:x};return g.sheet.hydrate(o),g},xr=!0;function gr(e,r,t){var n="";return t.split(" ").forEach(function(s){e[s]!==void 0?r.push(e[s]+";"):n+=s+" "}),n}var _e=function(r,t,n){var s=r.key+"-"+t.name;(n===!1||xr===!1)&&r.registered[s]===void 0&&(r.registered[s]=t.styles)},mr=function(r,t,n){_e(r,t,n);var s=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var a=t;do r.insert(t===a?"."+s:"",a,r.sheet,!0),a=a.next;while(a!==void 0)}};function br(e){for(var r=0,t,n=0,s=e.length;s>=4;++n,s-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var vr=/[A-Z]|^ms/g,yr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Te=function(r){return r.charCodeAt(1)===45},ge=function(r){return r!=null&&typeof r!="boolean"},ae=Ne(function(e){return Te(e)?e:e.replace(vr,"-$&").toLowerCase()}),me=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(yr,function(n,s,a){return F={name:s,styles:a,next:F},s})}return Re[r]!==1&&!Te(r)&&typeof t=="number"&&t!==0?t+"px":t};function G(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return F={name:t.name,styles:t.styles,next:F},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)F={name:n.name,styles:n.styles,next:F},n=n.next;var s=t.styles+";";return s}return wr(e,r,t)}case"function":{if(e!==void 0){var a=F,i=t(e);return F=a,G(e,r,i)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function wr(e,r,t){var n="";if(Array.isArray(t))for(var s=0;s<t.length;s++)n+=G(e,r,t[s])+";";else for(var a in t){var i=t[a];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=a+"{"+r[i]+"}":ge(i)&&(n+=ae(a)+":"+me(a,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var o=0;o<i.length;o++)ge(i[o])&&(n+=ae(a)+":"+me(a,i[o])+";");else{var x=G(e,r,i);switch(a){case"animation":case"animationName":{n+=ae(a)+":"+x+";";break}default:n+=a+"{"+x+"}"}}}return n}var be=/label:\s*([^\s;\n{]+)\s*(;|$)/g,F,jr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var s=!0,a="";F=void 0;var i=r[0];i==null||i.raw===void 0?(s=!1,a+=G(n,t,i)):a+=i[0];for(var o=1;o<r.length;o++)a+=G(n,t,r[o]),s&&(a+=i[o]);be.lastIndex=0;for(var x="",v;(v=be.exec(a))!==null;)x+="-"+v[1];var h=br(a)+x;return{name:h,styles:a,next:F}},Sr=function(r){return r()},Cr=he["useInsertionEffect"]?he["useInsertionEffect"]:!1,kr=Cr||Sr,Oe=N.createContext(typeof HTMLElement<"u"?pr({key:"css"}):null);Oe.Provider;var $r=function(r){return N.forwardRef(function(t,n){var s=N.useContext(Oe);return r(t,s,n)})},Pr=N.createContext({}),Ar=Ie,Er=function(r){return r!=="theme"},ve=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Ar:Er},ye=function(r,t,n){var s;if(t){var a=t.shouldForwardProp;s=r.__emotion_forwardProp&&a?function(i){return r.__emotion_forwardProp(i)&&a(i)}:a}return typeof s!="function"&&n&&(s=r.__emotion_forwardProp),s},_r=function(r){var t=r.cache,n=r.serialized,s=r.isStringTag;return _e(t,n,s),kr(function(){return mr(t,n,s)}),null},Tr=function e(r,t){var n=r.__emotion_real===r,s=n&&r.__emotion_base||r,a,i;t!==void 0&&(a=t.label,i=t.target);var o=ye(r,t,n),x=o||ve(s),v=!x("as");return function(){var h=arguments,p=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(a!==void 0&&p.push("label:"+a+";"),h[0]==null||h[0].raw===void 0)p.push.apply(p,h);else{p.push(h[0][0]);for(var A=h.length,$=1;$<A;$++)p.push(h[$],h[0][$])}var g=$r(function(f,m,b){var y=v&&f.as||s,C="",M=[],T=f;if(f.theme==null){T={};for(var E in f)T[E]=f[E];T.theme=N.useContext(Pr)}typeof f.className=="string"?C=gr(m.registered,M,f.className):f.className!=null&&(C=f.className+" ");var l=jr(p.concat(M),m.registered,T);C+=m.key+"-"+l.name,i!==void 0&&(C+=" "+i);var Fe=v&&o===void 0?ve(y):x,Y={};for(var Z in f)v&&Z==="as"||Fe(Z)&&(Y[Z]=f[Z]);return Y.className=C,Y.ref=b,N.createElement(N.Fragment,null,N.createElement(_r,{cache:m,serialized:l,isStringTag:typeof y=="string"}),N.createElement(y,Y))});return g.displayName=a!==void 0?a:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",g.defaultProps=r.defaultProps,g.__emotion_real=g,g.__emotion_base=s,g.__emotion_styles=p,g.__emotion_forwardProp=o,Object.defineProperty(g,"toString",{value:function(){return"."+i}}),g.withComponent=function(f,m){return e(f,ie({},t,m,{shouldForwardProp:ye(g,m,!0)})).apply(void 0,p)},g}},Or=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],we=Tr.bind();Or.forEach(function(e){we[e]=we(e)});const Zr=e=>e.adverts.items,Jr=e=>e.favorites,I="/campers-for-rent/assets/sprite-7189a4a6.svg",Fr=j.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 24px;
`,L=j.li`
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 100px;
  padding: 12px 18px;
  width: 126px;
  height: 44px;
  background-color: ${e=>e.theme.color.blockFeatures};
`,z=j.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,W=j.svg`
  width: 20px;
  height: 20px;
`,Nr=({item:e})=>{const{adults:r,engine:t,transmission:n,details:s}=e;return c.jsxs(Fr,{children:[c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{href:`${I}#users`})}),c.jsxs(z,{children:[r," adults"]})]}),n==="automatic"&&c.jsxs(L,{children:[c.jsx(W,{width:"20",height:"20",children:c.jsx("use",{href:`${I}#automatic`})}),c.jsx(z,{children:"Automatic"})]}),t==="petrol"&&c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{href:`${I}#petrol`})}),c.jsx(z,{children:"Petrol"})]}),s.kitchen>0&&c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{href:`${I}#knife`})}),c.jsx(z,{children:"Kitchen"})]}),c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{href:`${I}#bad`})}),c.jsxs(z,{children:[s.beds," beds"]})]}),s.airConditioner>0&&c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{xlinkHref:`${I}#ac`})}),c.jsx(z,{children:"AC"})]})]})},Rr=j.div`
  border: ${e=>e.theme.border.grey};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  gap: 24px;
`,Ir=j.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Mr=j.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,Lr=j.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,zr=j.button`
  border: none;
  background: transparent;
  padding: 0;
`,Wr=j.div`
  display: flex;
  gap: 10px;
`,Br=j.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  overflow: hidden;
`,Dr=j.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`,je=j.svg`
  width: 16px;
  height: 16px;
`,qr=j.svg`
  width: 24px;
  height: 24px;
`,Vr=j.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Hr=j.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,Kr=j.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`,Gr=j.p`
  color: ${e=>e.theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: 24px;
`,Ur=j.button`
  border: none;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background-color: ${e=>e.theme.color.buttons};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  &:hover,
  &:focus {
    background-color: #d84343;
  }
`,Qr=({item:e})=>{const{name:r,price:t,rating:n,location:s,description:a,gallery:i,reviews:o}=e,x=Me(),v=t.toFixed(2),[h,p]=N.useState(!1),A=h?"heardPressed":"heartDefault",$=()=>{p(!h),x(h?ze(e._id):Le(e))};return c.jsxs(Rr,{children:[c.jsx(Br,{children:c.jsx(Dr,{src:i[1],alt:r})}),c.jsxs("div",{children:[c.jsxs(Ir,{children:[c.jsx(Mr,{children:r}),c.jsxs(Wr,{children:[c.jsxs(Lr,{children:["€",v]}),c.jsx(zr,{type:"button",onClick:$,children:c.jsx(qr,{children:c.jsx("use",{href:`${I}#${A}`})})})]})]}),c.jsxs(Vr,{children:[c.jsxs(Hr,{children:[c.jsx(je,{children:c.jsx("use",{href:`${I}#star`})}),n," (",o.length," Reviews)"]}),c.jsxs(Kr,{children:[c.jsx(je,{children:c.jsx("use",{href:`${I}#map-pin`})}),s]})]}),c.jsx(Gr,{children:a}),c.jsx(Nr,{item:e}),c.jsx(Ur,{type:"button",children:"Show more"})]})]})};export{Qr as A,Zr as a,Jr as b,we as n,I as s};
