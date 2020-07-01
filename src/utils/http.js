//封装get和post请求
import qs from "querystring"

export function httpGet(url) {
  const result = fetch(url)
  console.log("result: ", result)
  return result
}
export function httpPost(url, params) {
  const result = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json,text/plain,*/*",
    },
    body: qs.stringify(params),
  })
  console.log("result: ", result)
  return result
}
