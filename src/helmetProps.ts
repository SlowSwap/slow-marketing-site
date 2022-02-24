import { HelmetProps } from "react-helmet"

// just supporting a singe page, so hardcoding for now
const siteUrl = "https://slowswap.io"
const title = "🦥SlowSwap"
const desc = "Swaps that discourage MEV"

const socialBanner = `${siteUrl}/banner.png` // cannot be SVG
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
        {
            rel: "apple-touch-icon",
            href: siteUrl + "/apple-touch-icon.png",
            sizes: "180x180",
        },
        {
            rel: "icon",
            href: siteUrl + "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
        },
        {
            rel: "icon",
            href: siteUrl + "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
        },

        {
            rel: "mask-icon",
            href: siteUrl + "/safari-pinned-tab.svg",
            color: "#ad5bd5",
        },
        {
            rel: "manifest",
            href: siteUrl + "/site.webmanifest"
        }

    ],
    meta:
        [
            {
                name: `description`,
                content: desc
            },
            {
                name: 'msapplication-TileColor',
                content: '#00aba9'
            },
            {
                name: 'theme-color',
                content: '#6464C0'
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
            {
                name: `twitter:image`,
                content: socialBanner,
            },
            {
                name: `twitter:url`,
                content: siteUrl,
            },
        ]
}

const logo = {
    url: `${siteUrl}/logo.png`,
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
        "https://twitter.com/SlowSwap",
        "https://github.com/slowswap",
        "https://youtube.com/slowswap",
        "https://hackerlink.io/buidl/" // TODO - add the id when we have it this
    ],
    "alternateName": [
        "🦥SlowSwap",  // TODO - update with real emoji
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
const youtubeUrl = "https://www.youtube.com/channel/UCBDacDYGJjLt6F_OhiORK6A"
const twitterUrl = "https://twitter.com/SlowSwap"
const discordUrl = "https://discord.gg/j3WzFtDZZc"
const telegramUrl = "https://t.me/+QTXuENYiHg80N2Zh"
const githubUrl = "https://github.com/slowswap"
const hackerlinkUrl = "https://hackerlink.io/buidl/2070"
const appUrl = "https://1d44f158.slow-front-end.pages.dev/#/swap"

export {
    helmetProps,
    structuredData,
    youtubeUrl,
    twitterUrl,
    discordUrl,
    telegramUrl,
    githubUrl,
    hackerlinkUrl,
    appUrl
}
