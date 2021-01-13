import React from 'react'
import { StyledNameContainer } from '../styles/div'
import { StyledName } from '../styles/textStyles'
import Name from './Name'

const Names = (props) => {

    if (props.onlyNames) {
        return (
        <div>
        {props.names.map(n => n.name)
        .sort()
        .map(n => 
            <StyledNameContainer key={n}>
                <StyledName>{n}</StyledName>
            </StyledNameContainer>
        )}
      </div>)
    }
    return (
      <div>
        {props.names.map(n => <Name key={n.name} name={n}/>)}
      </div>
    )
}
export default Names