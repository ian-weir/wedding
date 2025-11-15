// import './style.css'


async function loadHtmlAsString(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const htmlString = await response.text();
    return htmlString;
  } catch (error) {
    console.error("Error loading HTML file:", error);
    return null;
  }
}

const content = await loadHtmlAsString('/src/page.html')

document.querySelector('#app').innerHTML = content

// document.querySelector('#app').innerHTML = `
// <div id="wrapper">
// <div
//   id="hero"
//   class="hero"
//   style="height: 80vh; width: 60vw; background-image: url(/hero.jpg); background-position: 50% 57%;"
// >
//   <div class="hero-overlay"></div>
//   <div class="hero-content text-primary-content text-center">
//     <div class="max-w-md">
//       <h1 class="mb-5 text-5xl font-bold">Morgann & Ian</h1>
//       <p>
//         We're excited for you to celebrate our big day with us!
//       </p>
//       <p>
//         June 27th 2026
//       </p>
//       <a class="mb-10">
//         Where: Bonterra Trattoria - 1016 8 Street SW Calgary, AB
//       </a>
   
//     </div>
//   </div>
// </div>
//    <button class="btn btn-primary">RSVP</button>
// </div>
// `

