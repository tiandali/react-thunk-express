import { httpGet, httpPost } from "../utils/http"
import baseUrl from "./base"
const api = {
  getCatPic() {
    return httpGet(baseUrl.catUrl)
  },
  postLogin(params) {
    return httpPost(baseUrl.base + baseUrl.loginUrl, params)
  },
}
export default api
