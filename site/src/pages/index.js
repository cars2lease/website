import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Feature from "../components/Feature"
import HeroIndex from "../components/HeroIndex"

const IndexPage = ({location}) => (
    <Layout path={location.pathname}>
        <Seo title="Forside" />
        <HeroIndex/>        
        <Feature/>
    </Layout>
)

export default IndexPage
