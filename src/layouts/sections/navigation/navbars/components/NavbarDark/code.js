const navbarDarkCode = `
import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import routes from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/",
          label: "free download",
          color: "info"
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;`;

export default navbarDarkCode;
