import React from "react";
import Image from "next/image";

import logo from "../../../public/logo.svg";

import { Container } from "./styled";

export default function Logo() {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Container
        src={logo}
        width="60"
        height="60"
        onClick={handleClick}
        alt="Bruno Alves Logo Website"
      />
    </>
  );
}
