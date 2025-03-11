<script setup lang="ts">
    import { useRoute } from 'vue-router'

    const route = useRoute()    

    const hanko = useHanko()

    const email = (await hanko?.user.getCurrent())?.email

    function logout() {
        hanko!.user.logout()
    }
</script>

<template>
    <div className='starterHeader'>
      <div className='headerGap'></div>
      <div className='userMenu'>
        <div className='userInfo'>
          <h1>{{email}}</h1>
          <img src="/userpfp.png"/>
          <img src="/expand.png" className='expandIcon'/>
        </div>
        <div className='userDropdown'>
            <button @click="navigateTo('/profile')" v-if="route.path.includes('dashboard') ">Profile</button>
            <button @click="navigateTo('/dashboard')" v-if="route.path.includes('profile') ">Dashboard</button>
            <button @click="logout">Sign-Out</button>
        </div>
      </div>
    </div>  
</template>