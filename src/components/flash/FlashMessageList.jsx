import React, { Component } from "react"
import FlashMessage from "./FlashMessage"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
class FlashMessageList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const messages = this.props.messages.map((message) => {
      return <FlashMessage key={message.id} message={message} />
    })
    return <div className='container'>{messages}</div>
  }
}

const mapStateToProps = (state) => ({
  messages: state.flashMessages,
})

const mapDispatchToProps = (dispatch) => ({})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FlashMessageList)
)
