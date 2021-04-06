<section id="callback" class="section">
    <div class="container">
      <div class="callback">
        <div class="row align-items-center position-relative">
          <div class="col-12 col-lg-6">
            <div class="callback__content">
              <h2 class="callback__title section__title section__title--mobile-big">Остались вопросы? <br> Напишите нам</h2>
              <form action="" class="callback__form form">
                <div class="input input--error mb-3">
                  <input type="text" class="input__field" placeholder="Ваше Имя">
                  <img data-tippy-content="Вы ошиблись при вводе имени" class="input__warning" src="img/icons/warning.svg" alt="">
                </div>
                <!-- /.input -->

                <div class="input mb-3">
                  <input type="tel" class="input__field" placeholder="Номер телефона">
                  <img data-tippy-content="Номер телефон указан не верно" class="input__warning" src="img/icons/warning.svg" alt="">
                </div>
                <!-- /.input -->

                <div class="input mb-3">
                  <textarea type="text" class="input__field input__field--box" placeholder="Ваш вопрос"></textarea>
                </div>
                <!-- /.input -->

                <div class="form__action">
                  <button class="form__button callback__button button button-outline" disabled>Отправляем...</button>
                  <img class="form__loader preloader--mini" src="img/loader.svg" alt="">
                </div>
                <!-- /.form__action -->
              </form>
            </div>
            <!-- /.callback__content -->
          </div>
          <!-- /.col-6 -->
          <div data-aos="fade-right" class="col-6">
            <picture class="callback__picture">
              <source srcset="/" media="(max-width: 992px)">
              <source srcset="img/pages/main/callback/photo.webp" type="image/webp">
              <img class="callback__image" src="img/pages/main/callback/photo.jpg" alt="">
            </picture>
          </div>
          <!-- /.col-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.callback -->
    </div>
    <!-- /.container -->
  </section>