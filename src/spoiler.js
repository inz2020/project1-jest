//onn veut directement changer le js qui va manipuler le DOM en fonction
var elements = document.querySelectorAll('.spoiler')
var createSpoilerButton = function(element) {

    //on crée le span.spoiler-content
    var span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = element.innerHTML

    //On crée le button
    var button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'

    //On ajoute les elements au Dom
    element.innerHTML('')
    element.appendChild(button)
    element.appendChild(span)

    //On met l'écouteur au click
    button.addEventListener('click', function() {
        button.parentNode.removeChild(button)
        span.classList.add('visible')

    })

}

for (var i = 0; i < elements.length; i++) {
    createSpoilerButton(elements[i])
}