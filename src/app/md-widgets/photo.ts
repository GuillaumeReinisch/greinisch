import { AnyVirtualDOM } from 'rx-vdom'

export const CvDownload: AnyVirtualDOM = {
    tag: 'button',
    class: 'btn btn-primary d-flex align-items-center mx-auto',
    children: [
        {
            tag: 'i',
            class: 'fas fa-file-pdf me-2',
        },
        {
            tag: 'div',
            innerText: 'One Page CV Download',
        },
    ],
    onclick: () => {
        const link = document.createElement('a')
        link.href = '../assets/cv.pdf' // path to your CV
        link.download = 'Guillaume_Reinisch_CV.pdf' // suggested file name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    },
}
export const photoView: AnyVirtualDOM = {
    tag: 'div',
    class: 'w-100 d-flex justify-content-center mt-5',
    children: [
        {
            tag: 'div',
            class: 'w-100 d-flex flex-column',
            children: [
                {
                    tag: 'img',
                    class: 'mx-auto',
                    style: {
                        width: '33%',
                    },
                    src: '../assets/me.jpeg',
                },
                {
                    tag: 'div',
                    class: 'my-2',
                    style: {
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                    },
                    children: [
                        {
                            tag: 'div',
                            class: 'd-flex justify-content-center align-items-center',
                            children: [
                                { tag: 'i', class: 'fas fa-cogs me-2' },
                                {
                                    tag: 'div',
                                    class: 'text-center',
                                    innerText: 'Software Engineer/Architect.',
                                },
                            ],
                        },
                        {
                            tag: 'div',
                            class: 'd-flex  justify-content-center align-items-center',
                            children: [
                                { tag: 'i', class: 'fas fa-atom  me-2' },
                                {
                                    tag: 'div',
                                    class: 'text-center',
                                    innerText: 'Computational Scientist.',
                                },
                            ],
                        },
                    ],
                },
                CvDownload,
            ],
        },
    ],
}

export const quoteReichenbach: AnyVirtualDOM = {
    tag: 'div',
    class: 'p-2 text-center text-dark bg-light mx-auto w-75 border rounded my-5',
    children: [
        {
            tag: 'i',
            innerText:
                '“If error is corrected whenever it is recognized as such, the path of error is the path of truth.”',
        },
        {
            tag: 'div',
            innerText: '— Hans Reichenbach',
        },
    ],
}
