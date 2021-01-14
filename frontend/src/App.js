import React, { useState } from 'react'
import { Navigation, Margin } from './styles/div'
import Notification from './components/Notification'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { LinkText } from './styles/textStyles'
import Names from './components/Names'
import Amount from './components/Amount'
import Main from './components/Main'


const App = () => {

  const [ notification, setNotification ] = useState('')
  const [ onlyNames, setOnlyNames ] = useState(false)

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  return (
    <Router>
      {notification
        ? <Notification notification={notification}/>
        : <Margin> </Margin>
      }
      <Navigation>
        <LinkText to='/'>Alkuun</LinkText>
        <LinkText to='/amount'>Suosituimpien nimien lukumäärät</LinkText>
        <LinkText to='/all'>Yleisimmät nimet</LinkText>
      </Navigation>

      <Switch>
        <Route path='/all'>
          <Names onlyNames={onlyNames} setOnlyNames={setOnlyNames}/>
        </Route>
        <Route path='/amount'>
          <Amount showNotification={showNotification}/>
        </Route>
        <Route path='/'>
          <Main/>
        </Route>
      </Switch>

      <Navigation>

      </Navigation>

      <Margin>

      </Margin>
    </Router>
  )
}

export default App

