<template>
  <div class="hello"> 
    <h1>{{ msg }}</h1>
  <div data-v-3a835fba class="textarea">
    <textarea data-v-3a835fba id="text-area" cols="46" row="4"></textarea>
  </div>
  
  <button data-v-3a835fba id="btn-clear" @click="clear()">Limpiar texto </button>
  <p data-v-3a835fba id="message"></p>
  
</div>
</template>

<script>

export default {

  name: 'HelloWord',
  props: {
    msg: String,
  },

data () {
  return{
    button: "limpiar",
  };
},

mounted: function() {
  this.$nextTick(() => {
    this.verify();
   });
},

methods: {
  verify() {
    let textArea = document.getElementById("text-area");
    let message = document.getElementById("message");
    
    setTimeout(function() {
      textArea.focus();
    }, 0);
   
   function logMessage(msg, color) {
     message.innerHTML=msg;
     message.style.color=color;
   }
   
   function isNumeric (str) {
     return str.length === 1 && str.match(/[0-9]/);
   }

   function isletters (str) {
     return str.length === 1 && str.match(/[a-z]/);
   }
  textArea.addEventListener("keydown", function(e) {
    if (isletters(e.key)) {
      logMessage(`"${e.key} -> hola soy una tecla de letra :3"`,"#28A745");
    } else if (isNumeric(e.key)) {
      logMessage(`"${e.key} -> hola soy una tecla numerica :3"`,"#DC3545");
    }  else {
      logMessage(`"${e.key} -> " hola soy un tipo de tecla diferente a las demas :3"`, "#FFC107");
    }

  });

  
  },
clear() {
  let message = document.getElementById("message");
  let child = message.firstChild;
  while(child) {
    message.removeChild(child);
    child= message.firstChild;
    document.querySelector("#text-area").value="";
  }
},
}, 
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #17d466;
}
</style>
