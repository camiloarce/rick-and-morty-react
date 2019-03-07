import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Brand from '../../components/Brand'
import CardDetail from '../../components/CardDetail'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import connect from './store'

class Detail extends Component {
  async componentDidMount () {
    const { detailCharacters, location, match } = this.props
    if (match.params.id) {
      await detailCharacters([match.params.id])
    } else {
      if (location.state) {
        if (location.state.ids && location.state.ids.length) {
          await detailCharacters(location.state.ids)
        }
      }
    }
  }

  render () {
    const { characters } = this.props
    return (
      <div>
        <Header />
        <main>
          <Brand subtitle={'Characters detail'} />
          <section className='sectionList'>
            <div className='list'>
              {characters.map(character => (
                <div className='flex-item' key={character.id}>
                  <CardDetail
                    id={character.id}
                    image={character.image}
                    gender={character.gender}
                    location={character.location.name}
                    name={character.name}
                    origin={character.origin.name}
                    species={character.species}
                    status={character.status}
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

Detail.defaultProps = {
  characters: []
}

Detail.propTypes = {
  characters: PropTypes.array.isRequired,
  location: PropTypes.object,
  match: PropTypes.object,
  detailCharacters: PropTypes.func.isRequired
}

export default connect(Detail)
