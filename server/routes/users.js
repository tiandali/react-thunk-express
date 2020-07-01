const express = require("express")
const isEmpty = require("lodash/isEmpty")
const validator = require("validator")
const sqlFn = require("../mysql")

const router = express.Router()
const validatorInput = (data) => {
  let errors = {}
  if (validator.isEmpty(data.username)) {
    errors.username = "请填写用户名"
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "请填写邮箱"
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "请填写密码"
  }
  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "请确认密码"
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "两次密码不同"
  }
  return {
    errors,
    isValid: isEmpty(errors),
  }
}
router.post("/", (req, res) => {
  console.log("请求成功")
  console.log("req.body: ", req.body)
  const { errors, isValid } = validatorInput(req.body)
  var sql = "insert into user values (null,?,?,?,?)"
  var arr = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.passwordConfirmation,
  ]
  if (isValid) {
    sqlFn(sql, arr, function (data) {
      if (data.affectedRows) {
        res.send({ success: true })
      } else {
        res.status(400).json({ error: "注册失败" })
      }
    })
    res.send({
      msg: "hello is user-1111",
    })
  } else {
    res.status(400).json(errors)
  }
})
module.exports = router
