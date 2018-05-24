import React from 'react';
import {Button, Checkbox, Divider, Form} from 'semantic-ui-react';
import { SectionContainer, StyledH1, StyledParagraph, StyledHeader } from "../../../common";
import { StyledForm, StyledInput } from "./styles";


const Contact = () =>(
    <SectionContainer>
        <StyledHeader>
            <StyledH1>
                <Divider horizontal> Contact Me </Divider>
            </StyledH1>
            <StyledParagraph>
                Do you want to change the world like I do? Do you have an awesome opportunity or project
                for me? Feel free to get in touch.
            </StyledParagraph>
        </StyledHeader>
        <StyledForm action="//formspree.io/aimadev.soft@gmail.com" method="POST">
            <StyledInput
                focus
                label="Name"
                control="input"
                name="name"
                type="text"
                placeholder="Your Names"
                required
            />
            <StyledInput
                focs
                label="Email"
                control="input"
                name="_replyto"
                type="email"
                placeholder="yourname@company.com"
               required
            />
            <StyledInput
                focus
                label="Message"
                control="textarea"
                name="message"
                type="text"
                placeholder="Hello it's me, and I was wondering...."
                required
            />
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button secondary inverted color='blue'> Send</Button>
        </StyledForm>
    </SectionContainer>
);
export default Contact;