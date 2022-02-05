import Link from "next/link";
import React from "react";

export default function CustomLink({ children, ...rest }) {
    return (
        <Link href="/" {...rest}>
            <a>{children}</a>
        </Link>
    );
}
