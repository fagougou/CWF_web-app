import { connect } from 'react-redux'
import { toggleMenu } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state) => ({ menuOpen: state.menuOpen });

const HeaderWrap = connect(
  mapStateToProps,
  { onClick: toggleMenu }
)(Header)

export default HeaderWrap;