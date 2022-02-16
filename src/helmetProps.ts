import { HelmetProps } from "react-helmet"

// just supporting a singe page, so hardcoding for now
const siteUrl = "https://slowswap.io"
const title = "🐌SlowSwap"                        // TODO - update
const desc = "Swaps that deter sandwich attacks"  // TODO - update

const socialBanner = `${siteUrl}/static/banner.png` // cannot be SVG
const socialBannerHeight = '400' // no unit on purpose
const socialBannerWidth = '800'  // no unit on purpose

const twitterUser = "SlowSwap_"

const helmetProps: HelmetProps = {
    htmlAttributes: {
        lang: 'en',
    },
    title,
    link: [
        {
            rel: "canonical",
            href: siteUrl,
        },
    ],
    meta:
        [
            {
                name: `description`,
                content: desc
            },

            // OpenGraph data
            {
                property: `og:title`,
                content: title,
            },
            {
                property: `og:description`,
                content: desc,
            },
            {
                property: `og:type`,
                content: `website`,
            },
            {
                property: "og:image",
                content: socialBanner,
            },
            {
                property: "og:image:width",
                content: socialBannerWidth,
            },
            {
                property: "og:image:height",
                content: socialBannerHeight,
            },

            // twitter data
            {
                name: "twitter:card",
                content: "summary_large_image",
            },
            {
                name: `twitter:creator`,
                content: twitterUser,
            },
            {
                name: `twitter:title`,
                content: title,
            },
            {
                name: `twitter:description`,
                content: desc,
            },
        ]
}

const logo = {
    url: `${siteUrl}/static/logo.png`,
    width: '400px',
    height: '400px'
}
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SlowSwap",
    "@id": "https://slowswap.io/#organization",
    "mainEntityOfPage": "https://slowswap.io/#organization",
    "url": "https://slowswap.io",
    "sameAs": [
        "https://twitter.com/SlowSwap_",
        "https://github.com/slowswap",
        "https://youtube.com/slowSwap",
        "https://hackerlink.io/buidl/" // TODO - add the id when we have it this
    ],
    "alternateName": [
        "🐌SlowSwap",  // TODO - update with real emoji
        "Slow Swap"
    ],
    "description": desc,
    "image": {
        "@type": "ImageObject",
        ...logo
    },
    "logo": {
        "@type": "ImageObject",
        ...logo
    }
}
export { helmetProps, structuredData }
