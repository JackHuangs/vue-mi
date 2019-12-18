import { post, fetch, patch, put } from "./http";

export function getHomeLinks() {
  return fetch("api/links");
}

export function getHomeCate() {
  return fetch("api/categories");
}

export function getHomeProduct(params = {}) {
  return fetch("api/product", params);
}
