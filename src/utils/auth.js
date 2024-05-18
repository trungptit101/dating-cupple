import Cookies from "js-cookie";

const TokenKey = "token";

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function setUser(user) {
  return localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  return localStorage.getItem("user");
}

export function removeToken() {
  return localStorage.clear();
}

export function clearStoreage() {
  localStorage.clear();
}
