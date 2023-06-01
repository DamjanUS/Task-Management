<template>
    <div>
        <form @submit.prevent="taskForm()">
            <PosterInput v-model="newT.title" placeholder="Task title" style="color: black;"></PosterInput>
            <PosterInput v-model="newT.description" placeholder="Task description" style="color: black;"></PosterInput>
            <date-picker v-model="newT.dueDate" placeholder="Task due date" type="datetime"></date-picker>
            <CheckBox label="Completed" v-model="newT.completed"></CheckBox>    
            <PButton type="submit" style="border: 1px solid white; padding: 5px;">+Add new task</PButton>

        </form>
    </div>
</template>
<script>
import PosterInput from "@/components/PosterInput.vue"
import CheckBox from "@/components/CheckBox.vue"
import { differenceInDays } from "date-fns";
import PButton from "@/components/PButton.vue"
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
    data(){
        return{
            currentDate: new Date(),  
            newT: {
            title: '',
            description: '',
            dueDate: new Date(), 
            completed: false
          }  
        }
    },
    methods:{
       taskForm() {
        this.$emit("formT",{...this.newT})
        this.reset()
       },
       initialState() {
          return{
            title: '',
            description: '',
            dueDate: new Date(), 
            completed: false
          }  
       },
       reset() {
          Object.assign(this.newT, this.initialState())  
       } 
    },
    computed:{
         dueTime() {
      const result = differenceInDays(this.dDate, this.currentDate);
      return result;
    }
    },
    components:{
       PosterInput,
       CheckBox,
       PButton,
       DatePicker 
    }
}
</script>