<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
     <!--  <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button> -->
    </div>

    <div class="carousel-inner text-center">
      <div class="carousel-item active" data-bs-interval="10000">
        <figure class="testimonial col-md-8 mx-auto">
          <blockquote class="blockquote text-opacity-25">
            <p>
              “ It was Deborah Jean Lee’s lifelong dream to work as a musician.
              But, when the pandemic hit and shuttered live entertainment
              venues, she found that she had lost her job overnight.
            </p>
            <p>
              A few months into the circuit breaker period, she decided to level
              up her skills and enrolled in an intensive 3-month, software
              engineering course. With her new skill set, she managed to find a
              job within 4 months in a healthcare technology company. ”
            </p>
          </blockquote>
          <img
            src="@assets/testimonial-deborah.jpg"
            class="rounded-circle mb-2"
            alt=""
            width="120"
          />
          <figcaption class="blockquote-footer mt-0">
            Deborah Jean Lee, 27
            <!-- <cite title="Source Title">- Economist</cite> -->
          </figcaption>
        </figure>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <figure class="testimonial col-md-8 mx-auto">
          <blockquote class="blockquote text-opacity-25">
            <p>
              “ It was Deborah Jean Lee’s lifelong dream to work as a musician.
              But, when the pandemic hit and shuttered live entertainment
              venues, she found that she had lost her job overnight.
            </p>
            <p>
              A few months into the circuit breaker period, she decided to level
              up her skills and enrolled in an intensive 3-month, software
              engineering course. With her new skill set, she managed to find a
              job within 4 months in a healthcare technology company. ”
            </p>
          </blockquote>
          <img
            src="@assets/testimonial-deborah.jpg"
            class="rounded-circle mb-2"
            alt=""
            width="120"
          />
          <figcaption class="blockquote-footer mt-0">
            Deborah Jean Lee, 27
            <!-- <cite title="Source Title">- Economist</cite> -->
          </figcaption>
        </figure>
      </div>
      <!-- <div class="carousel-item">
        <figure class="testimonial col-md-8 mx-auto">
          <blockquote class="blockquote text-opacity-25">
            <p>
              “ It was Deborah Jean Lee’s lifelong dream to work as a musician.
              But, when the pandemic hit and shuttered live entertainment
              venues, she found that she had lost her job overnight.
            </p>
            <p>
              A few months into the circuit breaker period, she decided to level
              up her skills and enrolled in an intensive 3-month, software
              engineering course. With her new skill set, she managed to find a
              job within 4 months in a healthcare technology company. ”
            </p>
          </blockquote>
          <img
            src="@assets/testimonial-deborah.jpg"
            class="rounded-circle mb-2"
            alt=""
            width="120"
          />
          <figcaption class="blockquote-footer mt-0">
            Deborah Jean Lee, 27
          </figcaption>
        </figure>
      </div> -->
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
