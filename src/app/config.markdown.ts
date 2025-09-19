import { fromMarkdown, GlobalMarkdownViews, MdWidgets } from 'mkdocs-ts'
import setup from '../../package.json'
import { photoView } from './md-widgets/photo'
import { stackIcons } from './md-widgets/stack-icons'
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
        href: links.crossLinks[target] as string,
    }
}
