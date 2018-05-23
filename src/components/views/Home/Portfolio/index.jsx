/* eslint-disable jsx-a11y/anchor-is-valid */
import _ from 'lodash';
import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from "../../../common";
import { StyledImage, StyledColumn, StyledCaption, StyledH2, StyledP, StyledPContainer} from "./styles";
import data from '../../../../store/portfolio/data';

const Portfolio = () =>(
     <div>
         <SectionContainer>
             <StyledHeader>
                 <StyledH1>
                     <Divider horizontal>Portfolio</Divider>
                 </StyledH1>
                 <StyledParagraph>
                     Below you can find examples of my projects I have done while studying. More projects will follow shortly.
                     The People who are crazy enough to think they can change the world - are the ones who do.
                 </StyledParagraph>
             </StyledHeader>
         </SectionContainer>
         <Grid columns={2} stackable>
             {_.map(data, item =>(
                 <StyledColumn key={item.name}>
                     <Link to={item.link}>
                         <StyledImage src={item.image1} alt={item.name}/>
                         <StyledCaption>
                             <StyledH2>{item.name}</StyledH2>
                             {item.caption.map(text =>(
                                 <StyledPContainer key={text}><StyledP>{text}</StyledP></StyledPContainer>
                             ))}
                         </StyledCaption>
                     </Link>
                 </StyledColumn>
             ))}

         </Grid>
     </div>
);

export default Portfolio;
