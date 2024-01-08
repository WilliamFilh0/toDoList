import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContainerIten = styled.div`
  height: 600px;
  width: 500px;
  background-color: white;
  border-radius: 20px;
`;

export const HeaderNew = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
  width: 500px;

  border-radius: 50px 50px 0 0;
`;

export const Button = styled.button`
  width: 70px;
  height: 40px;
  border: none;

  color: white;
  font-size: 20px;
  border-radius: 5px 5px 5px 5px;
  background-color: #41afca;
`;

export const Return = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 12px;

  padding: 5px;
  gap: 3px;
`;

export const BarNavigation = styled.div`
  width: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 20px;
  margin-right: 30px;
`;

export const input1 = styled.input`
  background-color: aqua;
`;
