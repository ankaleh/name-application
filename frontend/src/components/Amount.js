import React, { useEffect, useState } from 'react'
import { loader } from 'graphql.macro'
import { useLazyQuery, useQuery } from '@apollo/client'
import { StyledAmount, StyledNameContainer } from '../styles/div'
import { StyledName } from '../styles/textStyles'
import { TextPrimary } from '../styles/textStyles'
import { Button } from '../styles/button'
import { Input } from '../styles/input'
import { Page } from '../styles/div'

const AMOUNT_ALL_NAMES = loader('../graphql/queries/amountAllNames.graphql')
const NAME_AMOUNT = loader('../graphql/queries/nameAmount.graphql')

const Amount = (props) => {
  const amountAllNames = useQuery(AMOUNT_ALL_NAMES)
  const [ nameAmount, result ] = useLazyQuery(NAME_AMOUNT)
  const [ name, setName ] = useState('Nimi')
  const [ amount, setAmount ] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    nameAmount({
      variables: {
        name
      }
    })
  }
  const handleChange = (event) => {
    setName(event.target.value)
  }

  useEffect(() => {
    if (result.data) {
      setAmount(result.data.nameAmount)
    }
    if (result.error) {
      props.showNotification(`Tapahtui virhe: ${result.error.message}`)
    }
  }, [ result])

  if (amountAllNames.loading) {
    return (
      <div>Tietoa haetaan</div>
    )
  }

  return (
    <Page>
      <TextPrimary>Suosituimpia nimiä yhteensä</TextPrimary>
      <StyledAmount>{amountAllNames.data.amountAllNames}</StyledAmount>
      <TextPrimary>Etsi nimeä</TextPrimary>
      <form onSubmit={handleSubmit}>
        <Input value={name} onChange={handleChange}/>
        <Button type='submit'>Etsi</Button>
      </form>
      {amount
        ? <StyledNameContainer>
          <StyledAmount>{amount}</StyledAmount>
          <StyledName>{name}</StyledName>
        </StyledNameContainer>
        : null
      }
      <Button onClick={() => {
        setName('')
        setAmount(null)
      }}>Tyhjennä</Button>
    </Page>
  )
}
export default Amount