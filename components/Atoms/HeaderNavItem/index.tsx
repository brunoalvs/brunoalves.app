import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledLink } from "./styled";

const HeaderNavItem: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} as={href} locale={router.locale} passHref>
      <StyledLink data-active={isActive}>
        {children}
        <span />
      </StyledLink>
    </Link>
  );
};

export default HeaderNavItem;
