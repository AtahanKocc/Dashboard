import React from 'react'
import styled from 'styled-components'
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";


const Info = () => {
  return (
    <InfoCard>
        <Card>
            <CardContent>
                 <Row>
                    <Digit>98</Digit>
                    <InfoContainer>
                        <Title>Rank</Title>
                        <Subtitle>In Top 10%</Subtitle>
                    </InfoContainer>
                 </Row>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                 <Row>
                    <Digit>61</Digit>
                    <InfoContainer>
                        <Title>Project</Title>
                        <Subtitle>3 this month</Subtitle>
                    </InfoContainer>
                 </Row>
                 <Row justify>
                      <Badge content = "web app" glow />
                      <Badge content = "branding" glow />
                 </Row>
            </CardContent>
        </Card>


    </InfoCard>
  )
}


const InfoCard = styled.div`
 height: 100%;
 width: 14rem;
 background-color: white;
 border-radius:1rem;
 padding:1rem;
 box-shadow: ${cardShadow};
 transition: 0.4s ease-in-out;
 &:hover {
  box-shadow: ${hoverEffect};
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
  width: 80%;
}

`;

const Card = styled.div`
  background-color: rgba(183,194,243,0.3);
  border-radius: 1rem;
  margin-bottom=1rem;

`;	

const CardContent = styled.div`
 padding: 0%.7rem 1rem 0.3rem 1rem;
`;	

const Row = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.4rem;
${({ justify }) =>
  justify &&
  `
    justify-content:space-around;
    width:100%
`}
`;

const Digit = styled.div`
background-color: ${themeColor};
padding: 0.8rem 1rem;
font-size: 1.2rem;
border-radius: 1rem;
`;	


const InfoContainer = styled.div`
margin-left: 0.7rem;
`;	

const Title = styled.div`
color: black;
`;	

const Subtitle = styled.div`
color: #333333;
font-weight: normal;
`;	


export default Info