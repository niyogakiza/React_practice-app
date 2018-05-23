import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import { IoSocialHackernews } from 'react-icons/lib/io';
import { FaMedium } from 'react-icons/lib/fa';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader} from "../../../common";
import reactIcon from '../../../../assets/reactIcon.svg.png';
import {StyledButton, StyledH2, StyledIoSocialGithub, StyledReactImg} from "./styles";


const OpenSource = () =>(
    <SectionContainer inverted>
        <StyledHeader>
            <StyledH1>
                 Open Source
            </StyledH1>
            <StyledParagraph>
                I love to follow and willing to contribute in opening source projects such as React, Vue.js, Node.js and others.
                I care about the future of the communities that I would like to join soon.
            </StyledParagraph>
        </StyledHeader>
        <Grid columns={3} doubling>
            <Grid.Column>
                <StyledReactImg src={reactIcon} alt="react icon"/>
                <StyledH2>React & React Native</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialHackernews size="70" />
                <StyledH2>Mattermost</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <FaMedium size="70"/>
                <StyledH2>Medium</StyledH2>
            </Grid.Column>
        </Grid>
        <StyledParagraph >
            <StyledButton size="large" href="https://github.com/niyogakiza" target="_blank" rel="noopener noreferrer">
                <StyledIoSocialGithub/> Visit my Github.com profile
            </StyledButton>
        </StyledParagraph>
    </SectionContainer>
);

export default OpenSource;

