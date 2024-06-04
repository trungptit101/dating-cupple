import request from "@/utils/request";

export function getListContacts(params) {
  return request({
    url: "/contact/list",
    method: "get",
    params: params,
  });
}

export function createContact(data) {
  return request({
    url: "/contact/create",
    method: "post",
    data,
  });
}

export function deleteContact(id) {
  return request({
    url: `/contact/delete/${id}`,
    method: "delete",
  });
}
