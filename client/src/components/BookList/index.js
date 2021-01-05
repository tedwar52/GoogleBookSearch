import React from "react";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
    title,
    author,
    description
}) {
    return (
        <li className="list-group-item">
            <h3>{title}</h3>
            <h6>{author}</h6>
            <p>{description}</p>
        </li>
    );
}