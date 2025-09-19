import { AnyVirtualDOM } from 'rx-vdom'

export const paperDownload: AnyVirtualDOM = {
    tag: 'button',
    class: 'btn btn-primary d-flex align-items-center mx-auto',
    children: [
        {
            tag: 'i',
            class: 'fas fa-file-pdf me-2',
        },
        {
            tag: 'div',
            innerText: 'Favorite Paper',
        },
    ],
    onclick: () => {
        const link = document.createElement('a')
        link.href = '../assets/large-amplitude-intramolecular-motion.pdf'
        link.download = 'paper.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    },
}
export const thesisImg: AnyVirtualDOM = {
    tag: 'div',
    class: 'w-100 d-flex justify-content-center my-5',
    children: [
        {
            tag: 'img',
            class: 'mx-auto',
            style: {
                width: '75%',
            },
            src: '../assets/images/BCl3+H-highE.png',
        },
    ],
}
