import request from "@/utils/request";

export function getAnalysic(params) {
  return request({
    url: "/analysic/index",
    method: "get",
    params: params,
  });
}
