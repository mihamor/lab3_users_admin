import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import AlertMessage from '../../components/common/alert_message'
import styles from './styles'

function Home (props) {
  const navigate = useNavigate()
  const onEditUser = (info) => {
    navigate('/edit', {
      replace: true,
      state: {
        uid: info.uid,
        email: info.email,
        displayname: info.displayName,
        disabled: info.disabled,
        emailverified: info.emailVerified,
        account_level: (info.customClaims) ? info.customClaims.account_level : -1
      }
    })
  }

  return (
    <div>
      <h1>Home</h1>

      {!props.currentUser &&
      <AlertMessage
        severity='info'
        title='Welcome to Useless Service TM! Please login to continue'
      />}
      {props.currentUser &&
      <AlertMessage
        severity='info'
        title='Your Firebase Authorization Token'
      />}

      {props.currentUser &&
      <Card sx={{ marginTop: '16px' }}>
        <CardContent sx={styles.token}>
          {props.currentUser.accessToken}
        </CardContent>
      </Card>}
      {props.currentUser &&
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        variant='contained'
        size='small'
        onClick={() => onEditUser(props.currentUser)}
      >
        Edit your profile
      </Button>}
    </div>
  )
}

Home.propTypes = {
  currentUser: PropTypes.object
}

export default Home
