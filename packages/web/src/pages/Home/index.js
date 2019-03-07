import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import Brand from '../../components/Brand'
import CardActionSelect from '../../components/CardActionSelect'
import Fab from '../../components/Fab'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './style.scss'
import connect from './store'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 1,
      hasMoreItems: true,
      selected: [],
      longPress: false,
      searching: false,
      searchText: null
    }
  }

  timer = null

  async componentDidMount () {
    await this.props.getCharacters(this.state.page)
  }

  clearTimer = timer => {
    if (timer !== null) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  onRelease = () => {
    this.clearTimer(this.timer)
  }

  onLongPress = (event, id) => {
    if (event.type === 'click' && event.button !== 0) {
      return
    }

    this.setState({ longPress: false })

    if (this.timer === null) {
      this.timer = setTimeout(() => {
        if (this.state.selected.includes(id)) {
          const ids = this.state.selected.filter(item => item !== id)
          this.setState({ selected: ids })
        } else {
          this.setState(prevState => ({
            selected: [...prevState.selected, id]
          }))
        }
        this.setState({ longPress: true })
      }, 1000)
    }

    return false
  }

  onTap = id => {
    const { longPress, selected } = this.state
    this.clearTimer(this.timer)

    if (longPress) {
      return false
    }

    if (selected.length) {
      if (selected.includes(id)) {
        const ids = selected.filter(item => item !== id)
        this.setState({ selected: ids })
      } else {
        this.setState(prevState => ({
          selected: [...prevState.selected, id]
        }))
      }
    } else {
      this.props.history.push({
        pathname: '/detail',
        state: { ids: [id] }
      })
    }
  }

  handleLoadMore = async () => {
    const { characters, pages, getCharacters } = this.props
    if (characters.length) {
      if (pages > this.state.page) {
        await this.setState(
          prevState => ({
            page: prevState.page + 1
          }),
          () => {
            getCharacters(this.state.page, this.state.searchText)
          }
        )
      } else {
        this.setState({ hasMoreItems: false })
      }
    }
  }

  search = async text => {
    const { searchCharacters } = this.props
    if (text) {
      this.setState({
        searching: true,
        searchText: text,
        page: 1,
        selected: []
      })
      await searchCharacters(text)
    } else {
      await this.setState(
        { searching: false, searchText: null, page: 1, selected: [] },
        () => searchCharacters(text)
      )
    }
  }

  loader = () => <div className='loader'>Loading ...</div>

  render () {
    const { characters } = this.props
    const { hasMoreItems, selected } = this.state
    return (
      <div>
        <Header onChange={event => this.search(event.target.value)} search />
        <main>
          <Brand subtitle={'Characters list'} />
          <section className='sectionList'>
            <InfiniteScroll
              dataLength={characters.length}
              next={this.handleLoadMore}
              hasMore={hasMoreItems}
              loader={this.loader()}
              scrollThreshold={1}
            >
              <div className='list'>
                {characters.map(character => (
                  <div className='flex-item' key={character.id}>
                    <CardActionSelect
                      image={character.image}
                      title={character.name}
                      selected={selected.includes(character.id)}
                      onClick={() => this.onTap(character.id)}
                      onTouchStart={event =>
                        this.onLongPress(event, character.id)
                      }
                      onTouchEnd={this.onRelease}
                      onMouseDown={event =>
                        this.onLongPress(event, character.id)
                      }
                      onMouseUp={this.onRelease}
                      onMouseLeave={this.onRelease}
                    />
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </section>
          <div className='fabContainer'>
            <Fab>
              <Link
                to={{
                  pathname: '/detail',
                  state: { ids: selected }
                }}
              >
                {`Selected characters: ${selected.length}`}
              </Link>
            </Fab>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

Home.defaultProps = {
  characters: [],
  pages: 0
}

Home.propTypes = {
  characters: PropTypes.array.isRequired,
  pages: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  getCharacters: PropTypes.func.isRequired,
  searchCharacters: PropTypes.func.isRequired
}

export default connect(Home)
