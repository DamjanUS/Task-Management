<template>
  <div class="category-tasks">
    <div class="fontSizeT">{{ category.name }}</div>
    <draggable :value="category.tasks" @input="categoryT($event)">
      <all-tasks
        v-for="task in sortTask"
        :key="task.id"
        :task="task"
        @completed="
          (event) => {
            task.completed = event;
          }
        "

      >
      </all-tasks>
 <PButton @formT="">+Add new task</PButton>
    </draggable>
   
  </div>
</template>

<script>
import allTasks from "@/components/allTasks.vue";
import _ from "lodash";
import draggable from "vuedraggable";
import PButton from "@/components/PButton.vue"
export default {
  props: {
    category: Object,
  },
  methods: {
    categoryT(categoryTasks) {
      this.$emit("dragged", categoryTasks);
    },
  },
  computed: {
    sortTask: {
      get() {
        return _.sortBy(this.category.tasks, "completed");
      },
      set() {}
    },
  },
  components: {
    allTasks,
    draggable,
    PButton
  },
};
</script>

<style lang="postcss" scoped>
.category-tasks {
  @apply border border-stone-300 text-white rounded-xl p-3 m-2 w-auto bg-blue-600;
}
.fontSizeT {
  @apply text-xl;
}
</style>