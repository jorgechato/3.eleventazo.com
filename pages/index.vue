<template>
  <section>
    <logo/>
    <countdown/>

    <h1>
      Landing page
    </h1>

    <ul>
      <li>
        if you are logged in and invited show info button
      </li>
      <li>
        if you are logged in but not accepted, display banner and hide info button
      </li>
      <li>
        if you are not logged in show waitlist button
      </li>
    </ul>

    * Logged in information in cookies or local storage
  </section>
</template>

<script>
import Logo from '~/components/Logo'
import Countdown from '~/components/Countdown'

export default {
  components: {
    'logo': Logo,
    'countdown': Countdown,
  },
}
</script>
