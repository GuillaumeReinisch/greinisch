import { fromMarkdown, MdWidgets } from 'mkdocs-ts'
import setup from '../../package.json'
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
