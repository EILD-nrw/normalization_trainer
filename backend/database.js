export const pk1 = ["1338", "1069", "1516", "1580", "1618", "1831", "1614",
    "1286", "1147", "1784", "1061", "1684", "1929", "1762", "1216", "1663", "1269", "1961", "1439", "1004", "1195", "1079", "1764", "1858", "1390", "1408", "1860", "1092", "1682", "1573"];
export const pk2 = ["154", "141", "140", "133", "177", "130", "137", "151",
    "171", "120", "173", "157", "100", "162", "143", "197", "138", "198", "118", "122", "167", "193", "101", "134", "132", "153", "192", "144", "105", "145"
]
export const MatrkNr = ["1235","48934","1358","4896","48651","1562"];
export const PersNr = MatrkNr;
export const BesNr = MatrkNr;
export const Vorlnr = MatrkNr;
export const Veransnr = MatrkNr;
export const konzNr = MatrkNr;
export const SpsNr = MatrkNr;
export const HerstellerID = MatrkNr
export const vorname = [ "Harry","Ross",
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
    "Shirley"];
export const name = ["Ruth","Jackson",
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
    "Wanda","Thomas"]; //nachname
export const Vorlesung = ["Datenbanken","IT-Sicherheit","Netze","Mathematik","Weltherschaft"];
export const Veranstaltung = ["FIBU","Buchmesse","Gamescom","ComicCon","JavaLand","DOAG0"];
export const Konzert =  ["Billy Elish","Queen","ABBA","Elton John","Linking Park","Vincent Wise","Backstreet Boys"];
export const Sportspiel = ["Fußball","Dart","Feldhockey","Eishockey","Basketball","Football"];
export const raum = ["450","123","486","489","893","4889","789","534"];
export const Gebäude = ["A","B","C","D","E","F","G","H"];
export const Stadion = ["Köln Arena","Mercedes Arena","FC Stadion","Koloseum","Olympia Stadion","Südstadion"];
export const Konzerthallee = ["Köln Arena","Opern Haus","Alte Flora","Tanzbrunnen","Volksoper","Musical Dome"];
export const Hausnummer = ["50","12a","48","483","45-50"];
export const Straße = ["Ligusterweg","Am Berg","Landstraße","Hauptstraße"];
export const platz = ["5","3","153","48","15","158"];
export const Block = Gebäude;
export const Preis = ["5.00","15.40","9.99","89"];
export const Währung = ["€","$"]
export const Essen = ["Ravioli","Pizza","Döner","Spagetti","Gyros","Sushi"];
export const ArikelID = MatrkNr;
export const FlugID = MatrkNr;
export const KarID = MatrkNr;
export const EssNum = MatrkNr;
export const Hersteller = ["Apple","Samsung","LG","Xioami","Huawai","Microsoft","Acer","Bosh"];
export const Artikel = ["Schraubendreher","Smartphone","TV","Laptop"]
export const Resturant = ["MC","KFC","Krusty Burger","Pizzaria","Vapiano","Dönerman"]
export const AlbName = ["Thriller","Back in Black","Metallica","The Wall","Mama Mia"]
export const Künstler = ["Pink Floyd","Metallica","Michael Jackson","Abba"]
export const Track = ["Thriller","MamaMia","The Wall","Gimme Gimme","Beat It"]
export const Gründungsjahr = ["1992","1986","1980","2005","1993","1970"]
/***
 * TESTDATA
 */
export const a1 = ["a1"]
export const a21 = ["a2 0"]
export const a22 = ["a2 1"]
export const a3 = ["a3"]
export const pk3 = ["pk3_1","pk3_2","pk3_3","pk3_4","pk3_5","pk3_6"]

/**
 * Kombination
 *
 */


export const entity = [
    {
        "entityName":"Person",
        "pk":["MatrkNr","PersNr","BesNr"],
        "at":[["name"]],
        "atomar":[["name","vorname","name"]],
    },
    {
        "entityName":"Veranstaltung",
        "pk":["Vorlnr","Veransnr",],
        "at":[["Vorlesung","Veranstaltung"],["raum"]],
        "atomar":[[]]
    },
    {
        "entityName":"event",
        "pk":["konzNr","SpsNr"],
        "at":[["Konzert","Sportspiel"],["raum","platz"]],
        "atomar":[["platz","Block","platz"]]
    },
    {
        "entityName":"Ort",
        "pk":["Gebäude","Konzerthallee","Stadion"],
        "at":[["Straße"]],
        "atomar":[["Straße","Straße","Hausnummer"]]
    },
    { "entityName":"Artikel",
        "pk":["ArikelID","FlugID","KarID","EssNum"],
        "at":[["Artikel","Essen"],["Preis"]],
        "atomar":[["Preis","Preis","Währung"]]
    },
    {
        "entityName":"Hersteller",
        "pk":["HerstellerID","Gebäude","Konzerthallee","Stadion"],
        "at":[["Straße"]],
        "atomar":[["Straße","Straße","Hausnummer"]]
    },
    {
        "entityName":"Album",
        "pk":["CDID"],
        "at":[["AlbName"]],
        "atomar":[[]]
    },
    {
        "entityName":"Track",
        "pk":["Song-Nr"],
        "at":[["Track"]],
        "atomar":[[]]
    },
    {
        "entityName":"Musiker",
        "pk":["Künstler"],
        "at":[["Gründungsjahr"]],
        "atomar":[[]]
    },
    /**
     *  TEST ENTITYS
     */
    {
        "entityName":"e1",
        "pk":["pk1"],
        "at":[["a1"]],
        "atomar":[[]]
    },
    {
        "entityName":"e2",
        "pk":["pk2"],
        "at":[["a21"],["a22"]],
        "atomar":[[]]
    },
    {
        "entityName":"e3",
        "pk":["pk3"],
        "at":[["a3"]],
        "atomar":[[]]
    }

]

export const combination = [
  {
        "metaSchema":[["Person","Veranstaltung","Ort"],["Person","Artikel","Hersteller"]],
        "nnf":["pk1","a1","pk2","a2","pk3","a3"],
        "nf2":[["e1"],["pk1","pk2","a2 0"],["pk2","a2 1","pk3","a3"]],
        "nf3":[["e1"],["pk1","pk2","a2 0"],["pk2","a2 1","pk3"],["e3"]],
        "bcnf":[["e1"],["pk1","pk2"],["pk2","a2 1","pk3"],["pk2","a2 0"],["e3"]],
        "nf2solution":[["pk1","a1"],["pk2","a2","pk3","a3"]],
        "bcnfsolution":["pk2","a2 0"]
    },
   {
        "metaSchema":[["Person","event","Ort"]],
        "nnf":["pk1","a1","pk2","a2","pk3","a3"],
        "nf2":[["e1"],["pk1","pk2","a2 0","a2 1"],["pk2","pk3","a3"]],
        "nf3":[["e1"],["pk1","pk2","a2 0","a2 1"],["pk2","pk3"],["e3"]],
        "bcnf":[["e1"],["pk1","pk2","a2 1"],["pk2","pk3"],["pk2","a2 0"],["e3"]],
        //LÖSUNGEN
        "nf2solution":[["pk1","a1"],["pk2","a2","pk3","a3"]],
        "bcnfsolution":["pk2","a2 0"]
    }  ,
   {
        "metaSchema":[["Album","Track","Musiker"]],
        "nnf":["pk1","a1","pk2","a2","pk3","a3"],
        "nf2":[["e1"],["pk1","pk2"],["pk2","a2","pk3","a3"]],
        "nf3":[["e1"],["pk1","pk2"],["pk2","a2","pk3"],["e3"]],
        "bcnf":[["e1"],["pk1","pk2"],["pk2","a2","pk3"],["e3"]],
        "nf2solution":[["pk1","a1"],["pk2","a2","pk3","a3"]],
        "bcnfsolution":[]

    }
]





