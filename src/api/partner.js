import request from "@/utils/request";

export function getPartnerSuggestion() {
  return request({
    url: "/partner/suggestion",
    method: "get",
  });
}
