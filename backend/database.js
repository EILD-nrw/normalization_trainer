
/**
 * attributes of an relation
 * @type {string[]}
 */

export const persID = ["4683","4598","1234","7564","3465","7898"]
export const Vorl = ["1238","1153","1352","1543","1153","7888"]
export const vorname = [
    "Harry","Ross",
    "Bruce","Cook",
    "Carolyn","Morgan",
    "Albert","Walker",
    "Randy","Reed",
    "Larry","Barnes",
    "Lois","Wilson",
    "Jesse","Campbell",
    "Ernest","Rogers",
    "Theresa","Patterson",
    "Henry","Simmons",
    "Michelle","Perry",
    "Frank","Butler",
    "Shirley"
]
export const nachname = [
    "Ruth","Jackson",
    "Debra","Allen",
    "Gerald","Harris",
    "Raymond","Carter",
    "Jacqueline","Torres",
    "Joseph","Nelson",
    "Carlos","Sanchez",
    "Ralph","Clark",
    "Jean","Alexander",
    "Stephen","Roberts",
    "Eric","Long",
    "Amanda","Scott",
    "Teresa","Diaz",
    "Wanda","Thomas"
]
export const lecture = [
    "Datenbankem", "IT-Sicherheit",
    "Betriebsysteme","BWL",
    "Mythologie","Astronomie",
    "Geschichte"]
export const strasse = [
    "Ligusterweg","Waldstraße",
    "Wall-Steet","Hintern Bühl",
    "Breitestraße","Am Waldrand",
]
export const Hausnummer = [
    "5","1",
    "2","3",
    "12","45",
    "123","142",
    "23","56",
    "50","50a"]
export const Stadt = [
    "Köln","Bonn",
    "Berlin","Duisburg",
    "New York","London",
    "Madrid","Bree",
    "Gondor","Hogsmeade"
]
export const Bezeichnung = [
    "Akkuschrauber","Schraubendreher",
    "Hammer","Nägel",
    "Zauberkessel","Rennbesen",
    "Handyhülle","Ladekabel",
    "Smartphone","Kabel"
]
export const Betrag = [
    "5","5.40",
    "2.40","1.20",
    "12","9.10",
    "19.8","2.10"
]
export const Wärung = [
    "EUR","USD",
    "YEN","CHF",
    "GBP"
]
export const PLZ = [
    "50999","10235",
    "12103","12161",
    "49896","41684",
    "49898","12168"
]
export const OrtID = ["A","B","C"]
export const Räume = ["024","486","483","412","448"]
export const Art_Nr = ["12254","12268","12068","12298","12385"]
export const FarzugID = ["024","486","483","412","448"]
export const alter = ["18","23","15","12"]
export const Tag = ["Mo","Di","Mi","Do","Fr","Sa","So"]
export const Zeit = ["10:30","12:10","15:15","16:30","19:30"]
export const Anzahl = ["5","3","4","8","10","12"]
export const Platz = ["A13","B12","A10","C12","D08"]
export const Klasse = ["1","2","Holzklasse","Business"]
export const Hersteller = ["Samsung","Apple","Xiaomi","Huawei"]
/**
 * Entitys
 */

/**
 * 3 col is an atomar transitiv Attribut
 * @type {string[][]}
 */
export const trans = [
    ["PLZ","Stadt","Ort"],
    ["Gebäude","Strasse"],
    ["Hersteller","Art_Nr"]
]

export const entitys = [
    {
        "entityname":"Student",
        "pk":"persID",
        "attributs":["name","alter","addresse","Ort"],
        "atomar":[
            ["name","vorname","nachname"],
            ["addresse","strasse","hausnummer"],
            ["Ort","PlZ","Stadt"],
        ],
        "Synonym":["prof","kunde","künstler"]
    },
    {
        "entityname":"Veranstallung",
        "pk":"Vorl",
        "attributs":["lecture","Gebäude","Zeit","Tag"],
        "atomar":[
            ["Raum","Gebäude","Räume"]
        ],
        "Synonym":["Vorlseung","Veranstalung","Vorlesung","Konzert"]
    },
    {
        "entityname":"Produkt",
        "pk":"Art_Nr",
        "attributs":["Bezeichnung","Preis","Anzahl","Hersteller"],
        "atomar":[
            ["Preis","Betrag","Wärung"]
        ],
        "Synonym":["Flug","Produkt","Ticket"]
    },
    {
        "entityname":"Gebäude",
        "pk":"OrtID",
        "attributs":["anschrift","Ort","Hausnummer"],
        "atomar":[
            ["anschrift","Strasse","Hausnummer"],
            ["Ort","Stadt","PLZ"]
        ],
        "Synonym":["Arena","Gebäude"]
    },
    {
        "entityname":"Fahrzeug",
        "pk":"FarzugID",
        "attributs":["Platz","Klasse"],
        "atomar":[],
        "Synonym":["Flugzeug","Schiff","Zug"]
    }
]
/**
 * Kombination
 *
 */
export const combination = [
    {
        "e1":"Student",
        "e2":"Veranstallung"
    },
    {
        "e1":"Student",
        "e2":"Produkt"
    }
]



