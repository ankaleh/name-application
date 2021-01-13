import React, { useState, useEffect } from 'react'
import { Page, Navigation, Top } from './styles/div'
import { TextPrimary } from './styles/textStyles'
import Notification from './components/Notification'

import Names from './components/Names'
import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'

const ORDERED_BY_AMOUNT = loader('./graphql/queries/orderedByAmount.graphql')
const IN_ALPHABETICAL_ORDER = loader('./graphql/queries/orderedByAmount.graphql')

const App = () => {
  
  const allNames = useQuery(ORDERED_BY_AMOUNT)
  //const inAlphabeticalOrder = useQuery(IN_ALPHABETICAL_ORDER)
  const [ notification, setNotification ] = useState('')

  const [ names, setNames ] = useState(null)
  const [ onlyNames, setOnlyNames ] = useState(false)
  const [ amount, setAmount ] = useState(null)
  //const [ namesInAlphabeticalOrder, setNamesInAlphabeticalOrder] = useState(null)

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  useEffect(() => {
    if (allNames.data) {
        setNames(allNames.data.orderedByAmount)
    }
    if (allNames.error) {
        console.log('Virheviesti palvelimelta: ', allNames.error.message);
        //props.showNotification(`Tapahtui virhe: ${allNames.error.message}`)
    } 
}, [allNames]); 

  if (allNames.loading) {
    return <TextPrimary>Nimiä haetaan</TextPrimary>
  }
  return (
    <div>
      {notification
        ? <Notification notification={notification}/>
        : <Top> </Top>
      }
      
      <Navigation>
        <button onClick={() => setOnlyNames(false) }>Yleisimmät nimet yleisyysjärjestyksessä</button>
        <button onClick={() => setOnlyNames(true)}>Yleisimmät nimet aakkosjärjestyksessä</button>
        {/* <button onClick={() => setAmount(names.map(n => n.amount).reduce((total, num) => total + num))}>Suosituimpia nimiä yhteensä</button> */}
      </Navigation>
      <Page>
        <TextPrimary>Etsi ja järjestä haluamallasi tavalla Solitassa työskentelevien kymmenen yleisintä naisen nimeä ja kymmenen miehen nimeä. </TextPrimary>
        
        {names
        ? <Names onlyNames={onlyNames} names={names} />
        : null}

        <div>{amount}</div>
      </Page>
    </div>
  )
}

export default App;
