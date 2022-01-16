import { forwardRef, createContext, useContext } from "react";

import PropTypes from "prop-types";

import MKBox from "components/MKBox";

import MKPaginationItemRoot from "components/MKPagination/MKPaginationItemRoot";

const Context = createContext();

const MKPagination = forwardRef(
  ({ item, variant, color, size, active, children, placement, ...rest }, ref) => {
    const context = item ? useContext(Context) : null;
    const paginationSize = context ? context.size : null;
    let placementValue = "flex-end";

    if (placement === "left") {
      placementValue = "flex-start";
    } else if (placement === "center") {
      placementValue = "center";
    }

    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <Context.Provider value={{ variant, color, size }}>
        {item ? (
          <MKPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "secondary"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </MKPaginationItemRoot>
        ) : (
          <MKBox
            display="flex"
            justifyContent={placementValue}
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </MKBox>
        )}
      </Context.Provider>
    );
  }
);

// Setting default values for the props of MKPagination
MKPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
  placement: "right",
};

// Typechecking props for the MKPagination
MKPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["left", "right", "center"]),
};

export default MKPagination;
