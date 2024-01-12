<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Change Quasar Language Pack at Runtime</div>
      <q-separator class="q-my-md" />
      <q-select
        v-model="lang"
        :options="appLanguages"
        label="Quasar Language"
        outlined
        emit-value
        map-options
      ></q-select>
      {{ lang }}
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.lang</div>
      <q-separator class="q-my-md" />
      {{ $q.lang }}
    </section>
  </q-page>
</template>

<script>
import languages from 'quasar/lang/index.json';

const appLanguages = languages
  .filter(lang => ['ko-KR', 'en-US'].includes(lang.isoName))
  .map(lang => ({
    label: lang.nativeName,
    value: lang.isoName,
  }));
</script>

<script setup>
import { LocalStorage, useQuasar } from 'quasar';
import { ref, watch } from 'vue';

const $q = useQuasar();

const lang = ref($q.lang.isoName);

watch(lang, val => {
  import('../../node_modules/quasar/lang/' + val).then(lang => {
    LocalStorage.set('lang', val);
    $q.lang.set(lang.default);
  });
});
</script>

<style lang="scss" scoped></style>
