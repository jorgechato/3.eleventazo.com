<template>
  <section>
    My invitation voucher
    <ul>
      <li>
        Number of invitations left
      </li>
      <li>
        Link to invite with your code /waiting&code=(name.surname hashed)
      </li>
      <li>
        <vue-qr
            :text="qr.value"
            :logoSrc="qr.image"
            margin=0
            :colorDark="qr.color.dark"
            :colorLight="qr.color.light"
            />
      </li>
    </ul>
  </section>
</template>

<script>
import VueQr from 'vue-qr'

export default {
  name: 'InvitationVoucher',
  components: {
    'vue-qr': VueQr
  },
  data() {
    return {
      qr: {
        color: { dark: 'black', light: 'white' },
        image: "https://eleventazo.com/favicon.ico",
        value: "https://eleventazo.com/waitlist&code=9w874kfsjv"
      }
    }
  },
}
</script>

<style>
</style>
