<template>
    <div>
        <p>CINI CINI</p>
        <br>
        <input type="text" v-model="inputValue" placeholder="Write something" style="padding: 10px; border: 2px solid black;">
        <br>
        <br>
        <button style="border: 2px black solid; padding: 3px; margin-right: 5px;" @click="storeData()">Write</button>
        <button style="border: 2px black solid; padding: 3px;">Read</button>
    </div>
</template>

<script>
export default {
    mounted(){
            console.log('App Mounted') 
            this.inputValue = localStorage.getItem('text.id')
        },
    data() {
       return{
           inputValue: "" 
       } 
    },
    methods:{
        storeData(){
            localStorage.setItem("text.id", this.inputValue);
        },
       
    }
}
</script>