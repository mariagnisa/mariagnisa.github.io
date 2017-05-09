//Fetch navbar and content-wrapper
let navbar = document.getElementById('nav');
let content = document.getElementById('content');
let sticky = false;

let stickPoint = getDistance();

function getDistance() {
  let topDist = navbar.offsetTop;
  return topDist;
}

// Fecth divs with content
let education = document.getElementById('education');
let skills = document.getElementById('skills');
let experience = document.getElementById('experience');
let contact = document.getElementById('contact');

//Add divs with content to array
const fadingArray = [];
fadingArray.push(education);
fadingArray.push(skills);

const smallFading = [];
smallFading.push(experience);
smallFading.push(contact);

//When page is scrolled, navbar gets sticky and divs content shows
window.onscroll = function(e) {

  let distance = getDistance() - window.pageYOffset;
  let offset = window.pageYOffset;
  if ( (distance <= 0) && !sticky) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0px';
    navbar.style.background = 'rgba(0, 102, 77, 0.9)';

    sticky = true;
  } else if (sticky && (offset <= stickPoint)){
    navbar.style.position = 'static';
    navbar.style.background = 'none';
    sticky = false;
  }

  //Add fading to the big divs
  for (let i = 0; i < fadingArray.length; i++) {
    let distTop = fadingArray[i].offsetTop - fadingArray[i].offsetHeight - 200;

    let divsDistance = distTop - window.pageYOffset;
    let off = window.pageYOffset;

    if (divsDistance <= 0) {
      fadingArray[i].style.opacity = '1';
    } else if (off <= distTop) {
      fadingArray[i].style.opacity = '0';
    }
  }

  //Add fading to the small divs
  for (let i = 0; i < smallFading.length; i++) {
    let distTop = smallFading[i].offsetTop - smallFading[i].offsetHeight - 400;

    let divsDistance = distTop - window.pageYOffset;
    let off = window.pageYOffset;

    if (divsDistance <= 0) {
      smallFading[i].style.opacity = '1';
    } else if (off <= distTop) {
      smallFading[i].style.opacity = '0';
    }
  }
}
