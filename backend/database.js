
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
export const Ort = [
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
export const gebäudename = ["A","B","C"]
export const Raum = ["024","486","483","412","448"]

/**
 * Entitys
 */
export const entitys = [
    {
        "entityname":"Student",
        "pk":"persID",
        "attributs":["name","alter","strasse","Ort"],
        "atomar":[{
            "name":["vorname","nachname"],
            "addresse":["strasse","hausnummer"],
            "Ort":["PlZ","Ort"]
        }],
        "Synonym":["prof","kunde","künstler"]
    },
    {
        "entityname":"Veranstallung",
        "pk":"Vorl",
        "attributs":["lecture","Gabäude","Raum","Zeit","Tag"],
        "atomar":[{
            "Ort":["Gabäude","Raum","Vorlesung","Konzert"]
        }],
        "Synonym":["Vorlseung","Veranstalung"]
    },
    {
        "entityname":"Produkt",
        "pk":"Art_Nr",
        "attributs":["Bezeichnung","Preis","Anzahl"],
        "atomar":[{
            "Preis":["Betrag","Wärung"]
        }],
        "Synonym":["Flug","Produkt","Ticket"]
    },
    {
        "entityname":"Gebäude",
        "pk":"OrtID",
        "attributs":["gebäudename","Strasse","Ort","Hausnummer"],
        "atomar":[{
            "anschrift": ["Strasse","Hausnummer"],
            "Ort":["Ort","PLZ"]
        }],
        "Synonym":["Arena","Gebäude"]
    },
    {
        "entityname":"Fahrzeug",
        "pk":"FarzugID",
        "attributs":["Platz","Klasse"],
        "atomar":["Flugzeug","Schiff","Zug"]
    }
]



