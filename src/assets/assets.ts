import weservelogo from "./weservelogo.jpg";
import weservename from "./Servisu-logo.png";
import acccount_icon from "./account_icon.jpg";
import search_icon from "./search_icon.jpg";
import handshake from "./handshake.jpg";
import people_block from "./people.jpg";
import phone_request from "./phone_request.jpg";
import facebook_icon from "./facebook_icon.jpg";
import instagram_icon from "./instagram_icon.jpg";
import twitter_icon from "./twitter.jpg";
import connection_you from "./connecting_you.jpg";
import google_store_logo from "./google_play_logo.wine.png";
import istore_logo from "./app_store_logo.png";
import question_mark_icon from "./question_mark.jpg";
import arrow_wallpaper from "./arrow.jpg";
import plane_wallpaper from "./plane.jpg";
import connecting_people_wallpaper from "./connecting_people.jpg";
import close_window from "./close-window.png";
import rating_star from "./rating-star.png";

//Array content
import car_washer from "./car_washer.jpg";
import lawn_mower from "./lawn_mower.jpg";
import window_cleaner from "./window_cleaner.jpg";
import yard from "./yard.jpg";
import nail_polisher from "./nail_polisher.jpg";
import outdoor_cleaner from "./outdoor_cleaner.jpg";

//Occupations
import a from "./occupations/1.png";
import b from "./occupations/2.png";
import c from "./occupations/3.png";
import d from "./occupations/4.png";
import e from "./occupations/5.png";
import f from "./occupations/6.png";
import g from "./occupations/7.png";
import h from "./occupations/8.png";
import i from "./occupations/9.png";
import j from "./occupations/10.png";
import k from "./occupations/11.png";
import l from "./occupations/12.png";

import loading_screen from "./loading/loading-spinner.svg";

export const AnimatedImgArray = {
  1: a,
  2: b,
  3: c,
  4: d,
  5: e,
  6: f,
  7: g,
  8: h,
  9: i,
  10: j,
  11: k,
  12: l,
};

export const assets = {
  arrow_wallpaper,
  plane_wallpaper,
  connecting_people_wallpaper,
  weservelogo,
  weservename,
  acccount_icon,
  search_icon,
  handshake,
  people_block,
  phone_request,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  window_cleaner,
  connection_you,
  google_store_logo,
  istore_logo,
  question_mark_icon,
  close_window,
  rating_star,
  loading_screen,
};


export const OccupationsList = [
  { id: -1, name: "All"},
  { id: 1, name: "Cleaner" },
  { id: 2, name: "Gardener", image: yard,description: "Trying to beat your neighbor's lawn? We'll sort you out!" },
  { id: 3, name: "Lawn-mower", image: lawn_mower,description: "Yard looking more like a bush? Get it groomed now!" },
  { id: 4, name: "Photographer" },
  { id: 5, name: "Window Cleaner",image: window_cleaner,description:"Birds and dust messing with your windows? Get them spotless now." },
  { id: 6, name: "Painter" },
  { id: 7, name: "School Transporter" },
  { id: 8, name: "Nail Polisher" },
  { id: 9, name: "Plumber" },
  { id: 10, name: "Hair Stylist"},
  { id: 11, name: "Car Washer", image: car_washer, description: "Dirty ride? Get it washed with a click of a button.",},
];


export const explore_page_images = [
  {
    id: 1,
    image: car_washer,
    description: "Dirty ride? Get it washed with a click of a button.",
    category: "carwash",
  },
  {
    id: 2,
    image: lawn_mower,
    description: "Yard looking more like a bush? Get it groomed now!",
    category: "lawmower",
  },
  {
    id: 3,
    image: window_cleaner,
    description:
      "Birds and dust messing with your windows? Get them spotless now.",
    category: "cleaner",
  },
  { id: 4, image: outdoor_cleaner, description: "Smelly bins? We got you!" },
  {
    id: 5,
    image: yard,
    description: "Trying to beat your neighbor's lawn? We'll sort you out!",
    category: "gardener",
  },
  { id: 6, image: nail_polisher, description: "Nails?", category: "stylist" },
];
