import React, { Component } from "react"
import classnames from "classnames"

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: {},
      isLoading: false,
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ isLoading: true })
    console.log(this.state)
    console.log("this.props: ", this.props)

    this.props.userLoginAction.loginRequest(this.state).then(
      () => {
        //添加提示到redux
        this.props.flashMessageAction.flashMessageAdd({
          type: "success",
          text: "注册成功,欢迎加入",
        })
        this.props.history.push("/home")
      },
      ({ response }) => {
        this.setState({ errors: response.data, isLoading: false })
      }
    )
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    const { isLoading, errors } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h1>注册</h1>
        <div className='form-group'>
          <label className='control-label'>用户名</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            className='form-control'
            className={classnames("form-control", {
              "is-invalid": errors.username,
            })}
            onChange={this.onChange}
          ></input>
          {errors && (
            <span className='form-text text-muted'>{errors.username}</span>
          )}
        </div>
        <div className='form-group'>
          <label className='control-label'>邮箱</label>
          <input
            type='email'
            name='email'
            value={this.state.email}
            className='form-control'
            className={classnames("form-control", {
              "is-invalid": errors.email,
            })}
            onChange={this.onChange}
          ></input>
          {errors && (
            <span className='form-text text-muted'>{errors.email}</span>
          )}
        </div>
        <div className='form-group'>
          <label className='control-label'>密码</label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            className='form-control'
            className={classnames("form-control", {
              "is-invalid": errors.password,
            })}
            onChange={this.onChange}
          ></input>
          {errors && (
            <span className='form-text text-muted'>{errors.password}</span>
          )}
        </div>
        <div className='form-group'>
          <label className='control-label'>确认密码</label>
          <input
            type='password'
            name='passwordConfirmation'
            value={this.state.passwordConfirmation}
            className='form-control'
            className={classnames("form-control", {
              "is-invalid": errors.passwordConfirmation,
            })}
            onChange={this.onChange}
          ></input>
          {errors && (
            <span className='form-text text-muted'>
              {errors.passwordConfirmation}
            </span>
          )}
        </div>
        <div className='form-group'>
          <button disabled={isLoading} className='btn btn-primary btn-lg'>
            注册
          </button>
        </div>
      </form>
    )
  }
}

export default LoginForm
