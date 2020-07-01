import React, { Component } from "react"
import classnames from "classnames"
class FlashMessage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, text } = this.props.message
    return (
      <div
        className={classnames("alert", {
          "alert-success": type === "success",
          "alert-danger": type === "danger",
        })}
      >
        {text}
      </div>
    )
  }
}

export default FlashMessage
