<template>
  <section>
    <logo/>

    <NuxtLink to="/games" v-if="status=='a' || status=='p'">
    Juegos
    </NuxtLink>
    <NuxtLink to="/info" v-if="status=='a' || status=='p'">
    Ticket
    </NuxtLink>
    <div v-if="status=='p'">
      Estamos valorando tu invitación, vuelve más tarde para comprobar si has sido aceptad@.
    </div>
    <div v-else class="small">
      * Si ya estas en el grupo de whatsapp y no puedes acceder a la info del evento, pide ayuda a los admins.
    </div>

  </section>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  auth: false,
  components: {
    'logo': Logo,
  },
  async asyncData({ app }) {
    return {
      loggedIn: app.$storage.getUniversal('toke') != undefined,
      status: app.$storage.getUniversal('status'),
    };
  },
}
</script>

<style scoped>
.small {
  font-size: .7em;
}
</style>
