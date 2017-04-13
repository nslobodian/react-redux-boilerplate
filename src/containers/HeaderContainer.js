import {connect} from 'react-redux'
import Header from 'components/Header'
import {logout} from 'redux/Auth'

const mapActionCreators = {logout}

const mapStateToProps = ({
  Auth: {
    loggedIn,
    admin: {
      username
    }
  }
}) => ({
  loggedIn,
  username
})

export default connect(mapStateToProps, mapActionCreators)(Header)
