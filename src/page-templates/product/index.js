import React, { useState } from "react"
import { Image } from "@crystallize/react-image"
import ContentTransformer from "ui/content-transformer"

import { graphql } from "gatsby"
<<<<<<< HEAD
//Button
import { H1, H2, screen, Outer } from "ui"
import CategoryItem from "components/category-item"
import { CurrencyValue } from "components/currency-value"
import VariantSelector from "components/variant-selector"
import ShapeComponents from "components/shape-components"
import { attributesToObject } from "../../../utils/variants"
=======
import Buy from "./buy"

import { screen } from "ui"
import VariantSelector from "components/variant-selector"
import ShapeComponents from "components/shape-components"
import { useT } from "lib/i18n"
>>>>>>> upstream/main

import Layout from "components/layout"

import {
  Sections,
  Media,
  MediaInner,
  Info,
  Summary,
  Description,
  Name,
  Outer,
  Content,
  Specs,
} from "./styles"

const ProductPage = ({ product, defaultVariant }) => {
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant)

<<<<<<< HEAD
  const onAttributeChange = (attributes, newAttribute) => {
    const newAttributes = attributesToObject(attributes)
    newAttributes[newAttribute.attribute] = newAttribute.value

    const newSelectedVariant = product.variants.find((variant) => {
      const variantAttributes = attributesToObject(variant.attributes)
      return isEqual(variantAttributes, newAttributes)
    })

    setSelectedVariant(newSelectedVariant)
  }

  const onVariantChange = (variant) => setSelectedVariant(variant)

  // const order = async () => {
  // console.log("todo: order")
  //  }

  const summaryComponent = product.components.find((c) => c.name === "Summary")
  const description = product.components.find((c) => c.name === "Description")
  const { topics } = product
=======
  const onVariantChange = (variant) => setSelectedVariant(variant)
>>>>>>> upstream/main

  const summaryComponent = product.components.find((c) => c.name === "Summary")
  const descriptionComponent = product.components?.find(
    (c) => c.name === "Description"
  )
  const specs = product.components?.find((c) => c.name === "Specs")

  return (
    <Outer>
      <Sections>
        <Media>
          <MediaInner>
<<<<<<< HEAD
            <Img
              src={selectedVariantImg || placeHolderImg}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = placeHolderImg
              }}
              sizes={`(max-height: ${screen.sm}px) 400px, 600px`}
=======
            <Image
              {...selectedVariant.images?.[0]}
              sizes={`(max-width: ${screen.sm}px) 400px, 60vw`}
>>>>>>> upstream/main
              alt={product.name}
            />
          </MediaInner>
        </Media>
        <Info>
          <Name>{product.name}</Name>
          {summaryComponent && (
            <Summary>
              <ContentTransformer {...summaryComponent?.content?.json} />
            </Summary>
          )}

          {product.variants?.length > 1 && (
            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={onVariantChange}
            />
          )}

<<<<<<< HEAD
          <ProductFooter>
            <Price>
              <strong>
                Kr.
                <CurrencyValue value={selectedVariant.price} />
                ,-
              </strong>
            </Price>
            <br />
            {` `}{" "}
            <a href="/bestill">
              {" "}
              <u>Bestill nå! </u>{" "}
            </a>{" "}
            {` `}
            {/*  <Button onClick={order}>Bestill nå</Button> */}
          </ProductFooter>
=======
          <Buy product={product} selectedVariant={selectedVariant} />
>>>>>>> upstream/main
        </Info>
      </Sections>
      <Content>
        {descriptionComponent && (
          <Description>
            <ShapeComponents
              className="description"
              components={[descriptionComponent]}
            />
          </Description>
        )}
        {specs && (
          <Specs>
            <ShapeComponents components={[specs]} />
          </Specs>
        )}
      </Content>

      {/* {topics && topics.length && (
        <RelatedTopics>
<<<<<<< HEAD
          <H2>Kanskje du også liker</H2>
=======
          <H2>{t("common.related")}</H2>
>>>>>>> upstream/main

          {topics.map((topic) => {
            // We only want to show the first 4 products for a topic
            const cells = topic.items.edges
              .filter(({ node }) => node.id !== product.id)
              .slice(0, 4)
              .map(({ node }) => ({
                item: { ...node },
              }))

            if (!cells.length) {
              return null
            }

            return (
              <TopicMap key={topic.id}>
                <TopicTitle>{topic.name}</TopicTitle>
                <List>
                  {cells.map((cell) => (
<<<<<<< HEAD
                    <CategoryItem data={cell.item} key={cell.id} />
=======
                    <CategoryItem data={cell.item} key={cell.item.id} />
>>>>>>> upstream/main
                  ))}
                </List>
              </TopicMap>
            )
          })}
        </RelatedTopics>
      )} */}
    </Outer>
  )
}

const ProductPageDataLoader = ({ data: { crystallize } }) => {
  const t = useT()
  const { product } = crystallize
  const headerItems = crystallize.headerItems?.children
  const defaultVariant = product.variants?.find((v) => v.isDefault)
<<<<<<< HEAD

  if (!defaultVariant) {
    return <Layout headerItems={headerItems}>Finnes ingen varianter</Layout>
=======
  if (!defaultVariant) {
    return <Layout headerItems={headerItems}>{t("product.noVariants")}</Layout>
>>>>>>> upstream/main
  }

  return (
    <Layout headerItems={headerItems} title={product.name}>
      <ProductPage product={product} defaultVariant={defaultVariant} />
    </Layout>
  )
}

export const query = graphql`
  query getProduct(
    $cataloguePath: String!
    $crystallizeCatalogueLanguage: String!
  ) {
    crystallize {
      headerItems: catalogue(
        language: $crystallizeCatalogueLanguage
        path: "/"
      ) {
        children {
          name
          path
          language
        }
      }
<<<<<<< HEAD
      product: catalogue(language: "en", path: $path) {
=======

      product: catalogue(
        language: $crystallizeCatalogueLanguage
        path: $cataloguePath
      ) {
>>>>>>> upstream/main
        ...crystallize_item
        ...crystallize_product
        topics {
          id
          items(first: 4) {
            ... on CRYSTALLIZE_TopicItemConnection {
              edges {
                node {
                  ...crystallize_item
                  ...crystallize_product
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProductPageDataLoader
