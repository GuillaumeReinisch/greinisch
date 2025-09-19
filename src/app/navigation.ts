import { DefaultLayout, Navigation } from 'mkdocs-ts'

import { fromMd } from './config.markdown'
import { AnyVirtualDOM } from 'rx-vdom'

export type AppNav = Navigation<
    DefaultLayout.NavLayout,
    DefaultLayout.NavHeader
>

export const decorationHome = {
    wrapperClass: `${DefaultLayout.NavHeaderView.DefaultWrapperClass} border-bottom p-1`,
    icon: {
        tag: 'img' as const,
        style: {
            width: '30px',
            height: '30px',
        },
        src: '../assets/favicon.png',
    },
}

const icon = (faClass: string): AnyVirtualDOM => {
    return {
        tag: 'i',
        class: faClass,
        style: {
            width: '25px',
        },
    }
}
export const navigation: AppNav = {
    name: 'G.Reinisch',
    header: decorationHome,
    layout: fromMd('home.md'),
    routes: {
        '/about-me': {
            name: 'About Me',
            header: {
                icon: icon('fas fa-id-badge'),
            },
            layout: fromMd('about-me.md'),
        },
        '/experience': {
            name: 'Experience',
            header: { icon: icon('fas fa-briefcase') },
            layout: fromMd('experience.md'),
        },
        '/education': {
            name: 'Education',
            header: { icon: icon('fas fa-graduation-cap') },
            layout: fromMd('education.md'),
        },
        '/portfolio': {
            name: 'Portfolio',
            header: { icon: icon('fas fa-code') },
            layout: fromMd('portfolio.md'),
        },
    },
}
