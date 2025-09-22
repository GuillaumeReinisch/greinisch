import { AnyVirtualDOM } from 'rx-vdom'
import links from '../links.json'

export const pageLink = (elem: HTMLElement): AnyVirtualDOM => {
    const target = elem.getAttribute('target')
    const { icon, href, title } =
        links.crossLinks[target as keyof typeof links.crossLinks]

    return {
        tag: 'a',
        class: 'd-flex align-items-center',
        href,
        children: [
            {
                tag: 'i',
                class: icon,
            },
            { tag: 'i', class: 'mx-1' },
            {
                tag: 'i',
                innerText: title,
            },
            { tag: 'i', class: 'mx-2' },
        ],
    }
}
