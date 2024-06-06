import request from "@/utils/request";

export function getListQuestion(params) {
  return request({
    url: "/question/list",
    method: "get",
    params: params,
  });
}

export function settingsFilter() {
  return request({
    url: "/question/settings-filter",
    method: "get",
  });
}

export function questionsSettings() {
  return request({
    url: "/question/questions/settings",
    method: "get",
  });
}

export function updateSettingsFilter(data) {
  return request({
    url: "/question/up-sert-settings-filter",
    method: "post",
    data,
  });
}

export function updateOrderQuestion(data) {
  return request({
    url: "/question/update-order",
    method: "post",
    data,
  });
}

export function getListQuestionUser() {
  return request({
    url: "/question/questionnaire",
    method: "get",
  });
}

export function createQuestion(data) {
  return request({
    url: "/question/create",
    method: "post",
    data,
  });
}

export function updateQuestion(data, id) {
  return request({
    url: `/question/update/${id}`,
    method: "put",
    data,
  });
}

export function updateQuestionaireUser(data, id) {
  return request({
    url: `/question/update-questionaire-user/${id}`,
    method: "put",
    data,
  });
}

export function finishSurveyQuestion() {
  return request({
    url: "/question/finish-survey",
    method: "post",
  });
}

export function deleteQuestion(id) {
  return request({
    url: `/question/delete/${id}`,
    method: "delete",
  });
}
