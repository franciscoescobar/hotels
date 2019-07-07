import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { StyledFab } from "./styled";
const FloatingButton = () => {
  const handleClick = () => {
    window.location = `/`;
  };
  return (
    <StyledFab color="primary" aria-label="Add" onClick={handleClick}>
      <HomeIcon />
    </StyledFab>
  );
};

export default FloatingButton;
