<template>
  <section>
    <h1>
      DatoS
      <span class="shade">&nbsp;</span>
      <span class="small">de la</span>
      <span class="shade">&nbsp;</span>
      InvitacioN
      <span class="shade">&nbsp;</span>
    </h1>

    <h2>
      {{date.getDate()}} {{date.getMonth()+1}} {{date.getFullYear()}}
      <span class="shade">&nbsp;</span>
    </h2>

    <ValidationObserver ref="form">
    <form @submit.prevent="onSubmit">

      <ValidationProvider rules="required" v-slot="{ errors }">
      <input v-model="userData.invitedBy" name="invitedBy" :disabled="true">
      <div class="small error">{{ errors[0] }}</div>
      </ValidationProvider>

      <ValidationProvider rules="required" v-slot="{ errors }">
      <input type="text" v-model="userData.name" @input="userData.name=$event.target.value.toUpperCase()" placeholder="Nombre">
      <div class="small error">{{ errors[0] }}</div>
      </ValidationProvider>

      <ValidationProvider rules="required" v-slot="{ errors }">
      <input type="text" v-model="userData.surname" @input="userData.surname=$event.target.value.toUpperCase()" placeholder="Apellido">
      <div class="small error">{{ errors[0] }}</div>
      </ValidationProvider>

      <ValidationProvider rules="required" v-slot="{ errors }">
      <select v-model="userData.ticket">
        <option selected disabled value="" class="disable">Elige el bono</option>

        <option v-for="option in ticket" v-bind:value="option.key">
        {{ option.value }}
        </option>
      </select>
      <div class="small error">{{ errors[0] }}</div>
      <div class="small info">*El bono seleccionado puede ser modificado por los admins</div>
      <div class="small info">**El precio del bote será porporcionál al bono seleccionado</div>
      </ValidationProvider>

      <ValidationProvider rules="required" v-slot="{ errors }">
      <select v-model="userData.covid">
        <option selected disabled value="" class="disable">Información COVID</option>

        <option v-for="option in covid" v-bind:value="option.key">
        {{ option.value }}
        </option>
      </select>
      <div class="small error">{{ errors[0] }}</div>
      <div class="small info">
        *Contesta con información COVID a día {{date.getDate()}}/{{date.getMonth()+1}}/{{date.getFullYear()}}
      </div>
      </ValidationProvider>

      <button type="submit">Guardar</button>
    </form>
    </ValidationObserver>
  </section>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {v4 as uuidv4} from 'uuid';


export default {
  middleware: ['guest', 'invited'],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      userData: {
        name: "",
        surname: "",
        invitedBy: "",
        ticket: "",
        covid: "",
        invites: 0,
        inviteCode: "",
        status: "p",
        admin: false,
      },
      ticket: [
        { key: 'event', value: 'Medio día 16:00' },
        { key: 'food-event', value: 'Día completo 12:00' },
      ],
      covid: [
        { key: '1-shot', value: '1 Dosis' },
        { key: 'vaccinated', value: 'Vacunado' },
        { key: 'pcr', value: 'PCR < 7 días' },
        { key: 'recovered', value: 'Recuperado del COVID' },
        { key: 'other', value: 'Otros' },
      ],
    };
  },
  created() {
    this.userData.invitedBy = this.$route.query.code;

    let CharacterSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(let i=0; i < 7; i++) {
      this.userData.inviteCode += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
    }
  },
  async asyncData({ app }) {
    let date = null;
    try {
      let res = await app.$fire.firestore.collection("event").doc("3").get();
      let event = res.data();
      date = new Date(event.date.seconds*1000)
    } catch(e) {
      console.log(e);
    }
    return {
      date: date,
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }

        this.$fire.firestore
          .collection("users")
          .where("inviteCode", "==", this.userData.invitedBy) // check if code exists
          .get()
          .then((querySnapshot) => {

            if (querySnapshot.size == 0) {
              alert('El enlace ha caducado, es incorrecto, pide a tu amig@ que hable con los admins')
              this.$router.push('/')
            }

            querySnapshot.forEach((doc) => {
              let inviter = doc.data();
              let inviterId = doc.id;
              if(inviter.invites > 0) {
                this.userData.invitedBy = inviter.name + " " + inviter.surname
                const token = this.userData.name+'_'+this.userData.surname+'-'+uuidv4();

                this.$fire.firestore
                  .collection('users')
                  .doc(token)
                  .set(this.userData) // create user
                  .then(res => {
                    this.$storage.setUniversal('token', token)

                    this.$fire.firestore
                      .collection("users")
                      .doc(inviterId)
                      .set({"invites": inviter.invites - 1}, {merge: true}) // update invites
                      .then(() => {
                        this.$router.push('/info')
                      });
                  });
              } else {
                alert('Tú amig@ ya no puede invitar a nadie más.')
              }
            });
          });

      });
    },
  },
}
</script>

<style scoped>
h2 {
  color: var(--silver);
  font-size: 1.7em;
}

.small {
  font-size: .7em;
}

.error {
  color: red;
}

input, select {
  border-color: var(--color);
  color: var(--color);
  text-align: center;
  -webkit-text-align: center;
  -moz-text-align: center;
  -ms-text-align: center;
  text-align-last:center;
  -webkit-text-align-last: center;
  -moz-text-align-last: center;
  -ms-text-align-last: center;

}

input, button, select {
  width: 90%;
}

input, select {
  margin-top: .5em;
  margin-bottom: .5em;
}

input, button, select {
  padding-left: 0;
  padding-right: 0;
}

input:disabled {
  border-color: var(--accent-color);
  background: var(--accent-color);
  color: var(--bg);
  opacity: .5;
  margin-bottom: 2em;
}

button {
  margin-top: 2em;
}

form {
  width: 100%;
}

::placeholder {
  color: var(--color);
  opacity: 1;
}

:-ms-input-placeholder {
  color: var(--color);
}

::-ms-input-placeholder {
  color: var(--color);
}

a:hover, button:hover {
  color: var(--bg);
  background-color: var(--accent-color);
}
</style>
