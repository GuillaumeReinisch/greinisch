import { AnyVirtualDOM } from 'rx-vdom'

import links from '../links.json'
import { MdWidgets } from 'mkdocs-ts'

export const paper = (elem: HTMLElement): AnyVirtualDOM => {
    const target = elem.getAttribute('link')
    const href = links.extLinks[target as keyof typeof links.extLinks]
    const titleText = elem.getAttribute('title')
    const journalText = elem.getAttribute('journal')
    const dateText = elem.getAttribute('date')
    return {
        tag: 'i',
        class: 'mb-2',
        children: [
            {
                tag: 'a',
                href,
                target: '_blank',
                class: 'font-weight-bold d-block',
                innerText: titleText,
            },
            {
                tag: 'div',
                class: 'text-muted small d-flex align-items-center',
                innerText: `${journalText} — ${dateText}`, // simpler, all in one line
            },
            { tag: 'div', class: 'my-1' },
            new MdWidgets.NoteView({
                level: 'info',
                label: 'Abstract',
                icon: 'fas fa-align-justify',
                content: elem.innerText,
                expandable: true,
            }),
        ],
    }
}
