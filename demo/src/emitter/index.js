import Emitter from 'tiny-emitter'

const emitter = new Emitter()

emitter.emitCloseMenus = () => {
    emitter.emit('closeMenus')
}

emitter.onCloseMenus = (callback) => {
    emitter.on('closeMenus', callback)
}

export default emitter

export const emitShowSnackBar = ({ text, color, timeout, link, reloadPage }) => {
    emitter.emit('showSnackBar', { text, color, timeout, link, reloadPage })
}

export const onShowSnackBar = (callback) => {
    emitter.on('showSnackBar', callback)
}
