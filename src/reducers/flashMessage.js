import { addFlashMessage } from "../constants"
import shortid from "shortid"
const flashMessages = (state = [], actions = {}) => {
  switch (actions.type) {
    case addFlashMessage:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: actions.message.type,
          text: actions.message.text,
        },
      ]
    default:
      return state
  }
}
export default flashMessages
