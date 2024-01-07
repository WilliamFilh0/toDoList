import styled from "styled-components";

export const Header1 = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 15px;
  padding-top: 10px;

  grid-area: header;

  height: 80px;
  width: 500px;

  border-radius: 50px 50px 0 0;
`;

export const Span1 = styled.span`
  padding-left: 10px;

  font-size: 50px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span2 = styled.span`
  font-size: 15px;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

/*
export const CustomFaRegCalendar = styled(FaRegCalendar)`
  font-size: 30px;
`;*/
