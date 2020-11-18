import React, { useState } from "react"
<<<<<<< HEAD
import { Link } from "gatsby"
import { IconLogo } from "ui"
=======

import Link from "components/link"
import ShopLogo from "images/shop-logo.svg"
>>>>>>> upstream/main

import { Outer, Nav, Logo, NavList, NavListItem, NavAndActions } from "./styles"
import BurgerButton from "./burger-button"
import LocaleSwitcher from "./locale-switcher"
import Search from "./search"

export default function Header({ headerItems }) {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Outer>
      <Link to="/">
        <Logo>
<<<<<<< HEAD
          <IconLogo alt="Ørn forlag hjem" />
=======
          <img src={ShopLogo} alt="" />
>>>>>>> upstream/main
        </Logo>
      </Link>
      <Nav open={navOpen}>
        <NavList>
<<<<<<< HEAD
          {headerItems?.map((headerItem) => (
            <NavListItem key={headerItem.path}>
              <Link to={headerItem.path}>{headerItem.name}</Link>
            </NavListItem>
          ))}
=======
          {headerItems
            ?.filter((i) => !i.name.startsWith("_"))
            .map((headerItem) => {
              const { name, path } = headerItem

              return (
                <NavListItem key={path}>
                  <Link to={path}>{name}</Link>
                </NavListItem>
              )
            })}
>>>>>>> upstream/main
        </NavList>
      </Nav>
      <NavAndActions>
        <LocaleSwitcher />
        <Search />
      </NavAndActions>
      <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
    </Outer>
  )
}
