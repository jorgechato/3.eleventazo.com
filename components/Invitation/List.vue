<template>
  <section class="list">

    <vue-tabs>
      <v-tab :title="'Medio día '+approved(event)">
        <table style="width:100%" v-if="event.length>0">
          <tr>
            <th v-for="header in schema">{{header}}</th>
          </tr>
          <tr v-for="friend in event">
            <td>
              <span v-if="friend.status=='p'">
                🤔
              </span>
              <span v-if="friend.status=='c'">
                👎🏻
              </span>
              <span v-if="friend.status=='a'">
                👍🏻
              </span>
              <span v-if="friend.paid">
                💸
              </span>
              {{friend.name}} {{friend.surname}}
              <span v-if="friend.invites>0">
                ({{friend.invites}})
              </span>
            </td>
            <td class="small">{{friend.invitedBy}}</td>
          </tr>
        </table>
      </v-tab>

      <v-tab :title="'Día completo '+approved(foodEvent)">
        <table style="width:100%" v-if="foodEvent.length>0">
          <tr>
            <th v-for="header in schema">{{header}}</th>
          </tr>
          <tr v-for="friend in foodEvent">
            <td>
              <span v-if="friend.status=='p'">
                🤔
              </span>
              <span v-if="friend.status=='c'">
                👎🏻
              </span>
              <span v-if="friend.status=='a'">
                👍🏻
              </span>
              <span v-if="friend.paid">
                💸
              </span>
              {{friend.name}} {{friend.surname}}
              <span v-if="friend.invites>0">
                ({{friend.invites}})
              </span>
            </td>
            <td class="small">{{friend.invitedBy}}</td>
          </tr>
        </table>
      </v-tab>

    </vue-tabs>

  </section>
</template>

<script>
import {VueTabs, VTab} from 'vue-nav-tabs'


export default {
  name: 'InvitationList',
  components: {
    'vue-tabs': VueTabs,
    'v-tab': VTab,
  },
  props: {
    foodEvent: {
      type: Array,
      default() {
        return [];
      }
    },
    event: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  data() {
    return {
      schema: [
        "Invitado",
        "Sponsor"
      ],
    }
  },
  methods: {
    approved(friends) {
      let approved = friends.filter(it => it.status === 'a').length;
      let pending = friends.filter(it => it.status === 'p').length;
      let arePendings = pending > 0 ? '*' : ''
      return '(' + approved + ')' + arePendings;
    },
  },
}
</script>

<style>
.small {
  font-size: .7em;
}

.list {
  margin: auto .5em;
  height: auto;
  margin : 60px auto;
  border-radius: 10px;
  margin-bottom: 5em!important;
}

table {
  margin-top: 1em;
  padding-bottom: 3em;
}

.list ul {
  padding:0;
}

.list li {
  display: inline-block;
  vertical-align: top;
  text-indent: 0;
}

.list a {
  border-radius: 0px;
  border: 0;
}

.list a:active, .list a:focus,
.list a:hover, .list a:target{
  border-bottom: 2px solid var(--accent-color);
}

.pending::before {
  content: "*";
  color: var(--accent-color);
}
</style>
