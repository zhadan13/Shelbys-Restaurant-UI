import { useState } from "react";

import PropTypes from "prop-types";

import Fade from "@mui/material/Fade";

import MKBox from "components/MKBox";

import MKAlertRoot from "components/MKAlert/MKAlertRoot";
import MKAlertCloseIcon from "components/MKAlert/MKAlertCloseIcon";

function MKAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <MKAlertRoot ownerState={{ color }} {...rest}>
        <MKBox
          display="flex"
          alignItems="center"
          fontSize="1rem"
          fontWeight="regular"
          color={color === "light" ? "dark" : "white"}
        >
          {children}
        </MKBox>
        {dismissible ? (
          <MKAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</MKAlertCloseIcon>
        ) : null}
      </MKAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of MKAlert
MKAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the MKAlert
MKAlert.propTypes = {
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
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MKAlert;
