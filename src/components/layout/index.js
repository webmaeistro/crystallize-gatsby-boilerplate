import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./header"
import { Outer as O } from "ui"
import GlobalStyle from "ui/global"
import SEO from "components/seo"
import { useT } from "lib/i18n"

export * from "./crystallize-fragments"

const Outer = styled(O)`
  min-height: auto;
`
const Layout = ({ headerItems, children, title }) => {
  const t = useT()

  return (
    <>
      <GlobalStyle />
      <SEO title={title} />
      <Header headerItems={headerItems} />
      <main>{children}</main>
      <footer style={{ margin: "4rem 0 2rem", textAlign: "center" }}>
        <Outer>
          <div>
            {" "}
            <strong>Ørn forlag</strong> Veståsen 4,1362 Hosle,Norway.<br></br>
            Tlf.: (+47) 909 60 404 | Mail: bjorn[@]ornforlag.no | Org.nr.:
            994304399 MVA | Kontonr.: 9235.27.10220{" "}
          </div>
          <span
            dangerouslySetInnerHTML={{
              __html: t("layout.builtWith", {
                link: `<a href="https://www.gatsbyjs.org">Gatsby</a>`,
              }),
            }}
          />
          {` `}|{` `}
          <span
            dangerouslySetInnerHTML={{
              __html: t("layout.poweredBy", {
                link: `<a href="https://github.com/webmaeistro">Martin Andersen</a>`,
              }),
            }}
          />
        </Outer>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
