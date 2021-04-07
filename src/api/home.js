import request from "@/utils/request";

export function getCaseList() {
    return request({
        url: 'jnb/case/list',
        method: 'get'
    })
}

export function getNewsList() {
  return request({
    url: 'jnb/news/list',
    method: 'get'
  })
}
