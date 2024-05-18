import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function register(data) {
  return request({
    url: "/register",
    method: "post",
    data,
  });
}

export function getListCandidate(params) {
  return request({
    url: "/candidate/list",
    method: "get",
    params: params,
  });
}

export function getUserDetail(id) {
  return request({
    url: `/user/detail/${id}`,
    method: "get",
  });
}
