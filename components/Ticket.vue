<template>
  <div class="container">
    <div class="cellphone-container">
      <div class="movie">
        <div class="movie-img" :style="{ backgroundImage: 'url(' + require('@/static/img/'+type+'.jpg') + ')' }"></div>

        <div class="text">
          <h3 v-if="type=='food-event'">
            Dia Completo
          </h3>
          <h3 v-if="type=='event'">
            Medio dia
          </h3>

          <h1 class="price" v-if="price > 0">
            {{price}}<span class="small">€</span>
          </h1>

          <p>
          Bienvenid@ al EVENTO 3.0, los hermanos tenemos la tradición de hacer un evento con todos nuestros amig@s. Es un evento exclusivo y muy raro, por eso, en esta ocasión, lo queremos hacer un poco especial.
          </p>
          <p>
          Cuando se acerque la fecha del Evento aparecerá un precio a pagar a cualquier admin del grupo de whatsapp. Esto es necesario para organizar la fiesta, comprar alcohol y varias sorpresas. Al fin y al cabo esto es una fiesta privada de colegas.
          </p>

          <p v-if="date">
          Te esperamos el {{date}}.
          </p>

          <a :href="whatsapp">Grupo de whatsapp</a>

          <h3>
            Medidas de seguridad
          </h3>
          <p>
          Queremos que el evento sea un éxito, de la misma manera, queremos que puedas disfrutar de los días posteriores con familia y amigos.
          Dada la situación actual, nos sentimos obligados a mantener unas medidas excepcionales.
          </p>
          <ol>
            <li>
              <p>
              <b>Test rápido</b> obligatorio.
              Es necesario un resultado negativo para ser admitido.
              </br>

              Si puedes aportar un PCR negativo de menos de 24h no será necesario dicho test.
              </p>
            </li>
            <li>
              <p>
              Está prohibido <b>subir fotos y vídeos</b> a redes sociales. Si se hace un mal uso, nos reservamos el derecho a requisar el móvil/dispositivo (que será devuelto cuando finalice el evento) y en casos extremos a la expulsión del recinto.
              </p>
            </li>
          </ol>

          <h3>
            Indispensables
          </h3>
          <ul>
            <li>
              Ropa de recambio
            </li>
            <li>
              Bañador/Bikini
            </li>
            <li>
              Toalla
            </li>
            <li>
              Crema de sol
            </li>
            <li>
              Saco de dormir (si vives al límite)
            </li>
          </ul>

          <h3>
            Que tenemos?
          </h3>
          <ul>
            <li>
              Piscina privada
            </li>
            <li>
              Barril de cerveza
            </li>
            <li>
              Sidriña
            </li>
            <li>
              Alcohol
            </li>
            <li>
              Snacks
            </li>
            <li>
              Juegos
            </li>
            <li v-if="type=='food-event'">
              Comida (arroz negro)
            </li>
            <li>
              Multiples ambientes en exterior
            </li>
            <li>
              a!
            </li>
          </ul>

          <div v-if="shareLocation">
            <a :href="bus">BUS</a>
            <a :href="maps">Google maps</a>
          </div>

          <div v-if="invites">
            <hr>

            <div class="small-txt">
              * Si ves un código QR y un botón, has sido seleccionad@ para poder invitar a {{invites}} de tus amig@s. Clicka en el botón, este enviará un whatsapp a tus amig@s o deja que escaneen el código QR.
            </div>

            <invitation-voucher
                :name="name"
                :code="code"
                :invites="invites"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InvitationVoucher from '~/components/Invitation/Voucher'

export default {
  components: {
    'invitation-voucher': InvitationVoucher,
  },
  props: {
    date: {
      type: String,
    },
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
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    shareLocation: {
      type: Boolean,
      required: true,
    },
    bus: {
      type: String,
      required: true,
    },
    maps: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scope>
h3 {
  font-family: 'Billionaire';
  color: var(--accent-color);
  font-size: 2em;
  font-weight: bold;
}
ul, li {list-style-type: none;}

li {text-indent: -2em;}

.small-txt {
  font-size: .7em;
  margin-bottom: 2em;
}

hr {
  margin: 2em auto;
  color: var(--bg);
  border: 5px dashed var(--bg);
}

.price {
  margin: .3em auto;
}

.container{
  margin: auto .5em;
}

.cellphone-container{
  height: auto;
  margin : 60px auto;
  box-shadow:5px 5px 115px -14px black;
  border-radius: 10px;
}

.movie-img {
  width:100%;
  height:300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom,
  color-stop(0.00,  rgba(0,0,0,1)),
  color-stop(0.35,  rgba(0,0,0,1)),
  color-stop(0.50,  rgba(0,0,0,1)),
  color-stop(0.65,  rgba(0,0,0,1)),
  color-stop(0.85,  rgba(0,0,0,0.6)),
  color-stop(1.00,  rgba(0,0,0,0)));
}

.movie{
  background-color: black;
  background-size: contain;
  background-size: cover;
  height: auto;
  border-radius: 10px;
  padding-bottom: 2em;
}

.text {
  padding-left: .5em;
  padding-right: .5em;
}
</style>
