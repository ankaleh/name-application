import styled from 'styled-components'

export const Margin = styled.div`
    background: black;
    height: 35px;
    border-bottom: 3px solid white;

    display: flex;
    justify-content: center;
`

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
export const StyledNameContainer = styled.div`
    padding: 20px;
    margin-top: 20px;
    border: 2px solid black;
    background: white;
    width: 250px;
    max-height: 100px;
    border-radius: 5px;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const StyledAmount = styled.div`
    border: 1.5px solid grey;
    padding: 15px;
    margin: 15px;
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
    padding: 20px;
    text-align: center;
    min-height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ErrorMessage = styled.div`
    color: red;
    background: lightgrey;
    max-height: 35px;
    border-bottom: 2px solid white;
    padding: 10px;
    font: 15px Verdana, sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;
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

