<template>
  <q-page padding>
    <section class="row q-py-lg q-col-gutter-x-xl">
      <div class="col-12 col-sm-auto q-py-md flex flex-center">
        <q-avatar size="150px">
          <q-img src="/logo.png" />
        </q-avatar>
      </div>
      <div class="col-12 col-sm-grow column justify-between">
        <div class="items-center row">
          <span class="text-h6 text-weight-bold">helinlee.gram</span>
          <q-space />
          <div class="q-gutter-x-sm">
            <q-btn outline color="secondary" label="프로필 편집1" />
            <q-btn outline color="secondary" label="프로필 편집2" />
            <q-btn outline color="secondary" label="프로필 편집3" />
            <q-btn flat color="secondary" icon="more_horiz" />
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 238</span>
          <span>팔로워 2,032</span>
          <span>팔로우 1,432</span>
        </div>
        <div>
          <div>헬린이</div>
          <div>#ESFJ 인스타 잠시 쉬어요</div>
          <div>linktr.ee/gymcoding</div>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap q-col-gutter-x-xl scroll">
        <div class="col-auto" v-for="n in 20" :key="n">
          <article>
            <q-avatar size="70px">
              <q-img src="/logo.png" />
            </q-avatar>
            <div class="text-center q-mt-sm">제목</div>
          </article>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <q-tabs
        class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <q-route-tab
          :ripple="false"
          icon="edit"
          to="/profile"
          label="게시글"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="bookmark_border"
          to="/profile/saved"
          label="저장됨"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="local_offer"
          to="/profile/tagged"
          label="태그됨"
          exact
        />
      </q-tabs>
      <router-view />
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('mails');
</script>

<style lang="scss" scoped>
.q-page {
  background: #fafafa;
}
</style>
