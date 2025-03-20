import en from 'vuetify/es5/locale/en'
import hu from 'vuetify/es5/locale/hu'

import icons from './icons'

export const preset = {
    lang: {
        locales: { en, hu },
        current: 'hu'
    },
    icons,
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#6EB400',
                success: '#3AAA81',
                error: '#F4541D',
                warning: '#F8AF24',
                info: '#3394F3',
                anchor: '#518400'
            }
        }
    }
}
