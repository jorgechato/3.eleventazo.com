<template>
  <section>
    My invitation List
    <ul>
      <li>
        Name, Surname
      </li>
      <li>
        Invited by
      </li>
      <li>
        Can invite to N Friends/Update invitation number
      </li>
      <li>
        Status/Approve/Reject
      </li>
      <li>
        Ticket type/Update Ticket type
      </li>
      <li>
        Generate login link

        /info&login=(name.surname.random hashed)
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'InvitationList',
}
</script>
