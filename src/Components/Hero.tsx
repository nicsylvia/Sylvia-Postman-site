import React from 'react'
import styled from 'styled-components'
import heropostman from "./Assets/heropostman.png"
import apple from "./Assets/apple.svg"
import mouse from "./Assets/mouse.svg"
import windows from "./Assets/windows.svg"
import {BsSearch} from "react-icons/bs"
import postImg from "./Assets/astronauts.svg"
import BackgroundImage2 from "./Assets/backgroungImage2.png"

const Hero = () => {
  return (
    <Container>
    <First>
        <Text >Build<br />
        APIs together </Text>
        <Describe>
        Over 20 million developers use Postman. Get <br /> started by signing up or downloading the desktop <br /> app.
        </Describe>
        <Button>
            
         <Name>
         nicsylvia15f@gmail.com
         </Name>
          <But>
            Sign Up for free
          </But>
          </Button>
          <Third>
  <h5>Download the desktop app</h5>
  <IconHold>
<img src={apple} alt="" />
<img src={windows} alt="" />
<img src={mouse} alt="" />
  </IconHold>

   </Third>
    </First>
    <FirstImage>
        <BgImage src = {heropostman} />
    </FirstImage>
    <SecondImage>
     <BackgroundImage src={BackgroundImage2}/>
    </SecondImage>
<ThirdImage>
<ThirdImg src={postImg} />
</ThirdImage>

</Container>
  )
}

export default Hero
const SecondImage =styled.div`
/* display: none; */
`
const BackgroundImage= styled.img``
const ThirdImage= styled.div``
const ThirdImg = styled.img``

const Container = styled.div`
    width: 100%;
    /* height: 500px; */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 30px;
    padding-top: 40px;
    @media screen and (max-width: 960px){
        flex-direction: column-reverse;
    }
`;
const First = styled.div`
color: black;
/* background-color: yellow; */
width: 300px;

`;
const Text = styled.h1`
    margin: 0;
    font-size: 30px;
    @media screen and (max-width: 425px) {
        font-size: 30px;
    }
`;
const Describe = styled.p`
    width: 500px;
    font-size: 15px;
   
    @media screen and (max-width: 425px) {
        width: 300px;
        font-size: 15px;
    }
`;
const FirstImage= styled.div`
    /* height: 500px; */
    width: 900px;
    margin-left: 40px;
    /* background-color: red; */
    @media screen and (max-width: 425px) {
        width: 300px;
        margin-left: 0;
        display: none;
    }
`;
const BgImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 425px) {
        width: 300px;
       
    } 
`;

const Button = styled.div`
  width: 400px;
  height:40px;
  /* background-color:red; */
  display: flex;
align-items: center;
justify-content: space-between;
margin-top: 5px;
border-radius: 5px;

border: 1px solid #E05320 ;
@media screen and (max-width: 960px){
        display: none;
    }
`;
const But = styled.div`
width: 150px;
height: 40px;
background-color:  #E05320;
color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
const Name = styled.div`
width: 250px;
/* background-color: blue; */
height:40px;
display: flex;
align-items: center;
justify-content: center;
color: gray;

`
const Third = styled.div`
color: gray;
`
const IconHold = styled.div`
cursor: pointer;
width: 150px;
justify-content: space-between;
display: flex;
align-items: center;
`
