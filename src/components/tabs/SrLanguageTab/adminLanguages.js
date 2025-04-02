import SrUnitedKingdomFlag from '../../icons/flags/SrUnitedKingdomFlag.vue'
import SrHungaryFlag from '../../icons/flags/SrHungaryFlag.vue'
import SrGermanyFlag from '../../icons/flags/SrGermanyFlag.vue'
import SrCroatiaFlag from '../../icons/flags/SrCroatiaFlag.vue'
import SrRomaniaFlag from '../../icons/flags/SrRomaniaFlag.vue'
import SrSerbiaFlag from '../../icons/flags/SrSerbiaFlag.vue'
import SrSloveniaFlag from '../../icons/flags/SrSloveniaFlag.vue'

const adminLanguageList = [
    {
        code: 'hu',
        icon: SrHungaryFlag,
        text: 'Hungarian'
    },
    {
        code: 'en',
        icon: SrUnitedKingdomFlag,
        text: 'English'
    },
    {
        code: 'de',
        icon: SrGermanyFlag,
        text: 'German'
    },
    {
        code: 'hr',
        icon: SrCroatiaFlag,
        text: 'Croatian'
    },
    {
        code: 'ro',
        icon: SrRomaniaFlag,
        text: 'Romanian'
    },
    {
        code: 'sr',
        icon: SrSerbiaFlag,
        text: 'Serbian'
    },
    {
        code: 'sl',
        icon: SrSloveniaFlag,
        text: 'Slovenian'
    }
]

function getLanguage (code) {
    const languages = adminLanguageList.filter((language) => {
        return language.code === code
    })

    if (!languages[0]) {
        console.error('Invalid language code: "' + code + '"')
        return {
            code,
            icon: '',
            text: ''
        }
    }

    return languages[0]
}

export default getLanguage
