// jshint esversion : 6
// Need to sort these strings not taking articles into consideration
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(bandName){
  return bandName.replace(/^(a|an|the)/i,'').trim();  // i for case insensitive
}

bands.sort((a,b) => removeArticle(a) > removeArticle(b) ? 1 : -1);

bands.forEach(obj => {
     let ul = document.getElementById("bands");
     let li = document.createElement("li");
     li.appendChild(document.createTextNode(obj));
     ul.appendChild(li);
});
