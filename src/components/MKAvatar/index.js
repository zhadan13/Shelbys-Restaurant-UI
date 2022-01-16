import { forwardRef } from "react";

import PropTypes from "prop-types";

import MKAvatarRoot from "components/MKAvatar/MKAvatarRoot";

// eslint-disable-next-line react/display-name
const MKAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <MKAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of MKAvatar
MKAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

// Typechecking props for the MKAvatar
MKAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default MKAvatar;
