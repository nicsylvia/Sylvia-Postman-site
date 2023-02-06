import React from 'react'
import styled from 'styled-components'
import apiFirstworld from "./Assets/apiFirstworld.png"

const TheFutureApi = () => {
  return (
   <Container>
<Wrapper>
  <Content>
   <h2>
   The future is API-first
   </h2>
   <p>At Postman, we believe the future will be built with APIs. The API-first World graphic novel <br /> tells the story of how and why the API-first world is coming to be.</p>
           <Button> 
               Read the Graphic Novel
            </Button>
  </Content>
  <Image>
<Img src={apiFirstworld}/>
  </Image>
</Wrapper>
   </Container>
  )
}

export default TheFutureApi
const Img =styled.img`
width:100%;
height: 100%;
object-fit: cover;
`
const Container= styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
background-color: #F9F9F9;
margin-top: 80px;
`
const Wrapper= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
height: 300px;
flex-wrap: wrap;
/* background-color: green; */

`
const Content= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 600px;
p{
  font-size: 15px;
  color: grey;
  font-weight: 400;
}
/* background-color: red; */

`
const Image= styled.div`
display: flex;
/* justify-content: center; */
margin-bottom: -100px;
flex-direction: column;
width: 400px;
`

const Button =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 30px;
color: grey;
border-radius: 5px;
background-color: transparent;
border: 1px solid #949292;

cursor: pointer;

:hover{
  border: 1px solid grey;
}
`