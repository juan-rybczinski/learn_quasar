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
      <div class="row q-col-gutter-md">
        <div v-for="n in 18" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <q-card class="my-card">
            <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div
                class="absolute-bottom text-subtitle2 flex flex-center full-height"
              >
                Title
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-page {
  background: #fafafa;
}
</style>
