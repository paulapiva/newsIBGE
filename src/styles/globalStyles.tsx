import { createGlobalStyle, styled } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
export const Destak = styled.div`
  background-color: #e9fae3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: rgba(214, 17, 3, 0.3) 0px 0px 0px 4px;


  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 50px;
  }  
`;

export const Div = styled.div`
  background-color: #e9fae3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: rgba(2, 107, 226, 0.349) 0px 0px 0px 2px;

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 50px;
  }  
`;

export const Title = styled.h1`
  color: green;
  text-decoration: none;
`
export const Noticias = styled.h1`
  color: #021301;
  font-size: larger;
`
export const Cabecalho = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    color: #021301;
    font-size: large;
    text-decoration: none;
  }
`