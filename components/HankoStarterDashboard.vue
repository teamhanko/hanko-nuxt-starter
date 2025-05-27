<script setup lang="ts">
    const hanko = useHanko()

    const email = (await hanko?.user.getCurrent())?.email
    const id = (await hanko?.user.getCurrent())?.id

</script>

<template>
    <div className='hankoStarterDashboard'>
        <h1>Dashboard</h1><br />
        <h2>Here is an example of how we can get user data using the Hanko Client.</h2>
        <br />
        <h3>Email: {{email}}</h3>
        <h3>Id: {{id}}</h3>
    </div>
</template>