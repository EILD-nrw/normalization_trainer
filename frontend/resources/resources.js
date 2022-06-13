export const confi={
    "css.1.1":"./resources/styles.css",
    "feedback":true,
    "show_solution":true,
    "retry":true
}

/**
 * default phrases data
 * @type {Object[]}
 */
export const phrases = [
    {
        "text":"Wende die 1NF, an falls diese Tabelle bereits in der 1NF ist klicke auf weiter.",
        "task":[{
            "Stundenplan":[
            {"KundenID": "465",
                "Name": "Tobisa Hansen",
                "VorlNr": "46",
                "Vorlesung": "Datenbanken",
                "Gebäude": "B",
                "Raum": "0466",
                "Straße": "Bergallee"},
            {
                "KundenID": "465",
                "Name": "Tobisa Hansen",
                "VorlNr": "46",
                "Vorlesung": "Datenbanken",
                "Gebäude": "B",
                "Raum": "0466",
                "Straße": "Bergallee"
            },
            {
                "KundenID": "465",
                "Name": "Tobisa Hansen",
                "VorlNr": "46",
                "Vorlesung": "Datenbanken",
                "Gebäude": "B",
                "Raum": "0466",
                "Straße": "Bergallee"
            },
            {
                "KundenID": "465",
                "Name": "Tobisa Hansen",
                "VorlNr": "46",
                "Vorlesung": "Datenbanken",
                "Gebäude": "B",
                "Raum": "0466",
                "Straße": "Bergallee"
            },
            {
                "KundenID": "465",
                "Name": "Tobisa Hansen",
                "VorlNr": "46",
                "Vorlesung": "Datenbanken",
                "Gebäude": "B",
                "Raum": "0466",
                "Straße": "Bergallee"
            },
            {
                "KundenID": "465",
                "Name": "Tobisa Hansen",
                "VorlNr": "46",
                "Vorlesung": "Datenbanken",
                "Gebäude": "B",
                "Raum": "0466",
                "Straße": "Bergallee"
            }]
    }],
        "solution":[
            [0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
        "hint":"Einige Attribute scheinen auf den ersten Blick Atomar, bei genauerer Betrachtung aber nicht mehr"
    },
    {
        "text":"Makiere alle ][ die sich in der Tabelle Befinden ",
        "task":[{
            "Stundenplan":[
                {"KundenID": "465",
                    "Vorname": "Tobisa",
                    "Nachname": "Hansen",
                    "VorlNr": "46",
                    "Vorlesung": "Datenbanken",
                    "Gebäude": "B",
                    "Raum": "0466",
                    "Straße": "Bergallee"},
                {"KundenID": "465",
                    "Vorname": "Tobisa",
                    "Nachname": "Hansen",
                    "VorlNr": "46",
                    "Vorlesung": "Datenbanken",
                    "Gebäude": "B",
                    "Raum": "0466",
                    "Straße": "Bergallee"},
                {"KundenID": "465",
                    "Vorname": "Tobisa",
                    "Nachname": "Hansen",
                    "VorlNr": "46",
                    "Vorlesung": "Datenbanken",
                    "Gebäude": "B",
                    "Raum": "0466",
                    "Straße": "Bergallee"},
                {"KundenID": "465",
                    "Vorname": "Tobisa",
                    "Nachname": "Hansen",
                    "VorlNr": "46",
                    "Vorlesung": "Datenbanken",
                    "Gebäude": "B",
                    "Raum": "0466",
                    "Straße": "Bergallee"},
                {"KundenID": "465",
                    "Vorname": "Tobisa",
                    "Nachname": "Hansen",
                    "VorlNr": "46",
                    "Vorlesung": "Datenbanken",
                    "Gebäude": "B",
                    "Raum": "0466",
                    "Straße": "Bergallee"},
                {"KundenID": "465",
                    "Vorname": "Tobisa",
                    "Nachname": "Hansen",
                    "VorlNr": "46",
                    "Vorlesung": "Datenbanken",
                    "Gebäude": "B",
                    "Raum": "0466",
                    "Straße": "Bergallee"}]
        }],
        "hint":"Tretten mehrfach in einer Relation, können aber auf das nötigste redudziert werden."
    },
    {
        "text":"Welche Attribute sind von dem Primärschlüssel funktional Abhängig"
    },

]

export const isNotAtomar = [
    {
        "Attribut":"Name",
        "first_part":"Vorname",
        "second_part":"Nachname"
    }
]

export const isFunctional = [
    {
        "KundenID":[ "Name","Vorname","Nachname" ],
        "VorlesungID":["Vorlesung","Raum"],
        "Gabäude":["Straße"]
    }
]