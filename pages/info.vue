<template>
  <section>
    <h1>
      Tu invitacioN
      <span class="shade">&nbsp;</span>
      <div class="small">
        para
        <span class="shade">&nbsp;</span>
      </div>
      EL EVENTO
      <span class="shade">&nbsp;</span>
    </h1>

    <vue-countdown
        :time="event.date"
        v-slot="{ days, hours, minutes }"
        class="countdown">
      {{ days }} Dias, {{ hours }} Horas
      <span class="shade">&nbsp;</span>
    </vue-countdown>

    <ticket
        v-if="user.status=='a'"
        :type="user.ticket"
        :price="ticket.price"
        :whatsapp="ticket.whatsapp"
        :name="user.name"
        :code="user.inviteCode"
        :invites="user.invites"
        :shareLocation="event.shareLocation"
        :date="ticket.date"
        :bus="event.bus"
        :maps="event.maps"/>
    <div v-if="user.status=='p'">
      Estamos valorando tu invitación, vuelve más tarde para comprobar si has sido aceptad@.
    </div>
    <div v-if="user.status=='c'">
      Has sido eliminado de la lista de invitados.
    </div>

    <invitation-list
        v-if="user.admin"
        :foodEvent="friends.foodEvent"
        :event="friends.event"/>
  </section>
</template>

<script>
import InvitationList from '~/components/Invitation/List'
import Ticket from '~/components/Ticket'
import Axios from 'axios'
import VueCountdown from '@chenfengyuan/vue-countdown';


export default {
  middleware: 'user',
  components: {
    'invitation-list': InvitationList,
    'ticket': Ticket,
    'vue-countdown': VueCountdown,
  },
  async asyncData({ app }) {
    let token = app.$storage.getUniversal('token');
    let user = null;
    try {
      let res = await app.$fire.firestore.collection("users").doc(token).get();
      user = res.data();
      app.$storage.setUniversal('status',user.status)
    } catch(e) {
      console.log(e);
      alert('Tu usuario no existe, habla con un admin para solucionarlo.');
      app.$router.push('/');
    }

    let ticket = null;
    let event = null;
    let friends = {
      event: [],
      foodEvent: [],
    };
    try {
      let res = await app.$fire.firestore.collection("ticket").doc(user.ticket).get();
      ticket = res.data();
      res = await app.$fire.firestore.collection("event").doc("3").get();
      event = res.data();
      event.date = new Date(event.date.seconds*1000) - new Date();

      if(user.admin) { // generate full list of invites if you are an admin
        let querySnapshot = await app.$fire.firestore
          .collection("users")
          .where("admin", "!=", true)
          .get();

        querySnapshot.forEach((doc) => {
          let friend = doc.data();
          let f = {
            token:doc.id,
            name: friend.name,
            surname: friend.surname,
            ticket: friend.ticket,
            status: friend.status,
            invitedBy: friend.invitedBy,
            invites: friend.invites,
            paid: friend.paid,
          }
          if (friend.ticket === "event") {
            friends.event.push(f)
          }
          if (friend.ticket === "food-event") {
            friends.foodEvent.push(f)
          }
        });

      }
    } catch(e) {
      console.log(e);
    }

    return {
      user: user,
      ticket: ticket,
      event: event,
      friends: friends,
    };
  },
}
</script>

<style scope>
.countdown {
  font-family: 'Billionaire';
  color: var(--silver);
  font-size: 2em;
}
</style>
