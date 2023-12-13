<template>
    <div>
        <div class="myhard-skills" id="atas">
            <h1>My Hard Skills</h1>
            <div class="back-kembali">
                <a href="/">Home</a>
                <p>|</p>
                <a href="/skills">Skills</a>
            </div>
        </div>
        <div class="hard-skills-card">
            <div class="kemampuan-card" data-aos="zoom-out" data-aos-duration="1000">
                <div class="hardd-img">
                    <img src="@/assets/img/programing.png" alt="">
                </div>
                <div class="wrapper-title-hardd">
                    <h1>Programming</h1>
                    <p>I have a fundamental understanding of programming, enabling me to efficiently
                        create software solutions.</p>
                    <h2>01</h2>
                </div>
            </div>

            <div class="kemampuan-card" data-aos="zoom-out" data-aos-duration="1000">
                <div class="hardd-img">
                    <img src="@/assets/img/engineer.png" alt="">
                </div>
                <div class="wrapper-title-hardd">
                    <h1>Software Development</h1>
                    <p>I possess a foundational knowledge of software development, including user
                        requirements analysis and software solution implementation.</p>
                    <h2>02</h2>
                </div>
            </div>

            <div class="kemampuan-card" data-aos="zoom-out" data-aos-duration="1000">
                <div class="hardd-img">
                    <img src="@/assets/img/programing.png" alt="">
                </div>
                <div class="wrapper-title-hardd">
                    <h1>Programming Languages ​​and Web Frameworks</h1>
                    <p>I have a basic understanding of several programming languages, such as PHP, and am
                        currently learning web frameworks like Laravel</p>
                    <h2>03</h2>
                </div>
            </div>

            <div class="kemampuan-card" data-aos="zoom-out" data-aos-duration="1000">
                <div class="hardd-img">
                    <img src="@/assets/img/mobile.png" alt="">
                </div>
                <div class="wrapper-title-hardd">
                    <h1>Web Design</h1>
                    <p>With a basic understanding of web design, I am capable of creating simple and
                        functional user interfaces.</p>
                    <h2>04</h2>
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

.myhard-skills {
    text-align: center;
    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    padding: 50px;
}

.myhard-skills h1 {
    font-family: 'Roboto Slab', serif;
    color: #fff;
    letter-spacing: 2px;
    font-size: 50px;
    animation: fadeIn 2s ease-in-out;
}

.back-kembali {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    animation: fadeIn 2s ease-in-out;
}

.back-kembali p {
    margin-top: 15px;
    color: #fff;
    font-size: 20px;
}

.back-kembali a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
}

.back-kembali a:hover {
    color: #0060FF;
}

.hard-skills-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #E8E8E8;
}

.kemampuan-card {
    background-color: #fff;
    margin: 50px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 20px #ddd;
    transition: background-color 0.5s ease;
    cursor: default;
    transition: all 0.3s ease;
}

.kemampuan-card:hover {
    transform: translateY(-10px);
    background-color: #0A6EBD;
    color: #fff;
}


.hardd-img img {
    width: 60px;
    margin: 30px;
}

.wrapper-title-hardd {
    width: 300px;
}

.wrapper-title-hardd h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 25px;
    font-weight: bold;
    margin: 5px;
}

.wrapper-title-hardd p {
    margin: 5px;
}

.wrapper-title-hardd h2 {
    float: right;
    font-size: 40px;
    margin: 5px;
    font-family: 'Roboto Slab', serif;
}
</style>