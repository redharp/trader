import React, { FunctionComponent } from "react";
import { Link, Route } from "react-router-dom";

export type INavItemProps = {
    title: string;
    path: string;
};

export const NavItem: FunctionComponent<INavItemProps> = ({ title, path }) => (
    <li className="text-lg text-center m-3 mr-6">
        <Link to={path}>{title}</Link>
    </li>
);
