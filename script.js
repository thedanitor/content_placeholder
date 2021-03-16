const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name_text = document.getElementById("name");
const date = document.getElementById("date");
// node lists
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

// call getData 2s after page loads
setTimeout(getData, 2000);

// in index replaced contents of elements with &nbsp. Content will be added with this function
function getData() {
  header.innerHTML = `<img src="./buzz-andersen-E4944K_4SvI-unsplash.jpg"alt="Kalapana, United States"
  />`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, rem.`;

  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/35.jpg" alt="" />`;
  name_text.innerHTML = `John Doe`;
  date.innerHTML = `Mar 16, 2021`;
  // remove animated-bg and animated-bg-text classes
  animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"));
}
