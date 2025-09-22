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

const contact: AnyVirtualDOM = {
    tag: 'div',
    class: 'bg-light rounded p-2',
    children: [
        { tag: 'h5', innerText: 'Contact', class: 'mb-3' },
        {
            tag: 'div',
            class: 'd-flex align-items-center mb-2',
            children: [
                {
                    tag: 'i',
                    class: 'fas fa-phone text-muted',
                    style: { width: '2rem' },
                },
                {
                    tag: 'a',
                    href: 'tel:+33634443985',
                    class: 'ms-2',
                    innerText: '+33 6 34 44 39 85',
                },
            ],
        },
        {
            tag: 'div',
            class: 'd-flex align-items-center mb-2',
            children: [
                {
                    tag: 'i',
                    class: 'fas fa-envelope text-muted',
                    style: { width: '2rem' },
                },
                {
                    tag: 'a',
                    href: 'mailto:reinisch.gui@gmail.com',
                    class: 'ms-2',
                    innerText: 'reinisch.gui@gmail.com',
                },
            ],
        },
        {
            tag: 'div',
            class: 'd-flex align-items-center',
            children: [
                {
                    tag: 'i',
                    class: 'fas fa-map-pin text-muted',
                    style: { width: '2rem' },
                },
                { tag: 'span', class: 'ms-2', innerText: 'Montpellier' },
            ],
        },
    ],
}

export const navigation: AppNav = {
    name: 'G.Reinisch',
    header: decorationHome,
    layout: {
        content: fromMd('home.md'),
        toc: () => contact,
    },
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
        '/papers': {
            name: 'Publications',
            header: { icon: icon('fas fa-newspaper') },
            layout: fromMd('papers.md'),
        },
    },
}
