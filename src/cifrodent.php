<?php include_once('partials/header.php') ?>

<!-- Основной контент -->
<main>
  <section id="cifrodent-hero">
    <div class="container">
      <div class="cifrodent-hero">
        <picture class="cifrodent-hero__picture">
          <source srcset="img/pages/cifrodent/cifrodent/1.webp" type="image/webp">
          <img src="img/pages/cifrodent/cifrodent/1.jpg" alt="" class="cifrodent-hero__image">
        </picture>

        <div class="row justify-content-end">
          <div class="col-7">
            <div class="cifrodent-hero__content">
              <h1 class="cifrodent-hero__title page__title">О зуботехнической <br> лаборатории "Цифродент"</h1>
              <p class="cifrodent-hero__description page__description">
                Зуботехническая лаборатория "Цифродент" более 10 лет помогает врачам-стоматологам Москвы и Московской области
              </p>

              <p class="cifrodent-hero__description page__description">
                Лаборатория обладает собственным фрезерным центром, цехом прессования и отделом принтования. Зуботехническое производство оборудовано современным европейским оборудованием
              </p>

              <p class="cifrodent-hero__description page__description">
                Мы готовы предоставить материалы
                и оборудование для зуботехнических лабораторий и зубных техников
              </p>
            </div>
            <!-- /.cifrodent-hero__content -->
          </div>
          <!-- /.col-7 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.cifrodent-hero -->

      <?php include_once('partials/advantages.php') ?>
    </div>
    <!-- /.container -->
  </section>

  <section id="team" class="section">
    <div class="container">
      <h2 class="section__title text-center">Наша команда</h2>
      <div class="team">
        <div class="swiper-container slider-team">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="team__item">
                <picture class="team__picture">
                  <source srcset="img/pages/cifrodent/team/1.webp" type="image/webp">
                  <img src="img/pages/cifrodent/team/1.png" alt="" class="team__image">
                </picture>

                <h3 class="team__name">Константин Констанипольский</h3>
                <h4 class="team__role">Должность специалиста</h4>
              </div>
              <!-- /.team__item -->
            </div>
            <!-- /.swiper-slide -->

            <div class="swiper-slide">
              <div class="team__item">
                <picture class="team__picture">
                  <source srcset="img/pages/cifrodent/team/2.webp" type="image/webp">
                  <img src="img/pages/cifrodent/team/2.png" alt="" class="team__image">
                </picture>

                <h3 class="team__name">Константин Констанипольский</h3>
                <h4 class="team__role">Должность специалиста</h4>
              </div>
              <!-- /.team__item -->
            </div>
            <!-- /.swiper-slide -->

            <div class="swiper-slide">
              <div class="team__item">
                <picture class="team__picture">
                  <source srcset="img/pages/cifrodent/team/3.webp" type="image/webp">
                  <img src="img/pages/cifrodent/team/3.png" alt="" class="team__image">
                </picture>

                <h3 class="team__name">Константин Констанипольский</h3>
                <h4 class="team__role">Должность специалиста</h4>
              </div>
              <!-- /.team__item -->
            </div>
            <!-- /.swiper-slide -->

            <div class="swiper-slide">
              <div class="team__item">
                <picture class="team__picture">
                  <source srcset="img/pages/cifrodent/team/4.webp" type="image/webp">
                  <img src="img/pages/cifrodent/team/4.png" alt="" class="team__image">
                </picture>

                <h3 class="team__name">Константин Констанипольский</h3>
                <h4 class="team__role">Должность специалиста</h4>
              </div>
              <!-- /.team__item -->
            </div>
            <!-- /.swiper-slide -->
          </div>
          <!-- /.swiper-wrapper -->
        </div>
        <!-- /.swiper-container slider-team -->

        <div class="swiper-controls swiper-controls--laptop">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <!-- /.swiper-controls -->
      </div>
      <!-- /.team -->
    </div>
    <!-- /.container -->
  </section>
</main>

<?php include_once('partials/footer.php') ?>