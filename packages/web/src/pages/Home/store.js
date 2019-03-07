import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCharacters, searchCharacters } from '../../redux/characters'

const mapStateToProps = state => ({
  characters: state.characters.characters,
  pages: state.characters.pages
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCharacters, searchCharacters }, dispatch)

const withData = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default Component => withData(Component)
