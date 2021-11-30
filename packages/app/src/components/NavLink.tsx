import { Link } from 'react-router-dom'
import { RouteLink } from '../types'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const NavLink = ({ route } : { route: RouteLink }) => {
  return (
    <ListItem component={Link} to={route.path} button sx={{ minWidth: '40px' }}>
      {route.icon && (
        <ListItemIcon>
          {route.icon}
        </ListItemIcon>
      )}
      <ListItemText primary={route.name} />
    </ListItem>
  )
}

export default NavLink
