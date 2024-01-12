import { boot } from 'quasar/wrappers';
import { Loading } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  Loading.setDefaults({
    delay: 0,
    message: 'Please wait a second...',
    spinnerSize: 40,
  });
});
