<template>
  <div class="card hover:shadow-2xl">
    <img
      class="w-full object-cover h-32 sm:h-48 bg-no-repeat"
      :src="food.imgUrl"
      alt=""
    />
    <div class="m-4">
      <h3 class="font-bold">{{ food.title }}</h3>
      <h4 class="text-gray-500 text-sm">Recipe by {{ food.user }}</h4>
    </div>
    <div class="badge">
        <div class="flex items-center space-x-1">
            <div>
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </div>
      <span>{{ food.min }} mins</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
