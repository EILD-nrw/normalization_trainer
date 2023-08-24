# Normalisierungstrainer

## Beschreibung
Interaktiver Trainer, der Beispiele anhand einer Meta-Topologie generiert/entwickelt.
In dieser Meta-Topologie werden die einzelnen Schritte der Normalisierung abstrakt definiert.
Bei der Implementierung handelt es sich um einen Prototyp.

## Systemanforderungen
Voraussetzung für die App ist ein gängiger Webbrowser (z.B. Firefox, Google Chrome, Microsoft Edge oder Safari) mit aktiviertem JavaScript in einer aktuellen Version.

## Installation
Die Webanwendung kann über GitHub Pages in ihrer Basiskonfiguration ohne Installation über die folgende Web-URL direkt genutzt werden: https://eild-nrw.github.io/normalization_trainer/.
Über die Web-URL ist die Webanwendung immer auf dem neusten Stand und muss nicht von Hand aktualisiert werden.

Alternativ kann das Repository als ZIP-Datei heruntergeladen, auf einem beliebigen Webspace entpackt und durch den Aufruf der enthaltenen `index.html` gestartet werden.
Die ZIP-Variante hat den Vorteil einer von GitHub unabhängigen Version ohne externe Abhängigkeiten, bei der auch individuelle Anpassungen vorgenommen werden können.

Eine dritte Möglichkeit ist ein _Fork_ des Repository, der anschließend über GitHub Pages veröffentlicht wird.
Diese Variante hat den Vorteil, dass kein eigener Webspace benötigt wird und gleichzeitig auch die individuelle Anpassbarkeit gegeben ist.

In einer Lernplattform (z.B. ILIAS oder Moodle) kann die App entweder über die Web-URL oder über das Hochladen der ZIP-Datei integriert werden.

## Anpassbarkeit
Layout und Design können über die `resources/styles.css` angepasst werden.
Die `resources/templates.js` enthält die HTML-Templates, in der bei Bedarf weitere HTML-ID's und HTML-Klassen ergänzt werden können, um das Selektieren von HTML-Elementen im CSS zu erleichtern.
Wer über die nötigen Programmierkenntnisse verfügt, kann auch die Logik des interaktiven Trainers in der `ccm.normalisation_trainer.js` anpassen.
Es handelt sich dabei um eine auf der _ccmjs_-Webtechnologie basierende Webkomponente.

## Datenverarbeitung
An keiner Stelle werden Benutzer-spezifische Daten verarbeitet.
Es handelt sich um reine Selbsttests mit direktem Feedback, was richtig/falsch beantwortet wurde.
Es existieren keine Abhängigkeiten zu externen Servern und es findet entsprechend kein Datenaustausch mit anderen Servern statt.

## Lizenzen
Der [Normalisierungstrainer](https://github.com/eild-nrw/normalization_trainer) wurde ausgehend von
der Normalisierungsanimation von Frederic Cieslik
von Tobias Hansen als Bachelorarbeit im Rahmen
des [EILD-Projekts](https://eild.nrw) an
der [Hochschule Bonn-Rhein-Sieg](https://h-brs.de) prototypisch entwickelt.
Dieses Repository enthält Software unter [MIT-Lizenz](/LICENSE) und Content
unter [CC0-Lizenz](https://creativecommons.org/publicdomain/zero/1.0/deed.de),
ausgenommen sind die verwendeten Logos.

## Kontakt
Wir freuen uns über jedes Feedback und beantworten gern Ihre Fragen.
Hierfür können Sie sich jederzeit (auch nach dem Ende des EILD-Projekts) an den Projektmitarbeiter André Kless wenden.

Email: andre.kless@h-brs.de | Web: https://www.h-brs.de/de/inf/andre-kless

![Logos von Projekt, Kooperationspartner und Förderer](/frontend/resources/img/logos.jpg)
