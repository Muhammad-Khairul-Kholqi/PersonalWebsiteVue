<template>
    <div>
        <div class="container-skills d-flex">
            <div class="konten-kartu card mb-3" style="max-width: 540px;" data-aos="fade-up" data-aos-duration="3000">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="@/assets/img/soft-skills.png" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body mt-4">
                            <h5 class="card-title" style="font-size: 25px;">Soft Skills</h5>
                            <p class="card-text">This is a soft skills that I have.</p>
                            <p><a class="link-opacity-100" href="/skills/soft-skills">Please look</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="konten-kartu card mb-3" style="max-width: 540px;" data-aos="fade-up" data-aos-duration="3000">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="@/assets/img/experience.png" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body mt-4">
                            <h5 class="card-title" style="font-size: 25px;">Hard Skills</h5>
                            <p class="card-text">This is a hard skills that I have.</p>
                            <p><a class="link-opacity-100" href="/skills/hard-skills">Please look</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="konten-kartu card mb-3" style="max-width: 540px;" data-aos="fade-up" data-aos-duration="3000">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/img/monitoring.png" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mt-4">
                                <h5 class="card-title" style="font-size: 25px;">Programming Skills</h5>
                                <p class="card-text">This is programming that I'm good at.</p>
                                <p><a class="link-opacity-100" href="/skills/programming-skills">Please look</a></p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<style>
    .container-skills {
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 50px;
        gap: 50px;
        margin-bottom: 50px;
    }

    .konten-kartu {
        margin: 20px;
    }

    .konten-kartu:hover {
        box-shadow: 0px 0px 20px #ddd;
    }
</style>