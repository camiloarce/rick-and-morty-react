import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { detailCharacters } from '../../redux/characters'

const mapStateToProps = state => ({
  characters: state.characters.detailCharacters
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ detailCharacters }, dispatch)

const withData = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default Component => withData(Component)
