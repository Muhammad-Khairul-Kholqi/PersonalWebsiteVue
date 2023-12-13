<template>
    <div>
        <div class="program-skills" id="atas">
            <h1>My Programming Skills</h1>
            <div class="rumah">
                <a href="/">Home</a>
                <p>|</p>
                <a href="/skills">Skills</a>
            </div>
            <footer class="blockquote-footer mt-3">Hover the cursor to see details!</footer>
        </div>
        <div class="kartu-program-skills">
            <div class="card-skills-program" data-aos="zoom-in">
                <img src="@/assets/img/html.png" style="width: 100px;">
                <div class="card__content">
                    <p class="card__title">HTML
                    </p>
                    <p class="card__description">Excel in crafting robust and efficient HTML structures, creating clean and
                        well-structured web layouts with my experience.</p>
                </div>
            </div>
            <div class="card-skills-program" data-aos="zoom-in">
                <img src="@/assets/img/css-3.png" style="width: 100px;">
                <div class="card__content">
                    <p class="card__title">CSS
                    </p>
                    <p class="card__description">I have the ability to design websites using CSS, and I can also make them
                        neatly responsive.</p>
                </div>
            </div>
            <div class="card-skills-program" data-aos="zoom-in">
                <img src="@/assets/img/php.png" style="width: 100px;">
                <div class="card__content">
                    <p class="card__title">PHP
                    </p>
                    <p class="card__description">I have skills in the PHP programming language such as function data types
                        and others.</p>
                </div>
            </div>
            <div class="card-skills-program" data-aos="zoom-in">
                <img src="@/assets/img/laravel.png" style="width: 100px;">
                <div class="card__content">
                    <p class="card__title">Laravel
                    </p>
                    <p class="card__description">I have the ability to use the Laravel framework, although I am not yet
                        fully proficient in it.</p>
                </div>
            </div>
            <div class="card-skills-program" data-aos="zoom-in">
                <img src="@/assets/img/vue.png" style="width: 100px;">
                <div class="card__content">
                    <p class="card__title">Vue Js
                    </p>
                    <p class="card__description">I have the ability to use the JS framework, namely Vue. I also created this
                        personal website using Vue.</p>
                </div>
            </div>
            <div class="card-skills-program" data-aos="zoom-in">
                <img src="@/assets/img/Bootstrap.png" style="width: 100px;">
                <div class="card__content">
                    <p class="card__title">Bootstrap
                    </p>
                    <p class="card__description">I can use the bootstrap framework as a class to create forms or cards.</p>
                </div>
            </div>
            <div class="card-skills-program" data-aos="zoom-in">
                <img src="@/assets/img/mysql.png" style="width: 100px;">
                <div class="card__content">
                    <p class="card__title">MySql
                    </p>
                    <p class="card__description">I can use the MySQL database such as creating a database and fields</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto+Slab:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600&family=Roboto+Slab:wght@500&display=swap');

div {
    scroll-behavior: smooth;
}

.program-skills {
    text-align: center;
    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    padding: 50px;
}

.program-skills h1 {
    font-family: 'Roboto Slab', serif;
    color: #fff;
    letter-spacing: 2px;
    font-size: 40px;
    animation: fadeIn 2s ease-in-out;
}

.rumah {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    animation: fadeIn 2s ease-in-out;
}

.rumah p {
    margin-top: 15px;
    color: #fff;
    font-size: 20px;
}

.rumah a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
}

.rumah a:hover {
    color: #0060FF;
}

.kartu-program-skills {
    background-color: #F3F8FF;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}

.card-skills-program {
    margin-top: 50px;
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #0E21A0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    box-shadow: 0px 0px 20px #EBEEF1;
    margin: 50px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-skills-program:hover {
    transform: rotate(-5deg) scale(1.1);
}

.card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    cursor: default;
}

.card-skills-program:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
}

.card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
}

.card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
}

.card-skills-program:hover svg {
    scale: 0;
    transform: rotate(-45deg);
}

</style>