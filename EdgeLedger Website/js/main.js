function initMap() {
  // Your location
  const loc = { lat: 14.44688, lng: 75.92062 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (ev) {
  if (this.hash !== "") {
    ev.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 150)
    this.document.querySelector("#navbar").style.opacity = 0.8;
  else this.document.querySelector("#navbar").style.opacity = 1;
});
