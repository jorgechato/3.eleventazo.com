<template>
  <section>
    <p v-for="game in games">
    <game
        :name="game.name"
        :description="game.description"
        :msg="game.msg"/>
    </p>
  </section>
</template>

<script>
import Axios from 'axios'
import Game from '~/components/Game'


export default {
  middleware: 'user',
  components: {
    'game': Game,
  },
  async asyncData({ app }) {
    let token = app.$storage.getUniversal('token');
    let user = null;
    try {
      let res = await app.$fire.firestore.collection("users").doc(token).get();
      user = res.data();
      app.$storage.setUniversal('status',user.status)
    } catch(e) {
      console.log(e);
      alert('Tu usuario no existe, habla con un admin para solucionarlo.');
      app.$router.push('/');
    }

    let games = []
    try {
      let querySnapshot = await app.$fire.firestore
        .collection("games")
        .where("active", "==", true)
        .get();

      querySnapshot.forEach((doc) => {
        let game = doc.data();
        if (!game.players || game.players.includes(token)) {
          games.push(game)
        }
      });
    } catch(e) {
      console.log(e);
    }

    return {
      user: user,
      games: games,
    };
  },
}
</script>

<style scoped>
section {
  color: var(--accent-color);
  margin-bottom: 5em;
}
</style>
