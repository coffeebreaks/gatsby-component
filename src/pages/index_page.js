import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index_page = ({ data }) => {


function HeroComp(props){
 
  return(
    <div>
      <h1> HEROMOD</h1>
    </div>
  )
}

function ListComp(props){
 
  return(
    <div style={{background: "red" }}>
      <h1> LISTCOMP</h1>
    </div>
  )
}

const components = {
  list : ListComp,
  hero : HeroComp
}

  function GetComponent(props){
    console.log("data2:", props.content)
    const TagName = components[props.type]
    
    return (
    <div>
    <TagName data={props.content} />
    </div>
  )}

const site = data.allMarkdownRemark.edges[0].node.frontmatter

  return (

<div>
    <div style={{background: site.background }}><h1>{site.title}</h1></div>
    {site.LOOP.map(x =>
    <GetComponent type={x.component.type} content={x.component.data}/>
  )}
</div>
  )
}

export default Index_page

export const pageQuery = graphql`
query MyQuery {
  markdownRemark {
    id
  }
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "Idas hemsIda"}}}) {
    edges {
      node {
        frontmatter {
          title
          color
          description
          LOOP {
            component {
              type
              data {title tcolor}
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}

  
`
