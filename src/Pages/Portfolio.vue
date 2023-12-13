<template>
    <div>
        <Navbar></Navbar>
        <div class="title text-center" id="atas">
            <h1>My Portfolio</h1>
            <p>-Here are several projects that are still in the development stage, along with <br> some certificates I
                obtained after taking online classes-</p>
        </div>
        <CardPort></CardPort>
        <div class="kembali">
            <a href="#atas"><img src="@/assets/img/up-arrow.png" alt=""></a>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Layouts/Navbar.vue";
import CardPort from "@/components/Card/CardPort.vue"

export default {
    components: {
        Navbar,
        CardPort
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');

div {
    scroll-behavior: smooth;
}

.title {
    text-align: center;
    margin-top: 50px;
    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    padding: 40px;
}

.title h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    animation: fadeIn 2s ease-in-out;
}

.title p {
    color: #fff;
    margin-top: 20px;
    font-size: 17px;
    animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.kembali img {
    width: 40px;
    margin-right: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    float: right;
    animation: floatCard 3s infinite ease-in-out;
}

@keyframes floatCard {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}
</style>