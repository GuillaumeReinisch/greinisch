import {
    fromMarkdown,
    GlobalMarkdownViews,
    IconFactory,
    MdWidgets,
} from 'mkdocs-ts'
import setup from '../../package.json'
import { photoView, quoteReichenbach } from './md-widgets/photo'
import { stackIcons } from './md-widgets/stack-icons'
import { pageLink } from './md-widgets/links'
import { paper } from './md-widgets/paper'
import { thesisImg, paperDownload } from './md-widgets/thesis'

import links from './links.json'
export const url = (restOfPath: string) => `../assets/${restOfPath}`

export function fromMd(file: string) {
    return fromMarkdown({
        url: url(file),
        placeholders,
    })
}

export const placeholders = {
    '{{version}}': setup.version,
}

GlobalMarkdownViews.factory = {
    ...GlobalMarkdownViews.factory,
    photo: () => photoView,
    stackIcons: () => stackIcons,
    thesisImg: () => thesisImg,
    paperDownload: () => paperDownload,
    quoteReichenbach: () => quoteReichenbach,
    pageLink: (elem: HTMLElement) => pageLink(elem),
    paper: (elem: HTMLElement) => paper(elem),
}

MdWidgets.ApiLink.Mapper = (target: string) => {
    return links.apiLinks[target] as ReturnType<MdWidgets.LinkMapper>
}
MdWidgets.ExtLink.Mapper = (target: string) => {
    return {
        href: links.extLinks[target] as string,
    }
}
MdWidgets.GitHubLink.Mapper = (target: string) => {
    return {
        href: links.githubLinks[target] as string,
    }
}
MdWidgets.CrossLink.Mapper = (target: string) => {
    return {
        href: links.crossLinks[target].href as string,
    }
}

IconFactory.register({
    youwol: {
        tag: 'img',
        src: '../assets/icons/youwol.png',
        style: {
            height: '3rem',
        },
    },
    w3nest: {
        tag: 'img',
        src: '../assets/icons/w3nest.svg',
        style: {
            height: '3rem',
        },
    },
    slb: {
        tag: 'img',
        src: '../assets/icons/slb.png',
        style: {
            height: '3rem',
        },
    },
    nasa: {
        tag: 'img',
        src: '../assets/icons/nasa.svg',
        style: {
            height: '3rem',
        },
    },
    pecos: {
        tag: 'img',
        src: '../assets/icons/pecos.png',
        style: {
            height: '3rem',
        },
    },
    bordeaux1: {
        tag: 'img',
        src: '../assets/icons/bordeaux1.png',
        style: {
            height: '3rem',
        },
    },
    insa: {
        tag: 'img',
        src: '../assets/icons/insa.png',
        style: {
            height: '3rem',
        },
    },
    grenobleUniv: {
        tag: 'img',
        src: '../assets/icons/grenoble-univ.png',
        style: {
            height: '3rem',
        },
    },
    location: {
        tag: 'i',
        class: 'mx-1 fas fa-map-pin',
    },
    calendar: {
        tag: 'i',
        class: 'mx-1 fas fa-calendar-alt',
    },
})
