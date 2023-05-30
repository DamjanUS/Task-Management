<template>
  <div class="tasks" :class="{ completed: task.completed }">
    <div class="fontSizeT">{{ task.title }}</div>
    <div>{{ task.description }}</div>
    <div>Due Date:{{ formatDate }}</div>
    <div v-if="dueTime < 0">Task overdue {{ dueTime * -1 }} days</div>
    <div v-else>Due in {{ dueTime }} days</div>
    <CheckBox
      label="Completed"
      :value="task.completed"
      @input="completedTask($event)"
    ></CheckBox>
  </div>
</template>

<script>
import CheckBox from "@/components/CheckBox.vue";
import { format } from "date-fns";
import { differenceInDays } from "date-fns";

export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  props: {
    task: Object,
  },
  methods: {
    completedTask(input) {
      this.$emit("completed", input);
    },
  },
  computed: {
    formatDate() {
      const formatD = format(this.task.dueDate, "dd MMM yyyy HH:mm");
      return formatD;
    },
    dueTime() {
      const result = differenceInDays(this.task.dueDate, this.currentDate);
      return result;
    },
  },
  components: {
    CheckBox,
  },
};
</script>

<style lang="postcss" scoped>
.tasks {
  @apply border border-stone-300 rounded-xl p-3 m-2 text-black bg-blue-300;
}
.tasks.completed {
  @apply bg-red-300;
}
.fontSizeT {
  @apply text-xl;
}
</style>

 