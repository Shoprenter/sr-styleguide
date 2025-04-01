import SrUnitedKingdomFlag from '../../icons/flags/SrUnitedKingdomFlag.vue'
import SrHungaryFlag from '../../icons/flags/SrHungaryFlag.vue'
import SrGermanyFlag from '../../icons/flags/SrGermanyFlag.vue'
import SrCroatiaFlag from '../../icons/flags/SrCroatiaFlag.vue'

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
        icon: '',
        text: 'Romanian'
    },
    {
        code: 'sr',
        icon: '',
        text: 'Serbian'
    },
    {
        code: 'sl',
        icon: '',
        text: 'Slovenian'
    }
]

function getLanguage (code) {
    return adminLanguageList.filter((language) => {
        return language.code === code
    })[0]
}

export default getLanguage
