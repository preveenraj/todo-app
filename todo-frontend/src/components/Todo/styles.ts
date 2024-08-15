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

export const LogoutButton = styled.button`
border: 1px solid ${(props) => props.theme.colors.primary};
position: fixed;
top: 20px;
right: 20px;
color: ${(props) => props.theme.colors.primary};
padding: 5px 15px;
border-radius: 10px;
cursor: pointer;
`;
