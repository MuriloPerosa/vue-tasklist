<template>
    <div class="about">
        <h2>Project developed by Murilo Perosa</h2> April. 4 2019
        <p>This is my first Vue.js experience and just a sample project. Maybe it not works fine at mobile devices.</p>
        <br/>

        <p>Hello, {{ their_name }}!</p>   
        <p>My contact is perosamurilo@gmail.com</p> 

    </div>
</template>


<script>
export default {
  name: 'about',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>