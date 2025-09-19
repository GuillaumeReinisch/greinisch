import './style.css'
export {}
import { install, LoadingScreen } from '@w3nest/webpm-client'

import pkgJson from '../../package.json'

const loadingScreen = new LoadingScreen({
    logo: '../assets/icon.svg',
    name: pkgJson.name,
    description: pkgJson.description,
})

await install({
    esm: [`${pkgJson.name}#${pkgJson.version}`],
    css: [
        'bootstrap#5.3.3~bootstrap.min.css',
        'fontawesome#5.12.1~css/all.min.css',
    ],
    onEvent: (ev) => {
        loadingScreen.next(ev)
    },
})

loadingScreen.done()
await import('./on-load')
