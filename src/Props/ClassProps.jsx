import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>Mera naam {this.props.name} and meri umr {this.props.age}</h1>
        
      </div>
    )
  }
}
