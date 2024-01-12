import { boot } from 'quasar/wrappers';
import { LocalStorage } from 'quasar';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  const locale = LocalStorage.getItem('lang') || 'ko-KR';
  const i18n = createI18n({
    locale,
    messages,
    legacy: false,
  });

  app.use(i18n);
});
