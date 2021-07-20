<template>
  <section>
    <vue-qr
        :text="'https://eleventazo.com/waitlist?code=' + code"
        :logoSrc="require(`@/static/favicon.jpg`)"
        :margin="qr.margin"
        :colorDark="qr.color.fg"
        :colorLight="qr.color.bg"
        />
      <a
          :href="'whatsapp://send?text='+name
                  + ' quiere que vengas AL EVENTO. '
                  + 'Activa tu invitación en: '
          + 'https://eleventazo.com/waitlist?code=' + code"
          data-action="share/whatsapp/share"
          variant="outline-primary">
        Envía una invitación ({{invites}})
      </a>
  </section>
</template>


<script>
import VueQr from 'vue-qr'

export default {
  name: 'InvitationVoucher',
  components: {
    'vue-qr': VueQr
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    invites: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      qr: {
        color: {
          fg: getComputedStyle(document.documentElement).getPropertyValue('--silver'),
          bg: getComputedStyle(document.documentElement).getPropertyValue('--black')
        },
        margin: 0
      }
    }
  },
}
</script>

<style scope>
.qr-shade {
  position: relative;
  margin: -100px 0 0;
  padding: 0;
  display: block;
  background: #111;
  width: 100%;
  height: 100px;
  opacity: 0.25;
  text-align: center;
}
</style>
