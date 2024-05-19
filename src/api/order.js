import request from "@/utils/request";

export function createOrder(data) {
  return request({
    url: "/order/create",
    method: "post",
    data,
  });
}

export function detailOrder(params) {
  return request({
    url: "/order/detail",
    method: "get",
    params: params,
  });
}
