import Link from "next/link";
import React from "react";

export default function CustomLink({ href, children, ...rest }) {
    return (
        <Link href={`${href || "/"}`} {...rest}>
            <a>{children}</a>
        </Link>
    );
}
