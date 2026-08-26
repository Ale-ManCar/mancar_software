"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { trackConversion } from "../analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventPayload?: Record<string, string | number | boolean | undefined>;
  children: ReactNode;
};

export default function TrackedLink({
  eventName,
  eventPayload = {},
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackConversion(eventName, eventPayload);
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
