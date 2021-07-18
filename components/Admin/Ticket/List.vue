<template>
  <section>
    Ticket list
    <ul>
      <li>
        <ticket/>
      </li>
      <li>
        <ticket/>
      </li>
    </ul>
  </section>
</template>

<script>
import Ticket from '~/components/Admin/Ticket/Card'

export default {
  name: 'TicketList',
  components: {
    'ticket': Ticket,
  },
}
</script>
