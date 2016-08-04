// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 8
(function(w,g){w[g]=w[g]||{};})(window,'google_tag_manager');(function(){


var va=this,wa=function(){var a=YT.Player,b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},xa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ya=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ba=function(a){if(null==a)return String(a);var b=ya.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ca=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ea=function(a){if(!a||"object"!=Ba(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ca(a,"constructor")&&!Ca(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ca(a,b)},Da=function(a,b){var c=b||("array"==Ba(a)?[]:{}),d;for(d in a)if(Ca(a,d)){var e=a[d];"array"==Ba(e)?("array"!=Ba(c[d])&&(c[d]=[]),c[d]=Da(e,c[d])):ea(e)?(ea(c[d])||(c[d]={}),c[d]=Da(e,c[d])):c[d]=e}return c};var ja=null,Ea=Math.random(),Fa=null,Ga=null,Ha={};var Ia,Ja,Ka,La,Ma,Oa,Pa,Qa,Ra,Sa,P,R,Ta,Ua,Va,Wa,Xa,Ya,Za,$a,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,Xb,Yb,Zb,$b,ac,bc,dc,ec,fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,S,zc,Ac,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Zc,$c,ed,fd,gd,hd,id,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,
Xd,Yd,Zd,$d,ae,be,ce,de,ee,fe,ge,he,ie,je,ke,le,me,ne,oe,pe,qe,re,se,te,ue,ve,we,xe,ye,ze,Ae,Be,Ce,De,Ee,Fe,Ge,He,Ie,Je,Ke;
(function(){var a=function(a){return{toString:function(){return a}}};Ia=a("");Ja=a("");Ka=a("");La=a("");Ma=a("");Oa=a("");Pa=a("");Qa=a("");Ra=a("");Sa=a("");P=a("0");R=a("1");Ta=a("");Ua=a("");Va=a("");Wa=a("");
Xa=a("");Ya=a("");Za=a("");$a=a("");ab=a("");bb=a("");cb=a("");db=a("");eb=a("");fb=a("");gb=a("");hb=a("");ib=a("");jb=a("");
kb=a("");lb=a("");mb=a("");nb=a("");ob=a("");pb=a("2");qb=a("");rb=a("");sb=a("");tb=a("");wb=a("");xb=a("");yb=a("");zb=a("");Ab=a("");Bb=a("");Cb=a("");Db=a("");
Eb=a("");Fb=a("");Gb=a("");Hb=a("");Ib=a("");Jb=a("");Kb=a("");Lb=a("");Mb=a("");Nb=a("");Ob=a("");Pb=a("");Qb=a("");Rb=a("");Sb=a("");Tb=a("");Ub=a("");
Vb=a("");Wb=a("");Xb=a("");Yb=a("");Zb=a("");$b=a("");ac=a("");bc=a("");dc=a("");ec=a("");fc=a("");gc=a("");hc=a("");ic=a("");jc=a("");kc=a("");
lc=a("");mc=a("");nc=a("");oc=a("");pc=a("");qc=a("");rc=a("");sc=a("");tc=a("3");uc=a("");vc=a("8");wc=a("9");xc=a("");yc=a("4");S=a("");zc=a("");Ac=a("");Bc=a("");
Cc=a("");Dc=a("5");Ec=a("");Fc=a("");Gc=a("");Hc=a("");Ic=a("");Jc=a("");Kc=a("");Lc=a("");Mc=a("");Nc=a("");Oc=a("");Pc=a("");Qc=a("");Rc=a("");Sc=a("");Tc=a("");Uc=a("");Vc=a("");
Wc=a("");Zc=a("");$c=a("6");ed=a("");fd=a("");gd=a("");hd=a("");id=a("");jd=a("");kd=a("");ld=a("");md=a("");nd=a("");od=a("");pd=a("");qd=a("");rd=a("");sd=a("");td=a("");
ud=a("");vd=a("");wd=a("");xd=a("");yd=a("");zd=a("");Ad=a("");Bd=a("");Cd=a("");Dd=a("");Ed=a("");Fd=a("");Gd=a("");Hd=a("");Id=a("");Jd=a("");Kd=a("");Ld=a("");
Md=a("");Nd=a("");Od=a("");Pd=a("");Qd=a("");Rd=a("");Sd=a("");Td=a("");Ud=a("");Vd=a("");Wd=a("");Xd=a("7");Yd=a("");Zd=a("");$d=a("");ae=
a("");be=a("");ce=a("");de=a("");ee=a("");fe=a("");ge=a("");he=a("");ie=a("");je=a("");ke=a("");le=a("");me=a("");ne=a("");oe=a("");pe=a("");qe=a("");
re=a("");se=a("");te=a("");ue=a("");ve=a("");we=a("");xe=a("");ye=a("");ze=a("");Ae=a("");Be=a("");Ce=a("");De=a("");Ee=a("");Fe=a("");Ge=a("");He=a("");
Ie=a("");Je=a("");Ke=a("")})();var Le=function(){},H=function(a){return"function"==typeof a},T=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Me=function(a){return"number"==Ba(a)&&!isNaN(a)},Ne=function(a){return/^[0-9]+$/.test(a)},Oe=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Pe=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},I=function(a){return Math.round(Number(a))||0},ga=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Qe=function(a){var b=[];if(T(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},B=function(){return new Date},Re=function(a,b){if(!Me(a)||!Me(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},Se=function(){this.prefix="gtm.";this.values={}};Se.prototype.set=function(a,b){this.values[this.prefix+a]=b};Se.prototype.get=function(a){return this.values[this.prefix+a]};Se.prototype.contains=function(a){return void 0!==this.get(a)};
var Te=function(a,b,c){try{return a[tc](a,b||Le,c||Le)}catch(d){}return!1},$e=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=Pe(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},af=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},bf=function(a){for(var b=0;b<a.length;b++)a[b]()},aa=B().getTime(),fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ff=function(a,b,c){a.prototype["gtm_proxy_"+
b]=a.prototype[b];a.prototype[b]=c},gf=function(a){return null!==a&&void 0!==a&&void 0!==a.length},ba=function(a,b,c){if(!(b&&c&&gf(a)&&T(a)&&0!=a.length))return null;for(var d={},e=0;e<a.length;e++)a[e]&&a[e].hasOwnProperty(b)&&a[e].hasOwnProperty(c)&&(d[a[e][b]]=a[e][c]);return d},hf=function(a,b){0==b?a.La=!0:a.complete=!0;var c=a.g;a.i&&(a.i.ja[c]=b);Ha[c]&&(Ha[c].state=b)},jf=function(a,b){a.sort(function(a,d){return b(a,d)?-1:b(d,a)?1:0})};var A=window,N=document,mf=navigator,w=function(a,b,c){var d=A[a];A[a]=void 0===d||c?b:d;return A[a]},J=function(a,b,c,d){return(d||"http:"!=A.location.protocol?a:b)+c},nf=function(a){var b=N.getElementsByTagName("script")[0]||N.body||N.head;b.parentNode.insertBefore(a,b)},ia=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},n=function(a,b,c){var d=N.createElement("script");d.type="text/javascript";
d.async=!0;d.src=a;ia(d,b);c&&(d.onerror=c);nf(d)},pa=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";nf(c);ia(c,b);void 0!==a&&(c.src=a);return c},M=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},V=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},q=function(a){A.setTimeout(a,0)},la=!1,
ma=[],of=function(a){if(!la){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){la=!0;for(var e=0;e<ma.length;e++)ma[e]()}}},pf=0,qf=function(){if(!la&&140>pf){pf++;try{N.documentElement.doScroll("left"),of()}catch(a){A.setTimeout(qf,50)}}},sf=function(a){var b=N.getElementById(a);if(b&&rf(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(rf(document.all[a][c],"id")==a)return document.all[a][c];return b},rf=function(a,
b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},tf=function(a){return a.target||a.srcElement||{}},qa=function(a){var b=N.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},uf=function(a,b){for(var c={},d=0;d<b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},vf=!1,wf=[],
xf=function(){if(!vf){vf=!0;for(var a=0;a<wf.length;a++)wf[a]()}},yf=function(a){a=a||A;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)},na=function(a){window.console&&window.console.log&&window.console.log(a)};var zf=function(a,b,c,d,e){var f,g=(a.protocol.replace(":","")||A.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||A.location.hostname).split(":")[0].toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:A.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Oe(d||[],l[l.length-
1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var m=f.split("&"),k=0;k<m.length;k++){var p=m[k].split("=");if(decodeURIComponent(p[0]).replace("+"," ")==e){var r=p.slice(1).join("=");f=decodeURIComponent(r).replace("+"," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Af=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},O=function(a){var b=N.createElement("a");
a&&(b.href=a);return b};var ta=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ra=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=zf(O(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};var sa=function(a,b){n("//bat.bing.com/bat.js",a,b)},L=A,ha=function(a,b,c){b&&(void 0===L[a]||c&&!L[a])&&(L[a]=b);return L[a]};var Bf=new Se,Cf={},Ef={set:function(a,b){Da(Df(a,b),Cf)},get:function(a){return G(a,2)},reset:function(){Bf=new Se;Cf={}}},G=function(a,b){if(2==b){for(var c=Cf,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return Bf.get(a)},Df=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Ff=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Gf={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Hf={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},If=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Jf=function(){var a=G("gtm.whitelist");
var b=a&&If(Qe(a),Gf),c=G("gtm.blacklist")||G("tagTypeBlacklist")||[];Ff.test(A.location&&A.location.hostname)&&(c=Qe(c),c.push("nonGooglePixels","nonGoogleScripts"));var d=c&&If(Qe(c),Hf),e={};return function(f){var g=f&&f[tc];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)a:{if(0>Oe(b,g.a))if(g.b&&0<g.b.length)for(var l=0;l<g.b.length;l++){if(0>Oe(b,
g.b[l])){h=!1;break a}}else{h=!1;break a}h=!0}var m=!1;if(c){var k;if(!(k=0<=Oe(d,g.a)))a:{for(var p=g.b||[],r=new Se,t=0;t<d.length;t++)r.set(d[t],!0);for(t=0;t<p.length;t++)if(r.get(p[t])){k=!0;break a}k=!1}m=k}var v=!!f[Sc];return e[g.a]=!h||m||v}};var kf=function(a){var b=N;return Kf?b.querySelectorAll(a):null},Lf;a:{var Mf=/MSIE +([\d\.]+)/.exec(mf.userAgent);if(Mf&&Mf[1]){var Nf=N.documentMode;Nf||(Nf="CSS1Compat"==N.compatMode?parseInt(Mf[1],10):5);if(!Nf||8>=Nf){Lf=!1;break a}}Lf=!!N.querySelectorAll}var Kf=Lf;var Of=void 0,Pf="",Qf=0,Rf=void 0,_et=function(a){var b,c=G("gtm.element"),d=G("event"),e=Number(B());if(Of===c&&Pf===d&&Qf>e-250)b=Rf;else{var f;if(c){var g=c.innerText||c.textContent||"";g&&" "!=g&&(g=g.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));g&&(g=g.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));f=g}else f="";Rf=b=f;Of=c;Pf=d}Qf=e;return b?b:a[Qb]};_et.a="et";_et.b=["google"];var _eu=function(a){var b=String(G("gtm.elementUrl")||a[Qb]||""),c=O(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Ga};_e.a="e";_e.b=["google"];var Sf=/(^|\.)doubleclick\.net$/i,Tf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Uf=function(a){for(var b=String(N.cookie).split(";"),c=[],d=0;d<b.length;d++){var e=b[d].split("="),f=Pe(e[0]);if(f&&f==a){var g=Pe(e.slice(1).join("="));g&&(g=decodeURIComponent(g));c.push(g)}}return c},Vf=function(a,b,c,d,e){if(Sf.test(N.location.hostname)||"/"==c&&Tf.test(d))return!1;var f=a+"="+b+"; ";c&&(f+="path="+c+"; ");e&&(f+="expires="+e.toGMTString()+"; ");d&&(f+="domain="+d+";");var g=N.cookie;N.cookie=f;return g!=
N.cookie||0<=Oe(Uf(a),b)},Wf=function(a){if("none"==a)return 0;0==a.indexOf(".")&&(a=a.substr(1));return a.split(".").length},Xf=function(a){var b=a;b?(1<b.length&&b.lastIndexOf("/")==b.length-1&&(b=b.substr(0,b.length-1)),0!=b.indexOf("/")&&(b="/"+b),a=b):a="/";return"/"==a?1:a.split("/").length},Yf=function(){var a=zf(A.location,"host",!0).split(".");if(4==a.length&&/^[0-9]*$/.exec(a[3]))return["none"];for(var b=[],c=a.length-2;0<=c;c--)b.push(a.slice(c).join("."));b.push("none");return b};var Zf=function(a,b){this.f=a;this.j=b};Zf.prototype.toString=function(){var a=""+this.f;1<this.j&&(a=a+"-"+this.j);return a};var $f=function(a,b){this.wa=a;this.Y=b};$f.prototype.toString=function(){return""+this.Y+"."+this.wa};var cg=function(a,b){var c=new ag(null,a,b);bg(c);return c},ag=function(a,b,c){this.Ea=Math.floor(B().getTime()/864E5);this.X=b||"auto";this.P=c||"/";var d=Wf(this.X),e=Xf(this.P);this.B=a||new Zf(d,e);this.h=[];this.w=new Se},eg=function(a,b,c){b&&(""==c.wa?dg(a,b):(a.w.contains(b)||a.h.push(b),a.w.set(b,c)))},fg=function(a,b){for(var c=0;c<b.length;c++)eg(a,b[c][0],b[c][1])},dg=function(a,b){var c=Oe(a.h,b);0<=c&&a.h.splice(c,1);a.w.set(b,void 0)},gg=function(a){for(var b=[],c=0;c<a.h.length;c++){var d=
a.h[c];b.push([d,a.w.get(d)])}return b},hg=function(a){for(var b=0,c=0;c<a.h.length;c++)b=Math.max(b,a.w.get(a.h[c]).Y);return 864E5*b};ag.prototype.toString=function(){if(0==this.h.length)return"";for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];a.push(""+c+"."+this.w.get(c).toString())}return"GAX1."+this.B.toString()+"."+a.join("!")};
var ig=function(a,b){for(var c=new Date,d=Xf(a.P),e=[],f=0;f<a.h.length;f++){var g=a.h[f];a.w.get(g).Y<a.Ea&&e.push(g)}for(f=0;f<e.length;f++)dg(a,e[f]);if(a.h.length>(b||10))return!1;c.setTime(hg(a));if("auto"!=a.X)return Vf("_gaexp",a.toString(),a.P,a.X,c);for(var h=Yf(),l=0;l<h.length;l++)if("none"!=h[l]&&(a.B=new Zf(Wf(h[l]),d),Vf("_gaexp",a.toString(),a.P,h[l],c)))return!0;return!1},bg=function(a){for(var b=a.B.f,c=a.B.j,d=Uf("_gaexp"),e=[],f=0;f<d.length;f++){var g=jg(a,d[f]);g&&e.push(g)}jf(e,
function(a,d){var e=a.B,f=d.B;return e.f==f.f&&e.j==f.j?!1:e.f==b&&e.j==c?!0:f.f==b&&f.j==c?!1:e.f==b?f.f!=b||e.j<f.j:f.f==b?!1:e.j==c?f.f!=b&&(f.j!=c||e.f<f.f):f.j==c?!1:e.f<f.f||e.f==f.f&&e.j<f.j});a.B=0<e.length?e[0].B:new Zf(b,c);for(f=e.length-1;0<=f;f--)fg(a,gg(e[f]))},jg=function(a,b){var c=b.match(/GAX1\.([^.]+).(.*)/);if(c){var d;a:{var e=(c[1]||"").split("-");if(!(0==e.length||2<e.length)){var f=Pe(e[0]);if(0!=f.length){var g=2==e.length?Pe(e[1]):"1";if(Ne(f)&&Ne(g)){d=new Zf(I(f),I(g));
break a}}}d=void 0}if(d){for(var h=new ag(d,a.X,a.P),l=(c[2]||"").split("!"),m=0;m<l.length;m++){var k=l[m].split(".");if(3==k.length){if(!Ne(k[1]))return;eg(h,k[0],new $f(k[2],I(k[1])))}}return h}}};var _v=function(a){var b=G(a[$c].replace(/\\\./g,"."),a[Ib]);return void 0!==b?b:a[Qb]};_v.a="v";_v.b=["google"];var _f=function(a){var b=String(G("gtm.referrer")||N.referrer);if(!b)return b;var c=O(b);return b};_f.a="f";_f.b=["google"];var ua=function(a){var b=A.location,c;(c=a[Fb]?a[Fb]:G("gtm.url"))&&(b=O(String(c)));var d=b.href,e=d.indexOf("#"),f=0>e?d:d.substr(0,e);a[pb]&&(f=zf(b,a[pb],a[Rd],a[Pb],a[Ed]));return f},_u=ua;_u.a="u";_u.b=["google"];var _cn=function(a){return 0<=String(a[P]).indexOf(String(a[R]))};_cn.a="cn";_cn.b=["google"];var _eq=function(a){return String(a[P])==String(a[R])};_eq.a="eq";_eq.b=["google"];var sg=Math.random(),tg="1.000000">sg;var ug=Le;var vg=Le,wg=[],xg=!1,yg=function(a){return A["dataLayer"].push(a)},zg=function(a){var b=!1;return function(){!b&&H(a)&&q(a);b=!0}},Fg=function(){for(var a=!1;!xg&&0<wg.length;){xg=!0;var b=wg.shift();if(H(b))try{b.call(Ef)}catch(vb){}else if(T(b))a:{var c=b;if("string"==Ba(c[0])){for(var d=c[0].split("."),e=d.pop(),f=c.slice(1),g=Cf,h=0;h<d.length;h++){if(void 0===g[d[h]])break a;g=g[d[h]]}try{g[e].apply(g,f)}catch(vb){}}}else{var l=b,m=void 0;for(m in l)if(l.hasOwnProperty(m)){var k=m,p=l[m];
Bf.set(k,p);Da(Df(k,p),Cf)}var r=!1,t=l.event,v=void 0;if(t){v=aa++;Ga=t;if(!l["gtm.uniqueEventId"]){var u=v;Bf.set("gtm.uniqueEventId",u);Da(Df("gtm.uniqueEventId",u),Cf)}var z=zg(l.eventCallback),D=l.eventTimeout;D&&A.setTimeout(z,Number(D));r=vg(v,t,z,l.eventReporter)}Fa||(Fa=l["gtm.start"])&&ug();var E=l,F=v,y=t,C=Cf;if(!r){var K=v,U=t;}Ga=null;a=r||a}var da=b,Y=Cf;Eg();xg=!1}return!a};var Gg,Hg=/(Firefox\D28\D)/g.test(mf.userAgent),Ig={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Jg={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Pg=function(a,b){return function(c){c=c||A.event;var d=tf(c),e=!1;if(3!==c.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(d=uf(d,["a","area"]),e=!d||!d.href||Kg(d.href)||2===c.which||null==c.which&&4==c.button||c.ctrlKey||c.shiftKey||c.altKey||!0===c.metaKey);var f="FORM_SUBMIT"==a?Jg:Ig;if(c.defaultPrevented||!1===c.returnValue||c.na&&c.na()){if(d){var g={simulateDefault:!1},
h=Lg(f,["wnc","nwnc"]);h&&Mg(a,d,g,f.wt,h)}}else{if(d){var g={},l=!0,m=Lg(f,["wnc","nwnc","nwc","wc"]);(l=Mg(a,d,g,f.wt,m))||(Ng(g.eventReport,f)?b=!0:e=!0);e=e||l||"LINK_CLICK"==a&&Hg;g.simulateDefault=!l&&b&&!e;g.simulateDefault&&(e=Og(d,g)||e,!e&&c.preventDefault&&c.preventDefault());c.returnValue=l||!b||e;return c.returnValue}return!0}}}},Mg=function(a,b,c,d,e){var f=d||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||rf(b,"id")||"","gtm.elementTarget":b.formTarget||
b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Qg(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=Rg(b);g.eventTimeout=f;g.eventCallback=Sg(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||
"";break;default:return!0}return yg(g)},Rg=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},Tg=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Og=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test(mf.userAgent),e=Tg(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=A.frames&&A.frames[f]||A[f];break;case "_blank":d?(b.simulateDefault=
!1,c=!0):(b.targetWindowName="gtm_autoEvent_"+B().getTime(),b.targetWindow=A.open("",b.targetWindowName));break;default:d&&!A.frames[e]?(b.simulateDefault=!1,c=!0):(A.frames[e]||(b.targetWindowName=e),b.targetWindow=A.frames[e]||A.open("",e))}return c},Qg=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||B().getTime(),500>B().getTime()-c&&A.setTimeout(Qg(a,b,c),25)))}},Sg=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;
b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);N.gtmSubmitFormNow=!0;Ug(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||B().getTime(),500>B().getTime()-c&&A.setTimeout(Sg(a,b,c),25)}},Lg=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=a[b[d]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&c.push(f)}return c.join(",")},Vg=function(a,b,c,d,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>d)&&(a.wt=d);a[b?c?"wc":"wnc":c?"nwc":"nwnc"][f]=!0},Ng=function(a,b){if(b.wnc["0"]||
b.wc["0"])return!0;for(var c=0;c<Wg.length;c++)if(a.passingRules[c]){var d=Wg[c],e=Xg[c],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=d[1],h=0;h<g.length;h++)if(a.resolvedTags[g[h]])return!0}return!1},Yg=function(a,b,c,d,e){var f,g,h=!1;switch(a){case "CLICK":if(N.gtmHasClickListenerTag)return;N.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=tf(a);b&&Mg("CLICK",b,{},d)};h=!0;break;case "LINK_CLICK":b&&!Gg&&(Gg=Af(N.location));Vg(Ig,b||!1,c||!1,d,e);if(N.gtmHasLinkClickListenerTag)return;
N.gtmHasLinkClickListenerTag=!0;f="click";g=Pg(a,b||!1);break;case "FORM_SUBMIT":Vg(Jg,b||!1,c||!1,d,e);if(N.gtmHasFormSubmitListenerTag)return;N.gtmHasFormSubmitListenerTag=!0;f="submit";g=Pg(a,b||!1);break;default:return}V(N,f,g,h)},Kg=function(a){if(!Gg)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var c=O(a);return Gg==Af(c)},Ug=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
N.gtmFormElementSubmitter||(N.gtmFormElementSubmitter=N.createElement("form"));return N.gtmFormElementSubmitter.submit.call?N.gtmFormElementSubmitter.submit:a.submit};var kg=new String("undefined"),fh=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===kg?b:a[d]);return c.join("")}};fh.prototype.toString=function(){return this.resolve("undefined")};fh.prototype.valueOf=fh.prototype.toString;var gh={},hh=function(a,b){var c=aa++;gh[c]=[a,b];return c},ih=function(a){var b=a?0:1;return function(a){var d=gh[a];if(d&&H(d[b]))d[b]();gh[a]=void 0}};var jh=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},kh=function(a,b){return a<b?-1:a>b?1:0};var lh;a:{var mh=va.navigator;if(mh){var nh=mh.userAgent;if(nh){lh=nh;break a}}lh=""}var W=function(a){return-1!=lh.indexOf(a)};var oh=W("Opera")||W("OPR"),ph=W("Trident")||W("MSIE"),qh=W("Edge"),rh;if(rh=W("Gecko"))rh=!(-1!=lh.toLowerCase().indexOf("webkit")&&!W("Edge"));var sh=rh&&!(W("Trident")||W("MSIE"))&&!W("Edge"),th=-1!=lh.toLowerCase().indexOf("webkit")&&!W("Edge");th&&W("Mobile");W("Macintosh");W("Windows");W("Linux")||W("CrOS");var uh=va.navigator||null;uh&&(uh.appVersion||"").indexOf("X11");W("Android");!W("iPhone")||W("iPod")||W("iPad");W("iPad");
var vh=function(){var a=lh;if(sh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qh)return/Edge\/([\d\.]+)/.exec(a);if(ph)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(th)return/WebKit\/(\S+)/.exec(a)},wh=function(){var a=va.document;return a?a.documentMode:void 0},xh=function(){if(oh&&va.opera){var a;var b=va.opera.version;try{a=b()}catch(f){a=b}return a}var c="",d=vh();d&&(c=d?d[1]:"");if(ph){var e=wh();if(e>parseFloat(c))return String(e)}return c}(),yh={},zh=function(a){var b;if(!(b=yh[a])){for(var c=
0,d=jh(String(xh)).split("."),e=jh(String(a)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"",m=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var p=m.exec(h)||["","",""],r=k.exec(l)||["","",""];if(0==p[0].length&&0==r[0].length)break;c=kh(0==p[1].length?0:parseInt(p[1],10),0==r[1].length?0:parseInt(r[1],10))||kh(0==p[2].length,0==r[2].length)||kh(p[2],r[2])}while(0==c)}b=yh[a]=0<=c}return b},Ah=va.document,Bh=Ah&&ph?wh()||("CSS1Compat"==Ah.compatMode?
parseInt(xh,10):5):void 0;var Ch;if(!(Ch=!sh&&!ph)){var Dh;if(Dh=ph)Dh=9<=Number(Bh);Ch=Dh}Ch||sh&&zh("1.9.1");ph&&zh("9");var Eh=function(a){Eh[" "](a);return a};Eh[" "]=function(){};var oa=function(a,b){var c="";ph&&!Fh(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Gh)a.srcdoc=d;else if(Hh){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Ih(a,d)},Gh=th&&"srcdoc"in document.createElement("iframe"),Hh=sh||th||ph&&zh(11),Ih=function(a,b){ph&&zh(7)&&!zh(10)&&6>Jh()&&Kh(b)&&(b=Lh(b));var c=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};ph&&!Fh(a)?Mh(a,c):c()},Jh=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Fh=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c&&null!=c.location.href)b:{try{Eh(c.foo);d=!0;break b}catch(e){}d=!1}b=d}catch(e){b=!1}return b}catch(e){return!1}},Nh=0,Mh=function(a,b){var c="goog_rendering_callback"+Nh++;window[c]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Kh=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Lh=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Ph=function(a,b,c,d){return function(){try{if(0<b.length){var e=b.shift(),f=Ph(a,b,c,d);if("SCRIPT"==String(e.nodeName).toUpperCase()&&"text/gtmscript"==e.type){var g=N.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var h=e.getAttribute("data-gtmsrc");h&&(g.src=h,ia(g,f));a.insertBefore(g,null);h||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var l=[];e.firstChild;)l.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);Ph(e,l,f,d)()}else a.insertBefore(e,null),f()}else c()}catch(m){q(d)}}};var Rh=function(a,b,c){if(N.body){var d=
a[yc];d instanceof fh&&(d=d.resolve(hh(b,c)),b=Le);if(a[Ae])try{oa(pa(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+d),q(b)}catch(e){q(c)}else a[Ce]?Qh(d,b,c):Ph(N.body,qa(d),b,c)()}else A.setTimeout(function(){Rh(a,b,c)},200)},_html=Rh;_html.a="html";_html.b=["customScripts"];
var $h=function(a,b,c,d){var e=b+": "+c+(d?" !important":""),f=document;if(f.createStyleSheet){var g=Xh(f),h=g.rules.length;g.addRule(a,e);return function(){g.removeRule?g.removeRule(h):g.deleteRule(h);g.addRule("x","-",h)}}var l=Yh(a+"{"+e+"}",f);Zh(l,f);var m=l.parentNode;return function(){m.removeChild(l)}},ai=null,Xh=function(a){if(ai)return ai;for(var b=a.styleSheets.length-1;0<=b;b--){var c=a.styleSheets[b],d=c.ownerNode;if(d&&d.parentNode&&"HEAD"==d.parentNode.tagName)return ai=c}0==a.styleSheets.length&&
a.createStyleSheet();return ai=a.styleSheets[0]},Yh=function(a,b){var c=(b||document).createElement("style");void 0!==c.cssText?c.cssText=a:c.innerHTML=a;return c},Zh=function(a,b){var c=b||document,d=c.getElementsByTagName("head")[0];d||(d=c.createElement("head"),c.body.parentNode.insertBefore(d,c.body));d.appendChild(a)};var ei={},gi=function(a,b,c,d,e){if(!Kf)return!1;var f=ei[a];f||(f={id:a,L:[],ba:0,ya:null,Da:!1},ei[a]=f);var g={id:a+":"+f.L.length,Ta:c,Oa:d,K:b,la:0,ia:e||null,Ca:0,aa:!1};f.L.push(g);null===b?(g.aa=!0,c(null)):fi(f);return!0},hi=function(a){var b=$h(a,"visibility","hidden",!0);return function(){H(b)&&b.apply();b=null}},ii=function(a,b,c,d,e){var f=hi(b.u);ma.push(f);return gi(a,b,function(a,b){c(a,b);f()},d,e)},fi=function(a){for(var b=a.ba;b<a.L.length;b++){var c=a.L[b],d=b==a.ba;if(!c.aa&&
!ji(d,c))break;c.aa&&d&&a.ba++}a.L.length>a.ba&&(a.ya||(a.ya=A.setTimeout(function(){a.ya=null;fi(a)},80)),la||a.Da||(a.Da=!0,ma.push(function(){fi(a)})))},ji=function(a,b){var c=[];if(b.K){var d=ki(b.K,b.id),e=null;b.ia&&(e=ki(b.ia,b.id+"-t"));for(var f=0;f<d.length;f++){var g=d[f],h;if(null!=e&&(h=e.length>f?e[f]:null,!h&&!la&&(null===b.ia.o||b.Ca+c.length<b.ia.o)))break;c.push({element:g,sb:h})}}if(!la&&b.Oa&&(!a||null==b.K.o||b.K.o!=b.la+c.length))return!1;for(var l=0;l<c.length;l++){var m=c[l].element,
k=c[l].sb;b.la++;li(m,b.id);k&&(b.Ca++,li(k,b.id+"-t"));b.Ta(m,k)}if(b.K.o&&b.K.o==b.la||la)b.aa=!0;return!0},li=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=!0},ki=function(a,b){for(var c=kf(a.u)||[],d=[],e=0;e<c.length;e++){var f=c[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){if(a.A&&!mi(f))break;d.push(f)}}return d},mi=function(a){if(la)return!0;for(;a;){if(a.nextSibling)return!0;a=a.parentNode}return!1};var pi,qi;var Ai=function(a){return function(){}},Bi=function(a){return function(){}};var $i=function(a){var b=A||va,c=b.onerror,d=!1;th&&!zh("535.3")&&(d=!d);b.onerror=function(b,f,g,h,l){c&&c(b,f,g,h,l);a({message:b,fileName:f,lb:g,Ib:h,error:l});return d}};var vj=43,wj=[],xj=[],yj=[],zj=new Se,Aj=[],Z=[],Wg=[],Xg=[],Bj=function(){this.D=[]};Bj.prototype.set=function(a,b){this.D.push([a,b]);return this};Bj.prototype.resolve=function(a,b){for(var c={},d=0;d<this.D.length;d++){var e=Cj(this.D[d][0],a,b),f=Cj(this.D[d][1],a,b);c[e]=f}return c};var Dj=function(a){this.index=a};Dj.prototype.resolve=function(a,b){var c=yj[this.index];if(c&&!b(c)){var d=c[Dc];if(a){if(a.get(d))return;a.set(d,!0)}c=Cj(c,a,b);a&&a.set(d,!1);return Te(c)}};
var _M=function(a){return new Dj(a)},Ej=function(a){this.resolve=function(b,c){for(var d=[],e=!1,f=0;f<a.length;f++){var g=Cj(wj[a[f]],b,c);g===kg&&(e=!0);d.push(g)}return e?new fh(d):d.join("")}},_T=function(a){return new Ej(arguments)},Fj=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.resolve=
function(c,d){var e=Cj(a[0],c,d);if(a[0]instanceof Dj&&b(8)&&b(16)){if(e===kg)return e;var f="gtm"+aa++;zj.set(f,e);return'google_tag_manager["GTM-PFTWN4"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=X[a[g]](e);return e}},_E=function(a,b){return new Fj(arguments)},Gj=function(a,b){this.s=a;this.ha=b},_R=function(a,b){return new Gj(a,b)},Hj=function(a,b){return Cj(a,new Se,b)},Cj=function(a,b,c){var d=a;if(a instanceof Dj||a instanceof Bj||a instanceof Ej||a instanceof Fj)return a.resolve(b,
c);if(!(a instanceof Gj))if(T(a))for(var d=[],e=0;e<a.length;e++)d[e]=Cj(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=Cj(a[f],b,c))}return d},Ij=function(a,b){var c=b[a],d=c;if(c instanceof Dj||c instanceof Fj||c instanceof Ej||c instanceof Gj)d=c;else if(T(c))for(var d=[],e=0;e<c.length;e++)d[e]=Ij(c[e],b);else if("object"==typeof c){var d=new Bj,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],Ij(c[f],b))}return d},Kj=function(a,b){for(var c=b?b.split(","):
[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=wj[e[1]]);if(1==a)for(var f=Jj(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=xj[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=Jj(e[g]);3==a&&(c[d]=wj[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var l=0;l<e[g].length;l++)e[g][l]=wj[e[g][l]]}else e[g]=[];5==a&&(c[d]=e[0])}return c},Jj=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<vj;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f=0,f=65<e&&90>=
e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},Lj=function(a,b,c){a.push.apply(a,Kj(b,c))};
var Bg=function(){},Tj=function(a){},Eg=function(){},Uj=function(a){},Vj=function(a,b){},Wj=function(a,b){},Cg=function(a){};var Xj=function(a){var b=this;this.g=a;this.complete=this.La=!1;this.ga=[];this.Z=[];this.O=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||bf(b.ga);hf(b,1)};this.N=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||bf(b.Z);hf(b,2)};this.v=Le},Yj=function(a,b){a.ga.push(b)},
Zj=function(a,b){a.Z.push(b)},ak=function(a){this.F=[];this.xa=[];this.Fa={};this.ra=[];this.M=0;this.Ja={};this.Ma={};this.ja={};this.event=a};ak.prototype.addListener=function(a){this.ra.push(a)};
var bk=function(a,b,c,d,e,f){if(!c.complete){a.F[b]=c;void 0==d&&(d=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);d=T(d)?d.slice():["or",d];e=T(e)?e.slice():[e];f=T(f)?f.slice():[f];a.Fa[b]=d;a.Ja[b]=0<e.length;a.Ma[b]=0<f.length;a.M++;var g=function(){0<a.M&&a.M--;0<a.M||bf(a.ra)};Yj(c,g);Zj(c,g)}},ck=function(a,b,c){a.F[b]&&(Yj(a.F[b],function(){c(b,!0)}),Zj(a.F[b],function(){c(b,!1)}))},dk=function(a,b){var c=!1;return function(d,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof Gj&&a[g].s===
d||a[g]===d){f=g;break a}f=-1}c||0>f||("or"==a[0]?e?(c=!0,b()):(a.splice(f,1),1==a.length&&(c=!0)):e?(a.splice(f,1),1==a.length&&(c=!0,b())):c=!0)}},hk=function(a,b){var c=[],d=!1,e=function(b){var f,g,h=Z[b];if(a.event.c(h)){}else g=ek(h,b,a);if(f=g){var k=fk(b,!0);0<k.length&&e(k[0].s);c.push(f);var l=fk(b,!1);0<l.length&&e(l[0].s)}else d=
!0};e(b);if(!d){for(var f=0;f<c.length;f++){var g=c[f],h=fk(g.g,!0);if(0<h.length){var l=c[f-1],m=gk(g);Yj(l,m);0==h[0].ha&&Zj(l,m)}var k=fk(g.g,!1);0<k.length&&(m=gk(c[f+1]),Yj(g,m),0==k[0].ha&&Zj(g,m))}a.xa.push(c)}},fk=function(a,b){var c=b?Od:ee,d=Z[a],e=void 0===d[c]?[]:d[c];return T(e)?e:[e]},gk=function(a){return function(){a.v()}},jk=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=[],f=function(a){var b=fk(a,!0);0<b.length&&f(b[0].s);e.push(a);var c=fk(a,!1);0<c.length&&f(c[0].s)};
f(d.g);b[d.g]=e}ik(a,b);return b},ik=function(a,b){for(var c=0;c<a.length;c++){var d=a[c].g,e;for(e in b)if(b.hasOwnProperty(e)&&e!=d&&-1<Oe(b[e],d)){delete b[d];break}}};var lk=function(a,b){return function(){a[vc]=b.O;a[wc]=b.N;var c=b.g,d=b.i&&b.i.ja[c],e=Ha[c]&&Ha[c].state,f=d?void 0!==d:b.La,g=Ha[c]&&Ha[c].firingOption,h=g&&2==g,l=g&&1==g;if((f||e&&0!=e)&&(f||h)&&(h||l))h&&Ha[c]&&1==Ha[c].state||l&&b.i&&1==b.i.ja[c]?b.O():b.N();else{var m=b.i?b.i.event:void 0;a=kk(a,m?m.c:Jf());hf(b,0);if(m){var k=a;Vj(m,c)}Te(a,b.O,b.N)}}},kk=function(a,b){a=Hj(a,b);return a},ek=function(a,b,c){var d=new Xj(b);d.i=c;Yj(d,Ai(a));Zj(d,Bi(a));d.v=lk(a,d);return d};var qk,rk;var Ak=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=Aj[b]&&Hj(Aj[b],c),e=d;if(d)if(d[Sa]&&T(d[R]))for(var f=d[R],e=!1,g=0;!e&&g<f.length;g++)d[R]=f[g],e=Te(d);else e=Te(d);a[b]=[e,d]}return a[b]}},Sj=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.I(c[d],a.c)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.I(e[d],a.c)[0])return!1;return!0},Bk=!1,vg=function(a,b,c,d){switch(b){case "gtm.js":if(Bk)return!1;Bk=!0;break;case "gtm.sync":if(G("gtm.snippet")!=Ea)return!1}G("tagTypeBlacklist");
for(var e={id:a,name:b,V:c||Le,U:Jj(),fa:Jj(),I:Ak(),c:Jf()},f=[],g=0;g<Wg.length;g++)if(Sj(e,Wg[g])){f[g]=!0;for(var h=e,l=Wg[g],m=l[1],k=0;k<m.length;k++)h.U[m[k]]=!0;for(var p=l[3],k=0;k<p.length;k++)h.fa[p[k]]=!0}else f[g]=!1;Vj(e);var t=[];for(var v=0;v<vj;v++)if(e.U[v]&&!e.fa[v])if(e.c(Z[v])){}else{t[v]=Z[v];}e.J=t;for(var u=new ak(e),z=0;z<vj;z++)if(e.U[z]&&!e.fa[z])if(e.c(Z[z])){}else{var D=e.J[z],E=ek(D,z,u);bk(u,z,E,D[Rb],D[Od],D[ee]);if(D[Ia])break}u.addListener(e.V);for(var F=[],y=
0;y<u.F.length;y++){var C=u.F[y];if(C){var x=u.Fa[y],K=u.Ja[y],U=u.Ma[y];if(0!=x.length||K||U){if(0<x.length)for(var da=dk(x,C.v),Y=0;Y<x.length;Y++)x[Y]instanceof Gj&&x[Y].s!=y&&ck(u,x[Y].s,da);(K||U)&&hk(u,y)}else F.push(y)}}for(y=0;y<F.length;y++)u.F[F[y]].v();for(y=0;y<u.xa.length;y++){for(var vb=u.xa[y],Aa=vb,ef=[],cd=0;cd<Aa.length;cd++){var dd=Aa[cd],cf=dd.g,df=Ha[cf],ad=df.firingOption;0!=ad&&(1==ad&&void 0!==dd.i.ja[cf]||2==ad&&void 0!==df.state)&&ef.push(dd)}var bd=jk(ef),cc=void 0;for(cc in bd)if(bd.hasOwnProperty(cc)){for(var Ue=
void 0,Ri=void 0,Xc=bd[cc],Ok=Xc[0],Si=Xc[Xc.length-1],Ti,za=0;za<Aa.length;za++){var Yc=Aa[za];!Ue&&Yc.g==Ok&&0<za&&(Ue=Aa[za-1]);Yc.g==Si&&za<Aa.length-1&&(Ri=Aa[za+1]);if(-1<Oe(Xc,Yc.g))if(Ti=Aa.splice(za,1)[0],Yc.g==Si)break;else za--}if(Ti){var Ui=Number(cc),ca=Ue,Ve=Ri;if(ca){var Pk=ca.ga[0],Qk=ca.Z[0],Vi=ca;Vi.ga=[];Vi.Z=[];Yj(ca,Pk);Zj(ca,Qk)}if(ca&&Ve){var We=gk(Ve);Yj(ca,We);var Xe=fk(ca.g,!1);0<Xe.length&&Xe[0].s!=Ui&&0==Xe[0].ha&&Zj(ca,We);var Ye=fk(Ve.g,!0);0<Ye.length&&Ye[0].s!=Ui&&
0==Ye[0].ha&&Zj(ca,We)}}}0<vb.length&&vb[0].v()}0<u.M||bf(u.ra);d&&H(d)&&d({passingRules:f,
resolvedTags:e.J});for(var Wi in e.J)if(e.J.hasOwnProperty(Wi)){var Xi=e.J[Wi],Ze;if(!(Ze=void 0==Xi[Dc])){var Yi=Xi[Dc];Ze=!("function"!=typeof String.prototype.startsWith?0===Yi.indexOf("_implicit"):Yi.startsWith("_implicit"))}if(Ze)return!0}return!1};var Ck={macro:function(a){if(zj.contains(a))return zj.get(a)}};Ck.dataLayer=Ef;Ck.onHtmlSuccess=ih(!0);Ck.onHtmlFailure=ih(!1);Ck.Xa=function(){var a=A.google_tag_manager;a||(a=A.google_tag_manager={});a["GTM-PFTWN4"]||(a["GTM-PFTWN4"]=Ck);ja=a};wj.push.apply(wj,function(){for(var a=[_u,'url','',_html,'url hostname','host',_cn,_M(1),'staging.sitepoint.com',_eq,_e,'_event',_M(2),'gtm.js','\x3cscript type\x3d\x22text/gtmscript\x22\x3evar thisisworking\x3d!0;\x3c/script\x3e',2,'url path','path',_f,'referrer','event',_v,'element','gtm.element','element classes','gtm.elementClasses','element id','gtm.elementId','element target','gtm.elementTarget',_et,'element text','element url','gtm.elementUrl','history new url fragment','gtm.newUrlFragment','history old url fragment','gtm.oldUrlFragment','history new state','gtm.newHistoryState','history old state','gtm.oldHistoryState','history change source','gtm.historyChangeSource'],b=[],c=0;c<a.length;c++)b[c]=Ij(c,a);return b}());Lj(xj,0,"3:0,5:1,3:3,5:4,2:5,3:6,0:7,1:8,3:9,3:10,5:11,0:12,1:13,4:14,7:15,5:16,2:17,3:18,5:19,5:20,3:21,5:22,6:23,5:24,6:25,5:26,6:27,5:28,6:29,3:30,5:31,5:32,6:33,5:34,6:35,5:36,6:37,5:38,6:39,5:40,6:41,5:42,6:43");Lj(yj,1,"D,Z,AY,BAY,AAgB,AIAC,AAAc,AAAkB,AAAEG,AAAEY,AAAAgB,AAAEAG,AAAEAY,AAAEAgB,AAAEAAG,AAAEAAY,AAAEAAgB");Lj(Aj,1,"gD,AkB");Lj(Z,1,"EAG");Lj(Wg,2,"D:B::");Lj(Xg,4,"2:");
for(var Dk=0;Dk<Z.length;Dk++){var Ek=Z[Dk],Fk=1;Ek[kd]?Fk=2:Ek[we]&&(Fk=0);Ha[Dk]={firingOption:Fk,state:void 0}}Ck.Xa();
(function(a){})("async");
(function(){var a=w("dataLayer",[],!1),b=w("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};ma.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});wf.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(wg.push.apply(wg,b);300<this.length;)this.shift();return Fg()};wg.push.apply(wg,a.slice(0));q(Fg)})();
if("interactive"==N.readyState&&!N.createEventObject||"complete"==N.readyState)of();else{V(N,"DOMContentLoaded",of);V(N,"readystatechange",of);if(N.createEventObject&&N.documentElement.doScroll){var Nk=!0;try{Nk=!A.frameElement}catch(a){}Nk&&qf()}V(A,"load",of)}"complete"===N.readyState?xf():V(A,"load",xf);
(function(a){})("async");(function(){})();var _vs="res_ts:1426209420541000,srv_cl:111973537,ds:live,cv:8";
})()
