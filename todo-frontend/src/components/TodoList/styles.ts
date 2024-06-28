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
`;

export const Text = styled.span<TextProperties>`
  ::first-letter {
    text-transform: capitalize;
  }

  color: ${(props) => (props.isCompleted ? "#f00" : "#000")};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

export const DeleteIcon = styled(Text)<{ onClick: (id: number) => void }>``;
