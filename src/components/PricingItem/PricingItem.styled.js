import styled from 'styled-components';

const colors = {
  Bronze: 'dd7c4b',
  Silver: 'c0c0c0',
  Gold: 'dda431',
};

export const PricingItemWrap = styled.div`
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #fff;
`;

export const Icon = styled.i`
  width: 240px;
  height: 170px;
  background-position: bottom;
  background-repeat: no-repeat;
  display: block;
  background-size: contain;
`;
export const Label = styled.h2`
  font-size: 36px;
  color: ${props => `#${colors[props.color]}`};
`;

export const Capacity = styled.p`
  color: #b4b4b4;
  font-size: 17px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #b4b4b4;
`;

export const Price = styled.p`
  font-size: 40px;
  color: #7f8c8d;
`;

export const Button = styled.button`
  padding: 20px 50px;
  text-transform: uppercase;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${props => `#${colors[props.color]}`};
`;
