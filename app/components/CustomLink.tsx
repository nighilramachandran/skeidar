import { Link, SxProps } from "@mui/material";
import NextLink from "next/link";
import { UrlObject } from "url";

interface Props {
  href: string | UrlObject;
  children: string | React.ReactNode;
  sx?: SxProps;
}

const CustomLink = ({ href, children, sx }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link sx={sx}>{children}</Link>
    </NextLink>
  );
};

export default CustomLink;
