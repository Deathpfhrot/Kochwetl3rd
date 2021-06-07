function german() {
    document.getElementById('link1').innerHTML = 'Start';
    document.getElementById('link2').innerHTML = 'Rezept des Tages';
    document.getElementById('link3').innerHTML = 'Kontakte';
    document.getElementById('link4').innerHTML = 'Impressum';
    document.getElementById('headline1').innerHTML = 'Italienische Spezialitäten';
    document.getElementById('text1').innerHTML = 'Viele Gerichte zubereitet mit Herz und Seele werden Ihnen hier serviert bei Ihrem lieblings Italiener ob Vorspeise, Hauptgericht oder Nachspeise für jeden Hunger oder groß und klein ist was mit dabei!';
    document.getElementById('text2').innerHTML = 'Rezept öffnen';
    document.getElementById('headline2').innerHTML = 'Lust auf mehr?';
    document.getElementById('sub-headline1').innerHTML = 'Vorspeise';
    document.getElementById('text3').innerHTML = 'Lasagne';
    document.getElementById('sub-headline2').innerHTML = 'Hauptspeise';
    document.getElementById('text4').innerHTML = 'Pizza';
    document.getElementById('sub-headline3').innerHTML = 'Nachspeise';
    document.getElementById('text5').innerHTML = 'Tiramisu';
    document.getElementById('headline3').innerHTML = 'Frisch vs. Tiefkühl - Was ist gesünder?';
    document.getElementById('text6').innerHTML = 'Viele Leute sind sich immer noch nicht ganz sicher was von beiden Sachen die richtige sein soll hier ein paar aufweckende Fakten!';
    document.getElementById('text7').innerHTML = 'Studien und Untersuchungen haben ergeben das allein bei Tiefkühlkost weniger Vitamine und Nährstoffe vorhanden bleiben';
    document.getElementById('text8').innerHTML = 'Die frische der Lebensmittel ist entscheiden für Kinder um das Wachstum best möglich zu fördern';
    document.getElementById('text9').innerHTML = 'Hiermit unterstützen sie selbstverständlich auch die kleinen Unternehmen und nicht die Großkonzerne an sich!';
    document.getElementById('link5').innerHTML = 'Datenschutz';
    document.getElementById('link6').innerHTML = 'Impressum';
    document.getElementById('link7').innerHTML = 'Cookie-Richtlinien';
}

function english() {
    document.getElementById('link1').innerHTML = 'Start';
    document.getElementById('link2').innerHTML = 'Receipt of  the Day';
    document.getElementById('link3').innerHTML = 'Contact';
    document.getElementById('link4').innerHTML = 'Imprint';
    document.getElementById('headline1').innerHTML = 'Italian specialties';
    document.getElementById('text1').innerHTML = "Many dishes prepared with heart and soul are served here by your favorite Italian, whether it's a starter, main course or dessert for every hunger or big and small there is something!";
    document.getElementById('text2').innerHTML = 'Open recipe';
    document.getElementById('headline2').innerHTML = 'Would like more?';
    document.getElementById('sub-headline1').innerHTML = 'Starter';
    document.getElementById('text3').innerHTML = 'Lasagne';
    document.getElementById('sub-headline2').innerHTML = 'Main Course';
    document.getElementById('text4').innerHTML = 'Pizza';
    document.getElementById('sub-headline3').innerHTML = 'Dessert';
    document.getElementById('text5').innerHTML = 'Tiramisu';
    document.getElementById('headline3').innerHTML = 'Fresh vs. Frozen - Which is Healthier? ';
    document.getElementById('text6').innerHTML = 'Many people are still not quite sure which of the two things should be the right one. Here are a few arousing facts!';
    document.getElementById('text7').innerHTML = 'Studies and research have shown that frozen food alone contains fewer vitamins and nutrients';
    document.getElementById('text8').innerHTML = 'The freshness of the food is crucial for children in order to encourage growth as best as possible';
    document.getElementById('text9').innerHTML = 'With this, of course, you also support the small companies and not the large corporations themselves!';
    document.getElementById('link5').innerHTML = 'Privacy';
    document.getElementById('link6').innerHTML = 'Imprint';
    document.getElementById('link7').innerHTML = 'Cookie Policy';
}

function italien() {
    document.getElementById('link1').innerHTML = 'Inizio';
    document.getElementById('link2').innerHTML = 'Ricetta del giorno';
    document.getElementById('link3').innerHTML = 'Contatti';
    document.getElementById('link4').innerHTML = 'Impronta';
    document.getElementById('headline1').innerHTML = 'Specialità italiane';
    document.getElementById('text1').innerHTML = "Molti piatti preparati con il cuore e l'anima vengono serviti qui con il tuo italiano preferito, che si tratti di un antipasto, un piatto principale o un dessert per ogni fame o grande e piccolo c è qualcosa!";
    document.getElementById('text2').innerHTML = 'Ricetta aperta';
    document.getElementById('headline2').innerHTML = 'Vorresti di più?';
    document.getElementById('sub-headline1').innerHTML = 'Antipasto';
    document.getElementById('text3').innerHTML = 'Lasagne';
    document.getElementById('sub-headline2').innerHTML = 'Portata principale';
    document.getElementById('text4').innerHTML = 'Pizza';
    document.getElementById('sub-headline3').innerHTML = 'Dolce';
    document.getElementById('text5').innerHTML = 'Tiramisu';
    document.getElementById('headline3').innerHTML = 'Fresco e congelato: qual è il più sano?';
    document.getElementById('text6').innerHTML = 'Molte persone non sono ancora del tutto sicure quale delle due cose dovrebbe essere quella giusta.Qui ci sono alcuni fatti interessanti!';
    document.getElementById('text7').innerHTML = 'Studi e ricerche hanno dimostrato che il cibo congelato da solo contiene meno vitamine e sostanze nutritive';
    document.getElementById('text8').innerHTML = 'La freschezza del cibo è fondamentale per i bambini per favorire al meglio la crescita';
    document.getElementById('text9').innerHTML = 'Con questo, ovviamente, sostieni anche le piccole aziende e non le grandi aziende stesse!';
    document.getElementById('link5').innerHTML = 'Privacy';
    document.getElementById('link6').innerHTML = 'Impronta';
    document.getElementById('link7').innerHTML = 'Gestione dei Cookie';
}

/* ------- w3school HTML-Include --------- */

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}