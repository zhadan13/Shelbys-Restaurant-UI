import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import MKTypography from "components/MKTypography";

import logo from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Shelby's Restaurant",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "/",
    },
    {
      icon: <TwitterIcon />,
      link: "/",
    },
    {
      icon: <GitHubIcon />,
      link: "/",
    },
    {
      icon: <YouTubeIcon />,
      link: "/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/" },
        { name: "blog", href: "/" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Shelby's Restaurant.
      </MKTypography>
    </MKTypography>
  ),
};
