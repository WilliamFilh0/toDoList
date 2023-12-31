import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: buttonSave;

  width: 42px;
  height: 40px;

  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 50%;
  outline: none;
  border: none;
  overflow: hidden;
`;
