import request from "@/utils/request";

export function createOrder(data) {
  return request({
    url: "/order/create",
    method: "post",
    data,
  });
}

export function createOrderPaypal(data) {
  return request({
    url: "/order/create-paypal",
    method: "post",
    data,
  });
}

export function cancelOrderPaypal(data) {
  return request({
    url: "/order/cancel-paypal",
    method: "post",
    data,
  });
}

export function paymentBanking(data) {
  return request({
    url: "/order/payment-banking",
    method: "post",
    data,
  });
}

export function finishOrder(data) {
  return request({
    url: "/order/finish",
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

export function detailOrderBanking() {
  return request({
    url: "/order/banking-detail",
    method: "get",
  });
}

export function listRequestsBanking(params) {
  return request({
    url: "/order/requests-banking",
    method: "get",
    params: params,
  });
}
