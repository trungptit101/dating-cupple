import{d as r,a as u,e as m,a2 as i,f as a,M as l}from"./index-1001d52d.js";import{E as f}from"./index-2a10d7d4.js";const $=r({__name:"EInputPhoneNumber",props:{modelValue:{default:null},disabled:{type:Boolean,default:!1},placeholder:{default:""}},emits:["update:modelValue","change"],setup(n,{emit:s}){const o=n,p=e=>/\d/.test(e),d=e=>{e&&!p(e)||s("update:modelValue",e.trim()||"")};return(e,c)=>{const t=f;return u(),m(t,{"model-value":o.modelValue,placeholder:o.placeholder,disabled:o.disabled,onInput:d},i({_:2},[e.$slots.prepend?{name:"prepend",fn:a(()=>[l(e.$slots,"prepend")]),key:"0"}:void 0,e.$slots.append?{name:"append",fn:a(()=>[l(e.$slots,"append")]),key:"1"}:void 0,e.$slots.prefix?{name:"prefix",fn:a(()=>[l(e.$slots,"prefix")]),key:"2"}:void 0]),1032,["model-value","placeholder","disabled"])}}});export{$ as _};
