import React from 'react';

const FormattedNumber = ({ number }) => {
  const formatNumber = (value) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'k';
    }
    return value;
  };

  return <>{formatNumber(number)}</>;
};

export default FormattedNumber;
