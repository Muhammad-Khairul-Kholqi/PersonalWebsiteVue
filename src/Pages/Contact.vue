<template>
    <div>
        <Navbar></Navbar>
        <div class="title">
            <h1>Contact Me</h1>
            <p>-Telephone, email, and several social media that can be contacted-</p>
        </div>
        <div class="title-sosmed">
            <div class="title-info" data-aos="fade-down" data-aos-duration="1000">
                <h1>-Further Information-</h1>
                <p>Don't hesitate to get in touch</p>
            </div>
            <div class="card-sosmed">
                <div class="first-card" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="first-img">
                        <img src="@/assets/img/pin.png">
                    </div>
                    <div class="first-title">
                        <h1>Address</h1>
                        <p>Kp. Bangkongreang Ds. Benda Kec. Cicurug Sukabumi Jawa Barat 43359</p>
                    </div>
                </div>

                <div class="first-card" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="first-img">
                        <img src="@/assets/img/email-2.png">
                    </div>
                    <div class="first-title">
                        <h1>Email</h1>
                        <p>khrlkhlqii@gmail.com</p>
                    </div>
                </div>

                <div class="first-card" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="first-img">
                        <img src="@/assets/img/phone-call.png">
                    </div>
                    <div class="first-title">
                        <h1>Telephone</h1>
                        <p>(+62) 887 2247 784</p>
                    </div>
                </div>

                <div class="first-card" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="first-img">
                        <img src="@/assets/img/instagram-2.png">
                    </div>
                    <div class="first-title">
                        <h1>Instagram</h1>
                        <p>@kkyhrl</p>
                    </div>
                </div>

                <div class="first-card" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="first-img">
                        <img src="@/assets/img/github-2.png">
                    </div>
                    <div class="first-title">
                        <h1>Github</h1>
                        <p>Muhammad-Khairul-Kholqi</p>
                    </div>
                </div>

                <div class="first-card" data-aos="fade-up-left" data-aos-duration="1000">
                    <div class="first-img">
                        <img src="@/assets/img/linkedin-2.png">
                    </div>
                    <div class="first-title">
                        <h1>Linkedin</h1>
                        <p>Muhammad Khairul Kholqi</p>
                    </div>
                </div>
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
.title-sosmed {
    background-color: #FBFBFC;
}

.title-info {
    text-align: center;
    padding-top: 100px;
}

.title-info h1 {
    font-size: 25px;
    font-weight: bold;
    color: #0060FF;
}

.card-sosmed {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    
}

.first-card {
    background-color: #fff;
    margin: 50px;
    padding: 10px;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease;
    cursor: default;
    transition: all 0.3s ease;
}

.first-card:hover {
    box-shadow: 1px 1px 30px #F4F5F7;
    transform: translateY(-10px);
}

.first-img img {
    width: 40px;
    margin: 20px;
}

.first-title {
    width: 300px;
}

.first-title h1 {
    font-weight: bold;
    font-size: 25px;
    color: #201654;
}
</style>