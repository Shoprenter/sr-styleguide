const translations = {
    hu: {
        yes: 'Igen',
        no: 'Nem',
        clearAll: 'Mindet töröl',
        selectAll: 'Mindet választ'
    },
    en: {
        yes: 'Yes',
        no: 'No',
        clearAll: 'Clear all',
        selectAll: 'Select all'
    }
}

function detectLocale () {
    const htmlLang = document.documentElement.lang
    if (htmlLang) {
        return htmlLang.startsWith('hu') ? 'hu' : 'en'
    }

    const lang = navigator.language || navigator.userLanguage || 'hu'
    return lang.startsWith('hu') ? 'hu' : 'en'
}

const translator = {
    locale: detectLocale(),

    translate (key) {
        const langPack = translations[this.locale] || translations.en
        return langPack[key] || translations.hu[key] || key
    }
}

export default translator
