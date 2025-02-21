export const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,  // Default (for large screens)
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600, // Matches Tailwind's '2xl' (1600px)
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1440, // Matches Tailwind's 'xl' (1440px)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024, // Matches Tailwind's 'bm' (1024px)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 768, // Matches Tailwind's 'md' (768px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 425, // Matches Tailwind's 'mb' (425px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};