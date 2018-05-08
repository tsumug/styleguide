import React from 'react'

export default class Sample extends React.PureComponent<{}, {}> {
  action(...args: any) {
    console.log(args)
  }
  render() {
    return <div onClick={this.action.bind(this)} />
  }
}
