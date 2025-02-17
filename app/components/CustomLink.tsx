import { Link } from "@mui/material";
import NextLink from "next/link";
import { CSSProperties } from "react";
import { UrlObject } from "url";

interface Props {
  href: string | UrlObject;
  children: string | React.ReactNode;
  rest?: CSSProperties;
}

const CustomLink = ({ href, children, rest }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link style={{ ...rest }}>{children}</Link>
    </NextLink>
  );
};

export default CustomLink;
