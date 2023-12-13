<template>
  <div>
    <Navbar></Navbar>
    <div class="container-home-page">
      <div class="home-page-kiri">
        <h3 data-aos="fade-right" data-aos-duration="1000">Hello There</h3>
        <h1 data-aos="fade-right" data-aos-duration="1200"><span>I'm</span> Muhammad<br>Khairul Kholqi</h1>
        <h2 data-aos="fade-right" data-aos-duration="1500">a <span>Software Engineer</span></h2>
        <div class="kumpulan-button">
          <div class="button1" data-aos="fade-up-right" data-aos-duration="1000"><button><a href="/about-me">About Me</a></button></div>
          <div class="button2" data-aos="fade-up-right" data-aos-duration="1300"><button><a href="@/assets/img/KhairulKholqiCv.pdf" download>Download CV</a></button></div>
        </div>
      </div>
      <div class="home-page-kanan" data-aos="fade-left" data-aos-duration="1200">
        <img src="@/assets/img/mee.png">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Layouts/Navbar.vue";

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Montserrat:wght@300;400;500&family=Poppins:wght@600&family=Roboto+Slab:wght@500&display=swap');

.container-home-page {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 10%;
}

.home-page-kiri {
  margin-top: 50px;
}

.home-page-kiri h3 {
  font-family: Arial, Helvetica, sans-serif;
}

.home-page-kiri h1 {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 50px;
}

.home-page-kiri h1 span {
  color: #127DFF;
}

.home-page-kiri p {
  font-family: Arial, Helvetica, sans-serif;
}

.home-page-kiri h2 {
  margin-top: 10px;
}

.home-page-kiri h2 span {
  color: #127DFF;
}

.home-page-kanan img {
  width: 500px;
}

.kumpulan-button {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

button {
  border: none;
  border-radius: 3px;
}

.button1 a {
  color: #fff;
  text-decoration: none;
}

.button1 button {
  background-color: #0588E3;
  padding: 8px;
}

.button1 button:hover {
  background-color: #127DFF;
}

.button2 button {
  border: 2px solid #0588E3;
  background-color: #fff;
  padding: 6px;
}

.button2 button {
  border: 2px solid #127DFF;
}

.button2 a:hover {
  color: #000;
}


.button2 a {
  color: #0588E3;
  text-decoration: none;
}

@media (max-width: 1095px) {
  .home-page-kanan img {
    width: 400px;
  }
}

@media (max-width: 960px) {
  .home-page-kanan img {
    width: 370px;
    margin-top: 20px;
  }

  .home-page-kiri h1 {
    font-size: 40px;
  }
}

@media (max-width: 830px) {
  .home-page-kanan img {
    width: 340px;
    margin-top: 20px;
  }

  .home-page-kiri h1 {
    font-size: 35px;
  }

  .home-page-kiri h2 {
    font-size: 20px;
  }
}

@media (max-width: 750px) {
  .home-page-kanan img {
    width: 300px;
    margin-top: 20px;
  }

  .home-page-kiri h1 {
    font-size: 30px;
  }

  .home-page-kiri h2 {
    font-size: 18px;
  }

  .button1 button {
    background-color: #0588E3;
    padding: 5px;
  }

  .button1 a {
    font-size: 12px;
  }

  .button2 button {
    padding: 3px;
  }

  .button2 a {
    font-size: 12px;
  }

}

@media (max-width: 655px) {
  .home-page-kanan img {
    width: 270px;
  }

    .home-page-kiri h1 {
    font-size: 25px;
  }

  .home-page-kiri h2 {
    font-size: 15px;
  }

  .home-page-kiri h3 {
    font-size: 12px;
  }

}

@media (max-width: 570px) {
  .container-home-page {
        flex-direction: column;
        align-items: center;
    }

    .home-page-kanan  {
        order: -1;
    }

    .home-page-kanan img {
        margin-top: -30px;
        width: 100%;
        margin-top: 20px;
    }

    .kumpulan-button {
      justify-content: center;
    }

    .home-page-kiri {
        text-align: center;
        margin-top: 20px;
    }

    .home-page-kiri h3 {
      font-size: 18px;
    }

    .home-page-kiri h2 {
      font-size: 20px;
    }

    .home-page-kiri h1 {
      font-size: 40px;
    }
}
</style>