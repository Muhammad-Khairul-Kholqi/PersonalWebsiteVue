<template>
    <div>
        <div class="info-contact">
            <div class="clock-container">
                <div id="clock" class="clock"></div>
                <div class="email">
                    <img src="@/assets/img/mail.png">
                    <p>khrlkhlqii@gmail.com</p>
                </div>
                <div class="whatsapp">
                    <p><span class="name">WhatsApp: </span>(+62) 887 2247 784</p>
                </div>
                <div class="sosmed">
                    <p>Follow me:</p>
                    <div class="sosmed-img">
                        <a href="https://www.linkedin.com/in/muhammad-khairul-kholqi-b9029b24a/"><img src="@/assets/img/linkedin-logo.png"></a>
                        <a href="https://github.com/Muhammad-Khairul-Kholqi"><img src="@/assets/img/github.png"></a>
                        <a href="https://www.instagram.com/kkyhrl/"><img src="@/assets/img/instagram.png"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="topnav container" :class="{ responsive: navbarActive }">
            <div class="logo">
                <div class="logome"><img src="@/assets/img/logome.png" alt="logo"></div>
                <a class="icon">
                    <img src="@/assets/img/hamburger.svg" @click="navbar" alt="hamburger">
                </a>
            </div>
            <div class="menu">
                <a href="/">Home</a>
                <a href="/about-me">About Me</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/skills">Skills</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbarActive: false
        }
    },
    methods: {
        navbar() {
            if (this.navbarActive) {
                this.navbarActive = false;
            } else {
                this.navbarActive = true;
            }
        },
        updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            const clockElement = document.getElementById('clock');
            if (clockElement) {
                clockElement.textContent = `${hours}:${minutes}:${seconds}`;
            }
        },
    },

    mounted() {
        setInterval(this.updateClock, 1000);
        this.updateClock(); // Panggil pertama kali untuk nilai awal
    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=EB+Garamond:wght@500&family=Inter:wght@500&family=Montserrat:wght@500&family=Nunito:ital,wght@0,700;0,1000;1,900&family=Roboto+Serif&family=Roboto+Slab:wght@500;600&family=Roboto:ital,wght@0,700;1,500&family=Rowdies:wght@300&display=swap');

.info-contact {
    margin-top: 10px;
}

.clock-container {
    text-align: center;
    background-color: #091D3E;
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 10px 0;
    color: #fff;
    width: 95%;
    height: 60px;
    margin: 0 auto;
}

.clock {
    margin-top: 5px;
    font-weight: bold;
}

.email {
    display: flex;
    gap: 7px;
}

.email p {
    margin-top: 5px;
}

.email img {
    width: 20px;
    height: 20px;
    margin-top: 8px;
}

.whatsapp p {
    margin-top: 5px;
}

.sosmed {
    display: flex;
    gap: 6px;
    margin-top: 5px;
}

.sosmed-img img {
    width: 15px;
    margin-right: 5px;
}

.topnav {
    overflow: hidden;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 5px 10%;
}

.topnav a {
    float: left;
    color: black;
    text-align: center;
    padding: 16px 18px;
    text-decoration: none;
    font-size: 17px;
}

.topnav .menu a:hover {
    background-color: #0060FF;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.topnav .menu a:after {
    content: '';
    display: block;
    padding-bottom: 3px;
    background-color: #0060FF;
    transform: scaleX(0);
    transition: 0.2s linear;
}

.topnav .menu a:hover::after {
    transform: scaleX(0.7);
}

.menu a {
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
}

.logo img {
    width: 60px;
}

.topnav .icon {
    display: none;
}

.logo {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding: 10px;
}

@media screen and (max-width: 830px) {
    .clock-container {
        font-size: 12px;
    }

    .clock,
    .email p,
    .whatsapp p,
    .sosmed {
        margin-top: 10px;
    }
}

@media screen and (max-width: 670px) {
    .name {
        display: none;
    }
}

@media screen and (max-width: 620px) {
    .email img {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .clock-container {
        gap: 20px;
    }
}

@media screen and (max-width: 500px) {
    .sosmed p {
        display: none;
    }
}

@media screen and (max-width: 440px) {
    .clock {
        display: none;
    }
}

@media screen and (max-width: 370px) {
    .email p {
        display: none;
    }
}

@media screen and (max-width: 235px) {
    .whatsapp p {
        display: none;
    }
}


@media screen and (max-width: 995px) {
    .topnav {
        padding: 5px 1%;
    }
}

@media screen and (max-width: 770px) {
    .menu a {
        font-size: 10px;
    }
}

@media screen and (max-width: 760px) {
    .topnav {
        padding: 0 5%;
    }

    .menu a {
        font-size: 12px;
        margin-right: -10px;
    }
}

@media screen and (max-width: 590px) {
    .topnav {
        padding: 0 2%;
    }

    .menu a {
        font-size: 13px;
        margin-right: -15px;
    }

    .logo img {
        width: 50px;
    }
}



@media screen and (max-width: 465px) {
    .icon img {
        width: 30px;
        margin-top: -10px;
    }

    .logome img {
        margin-top: 5px;
    }

    .topnav {
        display: block;
        padding: 0;
    }

    .topnav .menu a:hover::after {
        transform: scaleX(0.1);
    }

    .topnav .menu a {
        display: none;
        text-align: center;
    }

    .topnav a.icon {
        float: right;
        display: block;
        cursor: pointer;
    }

    .topnav.responsive {
        position: relative;
        display: block;
        text-align: center;
    }

    .topnav.responsive .menu a {
        float: none;
        display: block;
        text-align: center;
    }
}
</style>