<template>
	<header>
		<!-- <h1>My Day</h1> -->
        <img class="logo" src="../assets/img/Today-Show-Logo.png" alt="">
		<nav>
            <p v-if="user">Hello {{ user.userInfo.name }}</p>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/login">login</RouterLink>
		</nav>
	</header>
</template>

<script>
export default {
    computed: {
        user() {return this.$store.getters.user}
    }
}
</script>

<style >
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;

    position:fixed;
    top:0;
    left:0; 
    width:100vw;

    padding: 10px;
    background-color: #a4cbe7;;

    margin-bottom: 5px;

    nav {
        display: flex;
        gap: 1em;

        a {
            color: darkslategray;
            transition: color 0.5s ease;
        }

        a:hover {
            color: lightyellow;
            font-weight: 600;

        }

        p {
            padding-top: 2.5px;
        }
    }
    .logo {
        height: 400%;
    }
}
</style>
