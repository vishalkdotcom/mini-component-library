/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: { height: 8, radius: 4, padding: 0 },
  medium: { height: 12, radius: 4, padding: 0 },
  large: { height: 24, radius: 8, padding: 4 },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgessBar: ${size}`);
  }

  if (value < 0) value = 0;
  if (value > 100) value = 100;

  return (
    <Wrapper
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{ '--width': value + '%', '--height': styles.height + 'px' }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when the progress bar is near-full. */
  overflow: hidden;
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
