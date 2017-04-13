import {connect} from 'react-redux'
import CoreLayout from './CoreLayout'
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

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
