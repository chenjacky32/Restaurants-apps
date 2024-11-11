const ImageSlider = {
  init({ slides }) {
    this._slides = slides;
    this._currentSlide = 0;
    this._startSlideshow();
  },

  _showSlide(index) {
    this._slides.forEach((slide, i) => {
      slide.classList.remove('active', 'previous');
      if (i === index) {
        slide.classList.add('active'); // Hanya slide yang sesuai yang menjadi aktif
      }
    });
  },

  _nextSlide() {
    this._currentSlide = (this._currentSlide + 1) % this._slides.length;
    this._showSlide(this._currentSlide);
  },

  _startSlideshow() {
    this._interval = setInterval(() => this._nextSlide(), 2000);
  },

  stopSlideshow() {
    clearInterval(this._interval);
  },
};

export default ImageSlider;
