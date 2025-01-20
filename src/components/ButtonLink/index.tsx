import type { ReactElement } from "react";
import classes from "./button.module.css";
import Link from "next/link";

interface ButtonProps {
  children: string;
  href: string;
  target?: string;
  rel?: string;
  locale?: string;
  download?: boolean;
}

export default function ButtonLink({
  children,
  href,
  target,
  rel,
  locale,
  download,
}: ButtonProps): ReactElement {
  return (
    <Link className={classes.button} href={href} target={target} rel={rel} locale={locale} download={download}>
      {children.toUpperCase()}
    </Link>
  );
}
