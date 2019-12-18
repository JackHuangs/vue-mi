import { post, fetch, patch, put } from "./http";

export function userRegister(params) {
  return post("api/users/register", params);
}

export function userLogin(params) {
  return post("api/users/login", params);
}
