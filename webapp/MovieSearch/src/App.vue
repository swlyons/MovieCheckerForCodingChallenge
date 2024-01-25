<!--Not using these components, just keeping them for reference for now-->
<!--<script setup>-->
<!--import HelloWorld from './components/HelloWorld.vue'-->
<!--import TheWelcome from './components/TheWelcome.vue'-->
<!--</script>-->

<template>
  <header>
  </header>
<!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->
<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->
<!--    </div>-->
  <!--</header>-->

  <!--<main>-->
    <!--<TheWelcome />-->
  <!--</main>-->

  <main>
  <!--TODO: pretty this up later-->
  <!--TODO: Get "message" working reliably. Then send it to backend. Then get info from backend. Display info from backend along with picture of poster according to docs.-->
    Search for movie <input v-model="text">

    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
