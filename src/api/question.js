import request from "@/utils/request";

export function getListQuestion() {
  return request({
    url: "/question/list",
    method: "get",
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

export function deleteQuestion(id) {
  return request({
    url: `/question/delete/${id}`,
    method: "delete",
  });
}
