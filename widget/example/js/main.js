$(function () {
  $(".service__items").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 1170,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  });

  $(".step-3__items").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 667,
        settings: {
          // autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  });

  $(".step__items-wrapper").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 800,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $(".map__title").on("click", function () {
    $(".map__addresses-items").toggleClass("is-active");
  });
  $(".quiz__item").on("click", function () {
    $(this).toggleClass("is-active");
  });

  $(".seo-slider__images").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    speed: 600,
    asNavFor: ".seo-slider__texts",
    variableWidth: true,
    infinity: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".seo-slider__texts").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".seo-slider__images",
    arrows: true,
    autoplay: true,
    fade: true,
    infinity: true,
    prevArrow:
      '<svg class="slick-left" width="107" height="8" viewBox="0 0 107 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M0.646454 4.35356C0.451195 4.1583 0.451195 3.84172 0.646454 3.64646L3.82844 0.464475C4.0237 0.269213 4.34028 0.269213 4.53555 0.464475C4.7308 0.659737 4.7308 0.97632 4.53555 1.17158L1.70712 4.00001L4.53555 6.82844C4.7308 7.0237 4.7308 7.34028 4.53555 7.53554C4.34028 7.73081 4.0237 7.73081 3.82844 7.53554L0.646454 4.35356ZM107 4.5L1.00001 4.50001L1.00001 3.50001L107 3.5L107 4.5Z" fill = "#FFAA06"/></svg>',
    nextArrow:
      '<svg class="slick-right" width="107" height="8" viewBox="0 0 107 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M106.354 4.35356C106.549 4.1583 106.549 3.84172 106.354 3.64646L103.172 0.464475C102.976 0.269213 102.66 0.269213 102.464 0.464475C102.269 0.659737 102.269 0.97632 102.464 1.17158L105.293 4.00001L102.464 6.82844C102.269 7.0237 102.269 7.34028 102.464 7.53554C102.66 7.73081 102.976 7.73081 103.172 7.53554L106.354 4.35356ZM-4.37114e-08 4.5L106 4.50001L106 3.50001L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#FFAA06"/></svg>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $("input[type='number']").inputSpinner();

  $(".step-3__riding-time__select").on("click", function () {
    $(".step-3__riding-time__items").toggleClass("is-active");
  });

  $(".step-3__extensions-btn__input").on("click", function () {
    $(".step-3__extensions-wrapper").toggleClass("is-active");
    if ($(".step-3__extensions-btn__input").is(":checked")) {
      document.querySelector(".step-3__extensions-btn__label").innerHTML =
        "Скрыть";
    } else {
      document.querySelector(".step-3__extensions-btn__label").innerHTML =
        "Показать";
    }
  });
  $(".show-popup--link").magnificPopup({
    type: "iframe",
    mainClass: "mfp-styles mfp-size mfp-close-style",
  });
  $(".show-popup--link").on("click", function () {
    $("body").css("overflow", "hidden");
  });
});

function setValue(el) {
  $(".step-3__riding-time__select-text").html(`${el.dataset.label}`);
  $(".step-3__riding-time__items").removeClass("is-active");
}

function closePopup() {
  $.magnificPopup.close();
  $("body").css("overflow", "initial");
}
