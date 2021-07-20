<template>
   <section type="ticket" class="--flex-column">
      <div class="top --flex-column">
         <div class="deetz --flex-row-j!sb">
            <h2>
               {{ name }}
               <span class="shade">&nbsp;</span>
            </h2>
            <p v-if="description">
            {{ description }}
            </p>
         </div>
      </div>
      <div class="rip"></div>
      <div class="bottom --flex-row-j!sb">
         <ul v-if="msg.length > 0" class="bullet">
            <li v-for="it in msg">{{it}}</li>
         </ul>
      </div>
   </section>
</template>

<script>
import VueQr from 'vue-qr'


export default {
   name: 'Game',
   props: {
      name: {
         type: String,
         required: true,
      },
      msg: {
         type: Array,
         required: true,
      },
      description: {
         type: String,
      },
   },
}
</script>

<style scoped>
h2 {
   margin: .2em;
}

ul li {
   text-align: left;
}

section {
   filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
}

section[type=ticket] {
   margin: auto;
   width: 90%;
}

section[type=ticket] .top > div,
section[type=ticket] .bottom > div {
   padding: 0 18px;
}

section[type=ticket] .top > div:first-child,
section[type=ticket] .bottom > div:first-child {
   padding-top: 18px;
}

section[type=ticket] .top > div:last-child,
section[type=ticket] .bottom > div:last-child {
   padding-bottom: 18px;
}

section[type=ticket] .top {
   color: var(--silver);
   background: black;
   border: 1px solid var(--accent-color);
}

section[type=ticket] .bottom,
section[type=ticket] .rip {
   background-color: var(--accent-color);
}

section[type=ticket] .top {
   border-top-right-radius: 5px;
   border-top-left-radius: 5px;
}

section[type=ticket] .bottom {
   border-bottom-right-radius: 5px;
   border-bottom-left-radius: 5px;
   padding: 1em;
   color: var(--bg);
}

section[type=ticket] .rip {
   height: 20px;
   margin: 0 10px;
   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAACCAYAAAB7Xa1eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAAaSURBVBhXY5g7f97/2XPn/AcCBmSMQ+I/AwB2eyNBlrqzUQAAAABJRU5ErkJggg==);
   background-size: 4px 2px;
   background-repeat: repeat-x;
   background-position: center;
   position: relative;
   box-shadow: 0 1px 0 0 var(--accent-color), 0 -1px 0 0 var(--accent-color);
}

section[type=ticket] .rip:before, section[type=ticket] .rip:after {
   content: "";
   position: absolute;
   width: 20px;
   height: 20px;
   top: 50%;
   transform: translate(-50%, -50%) rotate(45deg);
   border: 5px solid transparent;
   border-top-color: var(--accent-color);
   border-right-color: var(--accent-color);
   border-radius: 100%;
   pointer-events: none;
}

section[type=ticket] .rip:before {
   left: -10px;
}

section[type=ticket] .rip:after {
   transform: translate(-50%, -50%) rotate(225deg);
   right: -40px;
}

.bullet {
   list-style-type: circle;
}

.bullet li {
   text-indent: 0;
}
</style>
