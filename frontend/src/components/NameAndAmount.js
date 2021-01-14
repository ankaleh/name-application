import React from 'react'
import { StyledNameContainer, StyledAmount } from '../styles/div'
import { StyledName } from '../styles/textStyles'

const NameAndAmount = ({ name }) => {

  return (
    <StyledNameContainer>
      <StyledAmount>{name.amount}</StyledAmount>
      <StyledName>{name.name}</StyledName>
    </StyledNameContainer>
  )
}
export default NameAndAmount