import {Component} from 'react'

import MenuItemsList from '../MenuItemsList'

import Theme from '../../context/Theme'
import {
  SidebarContainer,
  LogoIcons,
  ContactUsContainer,
  Text,
} from './styledComponents'

class Navbar extends Component {
  render() {
    return (
      <Theme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <SidebarContainer theme={theme}>
              <MenuItemsList />
              <ContactUsContainer>
                <Text theme={theme}>CONTACT US</Text>
                <div>
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogoIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <Text theme={theme}>
                  Enjoy! Now to see your channels and recommendations!
                </Text>
              </ContactUsContainer>
            </SidebarContainer>
          )
        }}
      </Theme.Consumer>
    )
  }
}

export default Navbar
