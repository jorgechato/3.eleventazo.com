<template>
  <section>
    <h1>
      Admin
    </h1>

    <h3>
      Login required
    </h3>

    <ul>
      <li>
        <event-info/>
      </li>
      <li>
        Release location
      </li>
      <li>
        <ticket-list/>
      </li>
      <li>
        <invitation-list/>
      </li>
    </ul>

    * Redirect to / if you are not logged in
  </section>
</template>

<script>
import InvitationList from '~/components/Admin/Invitation/List'
import TicketList from '~/components/Admin/Ticket/List'
import EventInfo from '~/components/EventInfo'

export default {
  components: {
    'invitation-list': InvitationList,
    'ticket-list': TicketList,
    'event-info': EventInfo,
  },
}
</script>
