import React from 'react';
import PropTypes from 'prop-types';
import {
  PricingItemWrap,
  Icon,
  Label,
  Capacity,
  Description,
  Price,
  Button,
} from './PricingItem.styled';

const PricingItem = ({
  item: { label, icon, capacity, price, description },
}) => (
  <PricingItemWrap>
    <Icon style={{ backgroundImage: `url(${icon})` }} />
    <Label color={label}>{label}</Label>
    <Capacity>{capacity} Storage</Capacity>
    <Description>{description}</Description>
    <Price>${price}/MO</Price>
    <Button color={label}>Get Started</Button>
  </PricingItemWrap>
);

PricingItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.isRequired,
  }).isRequired,
};

export default PricingItem;
