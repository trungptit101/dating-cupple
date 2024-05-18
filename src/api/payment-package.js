import request from "@/utils/request";

export function getAllPaymentPackage() {
  return request({
    url: "/payment-package/list",
    method: "get",
  });
}

export function createPackage(data) {
  return request({
    url: "/payment-package/create",
    method: "post",
    data,
  });
}

export function updatePackage(data, id) {
  return request({
    url: `/payment-package/update/${id}`,
    method: "put",
    data,
  });
}

export function deletePackage(id) {
  return request({
    url: `/payment-package/delete/${id}`,
    method: "delete",
  });
}
