import { addFlashMessage } from "../constants"
export const flashMessageAdd = (message) => {
  return {
    type: addFlashMessage,
    message,
  }
}
