export const firstName = [
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
export const lastName = [
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
export const streets = [
    "Ligusterweg","Waldstraße",
    "Wall-Steet","Hintern Bühl",
    "Breitestraße","Am Waldrand",
]
export const housenr = [
    "5","1",
    "2","3",
    "12","45",
    "123","142",
    "23","56",
    "50","50a"]
export const city = [
    "Köln","Bonn",
    "Berlin","Duisburg",
    "New York","London",
    "Madrid","Bree",
    "Gondor","Hogsmeade"
]
export const products = [
    "Akkuschrauber","Schraubendreher",
    "Hammer","Nägel",
    "Zauberkessel","Rennbesen",
    "Handyhülle","Ladekabel",
    "Smartphone","Kabel"
]
export const price = [
    "5","5.40",
    "2.40","1.20",
    "12","9.10",
    "19.8","2.10"
]
export const currency = [
    "EUR","USD",
    "YEN","CHF",
    "GBP"
]
export const plz = [
    "50999","10235",
    "12103","12161",
    "49896","41684",
    "49898","12168"
]
export const buildings = []
export const rooms = []

export const atomar = [
    {
        "noAtomar":"name",
        "attributs":["firstName","lastName"]
    },
    {
        "noAtomar":"street",
        "attributs":["streets","housenr"]
    },
    {
        "noAtomar":"price",
        "attributs":["price","currency"]
    }
]

export const functional = [
    {
    "persID":["firstName","lastName","streets","housenr","city"],
    "artikID":["products","price"],
    "VorlID":["lecture","rooms"],
    "plz":["city"],
    "buildings":["streets"],
    "price":["currency"]
}
]

export const generatetTastk = [{
    "timetable": ["persID","name","VorlID","lecture","buildings","rooms","street"]
}]