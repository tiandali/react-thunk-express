import React, { Component } from "react"
import qs from "querystring"
import PropTypes from "prop-types"

class Mine extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
  }

  render() {
    const params = new URLSearchParams(this.props.location.search)
    console.log("params: ", params)
    //或者用querystring
    const value = qs.parse(this.props.location.search)
    console.log("value: ", value)
    return (
      <div>
        mine组件 id:{this.props.match.params.id}-name:{params.get("name")}
      </div>
    )
  }
}

export default Mine
