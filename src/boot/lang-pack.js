import { boot } from 'quasar/wrappers';
import { LocalStorage, Quasar } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  const lang = LocalStorage.getItem('lang') || Quasar.lang.isoName;

  import(`../../node_modules/quasar/lang/${lang}.mjs`).then(val => {
    Quasar.lang.set(val.default);
  });
});
