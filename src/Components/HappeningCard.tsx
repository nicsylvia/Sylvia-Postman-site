import React from 'react'
import styled from 'styled-components'

interface card{
    img: string;
    imgName: string;
    secondh4: string;
    secondp1: string;
    secondp11: string;
    secondp2: string;
    secondp22: string;
    secondp222: string;
    third: string;
    hh: string;
    ww: string;
}


const HappeningCard: React.FC<card> = ({
    img, imgName, secondh4, secondp1, secondp2, hh, ww, third, secondp11, secondp22, secondp222
}) => {
  return (
   <Container height='hh' width='ww'>
 <Wrapper>
    
<First>
   <Hold>
   <Img src={img}/>
   <ImgName>
   {imgName}
   </ImgName>
   
   </Hold>
   <Work>
    WORKSPACE
   </Work>

</First>
<Second>
    <h4>{secondh4} </h4>
    <p>{secondp1} &nbsp; {secondp11}</p>
    <p>{secondp2} <br /> {secondp22} <br />{secondp222}</p>
</Second>
<Third>{third}</Third>

 </Wrapper>
   </Container>
  )
}

export default HappeningCard

const Container = styled.div<{width: string, height: string}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2px solid rgba(0, 0, 0, 0.1) ;
    transition: all 350ms;
    margin: 10px;
    background-color: white;
    cursor: pointer;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
   
`
const First = styled.div`
display: flex;

justify-content: space-between;
align-items: center;
`
const Second = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: orange; */
    h4{
        margin: 0;
        font-size: 16px;
    }
    p{
        margin: 5px;
        font-size: 14px;
    }
`
const Third = styled.div``
const Img = styled.img`
height: 50px;
width: 50px;
object-fit: contain;
`
const Hold = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

`
const ImgName = styled.div`
    margin-left: 10px;
`
const Work = styled.div`
color: green;
font-size: 12px;
border: 1px solid green;
padding: 3px;

`
const Wrapper = styled.div`
    width: 400px;
    margin: 5px;
     height: 200px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`