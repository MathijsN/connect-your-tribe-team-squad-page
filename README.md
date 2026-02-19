## Sqogle — Squad Page

Een squadpage gebouwd door @Anass-KH, @MathijsN en @hebaahx.

De naam **Sqogle** is een samenvoegsel van Squad Page en Google, onze inspiratie voor het design. Net als Google is de homepage simpel met een zoekbalk centraal, maar met een eigen twist.

### Het idee
We wilden een pagina maken die voelt als een bekende zoekmachine maar dan voor onze squad. De homepage heeft dezelfde vibe als Google: clean, één zoekbalk, twee knoppen. Vandaar de naam Sqogle. Schetsen en ideeën wisselden we samen uit voordat we begonnen met bouwen

## Routes
We hebben gewerkt met verschillende routes om data op te halen uit de Directus API. Elke route heeft een eigen doel — zo haalt /studenten alle studenten op en kan je ze sorteren op A-Z of Z-A, /search zoekt op meerdere velden tegelijk zoals naam, woonplaats en haarkleur, en /random kiest elke keer een willekeurige student. Met POST /random kan je ook een berichtje achterlaten voor die student, wat wordt opgeslagen in de database.
| Route | Methode | Omschrijving |
|---|---|---|
| `/` | GET | Homepage met zoekbalk en navigatie |
| `/studenten` | GET | Overzicht van alle studenten, sorteerbaar op A-Z of Z-A |
| `/search` | GET | Zoekresultaten op naam, favoriete dier, woonplaats, haarkleur |
| `/random` | GET | Laat een willekeurige student zien |
| `/random` | POST | Stuur een berichtje naar de random student |

## Samenwerking
We hebben voor het eerst gewerkt met Git branches. Ieder teamlid had zijn eigen branch en mergede naar main. Dit zorgde soms voor conflicten en veel uitzoekwerk, maar we leerden er veel van.
