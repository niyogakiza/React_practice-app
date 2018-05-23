import React from 'react';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader} from "../../../common";
import { StyledBrandImage, StyledBrands } from "./styles";
import commingsoon from '../../../../assets/about/comingsoon.png';


const About = () =>(
    <SectionContainer>
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
        <StyledBrands>
          <StyledBrandImage height="100" src={commingsoon} />
        </StyledBrands>
    </SectionContainer>
);
export default About;
