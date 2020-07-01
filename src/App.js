import React, { Component } from "react"
import qs from "querystring"
import ReactDOM from "react-dom"
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import api from "./api"
import Home from "./components/Home"
import Mine from "./components/Mine"
import User from "./components/User"
import Login from "./components/Login"
import Notfound from "./components/Notfound"
import FlashMessageList from "./components/flash/FlashMessageList.jsx"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgurl: "",
    }
  }
  componentDidMount() {
    console.log("componentDidMount")
    //为封装前
    // fetch("https://api.thecatapi.com/v1/images/search")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const dataponse = data ? data[0] : {}
    //     this.setState({
    //       imgurl: dataponse.url,
    //     })
    //   })
    //post请求，ajax:对象类型的字符串，body：字符串类型，所以用qs转换
    // fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Accept: "application/json,text/plain,*/*",
    //   },
    //   body: qs.stringify({
    //     user_id: "iwen@qq.com",
    //     password: "iwen123",
    //     verification_code: "crfvw",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data: ", data)
    //   })
    //封装后
    api
      .getCatPic()
      .then((res) => res.json())
      .then((data) => {
        const dataponse = data ? data[0] : {}
        this.setState({
          imgurl: dataponse.url,
        })
      })
    api
      .postLogin({
        user_id: "iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw",
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data)
      })
  }
  render() {
    const { imgurl } = this.state
    return (
      <div className='jumbotron'>
        <h1>hello dali</h1>
        <Router>
          <ul>
            <li>
              <Link to='/home'>home页面</Link>
            </li>
            <li>
              <Link to='/mine'>mine页面</Link>
            </li>
            <li>
              <Link to='/user'>user页面</Link>
            </li>
            <li>
              <Link to='/login'>登录页面</Link>
            </li>
          </ul>
          <Switch>
            <Route strict exact path='/home' component={Home}></Route>
            <Route exact path='/mine/:id?' component={Mine}></Route>
            <Route strict exact path='/login' component={Login}></Route>
            <Route strict exact path='/user' component={User}></Route>
            {/*  <Route path='/demo' render={() => <div>this is demo</div>}></Route> */}
            <Route path='/demo' render={() => <div>this is demo</div>}></Route>
            <Route component={Notfound}></Route>
          </Switch>
          <FlashMessageList></FlashMessageList>
        </Router>
        <img src={imgurl} />
      </div>
    )
  }
}

export default App
