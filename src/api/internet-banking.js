import request from "@/utils/request";

export function getList() {
  return request({
    url: "/internet-banking/list",
    method: "get",
  });
}

export function create(data) {
  return request({
    url: "/internet-banking/create",
    method: "post",
    data,
  });
}

export function update(data, id) {
  return request({
    url: `/internet-banking/update/${id}`,
    method: "put",
    data,
  });
}

export function deleteInternetBanking(id) {
  return request({
    url: `/internet-banking/delete/${id}`,
    method: "delete",
  });
}
