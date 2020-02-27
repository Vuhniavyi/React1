import React from 'react';
import PropTypes from 'prop-types';
import {
  StatsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Stats.styled';

function randomColor() {
  const allowed = 'ABCDEF0123456789';

  let S = '#';

  while (S.length < 7) {
    S += allowed.charAt(Math.floor(Math.random() * 16 + 1));
  }
  return S;
}

const Stats = ({ title, stats }) => (
  <StatsSection>
    {title ? <Title className="title">{title}</Title> : null}
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id} style={{ backgroundColor: randomColor() }}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  </StatsSection>
);

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
