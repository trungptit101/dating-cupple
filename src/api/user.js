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
export function processAfterRegister(data) {
  return request({
    url: "/process-after-register",
    method: "post",
    data,
  });
}

export function forgotPassword(data) {
  return request({
    url: "/forgot-password",
    method: "post",
    data,
  });
}

export function resetPassword(data) {
  return request({
    url: "/reset-password",
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

export function deleteCandidate(id) {
  return request({
    url: `/candidate/delete/${id}`,
    method: "delete",
  });
}

export function getUserDetail(id) {
  return request({
    url: `/user/detail/${id}`,
    method: "get",
  });
}

export function updateUserProfile(data) {
  return request({
    url: "/user/profile",
    method: "post",
    data,
  });
}

export function getListRequestDating() {
  return request({
    url: "/candidate/dating-requests/list",
    method: "get",
  });
}

export function updateProcessDating(id) {
  return request({
    url: `/candidate/dating-process/update/${id}`,
    method: "post",
  });
}
