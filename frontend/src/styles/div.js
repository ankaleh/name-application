import styled from 'styled-components'

export const Top = styled.div`
    background: black;
    height: 35px;
    border-bottom: 3px solid white;

    display: flex;
    justify-content: center;
`//#bc5a45

export const Navigation = styled.div`
    background: #FFFFFF;
    padding: 10px;
    border-bottom: 2px solid white;
    height: 60px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

`
export const Info = styled.div`
    background: #b7d7e8;
    padding: 10px;
    border-bottom: 2px solid white;
    height: 60px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;

`
export const StyledNameContainer = styled.div`
    padding: 20px;
    border: 2px solid black;
    background: white;
    min-width: 250px;
    max-height: 100px;
    border-radius: 15px;
    margin: 10px;
    justify-content: flex-start;
    align-items: center;
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`
export const StyledAmount = styled.div`
    border: 1.5px solid grey;
    padding: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;

    font: 30px Helvetica, sans-serif;
    font-weight: bold;
    color: grey;

    display: flex;
    flex-irection: row;
    
`

export const Page = styled.div`
    background: #F7F7F7;
    padding: 10px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ErrorMessage = styled.div`
    color: red;
    background: lightgrey;
    height: 35px;
    border-bottom: 2px solid white;
    padding: 10px;

    display: flex;
    justify-content: center;
    
`
export const NotificationMessage = styled.div`
    color: green;
    background: lightgrey;
    height: 35px;
    border-bottom: 2px solid white;
    padding: 10px;

    display: flex;
    justify-content: center;
    
`
