import React, { Component } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userLoginAction from "../actions/userLoginAction.js"
import * as flashMessageAction from "../actions/flashMessage.js"

import { withRouter } from "react-router-dom"
import LoginForm from "./LoginForm"

class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <LoginForm {...this.props} />
        </div>
        <div className='col-md-3'></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  userLoginAction: bindActionCreators(userLoginAction, dispatch),
  flashMessageAction: bindActionCreators(flashMessageAction, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
