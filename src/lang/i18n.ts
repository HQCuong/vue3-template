import { createI18n } from 'vue-i18n';
import { en } from './en';

const messages = {
  en,
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
  warnHtmlInMessage: 'off', // disable of the Detected HTML in message
})
