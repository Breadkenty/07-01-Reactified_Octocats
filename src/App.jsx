import React, { Component } from 'react'
import { Octocat } from './components/Octocat'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import octocats from './data/octocats'

class App extends Component {
  convertOctocatObjectToComponent(octocat) {
    return (
      <Octocat
        number={octocat.number}
        name={octocat.name}
        image={octocat.image}
        link={octocat.link}
        authors={octocat.authors}
      />
    )
  }

  render() {
    const octocatsFromData = octocats.data.map(
      this.convertOctocatObjectToComponent
    )

    return (
      <div>
        <Header />
        <main>
          <div className="octocat-container">{octocatsFromData}</div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
