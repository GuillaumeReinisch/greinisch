import { AnyVirtualDOM } from 'rx-vdom'

const icon = (path: string): AnyVirtualDOM => {
    return {
        tag: 'div',
        class: 'p-1',
        children: [
            {
                tag: 'img',
                src: `../assets/icons/${path}`,
                style: {
                    height: '50px',
                },
            },
        ],
    }
}
export const stackIcons: AnyVirtualDOM = {
    tag: 'div',
    class: 'd-flex flex-wrap justify-content-center my-3 mb-5',
    children: [
        icon('cpp.svg'),
        icon('typescript.svg'),
        icon('python.svg'),
        icon('qt.svg'),
        icon('html.svg'),
        icon('css.svg'),
        icon('wasm.svg'),
        icon('pyodide.png'),
        icon('k8s.svg'),
        icon('helm.png'),
        icon('docker.svg'),
    ],
}
