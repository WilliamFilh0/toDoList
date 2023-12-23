import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 20px;
  height: 18px;

  border-radius: 50%;
  background-color: ${(props) => props.color};
  outline: none;
  border: none;
`;

export const Span = styled.span`
  margin-left: 10px;
  text-decoration: ${(props) => props.textDecoration};
`;
