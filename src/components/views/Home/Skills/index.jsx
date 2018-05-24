import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import { IoSocialJavascript, IoSocialHtml5, IoSocialCss3, IoSocialNodejs, IoSocialApple, IoSocialWordpress, IoSocialHackernews, IoSocialSass} from 'react-icons/lib/io';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from "../../../common";
import reactIcon from '../../../../assets/reactIcon.svg.png';
import vueIcon from '../../../../assets/vueIcon.png';
import { StyledH2, StyledReactImg } from './styles';

const Skills = () =>(
    <SectionContainer inverted>
        <StyledHeader>
            <StyledH1>
                <Divider horizontal>Skills</Divider>
            </StyledH1>
            <StyledParagraph>
                I have a year experience as a Software Developer. I keep myself updated with the latest
                technologies so I can build faster, more reliable and forward-thinking applications for
                companies like yours.
            </StyledParagraph>
        </StyledHeader>
        <Grid columns={4} doubling>
            <Grid.Column>
                <StyledReactImg src={reactIcon} alt="react icon"/>
                <StyledH2>React</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialJavascript size="70" color="yellow"/>
                <StyledH2>Javascript (ES6)</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialHtml5 size="70" color="orange"/>
                <StyledH2>HTML5</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialCss3 size="70" color="blue"/>
                <StyledH2>CSS3</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialNodejs size="70" color="green"/>
                <StyledH2>Node.js</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialWordpress size="70" color="CORNFLOWERBLUE"/>
                <StyledH2>WordPress Designs</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialApple size="70" color="LIGHTGRAY"/>
                <StyledH2>React Native ios/android</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialHackernews size="70"/>
                <StyledH2>Startups</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <StyledReactImg src={vueIcon} alt="vue icon"/>
                <StyledH2>Vue.js</StyledH2>
            </Grid.Column>
            <Grid.Column>
                <IoSocialSass size="70" color="red"/>
                <StyledH2>Sass</StyledH2>
            </Grid.Column>
        </Grid>
    </SectionContainer>
);

export default Skills;
