import styled, { CSSProperties } from "styled-components";

interface TextProperties {
  isCompleted?: boolean;
}

export const ListContainer = styled.ul`
  padding: 0;
  cursor: pointer;
`;

export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 1rem;

  &:hover {
    & > button {
      visibility: visible;
    }
  }
`;

export const Text = styled.span<TextProperties>`
  ::first-letter {
    text-transform: capitalize;
  }

  color: ${(props) => (props.isCompleted ? props.theme.colors.textPrimary : props.theme.colors.textSecondary)};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

export const DeleteButton = styled.button<{ onClick: (id: number) => void }>`
width: 20px;
background-color: transparent;
border: none;
visibility: hidden;
cursor: pointer;
`;
