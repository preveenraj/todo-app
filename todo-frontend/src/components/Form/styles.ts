import styled from "styled-components";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export const FormContainer = styled.form<FormProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  background-color: #f7f7f7;
  width: 100%;
  padding: 8px;
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  border-radius: 8px;
  &:focus {
    border: ${(props) => `3px solid ${props.theme.colors.primary}`};
    outline: none;
  }
`;

export const Button = styled.button`
background-color: ${(props) => props.theme.colors.primary};
border-radius: 18px;
border: ${(props) => `2px solid ${props.theme.colors.primary}`};
color: #fff;
margin-left: 1em;
padding: 8px 20px;
cursor: pointer;
font-size: 0.8rem;
font-weight: 600;
@media (max-width: 520px) {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
}

`;
