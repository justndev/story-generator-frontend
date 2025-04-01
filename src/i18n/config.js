import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ru from './ru.json';
import ee from './ee.json';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                test: {
                    "Welcome to React": "Welcome to React and react-i18next"
                }
            },
            ru: {translation: ru},
            ee: {translation: ee},

        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
