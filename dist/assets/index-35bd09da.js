import{C as b,d as p,K as _,L as n,J as R,a as h,e as $,f as w,M as v,v as N,i as c,ag as j,ae as C,N as x,W as E,D as u,G as r,O as S,H as g,b5 as k}from"./index-6d8ceaa0.js";const O=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],L=["top","middle","bottom"],P=b({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:L,default:"top"}}),B=p({name:"ElRow"}),D=p({...B,props:P,setup(f){const t=f,l=_("row"),a=n(()=>t.gutter);R(O,{gutter:a});const i=n(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=n(()=>[l.b(),l.is(`justify-${t.justify}`,t.justify!=="start"),l.is(`align-${t.align}`,t.align!=="top")]);return(e,d)=>(h(),$(C(e.tag),{class:N(c(m)),style:j(c(i))},{default:w(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var J=x(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const W=E(J),A=b({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),G=p({name:"ElCol"}),H=p({...G,props:A,setup(f){const t=f,{gutter:l}=S(O,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight=`${l.value/2}px`),e}),m=n(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const o=t[s];g(o)&&(s==="span"?e.push(a.b(`${t[s]}`)):o>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{g(t[s])?e.push(a.b(`${s}-${t[s]}`)):k(t[s])&&Object.entries(t[s]).forEach(([o,y])=>{e.push(o!=="span"?a.b(`${s}-${o}-${y}`):a.b(`${s}-${y}`))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),$(C(e.tag),{class:N(c(m)),style:j(c(i))},{default:w(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var I=x(H,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const q=E(I);export{q as E,W as a};
