<template>
  <v-card
    class="mx-auto mt-10"
    max-width="800"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          ページが見つかりません
        </v-list-item-title>
        <v-list-item-subtitle class="mt-3">
          URLが正しくないか、ページが削除された可能性があります。
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
        to="/"
      >
        トップに戻る
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  name: 'NotFound',
}
</script>
