import React from 'react'
import styled from 'styled-components'
import HappeningCard from './HappeningCard';
import bitly from "./Assets/bitly.jpg"
import dolby from "./Assets/dolby.png"
import exotel from "./Assets/exotel.png"
import linkedin from "./Assets/linkedln.png"
import postmandev from "./Assets/postmandev.png"
import customer from "./Assets/postmanCustomer.png"
import evangelist from "./Assets/apiEvangelist.png"
import pinterest from "./Assets/pinterest.png"
import intel from "./Assets/intel.png"
import kontent from "./Assets/kontent.png"
import africa from "./Assets/africa.png"


const WhatIsHappening = () => {
  return (
 <Container>
  <Content>
  <h2>What's happening on Postman</h2>
  <p>Browse the largest network of APIs and share what you build with developers across the planet. <a href="https://www.postman.com/explore">Explore the Public API Network</a></p>
</Content>
  <Wrapper>

        <First>
          <HappeningCard 
          img = {pinterest}
          imgName = "Pinterest " 
          secondh4 = "Pinterest Collections" 
          secondp1 = "4 Collections"
          secondp11 = "· 4 APIs"
          secondp2 = "Public workspace that Pinterest uses to make Collections " 
           secondp22 = "public."
          secondp222 = ""
          third = "500+" 
          hh = ""
          ww = ""
          />
     <HappeningCard 
          img = {exotel}
          imgName = "Exotel " 
          secondh4 = "Exotel APIs" 
          secondp1 = "11 Collections"
          secondp11 = ""
          secondp2 = "The Official Exotel API Workspace - Explore our SMS and Voice " 
           secondp22 = "APIs to power your business with a full stack customer "
          secondp222 = "engagement platform."
          third = "1K+" 
          hh = ""
          ww = ""
          />

          <HappeningCard 
          img = {linkedin}
          imgName = "LinkedIn " 
          secondh4 = "LinkedIn Marketing Solutions" 
          secondp1 = "8 Collections"
          secondp11 = "· 4 APIs"
          secondp2 = "A workspace outlining different use cases for our Marketing" 
           secondp22 = "APIs. Fork and watch your favorite collections to be notified "
          secondp222 = " on updates!"
          third = "10K+" 
          hh = ""
          ww = ""
          />          
        </First>
    
        <Second>
        <HappeningCard 
          img = {bitly}
          imgName = "Bitly " 
          secondh4 = "Bitly API Workspace" 
          secondp1 = "1 Collection"
          secondp11 = "· 1 API"
          secondp2 = "Welcome to the Bitly API Workspace! Here you can find access " 
           secondp22 = "to all of the public API."
          secondp222 = ""
          third = "500+" 
          hh = ""
          ww = ""
          />
          <HappeningCard 
          img = {postmandev}
          imgName = "Postman DevRel " 
          secondh4 = "GraphQL Security 101" 
          secondp1 = "2 Collections"
          secondp11 = ""
          secondp2 = "This workspace is an introduction to GraphQL Security " 
           secondp22 = ""
          secondp222 = ""
          third = "100+" 
          hh = ""
          ww = ""
          />
          <HappeningCard 
          img = {intel}
          imgName = "Intel® Security Libraries for Data Center " 
          secondh4 = "Intel® SecL-DC - Foundational Security" 
          secondp1 = "5 Collections"
          secondp11 = ""
          secondp2 = "Quick start API Collections for Foundational Security use cases " 
           secondp22 = "of Intel® SecL-DC"
          secondp222 = ""
          third = "4K+" 
          hh = ""
          ww = ""
          />
          <HappeningCard 
          img = {dolby}
          imgName = " Dolby " 
          secondh4 = "Dolby.io Media APIs" 
          secondp1 = "7 Collections"
          secondp11 = ""
          secondp2 = "Dolby.io Media APIs Postman Collection " 
           secondp22 = ""
          secondp222 = ""
          third = "4K+" 
          hh = ""
          ww = ""
          />
          
        </Second>
        

        <Third>
          <HappeningCard 
          img = {evangelist}
          imgName = "API Evangelist" 
          secondh4 = "Space" 
          secondp1 = "5 Collections"
          secondp11 = "· 4 APIs"
          secondp2 = "This is a workspace for building and integrating with space  " 
           secondp22 = "related APIs."
          secondp222 = ""
          third = "5K+" 
          hh = ""
          ww = ""
          />
          <HappeningCard 
          img = {africa}
          imgName = "Africa's Talking" 
          secondh4 = "Africa's Talking APIs" 
          secondp1 = "5 Collections"
          secondp11 = "·1 API"
          secondp2 = "Build superior customer engagement solutions using a variety " 
           secondp22 = "of communication and payment APIs provided by Africa's"
          secondp222 = "Talking."
          third = "5K+" 
          hh = ""
          ww = ""
          />
          <HappeningCard 
          img = {kontent}
          imgName = "Kontent.ai " 
          secondh4 = "Kontent.ai APIs" 
          secondp1 = "1 Collection"
          secondp11 = "· 4 APIs"
          secondp2 = "Postman collection for the APIs available on the Kontent.ai " 
           secondp22 = "modular content platform."
          secondp222 = ""
          third = "4K+" 
          hh = ""
          ww = ""
          />
        </Third>
  </Wrapper>

 </Container>
  )
}

export default WhatIsHappening

const Container = styled.div`
    width: 100%;
    /* height: 1000px; */
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 95%;
    /* height: 900px; */
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Content = styled.div`
  width: 95%;
  
 a{
  text-decoration: none;
  color: blue;

:hover{
  text-decoration:underline;
}
 }
`;
const First = styled.div`
  width: 450px;
  /* height: 700px; */
  /* background-color: green; */
`;
const Second = styled.div`
   width: 450px;
  /* height: 700px; */
  /* background-color: orange; */
`;
const Third = styled.div`
   width: 450px;
  /* height: 700px; */
  /* background-color: purple; */
`;