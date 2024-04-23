import{$ as t}from"./index-1001d52d.js";class r extends t{async getList(e){return await this.instance.get("/warehouse-service/warehouses",{params:e})}async create(e){return await this.instance.post("/warehouse-service/warehouse/",e)}async receipt(e){return await this.instance.post("/warehouse-service/warehouse/receipt",e)}async update(e,s){return await this.instance.put("/warehouse-service/warehouse/"+e,s)}async getDetail(e){return await this.instance.get("/warehouse-service/warehouse/"+e)}async delete(e){return await this.instance.delete("/warehouse-service/warehouse/"+e)}async export(e){return await this.instance.get("/warehouse-service/warehouse/export",{params:e,responseType:"blob"})}async exportInventoryProduct(e){return await this.instance.get("/warehouse-service/warehouse/product-inventory/export",{params:e,responseType:"blob"})}async exportInventoryConsignment(e){return await this.instance.get("/warehouse-service/warehouse/shipment-inventory/export",{params:e,responseType:"blob"})}async getListProductInventory(e){return await this.instance.get("/warehouse-service/warehouse/product-inventory",{params:e})}async getListShipmentInventory(e){return await this.instance.get("/warehouse-service/warehouse/shipment-inventory",{params:e})}async getListWarehousesShipments(e){return await this.instance.get("/warehouse-service/warehouse/shipments",{params:e})}}const i=new r;export{i as W};
