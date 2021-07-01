// Made by Marcelo Silveira Hayden
// E-mail-me at mshayden.1998@gmail.com
var article = document.getElementsByTagName('article')[0];

// This if statemant makes sure that the list of content creator will do it's job only if there is more than one H2.
if (article.getElementsByTagName('h2').length > 1) {
    // This for statemant will add ID attributtes to all the H2 elements.
    var number_of_h2s = article.getElementsByTagName('h2').length;
    for (var i = 0; i <= number_of_h2s - 1; i++) {
        let currentH2 = article.getElementsByTagName('h2')[i];
        currentH2.setAttribute('id', currentH2.textContent.toLowerCase());
    }
    // The line above will create the OL element with it's ID to contain the LI elements.
    article.getElementsByTagName('p')[0].insertAdjacentHTML('afterend', '<ol id="table_of_contents">');
    /* This for statemant will get each H2 elements and will make a link for them as LI elements.
    Each LI element is going to have a A elements inside based on each H2 elements current text. */
    for (var i = 0; i <= number_of_h2s - 1; i++) {
        let currentH2 = article.getElementsByTagName('h2')[i];
        let currentH2Id = currentH2.getAttribute('id');
        document.getElementById('table_of_contents').innerHTML += '<li><a href="#' + currentH2Id + '">' + currentH2.textContent;
    }
}