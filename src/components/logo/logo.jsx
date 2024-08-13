import PropTypes from "prop-types";
import { forwardRef } from "react";
import Link from "@mui/material/Link";

import { RouterLink } from "../../routes/components";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <h1
      ref={ref}
      component="div"
      sx={{
        width: "100%",
        height: 40,
        // display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      Share Market
    </h1>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link
      component={RouterLink}
      href="/"
      sx={{ display: "", textAlign: "center" }}
    >
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
