$(function () {
  let total = $(".panel li").length;
  console.log(total);
  let i = 0;

  function start() {
    $(".panel")
      .stop()
      .animate({ "margin-left": -i * 500 });
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
  }

  timer = setInterval(function () {
    // console.log("122");

    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    start();
  }, 2000);

  $(".next").on("click", function () {
    clearInterval(timer);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    start();
  });

  $(".navi li").on("click", function () {
    clearInterval(timer);
    i = $(this).index();

    start();
  });

  $(".prev").on("click", function () {
    clearInterval(timer);

    if (i < 0) {
      i = total - 1;
    } else {
      i--;
    }
    start();
  });
});
