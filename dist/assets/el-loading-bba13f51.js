import{K as w,r as k,l as B,aZ as I,a_ as N,a$ as f,f as S,w as V,g as E,T as P,aC as O,b0 as b,b1 as R,ah as _,a5 as A,b2 as j,b3 as m,b4 as C,b5 as $,a0 as Z,b6 as K}from"./index-6d8ceaa0.js";function q(t){let e;const l=w("loading"),o=k(!1),n=B({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(s){n.text=s}function c(){const s=n.parent;if(!s.vLoadingAddClassList){let u=s.getAttribute("loading-number");u=Number.parseInt(u)-1,u?s.setAttribute("loading-number",u.toString()):(b(s,l.bm("parent","relative")),s.removeAttribute("loading-number")),b(s,l.bm("parent","hidden"))}d(),v.unmount()}function d(){var s,u;(u=(s=r.$el)==null?void 0:s.parentNode)==null||u.removeChild(r.$el)}function p(){var s;t.beforeClose&&!t.beforeClose()||(o.value=!0,clearTimeout(e),e=window.setTimeout(i,400),n.visible=!1,(s=t.closed)==null||s.call(t))}function i(){if(!o.value)return;const s=n.parent;o.value=!1,s.vLoadingAddClassList=void 0,c()}const v=I({name:"ElLoading",setup(){return()=>{const s=n.spinner||n.svg,u=f("svg",{class:"circular",viewBox:n.svgViewBox?n.svgViewBox:"0 0 50 50",...s?{innerHTML:s}:{}},[f("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),T=n.text?f("p",{class:l.b("text")},[n.text]):void 0;return f(O,{name:l.b("fade"),onAfterLeave:i},{default:S(()=>[V(E("div",{style:{backgroundColor:n.background||""},class:[l.b("mask"),n.customClass,n.fullscreen?"is-fullscreen":""]},[f("div",{class:l.b("spinner")},[u,T])]),[[P,n.visible]])])})}}}),r=v.mount(document.createElement("div"));return{...N(n),setText:a,removeElLoadingChild:d,close:p,handleAfterLeave:i,vm:r,get $el(){return r.$el}}}let g;const z=function(t={}){if(!R)return;const e=D(t);if(e.fullscreen&&g)return g;const l=q({...e,closed:()=>{var n;(n=e.closed)==null||n.call(e),e.fullscreen&&(g=void 0)}});F(e,e.parent,l),L(e,e.parent,l),e.parent.vLoadingAddClassList=()=>L(e,e.parent,l);let o=e.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",e.parent.setAttribute("loading-number",o),e.parent.appendChild(l.$el),_(()=>l.visible.value=e.visible),e.fullscreen&&(g=l),l},D=t=>{var e,l,o,n;let a;return A(t.target)?a=(e=document.querySelector(t.target))!=null?e:document.body:a=t.target||document.body,{parent:a===document.body||t.body?document.body:a,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:a===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(o=t.lock)!=null?o:!1,customClass:t.customClass||"",visible:(n=t.visible)!=null?n:!0,target:a}},F=async(t,e,l)=>{const{nextZIndex:o}=j(),n={};if(t.fullscreen)l.originalPosition.value=m(document.body,"position"),l.originalOverflow.value=m(document.body,"overflow"),n.zIndex=o();else if(t.parent===document.body){l.originalPosition.value=m(document.body,"position"),await _();for(const a of["top","left"]){const c=a==="top"?"scrollTop":"scrollLeft";n[a]=`${t.target.getBoundingClientRect()[a]+document.body[c]+document.documentElement[c]-Number.parseInt(m(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])n[a]=`${t.target.getBoundingClientRect()[a]}px`}else l.originalPosition.value=m(e,"position");for(const[a,c]of Object.entries(n))l.$el.style[a]=c},L=(t,e,l)=>{const o=w("loading");["absolute","fixed","sticky"].includes(l.originalPosition.value)?b(e,o.bm("parent","relative")):C(e,o.bm("parent","relative")),t.fullscreen&&t.lock?C(e,o.bm("parent","hidden")):b(e,o.bm("parent","hidden"))},x=Symbol("ElLoading"),h=(t,e)=>{var l,o,n,a;const c=e.instance,d=r=>$(e.value)?e.value[r]:void 0,p=r=>{const s=A(r)&&(c==null?void 0:c[r])||r;return s&&k(s)},i=r=>p(d(r)||t.getAttribute(`element-loading-${K(r)}`)),y=(l=d("fullscreen"))!=null?l:e.modifiers.fullscreen,v={text:i("text"),svg:i("svg"),svgViewBox:i("svgViewBox"),spinner:i("spinner"),background:i("background"),customClass:i("customClass"),fullscreen:y,target:(o=d("target"))!=null?o:y?void 0:t,body:(n=d("body"))!=null?n:e.modifiers.body,lock:(a=d("lock"))!=null?a:e.modifiers.lock};t[x]={options:v,instance:z(v)}},H=(t,e)=>{for(const l of Object.keys(e))Z(e[l])&&(e[l].value=t[l])},Y={mounted(t,e){e.value&&h(t,e)},updated(t,e){const l=t[x];e.oldValue!==e.value&&(e.value&&!e.oldValue?h(t,e):e.value&&e.oldValue?$(e.value)&&H(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[x])==null||e.instance.close()}};export{Y as v};
