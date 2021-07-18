<template>
  <section>
    <h1>
      Info about the event
    </h1>

    <h3>
      Login required
    </h3>

    <ul>
      <li>
        <countdown/>
      </li>
      <li>
        <event-info/>
      </li>
      <li>
        <ticket/>
      </li>
      <li>
        What do you need to bring
      </li>
      <li>
        <invitation-voucher/>
      </li>
      <li>
        <invitation-list/>
      </li>
    </ul>

    * Redirect to / if you are not logged in
  </section>
</template>

<script>
import InvitationVoucher from '~/components/Invitation/Voucher'
import InvitationList from '~/components/Invitation/List'
import Ticket from '~/components/Ticket'
import EventInfo from '~/components/EventInfo'
import Countdown from '~/components/Countdown'

export default {
  components: {
    'invitation-list': InvitationList,
    'invitation-voucher': InvitationVoucher,
    'ticket': Ticket,
    'event-info': EventInfo,
    'countdown': Countdown,
  },
}
</script>
