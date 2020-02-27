import styled from 'styled-components';

export const StatsSection = styled.section`
  width: 350px;
  margin: 30px auto;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #475965;
  padding: 30px 0;
  margin-bottom: 0;
  text-align: center;
  background-color: #f3f6f9;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  color: #fff;
  justify-content: space-between;
`;

export const Item = styled.li`
  padding: 15px 0;
  text-align: center;
  flex: 1 1 auto;
`;

export const Label = styled.span`
  font-size: 12px;
  display: block;
  margin-bottom: 12px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 18px;
`;
