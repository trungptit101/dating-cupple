import request from "@/utils/request";

export function getPartnerSuggestion() {
  return request({
    url: "/partner/suggestion",
    method: "get",
  });
}

export function processDating(data) {
  return request({
    url: "/partner/process/dating",
    method: "post",
    data,
  });
}
