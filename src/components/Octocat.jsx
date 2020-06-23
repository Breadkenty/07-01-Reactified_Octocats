import React, { Component } from 'react'
import { Author } from './Author'

export class Octocat extends React.Component {
  convertAuthorObjectToComponent(author) {
    return <Author link={author.link} image={author.image} />
  }
  render() {
    const authorsFromData = this.props.authors.map(
      this.convertAuthorObjectToComponent
    )
    return (
      <div>
        <figure>
          <a href={this.props.link}>
            <img src={this.props.image} />
          </a>
        </figure>

        <div className="item-footer">
          <div>
            <span>#{this.props.number}</span>
            <a href="#">{this.props.name}</a>
          </div>

          <div className="author-icon-list">{authorsFromData}</div>
        </div>
      </div>
    )
  }
}
