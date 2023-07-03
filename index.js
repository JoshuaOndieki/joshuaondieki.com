// // Randomly rotate each logo
// const logoContainer = document.getElementById('technologies');
// const logos = logoContainer.getElementsByTagName('div');

// Array.from(logos).forEach(logo => {
//   const randomRotation = Math.floor(Math.random() * 180);
//   logo.style.transform = `rotate(${randomRotation}deg)`;
// });


// Randomly rotate each logo within a restricted range
const logoContainer = document.getElementById('technologies');
const logos = logoContainer.getElementsByTagName('div');

Array.from(logos).forEach(logo => {
  const minRotation = -120; // Minimum rotation angle (in degrees)
  const maxRotation = 120; // Maximum rotation angle (in degrees)
  const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
  logo.style.transform = `rotate(${randomRotation}deg)`;
});
