/**
 * @Overview data-base as json construct
 * @author Tobias Hansen <tohan0510@gmail.com> 2022
 * @licence The MIT License (MIT)
 * */

/**
 *  database as JSON
 *  @type {Object}
 */

export const entities = [
    {
        "id":1,
        "name":"Kunde"
    },
    {
        "id":2,
        "name":"Artikel"
    },
    {
        "id":3,
        "name":"Vorlesung"
    },
    {
        "id":4,
        "name":"Veranstaltung"
    }
]

export const attribut_typ = [
    {
        "name":"K_ID",
        "atomar":true,
        "functional":null,
        "transitiv":null
    },
    {
        "name":"Name",
        "atomar":false,
        "functional":"K_ID",
        "transitiv":null
    },
    {
        "name":"Vorname",
        "atomar":true,
        "functional":"K_ID",
        "transitiv":null
    },
    {
        "name":"Nachname",
        "atomar":true,
        "functional":"K_ID",
        "transitiv":null
    },
    {
        "name":"Straße & Hnr",
        "atomar":false,
        "functional":"K_ID",
        "transitiv":null
    },
    {
        "name":"Straße",
        "atomar":true,
        "functional":"K_ID",
        "transitiv":null
    },
    {
        "name":"Hausnummer",
        "atomar":true,
        "functional":"K_ID",
        "transitiv":null
    },
    {
        "name":"Geburtstag",
        "atomar":true,
        "functional":"K_ID",
        "transitiv":null
    },
    {
        "name":"Ar_ID",
        "atomar":true,
        "functional":null,
        "transitiv":null
    },
    {
        "name":"Bezeichnung",
        "atomar":true,
        "functional":"Ar_ID",
        "transitiv":null
    },
    {
        "name":"Preis",
        "atomar":false,
        "functional":"Ar_ID",
        "transitiv":null
    },
    {
        "name":"Preis",
        "atomar":true,
        "functional":"Ar_ID",
        "transitiv":null
    },
    {
        "name":"Wärung",
        "atomar":true,
        "functional":null,
        "transitiv":"Preis"
    },
    {
        "name":"Lagerplatz",
        "atomar":true,
        "functional":"Ar_ID",
        "transitiv":null
    },
    {
        "name":"Vor_nr",
        "atomar":true,
        "functional":null,
        "transitiv":null
    },
    {
        "name":"Vorlesungs_name",
        "atomar":true,
        "functional":"Vor_nr",
        "transitiv":null
    },
    {
        "name":"Ver_nr",
        "atomar":true,
        "functional":null,
        "transitiv":null
    },
    {
        "name":"Veranstaltungs_name",
        "atomar":true,
        "functional":"Ver_nr",
        "transitiv":null
    },
    {
        "name":"ID",
        "atomar":true,
        "functional":null,
        "transitiv":null
    },
    {
        "name":"Ort",
        "atomar":true,
        "functional":"ID",
        "transitiv":"PLZ"
    },
    {
        "name":"PLZ",
        "atomar":true,
        "functional":"ID,",
        "transitiv":null
    }
]

export const attribut_entity = [
    {
        "E_id":"Kunde",
        "A_id":"K_ID"
    },
    {
        "E_id":"Kunde",
        "A_id":"Name"
    },
    {
        "E_id":"Kunde",
        "A_id":"Vorname"
    },
    {
        "E_id":"Kunde",
        "A_id":"Nachname"
    },
    {
        "E_id":"Kunde",
        "A_id":"Straße & Hnr"
    },
    {
        "E_id":"Kunde",
        "A_id":"Straße"
    },
    {
        "E_id":"Kunde",
        "A_id":"Hausnummer"
    },
    {
        "E_id":"Kunde",
        "A_id":"Geburtstag"
    },
    {
        "E_id":"Kunde",
        "A_id":"Ort"
    },
    {
        "E_id":"Kunde",
        "A_id":"PLZ"
    },
    {
        "E_id":"Artikel",
        "A_id":"Ar_ID"
    },
    {
        "E_id":"Artikel",
        "A_id":"Bezeichnung"
    },
    {
        "E_id":"Artikel",
        "A_id":"Preis"
    },
    {
        "E_id":"Artikel",
        "A_id":"Preis"
    },
    {
        "E_id":"Artikel",
        "A_id":"Wärung"
    },
    {
        "E_id":"Artikel",
        "A_id":"Lagerplatz"
    },
    {
        "E_id":"Vorlesung",
        "A_id":"Vor_nr"
    },
    {
        "E_id":"Vorlesung",
        "A_id":"Veranstaltungs_name"
    },
    {
        "E_id":"Vorlesung",
        "A_id":"Ort"
    },
    {
        "E_id":"Vorlesung",
        "A_id":"PLZ"
    },
    {
        "E_id":"Veranstaltung",
        "A_id":"Ver_nr"
    },
    {
        "E_id":"Veranstaltung",
        "A_id":"Veranstaltungs_name"
    },
    {
        "E_id":"Veranstaltung",
        "A_id":"Ort"
    },
    {
        "E_id":"Veranstaltung",
        "A_id":"PLZ"
    }
]

export const attribut_data = [
    {
        "Vorname": ["Tom", "Kim", "Jan", "Alex", "Max"],
        "Nachname": ["Schmidt", "Müller", "Petersons", "Smith"],
        "K_ID": [468, 135, 49, 8, 687],
        "Straße": ["Alpenweg", "Markstrasse", "WallStreet", "Backers Street"],
        "Hausnummer": [46, 102, 368, "5a", 465, 4911],
        "Ar_ID": [102384, 102235, 122354, 109568, 102335],
        "Bezeichnung": ["Akkuschrauber", "Bilderrahmen", "Schrauben", "Alpinaweis"],
        "Preis": [5.20, 1.00, 50.50, 2.50],
        "Wärung": ["EUR", "USD", "BRP", "YEN"],
        "Lagerplatz": [1003, 1048, 1050, 1011, 1008],
        "Vor_ne": [12, 68, 98, 15, 13, 4],
        "Veranstaltungs_name": ["ABBA Reunion", "Handball WM", "Eishockey WM", "Disney on Ice"],
        "Ver_nr": [12, 68, 98, 15, 13, 4],
        "Vorlesungs_name": ["Algebra", "Datenbanken", "Programmieren", "Betriebsysteme"],
        "Ort": ["Köln", "Bonn", "Siegburg", "Hamburg", "München"],
        "PLZ": [50999, 50996, 53498, 52013, 44962, 50778]
    }
]

export const attribut_kombination = [
    {
        "first_at":"Vorname",
        "second_at":"Nachname",
        "kom_at":"Name"
    },
    {
        "first_at":"Straße",
        "second_at":"Hausnummer",
        "kom_at":"Straße & Hausnummer"
    }
]