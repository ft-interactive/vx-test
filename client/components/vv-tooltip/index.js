import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { withTooltip, TooltipWithBounds } from '@vx/tooltip';
import { localPoint } from '@vx/event';

const VvTooltip = (props) => {
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    hideTooltip,
    showTooltip,
    tooltipTemplate,
    children,
  } = props;

  const handleMouseOver = (event, datum) => {
    const coords = localPoint(event.target.ownerSVGElement, event);

    console.log('hi', coords);

    showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: datum,
    });
  };

  const childComponent = cloneElement(children, { onMouseOver: handleMouseOver, onMouseOut: hideTooltip });

  return (
    <React.Fragment>
      {/* Chart below... */}
      {childComponent}
      {tooltipOpen && (
        <TooltipWithBounds
          // set this to random so it correctly updates with parent bounds
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
        >
          Data value
          {' '}
          <strong>
            {tooltipData}
          </strong>
        </TooltipWithBounds>
      )}
    </React.Fragment>
  );
};

VvTooltip.propTypes = {
  tooltipTemplate: PropTypes.string,
};

VvTooltip.defaultProps = {
  tooltipTemplate: '',
};

export default withTooltip(VvTooltip);
