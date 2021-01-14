import React, { useState, useEffect } from 'react'
import { Page, StyledNameContainer } from '../styles/div'
import { StyledName, TextPrimary } from '../styles/textStyles'
import { Button } from '../styles/button'
import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'
import NameAndAmount from './NameAndAmount'

const ORDERED_BY_AMOUNT = loader('../graphql/queries/orderedByAmount.graphql')

const Names = (props) => {

  const allNames = useQuery(ORDERED_BY_AMOUNT)
  const [ names, setNames ] = useState(null)

  useEffect(() => {
    if (allNames.data) {
      setNames(allNames.data.orderedByAmount)
    }
    if (allNames.error) {
      props.showNotification(`Tapahtui virhe: ${allNames.error.message}`)
    }
  }, [ allNames])

  if (allNames.loading || !names) {
    return <TextPrimary>Nimiä haetaan</TextPrimary>
  }

  return (
    <Page>
      <Button onClick={() => props.setOnlyNames(!props.onlyNames)}>
        {props.onlyNames
          ? 'Näytä nimet yleisyysjärjestyksessä'
          : 'Näytä nimet aakkosjärjestyksessä'
        }
      </Button>

      {props.onlyNames
        ? names.map(n => n.name)
          .sort()
          .map(n =>
            <StyledNameContainer key={n}>
              <StyledName>{n}</StyledName>
            </StyledNameContainer>
          )
        : names.map(n => <NameAndAmount key={n.name} name={n}/>)
      }
    </Page>
  )
}
export default Names