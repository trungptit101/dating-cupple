import{$ as s}from"./index-6d8ceaa0.js";class n extends s{async getList(e){return await this.instance.get("/product-service/shipments",{params:e})}async create(e){return await this.instance.post("/product-service/shipment/",e)}async update(e,t){return await this.instance.put("/product-service/shipment/"+e,t)}async getDetail(e){return await this.instance.get("/product-service/shipment/"+e)}async delete(e){return await this.instance.delete("/product-service/shipment/"+e)}async export(e){return await this.instance.get("/product-service/shipment/export",{params:e,responseType:"blob"})}}const a=new n;export{a as C};
