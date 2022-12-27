import PropTypes from 'prop-types';
import { StatItemCss, StatLabel, StatPercentage } from './Statistics.styled';

export default function StatItem({ statLabel, statPercentage }) {
  return (
    <StatItemCss>
      <StatLabel>{statLabel}</StatLabel>
      <StatPercentage>{statPercentage}%</StatPercentage>
    </StatItemCss>
  );
}

StatItem.propTypes = {
  statLabel: PropTypes.string.isRequired,
  statPercentage: PropTypes.number.isRequired,
};
