import React from "react";

export default function Button({ title, borderd, ...rest }) {
    return (
        <button
            type="button"
            className={`rounded-full uppercase text-xs font-medium px-4 py-3 mr-2 ${borderd ? "border-2" : "bg-primary-400"}`}
            {...rest}
        >
            {title}
        </button>
    );
}
