<template>
    <div>
        <div class="mysoft-skills" id="atas">
            <h1>My Soft Skills</h1>
            <div class="back">
                <a href="/">Home</a>
                <p>|</p>
                <a href="/skills">Skills</a>
            </div>
        </div>
        <div class="card-wrapper-soft">
            <div class="wrapper-soft" data-aos="zoom-in-down" data-aos-duration="1000">
                <div class="softss-img">
                    <img src="@/assets/img/agreement.png" alt="">
                </div>
                <div class="wrapper-title">
                    <h1>Communication</h1>
                    <p>I excel in effective communication, articulating ideas clearly, and attentive listening. I believe in
                        building positive relationships and preventing misunderstandings, crucial in a work environment.</p>
                    <h2>01</h2>
                </div>
            </div>
            <div class="wrapper-soft" data-aos="zoom-in-down" data-aos-duration="1000">
                <div class="softss-img">
                    <img src="@/assets/img/adaptation.png" alt="">
                </div>
                <div class="wrapper-title">
                    <h1>Adaptation Skills</h1>
                    <p>Quickly adapting to change, my flexibility and resilience enable positive responses
                        to new situations, learning from experiences, and staying effective in challenges.</p>
                    <h2>02</h2>
                </div>
            </div>
            <div class="wrapper-soft" data-aos="zoom-in-down" data-aos-duration="1000">
                <div class="softss-img">
                    <img src="@/assets/img/partners.png" alt="">
                </div>
                <div class="wrapper-title">
                    <h1>Team work</h1>
                    <p>As a strong team player, I actively collaborate, contribute based on strengths,
                        support teammates, and adapt to diverse working styles to achieve common goals.</p>
                    <h2>03</h2>
                </div>
            </div>
            <div class="wrapper-soft" data-aos="zoom-in-down" data-aos-duration="1000">
                <div class="softss-img">
                    <img src="@/assets/img/design-thinking.png" alt="">
                </div>
                <div class="wrapper-title">
                    <h1>Creativity</h1>
                    <p>Recognized for innovative problem-solving, I enjoy thinking outside the box,
                            generating fresh ideas, and positively contributing to team creativity.</p>
                    <h2>04</h2>
                </div>
            </div>
            <div class="wrapper-soft" data-aos="zoom-in-down" data-aos-duration="1000">
                <div class="softss-img">
                    <img src="@/assets/img/leader.png" alt="">
                </div>
                <div class="wrapper-title">
                    <h1>Leadership</h1>
                    <p>In leadership roles, I demonstrate decisive decision-making, accountability, and
                            the ability to motivate and empower team members, creating an inspirational work environment and
                            guiding towards common goals.</p>
                    <h2>05</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto+Slab:wght@500&display=swap');

div {
    scroll-behavior: smooth;
}

.mysoft-skills {
    text-align: center;
    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    padding: 50px;
}

.mysoft-skills h1 {
    font-family: 'Roboto Slab', serif;
    color: #fff;
    letter-spacing: 2px;
    font-size: 50px;
    animation: fadeIn 2s ease-in-out;
}

.back {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    animation: fadeIn 2s ease-in-out;
}

.back p {
    margin-top: 15px;
    color: #fff;
    font-size: 20px;
}

.back a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
}

.back a:hover {
    color: #0060FF;
}

.card-wrapper-soft {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #E8E8E8;
}

.wrapper-soft {
    background-color: #fff;
    margin: 50px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 20px #ddd;
    cursor: default;
    transition: background-color 1s ease, color 1s ease;
}

.wrapper-soft:hover {
    background-color: #0A6EBD;
    color: #fff;
}

.softss-img img {
    width: 60px;
    margin: 30px;
}

.wrapper-title {
    width: 300px;
}

.wrapper-title h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 25px;
    font-weight: bold;
    margin: 5px;
}

.wrapper-title p {
    margin: 5px;
}

.wrapper-title h2 {
    float: right;
    font-size: 40px;
    margin: 5px;
    font-family: 'Roboto Slab', serif;
}
</style>