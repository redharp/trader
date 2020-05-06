import React, { useState, useEffect, Children } from "react";
import { NavItem, INavItemProps } from "./NavItem";
import { Switch, Route, Link } from "react-router-dom";
import { Linker } from "./Linker";
type Navi = INavItemProps & {
    component: JSX.Element;
};
export const SideBar = (children: React.ReactNode) => {
    const items: Navi[] = [
        {
            title: "Savings",
            path: "/savings",
            component: <Linker />,
        },
        {
            title: "stocks",
            path: "/stocks",
            component: <div>stocks</div>,
        },
        {
            title: "crypto",
            path: "/crypto",
            component: <div>crypto</div>,
        },
    ];
    const eles = items.map((v, i) => {
        return <NavItem title={v.title} path={v.path} key={i} />;
    });
    return (
        <nav className="rounded-lg p-6">
            <ul className="flex flex-grow">
                <Link to="/">
                    <div className="flex items-center flex-shrink-0 text-blue mr-6">
                        <span className="font-semibold text-xl tracking-tight">
                            Balancer
                        </span>
                    </div>
                </Link>
                {eles}
            </ul>
            <Switch>
                {items.map((i, dx) => (
                    <Route path={i.path} key={dx}>
                        {i.component}
                    </Route>
                ))}
                <Route path="/">
                    <div>home</div>
                </Route>
            </Switch>
        </nav>
    );
};
// <div className="grid grid-cols-1 col-gap-4 mb-4 rounded-lg w-1/5 bg-purple-500 min-w-1/4">
