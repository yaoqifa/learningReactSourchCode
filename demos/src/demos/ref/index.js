import React from 'react'

export default class RefDemo extends React.Component {
  constructor() {
    super()
    this.ref = React.createRef()
  }

  componentDidMount() {
    setTimeout(() => {
      this.ref.current.textContent = 'test ref'
    }, 1000)
  }

  render() {
    return (
      <>
        <p ref={this.ref}>span3</p>
      </>
    )
  }
}
