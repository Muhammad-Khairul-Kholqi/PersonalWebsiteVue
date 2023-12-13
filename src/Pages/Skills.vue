<template>
    <div>
        <Navbar></Navbar>
        <div class="title">
            <h1>My Skills</h1>
            <p>-This is a list of the soft skills, hard skills, and programming language proficiency that I possess-</p>
        </div>
        <CardSkills></CardSkills>
    </div>
</template>

<script>
import Navbar from "@/components/Layouts/Navbar.vue";
import CardSkills from '@/components/Card/CardSkills.vue';

export default {
    components: {
        Navbar,
        CardSkills
    }
}
</script>

<style>
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

</style>