import{d as s,a as u,e as r,a2 as m,f as a,M as n}from"./index-151fc77b.js";import{E as c}from"./index-7096630e.js";const h=s({__name:"EInputNumber",props:{modelValue:{default:null},disabled:{type:Boolean,default:!1},placeholder:{default:""},min:{default:null},max:{default:null}},emits:["update:modelValue","change"],setup(o,{emit:d}){const l=o,p=e=>{d("update:modelValue",e===null||e===""?null:Math.abs(Number(e)))};return(e,i)=>{const t=c;return u(),r(t,{"model-value":l.modelValue,placeholder:l.placeholder,disabled:l.disabled,type:"number",onInput:p},m({_:2},[e.$slots.prepend?{name:"prepend",fn:a(()=>[n(e.$slots,"prepend")]),key:"0"}:void 0,e.$slots.append?{name:"append",fn:a(()=>[n(e.$slots,"append")]),key:"1"}:void 0]),1032,["model-value","placeholder","disabled"])}}});export{h as _};
