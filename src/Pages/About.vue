<template>
    <div>
        <Navbar></Navbar>
        <div class="title text-center" id="atas">
            <h1>About Me</h1>
            <p>-This is About Me-</p>
        </div>
        <div class="container-about">
            <div class="about-kiri" data-aos="fade-up-right" data-aos-duration="1500">
                <img src="@/assets/img/mee2.png">
            </div>
            <div class="about-kanan" data-aos="fade-up-left" data-aos-duration="1500"> 
                <h2>About Me</h2>
                <p> Welcome to my personal page! I am Muhammad Khairul Kholqi,<br>
                   I was born in Jakarta, October 31, 2006. I am a SMK student<br>
                   at a school in Bogor called SMK WIKRAMA BOGOR.<br><br>
                   With the school there I have a very big interest, especially in the IT world,<br>
                   I hope to be someone who really understands about IT, especially about code.</p>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Layouts/Navbar.vue';

export default {
    components: {
        Navbar
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600&family=Rajdhani:wght@600&family=Roboto+Slab:wght@500&display=swap');
.container-about {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
    padding: 1px 5%;
}

.container-about img {
    width: 400px;
}

.about-kanan {
    margin-top: 70px;
}

.about-kanan h2 {
    color: #0087F4;
    font-weight: bold;
    font-family: 'Roboto Slab',
        serif;
}
</style>