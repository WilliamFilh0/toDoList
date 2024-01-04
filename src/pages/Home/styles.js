import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  grid-template-areas:
    "header header header"
    "ButtonArea ButtonArea content "
    "buttonSave buttonSave buttonSave";

  height: 600px;
  width: 500px;
  background-color: white;
  border-radius: 50px;
`;

export const StyledButtonArea = styled.div`
  margin-left: 40px;
`;

export const StyledButtonSave = styled.div``;

export const Content = styled.div`
  grid-area: content;
`;
