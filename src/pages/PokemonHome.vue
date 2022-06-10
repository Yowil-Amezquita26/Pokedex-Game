<template>
    
    <h1>Welcome new Pokemon Trainer Student</h1>
    
    <div class="home-container">
        <ul>
            <li>pokedex</li>
            <li>Who`s that Pokemon?</li>
        </ul>
    </div>
    
    
</template>

<script>
export default {
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
img{
    height: 250px;
    position: absolute;
    right: 40%;
    justify-items: center;

    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.home-container {
    height: 200px;
    display: flex;
    justify-content: center;
}
    

</style>