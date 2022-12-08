import React from 'react'
import styled from 'styled-components'
import { IoStatsChart } from "react-icons/io5";
import { cardShadow, themeColor, hoverEffect } from "../utils";
import AvatarImage2 from "../assets/avatarImage2.jpeg";
import AvatarImage3 from "../assets/avatarImage3.jpeg";


function Projects () {
  return (
    <YourProjects>
        <Project>
            <Avatar>
                <img src={AvatarImage2} alt="avatar" />
            </Avatar>
            <Detail>
                <Title> Logo Design </Title>
                <Subtitle> 1 day remaining </Subtitle>
            </Detail>
        </Project>

        <Project>
            <Avatar>
                <img src={AvatarImage3} alt="avatar" />
            </Avatar>
            <Detail>
                <Title> Personal Branding Projects </Title>
                <Subtitle> 5 day remaining </Subtitle>
            </Detail>
        </Project>
        <AllProjects>See All Projects </AllProjects>
    </YourProjects>
  )
}


const YourProjects = styled.div`
 height:70;
 background-color: white;
 margin: 0;
 padding: 1rem;
 border-radius: 1rem;
 box-shadow: ${cardShadow};
 transition: 0.4s ease-in-out;
    &:hover {
        box-shadow: ${hoverEffect};
    }
`;	

const Project = styled.div`
  display:flex;
  align-items:center;
  margin-bottom: 0.4rem;
`;	


const Avatar = styled.div`
  img{
    height:4rem;
    width:4rem;
    border-radius:50%;
  }
`;	


const Detail = styled.div`
  margin-left:1rem;
`;	

const Title = styled.h3`
  font-weight:500;
`;	

const Subtitle = styled.h5`
  font-weight:400;
`;	

const InfoCard = styled.div`

`;	

const CardContent = styled.div`

`;	

const Row = styled.div`

`;	
const Digit = styled.h2`

`;	

const InfoContainer = styled.div`

`;	

const AllProjects = styled.h5`  
 text-align:end;
 color: ${themeColor};
 cursor: pointer;
 `;	





export default Projects