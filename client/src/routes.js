import DashboardContainer from './containers/dashboard'
import LoginContainer from './containers/login'
import CreateUserContainer from './containers/createuser'
import UpdateUserContainer from './containers/updateuser'
import Home from './components/home'

const routes = [
  {
    path: '/login',
    name: 'Login',
    isProtected: false,
    component: LoginContainer
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    isProtected: true,
    component: DashboardContainer
  },
  {
    name: 'Create User',
    path: '/create',
    isProtected: true,
    component: CreateUserContainer
  },
  {
    name: 'Edit User',
    path: '/edit',
    isProtected: false,
    component: UpdateUserContainer
  },
  {
    name: 'Home',
    path: '/',
    isProtected: false,
    component: Home
  }
]

export default routes
