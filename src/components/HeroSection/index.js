import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import HeroImg from '../../images/Naresh.jpg';
import styled from 'styled-components';





export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  max-height: 500px;
  max-width: 400px;
  object-fit: center;
  object-position: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1) translateY(-10px);
    animation: bounce 0.6s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (max-width: 640px) {
    max-width: 300px;
    max-height: 300px;
  }
`;


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Right">
                        <Title><h6>Hi, I am</h6>  <h5><b>{Bio.name}</b></h5></Title>
                        <TextLoop>
                            I am a
                            <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                    <Image src = {HeroImg} alt="Hero"/>

                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection