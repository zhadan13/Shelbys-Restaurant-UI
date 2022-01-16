import { forwardRef } from "react";

import PropTypes from "prop-types";

import MKTypography from "components/MKTypography";

import MKProgressRoot from "components/MKProgress/MKProgressRoot";

// eslint-disable-next-line react/display-name
const MKProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <MKTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </MKTypography>
    )}
    <MKProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of MKProgress
MKProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the MKProgress
MKProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default MKProgress;
