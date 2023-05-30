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
 <newTask @formT="">    
 <PButton>+Add new task</PButton>
</newTask> 
    </draggable>
   
  </div>
</template>

<script>
import allTasks from "@/components/allTasks.vue";
import _ from "lodash";
import draggable from "vuedraggable";
import PButton from "@/components/PButton.vue"
import newTask from "@/components/newTask.vue"
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
    PButton,
    newTask
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