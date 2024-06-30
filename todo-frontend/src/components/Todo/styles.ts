import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
color: #2d313f;
border-radius: 15px;
padding: 20px 30px;
display: flex;
flex-direction: column;
gap: 30px;
max-width: 500px;
margin: auto;
`;

export const Heading = styled.h2`
font-size: 1.5rem;
color: ${(props) => props.theme.colors.textPrimary};
`;