// Blob morphing animation
const path = document.getElementById("blobPath");
const shapes = [
  "M421.5,309.5Q445,379,386,413.5Q327,448,261.5,444.5Q196,441,159,389Q122,337,109,273Q96,209,144,161.5Q192,114,253.5,95.5Q315,77,370,111Q425,145,412.5,197.5Q400,250,421.5,309.5Z",
  "M436,306Q438,362,390,394Q342,426,282,438Q222,450,164.5,417.5Q107,385,109.5,319.5Q112,254,118.5,190.5Q125,127,192.5,125.5Q260,124,321.5,111.5Q383,99,406.5,150.5Q430,202,436,254Q436,306,436,306Z"
];

let i = 0;
setInterval(() => {
  path.setAttribute("d", shapes[i % shapes.length]);
  i++;
}, 3000);

// GSAP reveal
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".section").forEach((el, i) => {
  gsap.from(el, {
    opacity: 0,
    y: 100,
    duration: 1.3,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
  });
});
