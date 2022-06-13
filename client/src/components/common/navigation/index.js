import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import UserButton from './userbutton'
import routes from '../../../routes'

function Navigation (props) {
  const superAdmin = props.superAdmin

  return (
    <Container maxWidth='sm'>
      {routes
        .filter(({ isProtected, name }) => (
          name !== 'Login' && name !== 'Edit User' && (!isProtected || superAdmin
          )))
        .map((route) => <Link style={{ margin: 10 }} to={route.path}>{route.name}</Link>)}
      {UserButton(props.currentUser)}
    </Container>
  )
}

Navigation.propTypes = {
  currentUser: PropTypes.object,
  superAdmin: PropTypes.bool
}

export default Navigation
