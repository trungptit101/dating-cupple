import{d as P,r as c,a as y,c as W,b as l,w as O,e as R,f as n,g as o,h as B,i as I,F as Y,E as z,j as Z,u as M,p as X,k as F,_ as K,l as q,m as ee,q as te}from"./index-1001d52d.js";import{E as ae,a as oe,_ as le}from"./el-table-column-5cdd6fcc.js";import{S as C}from"./http-7590b1ae.js";import"./el-col-85877203.js";import{C as ne}from"./CPageContainer-02b2ed67.js";import{C as D,_ as j}from"./CModalConfirm-2dd950a5.js";import{B as H,_ as N}from"./BaseService-2e7bc22d.js";/* empty css                     */import{v as se}from"./el-loading-988f767b.js";import{E as ie}from"./el-switch-c50faea0.js";import{E as re}from"./EImg-03471f89.js";import{W as U}from"./WarehouseService-dcc7ab1d.js";import{E as ce}from"./index-2a10d7d4.js";import"./index-85476347.js";import"./event-9519ab40.js";import"./validator-2de64cc9.js";import"./index-47ad87e7.js";import"./flatten-a4693af6.js";import"./datetime-2dfd92d2.js";import"./datetime-6ff19318.js";import"./index-12b87994.js";const S=u=>(X("data-v-ec4cd624"),u=u(),F(),u),ue={class:"tbl"},de={key:0,class:"tag__action tag__action__red"},_e=S(()=>l("span",null,"Ngừng hoạt động",-1)),me=[_e],pe={key:1,class:"tag__action tag__action__green"},he=S(()=>l("span",null," Hoạt động",-1)),fe=[he],ge={class:"d-flex align-items-center justify-center"},ve=["onClick"],ye=S(()=>l("i",{class:"icon-Trash"},null,-1)),be=[ye],ke=["onClick"],we=S(()=>l("i",{class:"icon-Edit"},null,-1)),Ce=[we],Se=["onClick"],Te=S(()=>l("i",{class:"icon-eye-2"},null,-1)),xe=[Te],$e=P({__name:"WarehouseTable",props:{items:{default:()=>[]}},emits:["refresh","select"],setup(u,{expose:A,emit:g}){const a=u,i=c(!1),b=M(),s=c(!1),V=e=>{s.value=e},x=c(),h=c(null),f=c(null),$=e=>{h.value.open({id:e.id,title:"Xoá kho hàng",message:`Bạn có chắc chắn muốn xóa kho hàng <b>${e.name}</b> không?`})},v=async e=>{try{const{code:_}=await U.delete(e);if(_===C)return z({message:"Xoá kho hàng thành công",type:"success"}),g("refresh"),h.value.close()}catch(_){console.log(_)}},E=e=>{f.value.open({id:e.id,title:`${i.value?"Kích hoạt":"Hủy kích hoạt"} kho hàng`,message:`Bạn có chắc chắn muốn ${i.value?"kích hoạt":"hủy kích hoạt"} kho hàng <b>${e.name}</b> không?`})},r=async e=>{try{const{code:_}=await U.delete(e);if(_===C)return z({message:`${i.value?"Kích hoạt":"Hủy kích hoạt"} kho hàng thành công`,type:"success"}),g("refresh"),f.value.close()}catch(_){console.log(_)}},t=()=>{i.value=!i.value},d=e=>{b.pushByPath(`/warehouse/form/${e.id}`)},k=e=>{b.pushByPath(`/warehouse/detail/${e.id}`)};return A({changeLoading:V}),(e,_)=>{const m=ae,L=Z,Q=ie,G=oe,J=se;return y(),W(Y,null,[l("div",ue,[O((y(),R(G,{data:a.items,class:"tbl__table",ref_key:"multipleTableRef",ref:x,"row-key":"id"},{default:n(()=>[o(m,{prop:"id",label:"ID",width:"100",align:"center"}),o(m,{prop:"image",label:"Ảnh",width:"205",align:"center"},{default:n(({row:p})=>[p.image?(y(),R(re,{key:0,class:"form__ecommerce__logo",src:p.image,size:"65px"},null,8,["src"])):B("",!0)]),_:1}),o(m,{prop:"name",label:"Tên kho hàng","min-width":"240",align:"left","header-align":"center"}),o(m,{prop:"code",label:"Mã kho",width:"205",align:"center"}),o(m,{prop:"warehouseType",label:"Loại kho",width:"205",align:"center"}),o(m,{prop:"status",label:"Trạng thái",width:"205",align:"center"},{default:n(({row:p})=>[p.status===2?(y(),W("div",de,me)):B("",!0),p.status===1?(y(),W("div",pe,fe)):B("",!0)]),_:1}),o(m,{prop:"persionInCharge",label:"Người phụ trách",width:"205",align:"center"}),o(m,{prop:"createdAt",label:"Ngày tạo",width:"205",align:"center"}),o(m,{prop:"updatedAt",label:"Ngày cập nhật",width:"205",align:"center"}),o(m,{fixed:"right",prop:"action",label:"Hành động",width:"205",align:"center"},{default:n(({row:p})=>[l("div",ge,[o(L,{content:"Xoá"},{default:n(()=>[l("div",{class:"btn__action btn__action--red d-flex justify-center align-items-center",onClick:w=>$(p)},be,8,ve)]),_:2},1024),o(L,{content:"Chỉnh sửa"},{default:n(()=>[l("div",{class:"btn__action btn__action--blue d-flex justify-center align-items-center",onClick:w=>d(p)},Ce,8,ke)]),_:2},1024),o(L,{content:"Chi tiết"},{default:n(()=>[l("div",{class:"btn__action btn__action--yellow d-flex justify-center align-items-center mr-8",onClick:w=>k(p)},xe,8,Se)]),_:2},1024),o(L,{content:`${i.value?"Hoạt động":"Ngừng hoạt động"}`,placement:"bottom"},{default:n(()=>[o(Q,{onClick:w=>E(p),modelValue:i.value,"onUpdate:modelValue":_[0]||(_[0]=w=>i.value=w),style:{"--el-switch-on-color":"#13ce66"}},null,8,["onClick","modelValue"])]),_:2},1032,["content"])])]),_:1})]),_:1},8,["data"])),[[J,s.value]])]),o(I(D),{ref_key:"modalConfirmRef",ref:h,onConfirm:v},null,512),o(I(D),{ref_key:"modalConfirmSwitchRef",ref:f,onConfirm:r,onClose:t},null,512)],64)}}});const Ee=K($e,[["__scopeId","data-v-ec4cd624"]]),T=u=>(X("data-v-764eb917"),u=u(),F(),u),Le={class:"product__content p-16 rounded-sm"},Ie={class:"product__filter d-flex align-items-center justify-start flex-wrap"},Ae=T(()=>l("i",{class:"product__filter__item__icon icon-Search"},null,-1)),Ve=T(()=>l("i",{class:"icon-Search"},null,-1)),We=T(()=>l("i",{class:"icon-Resset"},null,-1)),Be={class:"d-flex align-items-center justify-start mt-4 mb-32"},Ne=T(()=>l("i",{class:"icon-add-3 mr-4"},null,-1)),Re=T(()=>l("span",null,"Thêm mới",-1)),ze={class:"d-flex align-items-center justify-end mt-16"},Ue=P({__name:"WarehouseList",setup(u){const A=M(),g=c(),a=c({page:1,pageSize:10,key:null,warehouseTypeId:null,status:null,createdAtStart:null,createdAtEnd:null,updateedAtStart:null,updateedAtEnd:null,persionInChargeId:null}),i=c({page:1,pageSize:10,key:"",status:null}),b=c({page:1,pageSize:10,key:"",status:null}),s=q({staffList:[],warehouseTypeList:[],statusList:[{value:1,label:"Hoạt động"},{value:2,label:"Ngừng hoạt động"}],listData:[],totals:0});ee(async()=>{await Promise.all([h(),E(),$()])});const V=()=>{a.value={page:1,pageSize:a.value.pageSize,key:null,warehouseTypeId:null,status:null,createdAtStart:null,createdAtEnd:null,updateedAtStart:null,updateedAtEnd:null,persionInChargeId:null},h()},x=()=>{a.value.page=1,h()},h=async()=>{try{const r={...a.value,key:a.value.key?a.value.key.trim():""};g.value.changeLoading(!0);const{code:t,data:d}=await U.getList(r);t===C&&(s.listData=d.items,s.totals=d.totalElement,g.value.changeLoading(!1))}catch{g.value.changeLoading(!1),z({message:"Có lỗi xảy ra",type:"error"})}},f=c(!1),$=async r=>{try{f.value=!0,b.value.key=r?r.trim():"";const{code:t,data:d}=await H.getListStaff(b.value);t===C&&(s.staffList=d.items,f.value=!1)}catch{f.value=!1}},v=c(!1),E=async r=>{try{v.value=!0,i.value.key=r?r.trim():"";const{code:t,data:d}=await H.getListWarehouseType(i.value);t===C&&(s.warehouseTypeList=d.items,v.value=!1)}catch{v.value=!1}};return(r,t)=>{const d=ce,k=te;return y(),R(I(ne),{class:"product",title:"Danh sách kho hàng"},{default:n(()=>[l("div",Le,[l("div",Ie,[o(d,{class:"product__filter__item mr-8 mb-8",modelValue:a.value.key,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value.key=e),placeholder:"Tên hoặc mã kho hàng"},{prefix:n(()=>[Ae]),_:1},8,["modelValue"]),o(N,{items:s.warehouseTypeList,"item-value":"value","item-label":"label",modelValue:a.value.warehouseTypeId,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value.warehouseTypeId=e),class:"product__filter__item mr-8 mb-8",placeholder:"Loại kho",maxWidth:"300px",remote:!0,filterable:!0,"reserve-keyword":!0,"remote-show-suffix":!0,loading:v.value,remoteMethod:E},null,8,["items","modelValue","loading"]),o(N,{items:s.statusList,"item-value":"value","item-label":"label",modelValue:a.value.status,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value.status=e),class:"product__filter__item mr-8 mb-8",placeholder:"Trạng thái",maxWidth:"300px"},null,8,["items","modelValue"]),o(N,{items:s.staffList,"item-value":"value","item-label":"label",modelValue:a.value.persionInChargeId,"onUpdate:modelValue":t[3]||(t[3]=e=>a.value.persionInChargeId=e),class:"product__filter__item mr-8 mb-8",placeholder:"Người phụ trách",maxWidth:"300px",remote:!0,filterable:!0,"reserve-keyword":!0,"remote-show-suffix":!0,loading:f.value,remoteMethod:$},null,8,["items","modelValue","loading"]),o(j,{class:"product__filter__item product__filter__item--daterange mr-8 mb-8",from:a.value.createdAtStart,"onUpdate:from":t[4]||(t[4]=e=>a.value.createdAtStart=e),to:a.value.createdAtEnd,"onUpdate:to":t[5]||(t[5]=e=>a.value.createdAtEnd=e),type:"daterange","range-separator":"~","start-placeholder":"Ngày tạo: Từ","end-placeholder":"Đến"},null,8,["from","to"]),o(j,{class:"product__filter__item product__filter__item--daterange mr-8 mb-8",from:a.value.updateedAtStart,"onUpdate:from":t[6]||(t[6]=e=>a.value.updateedAtStart=e),to:a.value.updateedAtEnd,"onUpdate:to":t[7]||(t[7]=e=>a.value.updateedAtEnd=e),type:"daterange","range-separator":"~","start-placeholder":"Ngày cập nhật: Từ","end-placeholder":"Đến"},null,8,["from","to"]),o(k,{type:"primary",onClick:x,class:"mb-8"},{default:n(()=>[Ve]),_:1}),o(k,{class:"mb-8",onClick:V},{default:n(()=>[We]),_:1})]),l("div",Be,[o(k,{type:"primary",onClick:t[8]||(t[8]=e=>I(A).pushByPath("/warehouse/form"))},{default:n(()=>[Ne,Re]),_:1})]),o(Ee,{ref_key:"warehouseTableRef",ref:g,items:s.listData,onRefresh:h},null,8,["items"]),l("div",ze,[o(le,{"current-page":a.value.page,"onUpdate:currentPage":t[9]||(t[9]=e=>a.value.page=e),"page-size":a.value.pageSize,"onUpdate:pageSize":t[10]||(t[10]=e=>a.value.pageSize=e),total:s.totals,onCurrentChange:h,onSizeChange:x},null,8,["current-page","page-size","total"])])])]),_:1})}}});const st=K(Ue,[["__scopeId","data-v-764eb917"]]);export{st as default};
