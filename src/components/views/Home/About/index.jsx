import React from 'react';
import { Message, Image , ImageGroup} from 'semantic-ui-react';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader} from "../../../common";
import { StyledBrands } from "./styles";
import openclassroom from '../../../../assets/portfolio/Logo_OpenClassrooms.png';
import coursera from '../../../../assets/portfolio/coursera.png';
import udemy from '../../../../assets/portfolio/13221_1.jpg';
import freecodecamp from '../../../../assets/portfolio/freecodecamp.jpeg';
import SafariOnline from '../../../../assets/portfolio/Oreilly_safari_logo_b9002d.png';
import unimarconi from '../../../../assets/portfolio/unimarconi.jpg';
import treeHouse from '../../../../assets/portfolio/unnamed.jpg';


const About = () =>(
    <SectionContainer>
        <Message negative color='red'>
            <Message.Header>This website is under construction.</Message.Header>
            <p>Anytime will be updated, continue your visit.</p>
        </Message>
        <StyledHeader>
            <StyledH1>
                About Me
            </StyledH1>
            <StyledParagraph>
                I am an experienced Software Web and Mobile developer with a focus on Front-End Engineering.
                For more than a year, I have been enjoying coding and solving skills that I have met in my career.I like sharing what
                I have learned and I love learning from others.
            </StyledParagraph>
        </StyledHeader>
        <ImageGroup size='tiny'>
            <StyledBrands>
                <Image
                    height="100"
                    src={openclassroom}
                    alt="Openclassroom"
                    as='a'
                    href='http://www.openclassroom.com'
                    target='_blank'
                />
                <Image
                    height="100"
                    src={coursera}
                    alt="Coursera"
                    as='a'
                    href='http://www.coursera.org'
                    target='_blank'
                />
                <Image
                    height="100"
                    src={udemy}
                    alt="Udemy"
                    as='a'
                    href='http://www.openclassroom.com'
                    target='_blank'
                />
                <Image
                    height="100"
                    src={freecodecamp}
                    alt="free Code Camp"
                    as='a'
                    href='http://www.freecodecamp.com'
                    target='_blank'
                />
                <Image
                    height="100"
                    src={SafariOnline}
                    alt="safariOnline"
                    as='a'
                    href='http://www.safaribooksonline.com'
                    target='_blank'
                />
                <Image
                    height="100"
                    src={unimarconi}
                    alt="Unimarconi university"
                    as='a'
                    href='http://www.unimarconi.it'
                    target='_blank'
                />
                <Image
                    height="100"
                    src={treeHouse}
                    alt="Team tree house"
                    as='a'
                    href='http://www.teamtreehouse.com'
                    target='_blank'
                />
            </StyledBrands>
        </ImageGroup>
    </SectionContainer>
);
export default About;
