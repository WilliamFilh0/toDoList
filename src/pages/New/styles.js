import styled from "styled-components";
import { FaRegCalendar } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContainerIten = styled.div`
  display: flex;
  flex-direction: column;

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

export const Input = styled.input`
  width: 184px;
  height: 44px;

  //posicionamento
  margin-left: 20px;

  //background-color: aqua;
  border: none;
  //border-radius: 10px;

  &::-webkit-input-placeholder {
    position: absolute;
    top: 5px;

    color: black;

    font-weight: bold;
    font-size: 30px;
  }
`;

export const TextArea = styled.textarea`
  width: 480px;
  height: 150px;

  //posicionamento
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  resize: none;

  &::-webkit-input-placeholder {
    padding-left: 15px;

    color: black;
    font-size: large;
  }
`;

export const RememberDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  //posicionamento
  margin-left: 20px;
`;

export const RememberTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  //posicionamento
  margin-left: 20px;
`;
