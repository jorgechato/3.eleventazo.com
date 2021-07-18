<template>
  <section>
    <h1>
      Fill up the form for the waiting list and been accepted to the event
    </h1>
    <h3>
      Request information. With banner that the ticket will cost money.
    </h3>
    <ul>
      <li>
        Name
      </li>
      <li>
        Surname
      </li>
      <li>
        Invited by (auto filled if code in param)
      </li>
      <li>
        Ticket type (eat + party / party)
      </li>
      <li>
        Covid free
      </li>
    </ul>
    <h3>
      Response information
    </h3>
    Redirect to info page

    <hr>
    * <ul>
      <li>
        if logged in redirect to info page
      </li>
      <li>
        if name and surname match (ask for the login link to the admins)
      </li>
      <li>
        if not invitation code ask for name and surname of friend, if friend doesn't have invitations, banner to ping the friend
      </li>
    </ul>
  </section>
</template>

