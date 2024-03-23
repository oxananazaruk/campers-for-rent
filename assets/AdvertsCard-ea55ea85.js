import{m as Ne,b as Re,R as he,r as O,i as Ie,s as j,j as c,a as Me,u as Le,c as ze,d as We}from"./index-889f1ab2.js";function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ie.apply(this,arguments)}function Be(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function De(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var qe=function(){function e(t){var n=this;this._insertTag=function(s){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(s,a),n.tags.push(s)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(De(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Be(s);try{a.insertRule(n,a.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),k="-ms-",re="-moz-",u="-webkit-",Se="comm",fe="rule",ue="decl",Ve="@import",Ce="@keyframes",He="@layer",Ke=Math.abs,te=String.fromCharCode,Ge=Object.assign;function Ue(e,r){return S(e,0)^45?(((r<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}function ke(e){return e.trim()}function Ye(e,r){return(e=r.exec(e))?e[0]:e}function d(e,r,t){return e.replace(r,t)}function ce(e,r){return e.indexOf(r)}function S(e,r){return e.charCodeAt(r)|0}function H(e,r,t){return e.slice(r,t)}function F(e){return e.length}function de(e){return e.length}function J(e,r){return r.push(e),e}function Ze(e,r){return e.map(r).join("")}var ne=1,D=1,$e=0,E=0,w=0,q="";function se(e,r,t,n,s,a,i){return{value:e,root:r,parent:t,type:n,props:s,children:a,line:ne,column:D,length:i,return:""}}function V(e,r){return Ge(se("",null,null,"",null,null,0),e,{length:-e.length},r)}function Je(){return w}function Qe(){return w=E>0?S(q,--E):0,D--,w===10&&(D=1,ne--),w}function _(){return w=E<$e?S(q,E++):0,D++,w===10&&(D=1,ne++),w}function R(){return S(q,E)}function Q(){return E}function U(e,r){return H(q,e,r)}function K(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pe(e){return ne=D=1,$e=F(q=e),E=0,[]}function Ee(e){return q="",e}function X(e){return ke(U(E-1,oe(e===91?e+2:e===40?e+1:e)))}function Xe(e){for(;(w=R())&&w<33;)_();return K(e)>2||K(w)>3?"":" "}function er(e,r){for(;--r&&_()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return U(e,Q()+(r<6&&R()==32&&_()==32))}function oe(e){for(;_();)switch(w){case e:return E;case 34:case 39:e!==34&&e!==39&&oe(w);break;case 40:e===41&&oe(e);break;case 92:_();break}return E}function rr(e,r){for(;_()&&e+w!==47+10;)if(e+w===42+42&&R()===47)break;return"/*"+U(r,E-1)+"*"+te(e===47?e:_())}function tr(e){for(;!K(R());)_();return U(e,E)}function nr(e){return Ee(ee("",null,null,null,[""],e=Pe(e),0,[0],e))}function ee(e,r,t,n,s,a,i,o,g){for(var v=0,h=0,l=i,P=0,$=0,x=0,f=1,m=1,b=1,y=0,C="",M=s,T=a,A=n,p=C;m;)switch(x=y,y=_()){case 40:if(x!=108&&S(p,l-1)==58){ce(p+=d(X(y),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:p+=X(y);break;case 9:case 10:case 13:case 32:p+=Xe(x);break;case 92:p+=er(Q()-1,7);continue;case 47:switch(R()){case 42:case 47:J(sr(rr(_(),Q()),r,t),g);break;default:p+="/"}break;case 123*f:o[v++]=F(p)*b;case 125*f:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+h:b==-1&&(p=d(p,/\f/g,"")),$>0&&F(p)-l&&J($>32?pe(p+";",n,t,l-1):pe(d(p," ","")+";",n,t,l-2),g);break;case 59:p+=";";default:if(J(A=le(p,r,t,v,h,s,o,C,M=[],T=[],l),a),y===123)if(h===0)ee(p,r,A,A,M,a,l,o,T);else switch(P===99&&S(p,3)===110?100:P){case 100:case 108:case 109:case 115:ee(e,A,A,n&&J(le(e,A,A,0,0,s,o,C,s,M=[],l),T),s,T,l,o,n?M:T);break;default:ee(p,A,A,A,[""],T,0,o,T)}}v=h=$=0,f=b=1,C=p="",l=i;break;case 58:l=1+F(p),$=x;default:if(f<1){if(y==123)--f;else if(y==125&&f++==0&&Qe()==125)continue}switch(p+=te(y),y*f){case 38:b=h>0?1:(p+="\f",-1);break;case 44:o[v++]=(F(p)-1)*b,b=1;break;case 64:R()===45&&(p+=X(_())),P=R(),h=l=F(C=p+=tr(Q())),y++;break;case 45:x===45&&F(p)==2&&(f=0)}}return a}function le(e,r,t,n,s,a,i,o,g,v,h){for(var l=s-1,P=s===0?a:[""],$=de(P),x=0,f=0,m=0;x<n;++x)for(var b=0,y=H(e,l+1,l=Ke(f=i[x])),C=e;b<$;++b)(C=ke(f>0?P[b]+" "+y:d(y,/&\f/g,P[b])))&&(g[m++]=C);return se(e,r,t,s===0?fe:o,g,v,h)}function sr(e,r,t){return se(e,r,t,Se,te(Je()),H(e,2,-2),0)}function pe(e,r,t,n){return se(e,r,t,ue,H(e,0,n),H(e,n+1,-1),n)}function B(e,r){for(var t="",n=de(e),s=0;s<n;s++)t+=r(e[s],s,e,r)||"";return t}function ar(e,r,t,n){switch(e.type){case He:if(e.children.length)break;case Ve:case ue:return e.return=e.return||e.value;case Se:return"";case Ce:return e.return=e.value+"{"+B(e.children,n)+"}";case fe:e.value=e.props.join(",")}return F(t=B(e.children,n))?e.return=e.value+"{"+t+"}":""}function ir(e){var r=de(e);return function(t,n,s,a){for(var i="",o=0;o<r;o++)i+=e[o](t,n,s,a)||"";return i}}function cr(e){return function(r){r.root||(r=r.return)&&e(r)}}var or=function(r,t,n){for(var s=0,a=0;s=a,a=R(),s===38&&a===12&&(t[n]=1),!K(a);)_();return U(r,E)},fr=function(r,t){var n=-1,s=44;do switch(K(s)){case 0:s===38&&R()===12&&(t[n]=1),r[n]+=or(E-1,t,n);break;case 2:r[n]+=X(s);break;case 4:if(s===44){r[++n]=R()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=te(s)}while(s=_());return r},ur=function(r,t){return Ee(fr(Pe(r),t))},xe=new WeakMap,dr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,s=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!xe.get(n))&&!s){xe.set(r,!0);for(var a=[],i=ur(t,a),o=n.props,g=0,v=0;g<i.length;g++)for(var h=0;h<o.length;h++,v++)r.props[v]=a[g]?i[g].replace(/&\f/g,o[h]):o[h]+" "+i[g]}}},hr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ae(e,r){switch(Ue(e,r)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+re+e+k+e+e;case 6828:case 4268:return u+e+k+e+e;case 6165:return u+e+k+"flex-"+e+e;case 5187:return u+e+d(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return u+e+k+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return u+e+k+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+k+d(e,"shrink","negative")+e;case 5292:return u+e+k+d(e,"basis","preferred-size")+e;case 6060:return u+"box-"+d(e,"-grow","")+u+e+k+d(e,"grow","positive")+e;case 4554:return u+d(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-r>6)switch(S(e,r+1)){case 109:if(S(e,r+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+re+(S(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ce(e,"stretch")?Ae(d(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(S(e,r+1)!==115)break;case 6444:switch(S(e,F(e)-3-(~ce(e,"!important")&&10))){case 107:return d(e,":",":"+u)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(S(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+k+"$2box$3")+e}break;case 5936:switch(S(e,r+11)){case 114:return u+e+k+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+k+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+k+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+k+e+e}return e}var lr=function(r,t,n,s){if(r.length>-1&&!r.return)switch(r.type){case ue:r.return=Ae(r.value,r.length);break;case Ce:return B([V(r,{value:d(r.value,"@","@"+u)})],s);case fe:if(r.length)return Ze(r.props,function(a){switch(Ye(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([V(r,{props:[d(a,/:(read-\w+)/,":"+re+"$1")]})],s);case"::placeholder":return B([V(r,{props:[d(a,/:(plac\w+)/,":"+u+"input-$1")]}),V(r,{props:[d(a,/:(plac\w+)/,":"+re+"$1")]}),V(r,{props:[d(a,/:(plac\w+)/,k+"input-$1")]})],s)}return""})}},pr=[lr],xr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(f){var m=f.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var s=r.stylisPlugins||pr,a={},i,o=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(f){for(var m=f.getAttribute("data-emotion").split(" "),b=1;b<m.length;b++)a[m[b]]=!0;o.push(f)});var g,v=[dr,hr];{var h,l=[ar,cr(function(f){h.insert(f)})],P=ir(v.concat(s,l)),$=function(m){return B(nr(m),P)};g=function(m,b,y,C){h=y,$(m?m+"{"+b.styles+"}":b.styles),C&&(x.inserted[b.name]=!0)}}var x={key:t,sheet:new qe({key:t,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:a,registered:{},insert:g};return x.sheet.hydrate(o),x},gr=!0;function mr(e,r,t){var n="";return t.split(" ").forEach(function(s){e[s]!==void 0?r.push(e[s]+";"):n+=s+" "}),n}var _e=function(r,t,n){var s=r.key+"-"+t.name;(n===!1||gr===!1)&&r.registered[s]===void 0&&(r.registered[s]=t.styles)},br=function(r,t,n){_e(r,t,n);var s=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var a=t;do r.insert(t===a?"."+s:"",a,r.sheet,!0),a=a.next;while(a!==void 0)}};function vr(e){for(var r=0,t,n=0,s=e.length;s>=4;++n,s-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var yr=/[A-Z]|^ms/g,wr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Te=function(r){return r.charCodeAt(1)===45},ge=function(r){return r!=null&&typeof r!="boolean"},ae=Ne(function(e){return Te(e)?e:e.replace(yr,"-$&").toLowerCase()}),me=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(wr,function(n,s,a){return N={name:s,styles:a,next:N},s})}return Re[r]!==1&&!Te(r)&&typeof t=="number"&&t!==0?t+"px":t};function G(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return N={name:t.name,styles:t.styles,next:N},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)N={name:n.name,styles:n.styles,next:N},n=n.next;var s=t.styles+";";return s}return jr(e,r,t)}case"function":{if(e!==void 0){var a=N,i=t(e);return N=a,G(e,r,i)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function jr(e,r,t){var n="";if(Array.isArray(t))for(var s=0;s<t.length;s++)n+=G(e,r,t[s])+";";else for(var a in t){var i=t[a];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=a+"{"+r[i]+"}":ge(i)&&(n+=ae(a)+":"+me(a,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var o=0;o<i.length;o++)ge(i[o])&&(n+=ae(a)+":"+me(a,i[o])+";");else{var g=G(e,r,i);switch(a){case"animation":case"animationName":{n+=ae(a)+":"+g+";";break}default:n+=a+"{"+g+"}"}}}return n}var be=/label:\s*([^\s;\n{]+)\s*(;|$)/g,N,Sr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var s=!0,a="";N=void 0;var i=r[0];i==null||i.raw===void 0?(s=!1,a+=G(n,t,i)):a+=i[0];for(var o=1;o<r.length;o++)a+=G(n,t,r[o]),s&&(a+=i[o]);be.lastIndex=0;for(var g="",v;(v=be.exec(a))!==null;)g+="-"+v[1];var h=vr(a)+g;return{name:h,styles:a,next:N}},Cr=function(r){return r()},kr=he["useInsertionEffect"]?he["useInsertionEffect"]:!1,$r=kr||Cr,Oe=O.createContext(typeof HTMLElement<"u"?xr({key:"css"}):null);Oe.Provider;var Pr=function(r){return O.forwardRef(function(t,n){var s=O.useContext(Oe);return r(t,s,n)})},Er=O.createContext({}),Ar=Ie,_r=function(r){return r!=="theme"},ve=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Ar:_r},ye=function(r,t,n){var s;if(t){var a=t.shouldForwardProp;s=r.__emotion_forwardProp&&a?function(i){return r.__emotion_forwardProp(i)&&a(i)}:a}return typeof s!="function"&&n&&(s=r.__emotion_forwardProp),s},Tr=function(r){var t=r.cache,n=r.serialized,s=r.isStringTag;return _e(t,n,s),$r(function(){return br(t,n,s)}),null},Or=function e(r,t){var n=r.__emotion_real===r,s=n&&r.__emotion_base||r,a,i;t!==void 0&&(a=t.label,i=t.target);var o=ye(r,t,n),g=o||ve(s),v=!g("as");return function(){var h=arguments,l=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(a!==void 0&&l.push("label:"+a+";"),h[0]==null||h[0].raw===void 0)l.push.apply(l,h);else{l.push(h[0][0]);for(var P=h.length,$=1;$<P;$++)l.push(h[$],h[0][$])}var x=Pr(function(f,m,b){var y=v&&f.as||s,C="",M=[],T=f;if(f.theme==null){T={};for(var A in f)T[A]=f[A];T.theme=O.useContext(Er)}typeof f.className=="string"?C=mr(m.registered,M,f.className):f.className!=null&&(C=f.className+" ");var p=Sr(l.concat(M),m.registered,T);C+=m.key+"-"+p.name,i!==void 0&&(C+=" "+i);var Fe=v&&o===void 0?ve(y):g,Y={};for(var Z in f)v&&Z==="as"||Fe(Z)&&(Y[Z]=f[Z]);return Y.className=C,Y.ref=b,O.createElement(O.Fragment,null,O.createElement(Tr,{cache:m,serialized:p,isStringTag:typeof y=="string"}),O.createElement(y,Y))});return x.displayName=a!==void 0?a:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",x.defaultProps=r.defaultProps,x.__emotion_real=x,x.__emotion_base=s,x.__emotion_styles=l,x.__emotion_forwardProp=o,Object.defineProperty(x,"toString",{value:function(){return"."+i}}),x.withComponent=function(f,m){return e(f,ie({},t,m,{shouldForwardProp:ye(x,m,!0)})).apply(void 0,l)},x}},Fr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],we=Or.bind();Fr.forEach(function(e){we[e]=we(e)});const Qr=e=>e.adverts.items,Xr=e=>e.adverts.message,Nr=e=>e.favorites,I="/campers-for-rent/assets/sprite-7189a4a6.svg",Rr=j.ul`
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
`,Ir=({item:e})=>{const{adults:r,engine:t,transmission:n,details:s}=e;return c.jsxs(Rr,{children:[c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{href:`${I}#users`})}),c.jsxs(z,{children:[r," adults"]})]}),n==="automatic"&&c.jsxs(L,{children:[c.jsx(W,{width:"20",height:"20",children:c.jsx("use",{href:`${I}#automatic`})}),c.jsx(z,{children:"Automatic"})]}),t==="petrol"&&c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{href:`${I}#petrol`})}),c.jsx(z,{children:"Petrol"})]}),s.kitchen>0&&c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{href:`${I}#knife`})}),c.jsx(z,{children:"Kitchen"})]}),c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{href:`${I}#bad`})}),c.jsxs(z,{children:[s.beds," beds"]})]}),s.airConditioner>0&&c.jsxs(L,{children:[c.jsx(W,{children:c.jsx("use",{xlinkHref:`${I}#ac`})}),c.jsx(z,{children:"AC"})]})]})},Mr=j.div`
  border: ${e=>e.theme.border.grey};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  gap: 24px;
`,Lr=j.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,zr=j.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,Wr=j.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,Br=j.button`
  border: none;
  background: transparent;
  padding: 0;
`,Dr=j.div`
  display: flex;
  gap: 10px;
`,qr=j.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  overflow: hidden;
`,Vr=j.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`,je=j.svg`
  width: 16px;
  height: 16px;
`,Hr=j.svg`
  width: 24px;
  height: 24px;
`,Kr=j.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,Gr=j.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,Ur=j.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`,Yr=j.p`
  color: ${e=>e.theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 525px;
  margin-bottom: 24px;
`,Zr=j.button`
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
`,et=({item:e})=>{const{name:r,price:t,rating:n,location:s,description:a,gallery:i,reviews:o}=e,g=Me(),v=t.toFixed(2),[h,l]=O.useState(!1),P=Le(Nr);O.useEffect(()=>{P.some(f=>f._id===e._id)&&l(!0)},[P,e._id]);const $=h?"heardPressed":"heartDefault",x=()=>{l(!h),g(h?We(e._id):ze(e))};return c.jsxs(Mr,{children:[c.jsx(qr,{children:c.jsx(Vr,{src:i[1],alt:r})}),c.jsxs("div",{children:[c.jsxs(Lr,{children:[c.jsx(zr,{children:r}),c.jsxs(Dr,{children:[c.jsxs(Wr,{children:["€",v]}),c.jsx(Br,{type:"button",onClick:x,children:c.jsx(Hr,{children:c.jsx("use",{href:`${I}#${$}`})})})]})]}),c.jsxs(Kr,{children:[c.jsxs(Gr,{children:[c.jsx(je,{children:c.jsx("use",{href:`${I}#star`})}),n," (",o.length," Reviews)"]}),c.jsxs(Ur,{children:[c.jsx(je,{children:c.jsx("use",{href:`${I}#map-pin`})}),s]})]}),c.jsx(Yr,{children:a}),c.jsx(Ir,{item:e}),c.jsx(Zr,{type:"button",children:"Show more"})]})]})};export{et as A,I as a,Qr as b,Nr as c,we as n,Xr as s};
