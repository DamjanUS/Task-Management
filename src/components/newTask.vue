<template>
    <div>
        <form @submit.prevent="newT()">
            <PosterInput v-model="newT.title" placeholder="Task title"></PosterInput>
            <PosterInput v-model="newT.description" placeholder="Task description"></PosterInput>
            <PosterInput v-model="newT.dDate" placeholder="Task due date"></PosterInput>
            <div v-if="dDate < 0">Task overdue {{ dDate * -1 }} days</div>
            <div v-else>Due in {{ dDate }} days</div>
            <Checkbox label="Completed" v-model="newT.completed"></Checkbox>    
        </form>
    </div>
</template>
<script>
import PosterInput from "@/components/PosterInput.vue"
import CheckBox from "@/components/CheckBox.vue"
import { differenceInDays } from "date-fns";

export default {
    data(){
        return{
            currentDate: new Date(),  
            newT: {
            title:'',
            desctiption:'',
            dDate:'',
            completed:false
          }  
        }
    },
    methods:{
       taskForm() {
        this.emit("formT",this.newT)
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
       CheckBox 
    }
}
</script>