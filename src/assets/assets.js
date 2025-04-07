import weservelogo from "./weservelogo.jpg";
import weservename from "./weservename.jpg";
import acccount_icon from "./account_icon.jpg";
import search_icon from "./search_icon.jpg";
import handshake from "./handshake.jpg";
import people_block from "./people.jpg";
import phone_request from "./phone_request.jpg";

//Array content
import car_washer from "./car_washer.jpg";
import lawn_mower from "./lawn_mower.jpg";
import window_cleaner from "./window_cleaner.jpg";
import yard from "./yard.jpg";
import nail_polisher from "./nail_polisher.jpg";
import outdoor_cleaner from "./outdoor_cleaner.jpg";

export const assets = {
  weservelogo,
  weservename,
  acccount_icon,
  search_icon,
  handshake,
  people_block,
  phone_request,
};

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
