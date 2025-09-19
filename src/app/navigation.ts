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

export const navigation: AppNav = {
    name: 'G.Reinisch',
    header: decorationHome,
    layout: fromMd('home.md'),
    routes: {},
}
