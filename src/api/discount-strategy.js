import request from "@/utils/request";

export function getListStrategies() {
  return request({
    url: "/strategy/list",
    method: "get",
  });
}

export function createStrategy(data) {
  return request({
    url: "/strategy/create",
    method: "post",
    data,
  });
}

export function updateStrategy(data, id) {
  return request({
    url: `/strategy/update/${id}`,
    method: "put",
    data,
  });
}

export function deleteStrategy(id) {
  return request({
    url: `/strategy/delete/${id}`,
    method: "delete",
  });
}
