<template>
      <div> 
      <label :for="generatedLabel">
      {{ label }} </label>
      <input type="text"
      class="border p-1"
      :value="value"
       @input ="e => setValue(e.target.value)"
      v-bind="$attrs">      
      </div>  
</template>

<script>
import nanoid from "nanoid";

export default {
    props:{
        label:{
          type: String,
          required: false,
          default: ""
        },
         value: {
      type: String,
      required: true,
      default: ""
    }
    },
    computed: {   
    generatedLabel() {
      return this.label ? this.generateCheckboxId(this.label) : nanoid();
    },

  },
    methods: {
      generateCheckboxId(label) {
        return label.replace(" ", "-");
      },
      setValue(val) {
        this.$emit('input', val);
      },
    }
  }
</script>