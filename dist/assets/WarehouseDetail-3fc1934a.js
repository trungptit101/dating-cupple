import{aO as Ye,aP as Je,aQ as Ge,C as ne,D as we,G as Le,d as U,a6 as ie,O as Se,aj as xe,K as ce,r as c,I as H,ah as Ce,aR as Be,a as P,c as O,v as Me,i as W,ag as Ze,N as Re,aS as et,aT as tt,L as te,m as Z,aU as at,g as t,S as le,aJ as st,R as lt,aV as ot,ax as oe,a9 as nt,J as it,aW as ct,M as ke,aB as Ee,a5 as rt,H as ut,aF as dt,aX as Pe,l as Ve,aY as pt,w as re,T as _t,h as M,W as vt,X as mt,f as b,b as l,t as A,y as ae,Y as $e,p as ue,k as de,_ as se,E as G,e as R,n as We,q as pe,ak as ze,F as ft,j as bt,u as Oe}from"./index-151fc77b.js";import"./el-col-63bd339e.js";import{C as ht}from"./CPageContainer-0f95466f.js";/* empty css                     */import{S as j}from"./http-7590b1ae.js";import{C as gt}from"./CSlideCarousel-4eb2ff80.js";import{W as Q}from"./WarehouseService-070382c0.js";import{E as yt,a as wt}from"./index-436c2fb0.js";import{v as Te}from"./el-loading-08852edf.js";import{_ as Ne,E as Ue,a as Ie}from"./el-table-column-3b66c8c6.js";import{E as he}from"./EImg-ec92c0e5.js";import{B as ge,_ as ye}from"./BaseService-a5d4f305.js";import{_ as Ae}from"./CBarcode.vue_vue_type_script_setup_true_lang-b6b47c31.js";import{E as St}from"./index-7096630e.js";import{E as xt}from"./index-c0c95cae.js";import{c as F}from"./index-eee19b58.js";import{U as je}from"./event-9519ab40.js";import"./index-78873eb5.js";import"./flatten-ae6d9f23.js";import"./validator-caec92b0.js";const Ct=(e,a,i)=>Je(e.subTree).filter(o=>{var u;return Ge(o)&&((u=o.type)==null?void 0:u.name)===a&&!!o.component}).map(o=>o.component.uid).map(o=>i[o]).filter(o=>!!o),kt=(e,a)=>{const i={},y=Ye([]);return{children:y,addChild:u=>{i[u.uid]=u,y.value=Ct(e,a,i)},removeChild:u=>{delete i[u],y.value=y.value.filter(k=>k.uid!==u)}}},_e=Symbol("tabsRootContextKey"),$t=ne({tabs:{type:we(Array),default:()=>Le([])}}),Fe="ElTabBar",Tt=U({name:Fe}),Nt=U({...Tt,props:$t,setup(e,{expose:a}){const i=e,y=ie(),d=Se(_e);d||xe(Fe,"<el-tabs><el-tab-bar /></el-tabs>");const o=ce("tabs"),u=c(),k=c(),m=()=>{let C=0,h=0;const w=["top","bottom"].includes(d.props.tabPosition)?"width":"height",_=w==="width"?"x":"y",T=_==="x"?"left":"top";return i.tabs.every(g=>{var N,p;const I=(p=(N=y.parent)==null?void 0:N.refs)==null?void 0:p[`tab-${g.uid}`];if(!I)return!1;if(!g.active)return!0;C=I[`offset${F(T)}`],h=I[`client${F(w)}`];const z=window.getComputedStyle(I);return w==="width"&&(i.tabs.length>1&&(h-=Number.parseFloat(z.paddingLeft)+Number.parseFloat(z.paddingRight)),C+=Number.parseFloat(z.paddingLeft)),!1}),{[w]:`${h}px`,transform:`translate${F(_)}(${C}px)`}},$=()=>k.value=m();return H(()=>i.tabs,async()=>{await Ce(),$()},{immediate:!0}),Be(u,()=>$()),a({ref:u,update:$}),(C,h)=>(P(),O("div",{ref_key:"barRef",ref:u,class:Me([W(o).e("active-bar"),W(o).is(W(d).props.tabPosition)]),style:Ze(k.value)},null,6))}});var It=Re(Nt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Et=ne({panes:{type:we(Array),default:()=>Le([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Pt={tabClick:(e,a,i)=>i instanceof Event,tabRemove:(e,a)=>a instanceof Event},De="ElTabNav",zt=U({name:De,props:Et,emits:Pt,setup(e,{expose:a,emit:i}){const y=ie(),d=Se(_e);d||xe(De,"<el-tabs><tab-nav /></el-tabs>");const o=ce("tabs"),u=et(),k=tt(),m=c(),$=c(),C=c(),h=c(),w=c(!1),_=c(0),T=c(!1),g=c(!0),N=te(()=>["top","bottom"].includes(d.props.tabPosition)?"width":"height"),p=te(()=>({transform:`translate${N.value==="width"?"X":"Y"}(-${_.value}px)`})),I=()=>{if(!m.value)return;const n=m.value[`offset${F(N.value)}`],r=_.value;if(!r)return;const s=r>n?r-n:0;_.value=s},z=()=>{if(!m.value||!$.value)return;const n=$.value[`offset${F(N.value)}`],r=m.value[`offset${F(N.value)}`],s=_.value;if(n-s<=r)return;const E=n-s>r*2?s+r:n-r;_.value=E},f=async()=>{const n=$.value;if(!w.value||!C.value||!m.value||!n)return;await Ce();const r=C.value.querySelector(".is-active");if(!r)return;const s=m.value,E=["top","bottom"].includes(d.props.tabPosition),L=r.getBoundingClientRect(),D=s.getBoundingClientRect(),v=E?n.offsetWidth-D.width:n.offsetHeight-D.height,B=_.value;let x=B;E?(L.left<D.left&&(x=B-(D.left-L.left)),L.right>D.right&&(x=B+L.right-D.right)):(L.top<D.top&&(x=B-(D.top-L.top)),L.bottom>D.bottom&&(x=B+(L.bottom-D.bottom))),x=Math.max(x,0),_.value=Math.min(x,v)},V=()=>{var n;if(!$.value||!m.value)return;e.stretch&&((n=h.value)==null||n.update());const r=$.value[`offset${F(N.value)}`],s=m.value[`offset${F(N.value)}`],E=_.value;s<r?(w.value=w.value||{},w.value.prev=E,w.value.next=E+s<r,r-E<s&&(_.value=r-s)):(w.value=!1,E>0&&(_.value=0))},Y=n=>{const r=n.code,{up:s,down:E,left:L,right:D}=oe;if(![s,E,L,D].includes(r))return;const v=Array.from(n.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),B=v.indexOf(n.target);let x;r===L||r===s?B===0?x=v.length-1:x=B-1:B<v.length-1?x=B+1:x=0,v[x].focus({preventScroll:!0}),v[x].click(),J()},J=()=>{g.value&&(T.value=!0)},S=()=>T.value=!1;return H(u,n=>{n==="hidden"?g.value=!1:n==="visible"&&setTimeout(()=>g.value=!0,50)}),H(k,n=>{n?setTimeout(()=>g.value=!0,50):g.value=!1}),Be(C,V),Z(()=>setTimeout(()=>f(),0)),at(()=>V()),a({scrollToActiveTab:f,removeFocus:S}),H(()=>e.panes,()=>y.update(),{flush:"post",deep:!0}),()=>{const n=w.value?[t("span",{class:[o.e("nav-prev"),o.is("disabled",!w.value.prev)],onClick:I},[t(le,null,{default:()=>[t(st,null,null)]})]),t("span",{class:[o.e("nav-next"),o.is("disabled",!w.value.next)],onClick:z},[t(le,null,{default:()=>[t(lt,null,null)]})])]:null,r=e.panes.map((s,E)=>{var L,D,v,B;const x=s.uid,ee=s.props.disabled,me=(D=(L=s.props.name)!=null?L:s.index)!=null?D:`${E}`,fe=!ee&&(s.isClosable||e.editable);s.index=`${E}`;const qe=fe?t(le,{class:"is-icon-close",onClick:q=>i("tabRemove",s,q)},{default:()=>[t(ot,null,null)]}):null,Qe=((B=(v=s.slots).label)==null?void 0:B.call(v))||s.props.label,Xe=!ee&&s.active?0:-1;return t("div",{ref:`tab-${x}`,class:[o.e("item"),o.is(d.props.tabPosition),o.is("active",s.active),o.is("disabled",ee),o.is("closable",fe),o.is("focus",T.value)],id:`tab-${me}`,key:`tab-${x}`,"aria-controls":`pane-${me}`,role:"tab","aria-selected":s.active,tabindex:Xe,onFocus:()=>J(),onBlur:()=>S(),onClick:q=>{S(),i("tabClick",s,me,q)},onKeydown:q=>{fe&&(q.code===oe.delete||q.code===oe.backspace)&&i("tabRemove",s,q)}},[Qe,qe])});return t("div",{ref:C,class:[o.e("nav-wrap"),o.is("scrollable",!!w.value),o.is(d.props.tabPosition)]},[n,t("div",{class:o.e("nav-scroll"),ref:m},[t("div",{class:[o.e("nav"),o.is(d.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(d.props.tabPosition))],ref:$,style:p.value,role:"tablist",onKeydown:Y},[e.type?null:t(It,{ref:h,tabs:[...e.panes]},null),r])])])}}}),Dt=ne({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:we(Function),default:()=>!0},stretch:Boolean}),be=e=>rt(e)||ut(e),Lt={[je]:e=>be(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>be(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>be(e),tabAdd:()=>!0};var Bt=U({name:"ElTabs",props:Dt,emits:Lt,setup(e,{emit:a,slots:i,expose:y}){var d,o;const u=ce("tabs"),{children:k,addChild:m,removeChild:$}=kt(ie(),"ElTabPane"),C=c(),h=c((o=(d=e.modelValue)!=null?d:e.activeName)!=null?o:"0"),w=p=>{h.value=p,a(je,p),a("tabChange",p)},_=async p=>{var I,z,f;if(!(h.value===p||Ee(p)))try{await((I=e.beforeLeave)==null?void 0:I.call(e,p,h.value))!==!1&&(w(p),(f=(z=C.value)==null?void 0:z.removeFocus)==null||f.call(z))}catch{}},T=(p,I,z)=>{p.props.disabled||(_(I),a("tabClick",p,z))},g=(p,I)=>{p.props.disabled||Ee(p.props.name)||(I.stopPropagation(),a("edit",p.props.name,"remove"),a("tabRemove",p.props.name))},N=()=>{a("edit",void 0,"add"),a("tabAdd")};return nt({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},te(()=>!!e.activeName)),H(()=>e.activeName,p=>_(p)),H(()=>e.modelValue,p=>_(p)),H(h,async()=>{var p;await Ce(),(p=C.value)==null||p.scrollToActiveTab()}),it(_e,{props:e,currentName:h,registerPane:m,unregisterPane:$}),y({currentName:h}),()=>{const p=e.editable||e.addable?t("span",{class:u.e("new-tab"),tabindex:"0",onClick:N,onKeydown:f=>{f.code===oe.enter&&N()}},[t(le,{class:u.is("icon-plus")},{default:()=>[t(ct,null,null)]})]):null,I=t("div",{class:[u.e("header"),u.is(e.tabPosition)]},[p,t(zt,{ref:C,currentName:h.value,editable:e.editable,type:e.type,panes:k.value,stretch:e.stretch,onTabClick:T,onTabRemove:g},null)]),z=t("div",{class:u.e("content")},[ke(i,"default")]);return t("div",{class:[u.b(),u.m(e.tabPosition),{[u.m("card")]:e.type==="card",[u.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[I,z]:[z,I]])}}});const Mt=ne({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),Rt=["id","aria-hidden","aria-labelledby"],He="ElTabPane",Vt=U({name:He}),Wt=U({...Vt,props:Mt,setup(e){const a=e,i=ie(),y=dt(),d=Se(_e);d||xe(He,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=ce("tab-pane"),u=c(),k=te(()=>a.closable||d.props.closable),m=Pe(()=>{var _;return d.currentName.value===((_=a.name)!=null?_:u.value)}),$=c(m.value),C=te(()=>{var _;return(_=a.name)!=null?_:u.value}),h=Pe(()=>!a.lazy||$.value||m.value);H(m,_=>{_&&($.value=!0)});const w=Ve({uid:i.uid,slots:y,props:a,paneName:C,active:m,index:u,isClosable:k});return Z(()=>{d.registerPane(w)}),pt(()=>{d.unregisterPane(w.uid)}),(_,T)=>W(h)?re((P(),O("div",{key:0,id:`pane-${W(C)}`,class:Me(W(o).b()),role:"tabpanel","aria-hidden":!W(m),"aria-labelledby":`tab-${W(C)}`},[ke(_.$slots,"default")],10,Rt)),[[_t,W(m)]]):M("v-if",!0)}});var Ke=Re(Wt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const Ot=vt(Bt,{TabPane:Ke}),Ut=mt(Ke);const K=e=>(ue("data-v-b3fa5c30"),e=e(),de(),e),At={class:"p-16"},jt={class:"baseDescriptions__title"},Ft={class:"baseDescriptions"},Ht={class:"baseDescriptions__flex"},Kt={class:"baseDescriptions__label"},qt=K(()=>l("i",{class:"icon-clock-1 mr-5"},null,-1)),Qt={class:"baseDescriptions__content"},Xt=K(()=>l("i",{class:"icon-frame-4 mr-5"},null,-1)),Yt={key:0,class:"baseDescriptions__flex"},Jt=K(()=>l("div",{class:"baseDescriptions__label"},[l("p",null,"Mã kho")],-1)),Gt={class:"baseDescriptions__content"},Zt={class:"baseDescriptions__label__ellipsis"},ea={key:1,class:"baseDescriptions__flex"},ta=K(()=>l("div",{class:"baseDescriptions__label"},[l("p",null,"Loại kho")],-1)),aa={class:"baseDescriptions__content"},sa={key:2,class:"baseDescriptions__flex"},la=K(()=>l("div",{class:"baseDescriptions__label"},[l("p",null,"Địa chỉ")],-1)),oa={class:"baseDescriptions__content"},na={key:3,class:"baseDescriptions__flex"},ia=K(()=>l("div",{class:"baseDescriptions__label"},[l("p",null,"Người phụ trách")],-1)),ca={class:"baseDescriptions__content"},ra=K(()=>l("br",null,null,-1)),ua={key:4,class:"baseDescriptions__flex"},da=K(()=>l("div",{class:"baseDescriptions__label"},[l("h3",null,"Mô tả chi tiết")],-1)),pa={class:"baseDescriptions__content"},_a=["innerHTML"],va=U({__name:"WarehouseBasicInfo",setup(e){const a=$e();Z(async()=>{a.params.id&&await y(a.params.id.toString())});const i=c({}),y=async d=>{try{const{code:o,data:u}=await Q.getDetail(d);o===j&&(i.value=u)}catch(o){console.log(111,o)}};return(d,o)=>{const u=yt,k=wt;return P(),O("div",At,[t(k,{gutter:30},{default:b(()=>[t(u,{xs:24,md:10},{default:b(()=>[t(W(gt),{images:i.value.images},null,8,["images"])]),_:1}),t(u,{xs:24,md:14},{default:b(()=>[l("h3",jt,A(i.value.name),1),l("div",Ft,[l("div",Ht,[l("div",Kt,[l("h4",null,[qt,ae(A(i.value.createdAt),1)])]),l("div",Qt,[l("h4",null,[Xt,ae(A(i.value.createdByUserName),1)])])]),i.value.code?(P(),O("div",Yt,[Jt,l("div",Gt,[l("p",Zt,A(i.value.code),1)])])):M("",!0),i.value.warehouseType?(P(),O("div",ea,[ta,l("div",aa,[l("p",null,A(i.value.warehouseType),1)])])):M("",!0),i.value.address?(P(),O("div",sa,[la,l("div",oa,[l("p",null,A(i.value.address),1)])])):M("",!0),i.value.persionIncharge?(P(),O("div",na,[ia,l("div",ca,[l("p",null,A(i.value.persionIncharge),1)])])):M("",!0),ra,i.value.description?(P(),O("div",ua,[da,l("div",pa,[l("p",{innerHTML:i.value.description},null,8,_a)])])):M("",!0)])]),_:1})]),_:1})])}}});const ma=se(va,[["__scopeId","data-v-b3fa5c30"]]),ve=e=>(ue("data-v-dcd40ec9"),e=e(),de(),e),fa={class:"tbl"},ba={class:"d-flex justify-between"},ha={class:"product__filter d-flex align-items-center justify-start flex-wrap"},ga=ve(()=>l("i",{class:"icon-Search"},null,-1)),ya=ve(()=>l("i",{class:"icon-Resset"},null,-1)),wa=ve(()=>l("i",{class:"icon-export-2 mr-4"},null,-1)),Sa=ve(()=>l("span",null,"Export",-1)),xa={class:"d-flex align-items-center justify-end mt-16"},Ca=U({__name:"WarehouseInventoryProduct",setup(e){const a=c({page:1,pageSize:10,productId:null,warehouseId:null}),i=c({page:1,pageSize:10,keyword:""}),y=c(!1),d=c([]),o=c([]),u=c(0),k=c(!1),m=$e();Z(async()=>{m.params.id&&(a.value.warehouseId=Number(m.params.id)),await Promise.all([h(),w()])});const $=()=>{a.value.page=1,h()},C=()=>{a.value={page:1,pageSize:a.value.pageSize,productId:null,warehouseId:Number(m.params.id)},h()},h=async()=>{try{k.value=!0;const{code:T,data:g}=await Q.getListProductInventory(a.value);T===j&&(o.value=g.items,u.value=g.totalElement,k.value=!1)}catch{k.value=!1,G({message:"Có lỗi xảy ra",type:"error"})}},w=async T=>{try{y.value=!0,i.value.keyword=T?T.trim():"";const{code:g,data:N}=await ge.getListProduct(i.value);g===j&&(d.value=N.items,y.value=!1)}catch{y.value=!1}},_=async()=>{try{const T=await Q.exportInventoryProduct(a.value);T&&We(T,"Danh sách tồn kho theo sản phẩm")}catch{G({message:"Có lỗi xảy ra",type:"error"})}};return(T,g)=>{const N=pe,p=Ue,I=Ie,z=Te;return P(),O("div",fa,[l("div",ba,[l("div",ha,[t(ye,{items:d.value,remote:!0,filterable:!0,"reserve-keyword":!0,"remote-show-suffix":!0,loading:y.value,remoteMethod:w,"item-value":"value","item-label":"label",modelValue:a.value.productId,"onUpdate:modelValue":g[0]||(g[0]=f=>a.value.productId=f),class:"product__filter__item mr-8 mb-8",placeholder:"Nhập tên hoặc mã sản phẩm",maxWidth:"300px"},null,8,["items","loading","modelValue"]),t(N,{type:"primary",onClick:$,class:"mb-8"},{default:b(()=>[ga]),_:1}),t(N,{class:"mb-8",onClick:C},{default:b(()=>[ya]),_:1})]),t(N,{type:"info",onClick:_},{default:b(()=>[wa,Sa]),_:1})]),re((P(),R(I,{data:o.value,class:"tbl__table",ref:"multipleTableRef","row-key":"id"},{default:b(()=>[t(p,{prop:"productImage",label:"Ảnh",width:"205",align:"center"},{default:b(({row:f})=>[f.productImage?(P(),R(he,{key:0,class:"form__ecommerce__logo",src:f.productImage,size:"65px"},null,8,["src"])):M("",!0)]),_:1}),t(p,{prop:"productName",label:"Tên sản phẩm","min-width":"240",align:"left","header-align":"center"}),t(p,{prop:"barcode",label:"Mã vạch",width:"205",align:"center"},{default:b(f=>[f.row.barcode?(P(),R(Ae,{key:0,value:f.row.barcode,id:f.$index},null,8,["value","id"])):M("",!0)]),_:1}),t(p,{prop:"brand",label:"Thương hiệu",width:"205",align:"center"}),t(p,{prop:"quantity",label:"Số lượng tồn",width:"205",align:"center"}),t(p,{prop:"quantityUnit",label:"Đơn vị",width:"205",align:"center"})]),_:1},8,["data"])),[[z,k.value]]),l("div",xa,[t(Ne,{"current-page":a.value.page,"onUpdate:currentPage":g[1]||(g[1]=f=>a.value.page=f),"page-size":a.value.pageSize,"onUpdate:pageSize":g[2]||(g[2]=f=>a.value.pageSize=f),total:u.value,onCurrentChange:h,onSizeChange:$},null,8,["current-page","page-size","total"])])])}}});const ka=se(Ca,[["__scopeId","data-v-dcd40ec9"]]),$a=e=>(ue("data-v-ab7cd9dd"),e=e(),de(),e),Ta={class:"mdl__content"},Na={class:"mdl__title"},Ia=$a(()=>l("i",{class:"product__filter__item__icon icon-Search"},null,-1)),Ea={class:"tbl"},Pa={class:"d-flex align-items-center justify-end mt-16"},za={class:"d-flex align-items-center justify-center"},Da=U({__name:"CModalTableMultiselect",emits:["confirm","search"],setup(e,{expose:a,emit:i}){const y=c(!1),d=c([]),o=c(""),u=c(""),k=c(""),m=c(""),$=c("700px"),C=c(ze.delete),h=c([]),w=c(0),_=c({page:1,pageSize:10,key:null});Z(async()=>{});const T=()=>{y.value=!1,d.value=[],o.value="",m.value="",$.value="",h.value=[],w.value=0},g=({dataList:r,title:s,titleSubmit:E,titleSearch:L,message:D,width:v,type:B,modalList:x,totals:ee})=>{y.value=!0,d.value=r,o.value=s||"",u.value=E||"",k.value=L||"",m.value=D||"",$.value=v||"700px",C.value=B||ze.delete,h.value=x||[],w.value=ee||0},N=()=>{console.log(" cDataList.value",d.value),console.log("multipleSelection.value",S.value),i("confirm",{parentList:d.value,childrenList:S.value})},p=()=>{_.value.page=1,I()},I=()=>{i("search",!0)},z=c(),f=()=>{try{z.value&&(clearTimeout(z.value),z.value=null),z.value=setTimeout(()=>{I()},500)}catch(r){console.log("error",r)}},V=c(!1),Y=r=>{V.value=r},J=c(),S=c([]),n=r=>{S.value=r};return a({filter:_,open:g,confirm:N,close:T,changeLoading:Y}),(r,s)=>{const E=St,L=Ie,D=pe,v=xt,B=Te;return P(),R(v,{modelValue:y.value,"onUpdate:modelValue":s[3]||(s[3]=x=>y.value=x),width:$.value,"show-close":!1,"before-close":T,center:"",class:"mdl"},{footer:b(()=>[l("span",za,[t(D,{onClick:T,class:"mdl__btn"},{default:b(()=>[ae("Huỷ bỏ")]),_:1}),t(D,{type:"primary",class:"mdl__btn",onClick:N},{default:b(()=>[ae(A(u.value),1)]),_:1})])]),default:b(()=>[l("div",Ta,[l("div",Na,A(o.value),1),t(E,{class:"product__filter__item mb-12",modelValue:_.value.key,"onUpdate:modelValue":s[0]||(s[0]=x=>_.value.key=x),placeholder:k.value,onInput:f},{prefix:b(()=>[Ia]),_:1},8,["modelValue","placeholder"]),l("div",Ea,[re((P(),R(L,{data:h.value,class:"tbl__table",ref_key:"multipleTableRef",ref:J,onSelectionChange:n,"row-key":"id"},{default:b(()=>[ke(r.$slots,"default",{},void 0,!0)]),_:3},8,["data"])),[[B,V.value]]),l("div",Pa,[t(Ne,{"current-page":_.value.page,"onUpdate:currentPage":s[1]||(s[1]=x=>_.value.page=x),"page-size":_.value.pageSize,"onUpdate:pageSize":s[2]||(s[2]=x=>_.value.pageSize=x),total:w.value,onCurrentChange:I,onSizeChange:p},null,8,["current-page","page-size","total"])])])])]),_:3},8,["modelValue","width"])}}});const La=se(Da,[["__scopeId","data-v-ab7cd9dd"]]),X=e=>(ue("data-v-f45fb54c"),e=e(),de(),e),Ba={class:"tbl"},Ma={class:"d-flex justify-between"},Ra={class:"product__filter d-flex align-items-center justify-start flex-wrap"},Va=X(()=>l("i",{class:"icon-Search"},null,-1)),Wa=X(()=>l("i",{class:"icon-Resset"},null,-1)),Oa=X(()=>l("i",{class:"icon-add-3 mr-4"},null,-1)),Ua=X(()=>l("span",null,"Thêm mới",-1)),Aa=X(()=>l("i",{class:"icon-export-2 mr-4"},null,-1)),ja=X(()=>l("span",null,"Export",-1)),Fa={class:"d-flex align-items-center justify-center"},Ha=["onClick"],Ka=X(()=>l("i",{class:"icon-eye-2"},null,-1)),qa=[Ka],Qa={class:"d-flex align-items-center justify-end mt-16"},Xa=U({__name:"WarehouseInventoryConsignment",setup(e){const a=c({page:1,pageSize:10,productId:null,warehouseId:null,shipmentId:null}),i=c({page:1,pageSize:10,keyword:""}),y=c({page:1,pageSize:10,key:""}),d=c(!1),o=c(!1),u=c([]),k=c([]),m=c([]),$=c(0),C=c(!1),h=$e(),w=Oe();Z(async()=>{h.params.id&&(a.value.warehouseId=Number(h.params.id)),await Promise.all([g(),N(),p()])});const _=()=>{a.value.page=1,g()},T=()=>{a.value={page:1,pageSize:a.value.pageSize,productId:null,shipmentId:null,warehouseId:Number(h.params.id)},g()},g=async()=>{try{C.value=!0;const{code:S,data:n}=await Q.getListShipmentInventory(a.value);S===j&&(m.value=n.items,$.value=n.totalElement,C.value=!1)}catch{C.value=!1,G({message:"Có lỗi xảy ra",type:"error"})}},N=async S=>{try{d.value=!0,i.value.keyword=S?S.trim():"";const{code:n,data:r}=await ge.getListProduct(i.value);n===j&&(u.value=r.items,d.value=!1)}catch{d.value=!1}},p=async S=>{try{o.value=!0,y.value.key=S?S.trim():"";const{code:n,data:r}=await ge.getListShipment(y.value);n===j&&(k.value=r.items,o.value=!1)}catch{o.value=!1}},I=async()=>{try{const S=await Q.exportInventoryConsignment(a.value);S&&We(S,"Danh sách tồn kho theo lô hàng")}catch{G({message:"Có lỗi xảy ra",type:"error"})}},z=S=>{w.pushByPath(`/consignments/detail/${S.shipmentId}`)},f=c(),V=Ve({page:1,pageSize:10,key:null}),Y=async()=>{var S,n;try{V.page=(S=f.value.filter)==null?void 0:S.page,V.key=(n=f.value.filter)==null?void 0:n.key,f.value.filter.pageSize=V.pageSize,f.value.changeLoading(!0);const{code:r,data:s}=await Q.getListWarehousesShipments(V);r===j&&(f.value.open({dataList:[],title:"Nhập kho hàng",titleSearch:"Nhập tên hoặc mã lô hàng",titleSubmit:"Nhập kho",width:"800px",modalList:s.items,totals:s.totalElement}),f.value.changeLoading(!1))}catch{f.value.changeLoading(!1),G({message:"Có lỗi xảy ra",type:"error"})}},J=async S=>{try{let n=[];S.childrenList.map(E=>{n.push(Number(E==null?void 0:E.id))});let r={warehouseId:Number(h.params.id),shipmentIds:n};console.log("obj",S.childrenList);const{code:s}=await Q.receipt(r);if(s===j)return G({message:"Nhập kho lô hàng thành công",type:"success"}),a.value.page=1,g(),f.value.close()}catch(n){console.log(n)}};return(S,n)=>{const r=pe,s=Ue,E=bt,L=Ie,D=Te;return P(),O(ft,null,[l("div",Ba,[l("div",Ma,[l("div",Ra,[t(ye,{items:u.value,remote:!0,filterable:!0,"reserve-keyword":!0,"remote-show-suffix":!0,loading:d.value,remoteMethod:N,"item-value":"value","item-label":"label",modelValue:a.value.productId,"onUpdate:modelValue":n[0]||(n[0]=v=>a.value.productId=v),class:"product__filter__item mr-8 mb-8",placeholder:"Nhập tên hoặc mã sản phẩm",maxWidth:"300px"},null,8,["items","loading","modelValue"]),t(ye,{items:k.value,remote:!0,filterable:!0,"reserve-keyword":!0,"remote-show-suffix":!0,loading:o.value,remoteMethod:p,"item-value":"value","item-label":"label",modelValue:a.value.shipmentId,"onUpdate:modelValue":n[1]||(n[1]=v=>a.value.shipmentId=v),class:"product__filter__item mr-8 mb-8",placeholder:"Nhập tên hoặc lô hàng",maxWidth:"300px"},null,8,["items","loading","modelValue"]),t(r,{type:"primary",onClick:_,class:"mb-8"},{default:b(()=>[Va]),_:1}),t(r,{class:"mb-8",onClick:T},{default:b(()=>[Wa]),_:1})]),l("div",null,[t(r,{type:"primary",onClick:Y},{default:b(()=>[Oa,Ua]),_:1}),t(r,{type:"info",onClick:I},{default:b(()=>[Aa,ja]),_:1})])]),re((P(),R(L,{data:m.value,class:"tbl__table",ref:"multipleTableRef","row-key":"id"},{default:b(()=>[t(s,{prop:"productImage",label:"Ảnh",width:"205",align:"center"},{default:b(({row:v})=>[v.productImage?(P(),R(he,{key:0,class:"form__ecommerce__logo",src:v.productImage,size:"65px"},null,8,["src"])):M("",!0)]),_:1}),t(s,{prop:"productName",label:"Tên sản phẩm","min-width":"240",align:"left","header-align":"center"}),t(s,{prop:"barcode",label:"Mã vạch",width:"205",align:"center"},{default:b(v=>[v.row.barcode?(P(),R(Ae,{key:0,value:v.row.barcode,id:v.$index},null,8,["value","id"])):M("",!0)]),_:1}),t(s,{prop:"shipmentName",label:"Tên lô hàng",width:"205",align:"center"}),t(s,{prop:"shipmentCode",label:"Mã lô hàng",width:"205",align:"center"}),t(s,{prop:"expiryDate",label:"Hạn sử dụng",width:"205",align:"center"}),t(s,{prop:"quantity",label:"Số lượng tồn",width:"205",align:"center"}),t(s,{prop:"quantityUnit",label:"Đơn vị",width:"205",align:"center"}),t(s,{fixed:"right",prop:"action",label:"Hành động",width:"205",align:"center"},{default:b(({row:v})=>[l("div",Fa,[t(E,{content:"Chi tiết"},{default:b(()=>[l("div",{onClick:B=>z(v),class:"btn__action btn__action--yellow d-flex justify-center align-items-center mr-8"},qa,8,Ha)]),_:2},1024)])]),_:1})]),_:1},8,["data"])),[[D,C.value]]),l("div",Qa,[t(Ne,{"current-page":a.value.page,"onUpdate:currentPage":n[2]||(n[2]=v=>a.value.page=v),"page-size":a.value.pageSize,"onUpdate:pageSize":n[3]||(n[3]=v=>a.value.pageSize=v),total:$.value,onCurrentChange:g,onSizeChange:_},null,8,["current-page","page-size","total"])])]),t(La,{ref_key:"modalMultiselectRef",ref:f,onSearch:Y,onConfirm:J},{default:b(()=>[t(s,{type:"selection",width:"55","reserve-selection":!0}),t(s,{prop:"image",label:"Ảnh",width:"100",align:"center"},{default:b(({row:v})=>[v.image?(P(),R(he,{key:0,class:"form__ecommerce__logo",src:v.image,size:"65px"},null,8,["src"])):M("",!0)]),_:1}),t(s,{prop:"name",label:"Tên lô hàng","min-width":"200",align:"center"}),t(s,{prop:"code",label:"Mã lô hàng",width:"150",align:"center"}),t(s,{prop:"shipmentType",label:"Loại lô hàng",width:"150",align:"center"})]),_:1},512)],64)}}});const Ya=se(Xa,[["__scopeId","data-v-f45fb54c"]]),Ja={class:"product__content rounded-sm tabCustom"},Ga={class:"p-16"},Za={key:0,class:"form__actions d-flex justify-end align-items-center mt-16"},es=U({__name:"WarehouseDetail",setup(e){const a=Oe(),i=c("first");return(y,d)=>{const o=Ut,u=Ot,k=pe;return P(),R(W(ht),{class:"product",title:""},{default:b(()=>[l("div",Ja,[t(u,{type:"border-card",class:"demo-tabs rounded-sm",modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=m=>i.value=m)},{default:b(()=>[t(o,{label:"Thông tin cơ bản",name:"first"},{default:b(()=>[l("div",Ga,[i.value==="first"?(P(),R(ma,{key:0})):M("",!0)])]),_:1}),t(o,{label:"Tồn kho theo sản phẩm",name:"second"},{default:b(()=>[i.value==="second"?(P(),R(ka,{key:0})):M("",!0)]),_:1}),t(o,{label:"Tồn kho theo lô hàng",name:"third"},{default:b(()=>[i.value==="third"?(P(),R(Ya,{key:0})):M("",!0)]),_:1})]),_:1},8,["modelValue"])]),i.value==="first"?(P(),O("div",Za,[t(k,{class:"form__actions__btn form__actions__btn--cancel",onClick:d[1]||(d[1]=m=>W(a).pushByPath("/warehouse"))},{default:b(()=>[ae("Đóng ")]),_:1})])):M("",!0)]),_:1})}}});const ws=se(es,[["__scopeId","data-v-80e920ee"]]);export{ws as default};
