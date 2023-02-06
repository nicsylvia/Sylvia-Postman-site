import React from 'react'
import styled from 'styled-components'

import goverance from "./Assets/governance.svg"
import tool from "./Assets/tools.svg"
import workspace from "./Assets/workspaces.svg"
import repo from "./Assets/repos.svg"


const WhatIsPostman = () => {
  return (
    <Container>
<Wrapper>
<First>
<Text>
<h3>What is Postman?</h3>
<p>Postman is an API platform for building and using APIs. Postman simplifies each step of <br /> the API lifecycle and streamlines collaboration so you can create better APIs—faster.</p>
</Text>

  </First>
  <Second>
  <Card>
    <img src={tool} alt="" />
                <Tittle>API Tools</Tittle>
                <Desc>
                A comprehensive set of tools that help accelerate the API Lifecycle - from design, testing, documentation, and mocking to discovery.
                </Desc>
               
            </Card>
  <Card>
    <img src={repo} alt="" />
                <Tittle>API Repository</Tittle>
                <Desc>Easily store, iterate and collaborate around all your API artifacts on one central platform used across teams.
                </Desc>
               
            </Card>
  <Card>
    <img src={workspace} alt="" />
                <Tittle>Workspaces</Tittle>
                <Desc>
                Organize your API work and collaborate with teammates across your organization or stakeholders across the world.
                </Desc>
               
            </Card>
  <Card>
    <img src={goverance} alt="" />
                <Tittle>Governance</Tittle>
                <Desc>
                Improve the quality of APIs with governance rules that ensure APIs are designed, built, tested, and distributed meeting organizational standards.
                </Desc>
               
            </Card>
  </Second>
            <Button> 
              Learn More
            </Button>
</Wrapper>
    </Container>
  )
}

export default WhatIsPostman
const Button =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 30px;
border-radius: 5px;
background-color: transparent;
border: 1px solid #949292;
margin-left: 600px;
cursor: pointer;

:hover{
  border: 1px solid grey;
}
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 600px;
background-color:#F9F9F9 ;
`
const Wrapper = styled.div`
width: 95%;
height: 500px;
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: space-around;
`

const First = styled.div`
display: flex;
justify-content: space-between;

/* background-color: red; */
`
const Second = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
`
const Text = styled.div``
const PostImg = styled.img`
height: 250px;
object-fit: cover;
width: 350px;
margin-top: -120px;

`
const Card = styled.div`
    display: flex;
    height: 180px;
    flex-direction: column;
    justify-content:space-around;
    width: 300px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    padding: 15px 15px;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
   
    img{
      height: 30px;
      width: 30px;
      object-fit: contain;
    }
    :hover{
      cursor: pointer;
    }

    @media screen and (max-width: 320px) {
        width: 250px;
    }
    @media screen and (min-width: 330px) and (max-width: 750px){
        width: 300px;
    }
    @media screen and (min-width: 800px) and (max-width: 1024px) {
        width: 350px;
    }


`;
const Tittle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: black;
    :hover{
      color: blue;
      cursor: pointer;
    }
`;
const Desc = styled.div``;
