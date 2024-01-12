<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Qform Component</div>
      <q-separator class="q-my-md" />
      <q-form
        class="q-gutter-y-md q-mt-lg"
        autofocus
        greedy
        ref="myForm"
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          outlined
          v-model="form.title"
          label="제목"
          :rules="[value => !!value || '필수 항목입니다!']"
        />
        <q-input
          outlined
          v-model="form.content"
          label="내용"
          type="textarea"
          counter
          hint="50자 이내로 입력해주세요."
          :rules="[
            value => !!value || '필수 항목입니다!',
            value => value.length <= 50 || '50자 이내로 입력하세요.',
          ]"
          lazy-rules
        />
        <q-select
          outlined
          v-model="form.tag"
          :options="tagOptions"
          emit-value
          multiple
          hint="최대 2개 선택 가능합니다."
          label="태그"
          :rules="[
            value => value.length > 0 || '필수 항목입니다!',
            value => value.length <= 2 || '최대 2개까지 선택 가능합니다.',
          ]"
        />
        <q-input outlined v-model="form.date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-toggle label="동의하시겠습니까?" v-model="form.accept" />
        <!--        false-value="Disagreed"-->
        <!--        true-value="Agreed"-->
        <div class="q-gutter-x-sm">
          <q-btn label="Validate" color="secondary" @click="validation" />
          <q-btn label="Reset Validate" color="warning" @click="reset" />
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const form = ref({
  title: '',
  content: '',
  tag: [],
  date: '2022/01/01',
  accept: true,
});

// const tagOptions = ref(['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']);
const tagOptions = ref([
  { label: '구글', value: 'google' },
  { label: '페이스북', value: 'facebook' },
  { label: '트위터', value: 'twitter' },
  { label: '애플', value: 'apple' },
  { label: '오라클', value: 'oracle' },
]);

const myForm = ref(null);

const validation = () => {
  myForm.value
    .validate()
    .then(success => (success ? alert('성공입니다!') : alert('실패입니다!')));
};

const reset = () => myForm.value.resetValidation();

const onSubmit = () => {
  if (form.value.accept !== true) {
    alert('동의해주세요!');
    return;
  }

  $q.loading.show();
  setTimeout(() => {
    $q.loading.hide();
    alert('성공!');
  }, 3000);
};

const onReset = () => {
  form.value.title = '';
  form.value.content = '';
  form.value.tags = [];
  form.value.date = '2024/01/01';
  form.value.accept = false;
};
</script>

<style lang="scss" scoped></style>
