import React, { Component } from 'react'

export class Author extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <img src={this.props.image} />
      </a>
    )
  }
}
