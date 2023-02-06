import React from 'react';
import logo from "./Assets/postmanLogo.png";
import {MdOutlineKeyboardArrowDown } from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import styled from 'styled-components';
import {AiOutlineBars} from "react-icons/ai";
import {GiCancel} from "react-icons/gi";


const Header = () => {
  const [open,setOpen]=React.useState<Boolean>(false);

  const openMenu=()=>{
      setOpen(!open);
  }
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <Logo src={logo}/>
            <Navigation>
              <Nav>
              <Icon>
             Product 
              <MdOutlineKeyboardArrowDown/>
              </Icon>
              </Nav>
              <Nav>
                Pricing
               
              </Nav>
              <Nav> 
              
              <Icon>
              EnterPrise 
              <MdOutlineKeyboardArrowDown/>
              </Icon>
              </Nav>
              <Nav>
              <Icon>
       Resources and support
              <MdOutlineKeyboardArrowDown/>
              </Icon>
              </Nav>
              <Nav>
                Explore
              </Nav>
            </Navigation>
          </First>
          <Second>
           <BsSearch/>   
          Search Postman
          </Second>
          <Third>
            <Button width="80px" color="black" bgcolor='' border='1px solid gray'>
              Sign in
            </Button>
            <Button width="130px" color="white" bgcolor='#E05320' border='none'>
              Sign Up for free
            </Button>
          </Third>
          
          
        </Wrapper>
      </Container>
    </div>
  )
}

export default Header;
const Menu = styled.div`
    display: none;

   
`;

const Container = styled.div`
  width: 100%;
  /* height: 50px; */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  z-index: 999;
  @media screen and (max-width: 960px){
    
  }
`;
const Wrapper = styled.div`
  width: 97%;
  /* height: 45px; */
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const First = styled.div`
  width: 800px;
  /* height: 40px; */
  /* background-color: red; */
  margin-left: 10px;
  display: flex;
`;
const Second = styled.div`
  width: 150px;
  height:23px;
  background-color: #F2F2F2;
  display: flex;
align-items: center;
justify-content: space-around;
margin-top: 5px;
border-radius: 5px;
padding: 5px 15px 8px 18px;
border: 1px solid gray ;
@media screen and (max-width: 960px) {
  display: none;
  
}

`;
const Third = styled.div`
  width: 250px;
  /* height: 40px; */
  /* background-color: orange; */
  justify-content: space-around;
align-items: center;
display: flex;

`;
const Logo = styled.img`
width:40px;
/* height: 40px; */
object-fit: cover;

`

const Navigation= styled.div`
display: flex;
justify-content: space-around;
/* margin: 0; */
align-items: center;
width: 600px;
@media screen and (max-width: 960px) {
  display: none;
}
`
const Nav= styled.div`

`
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:2px ;
`
const Button =styled.div <{width:string, color:string ,bgcolor:string,border:string}>`
width: ${(props)=>props.width};
height: 25px;
background-color:${(props)=>props.bgcolor};
color: ${(props)=>props.color};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border: ${(props)=>props.border};
border-radius: 5px;
padding: 5px;
@media screen and (max-width: 960px) {
  display: none;
}
`