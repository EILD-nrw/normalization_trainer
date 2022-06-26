export const MatrkNr = ["1235","48934","1358","4896","48651","1562"];
export const PersNr = MatrkNr;
export const BesNr = MatrkNr;
export const Vorlnr = MatrkNr;
export const Veransnr = MatrkNr;
export const konzNr = MatrkNr;
export const SpsNr = MatrkNr;
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
export const nachname = ["Ruth","Jackson",
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
    "Wanda","Thomas"];
export const Vorlesung = ["Datenbanken","IT-Sicherheit","Netze","Mathematik","Weltherschaft"];
export const Veranstaltung = ["FIBU","Buchmesse","Gamescom","ComicCon","JavaLand","DOAG0"];
export const Konzert =  ["Billy Elish","Queen","ABBA","Elton John","Linking Park","Vincent Wise","Backstreet Boys"];
export const Sportspiel = ["Fußball","Dart","Feldhockey","Eishockey","Basketball","Football"];
export const raum = ["450","123","486","489","893","4889","789","534"];
export const Gebäude = ["A","B","C","D"];
export const Stadion = ["Köln Arena","Mercedes Arena","FC Stadion","Koloseum"];
export const Bühne = ["Open Air","Köln Arena","Opern Haus","Alte Flora","Tanzbrunnen"];
export const Hausnummer = ["50","12a","48","483","45-50"];
export const Straße = ["Ligusterweg","Am Berg","Landstraße","Hauptstraße"];


/**
 * Kombination
 *
 */
export const entity = [
    {
        "entityName":"Person",
        "pk":["MatrkNr","PersNr","BesNr"],
        "at":[["name","nachname"]],
        "atomar":[["name","vorname","nachname"]],

    },
    {
        "entityName":"Veranstaltung",
        "pk":["Vorlnr","Veransnr","konzNr","SpsNr"],
        "at":[["Vorlesung","Verasntaltung","Konzert","Sportspiel"],["raum","platz"]],
        "atomar":[["raum","Gebäude","raum"],["platz","Block","platz"]]
    },
    {
        "entityName":"Ort",
        "pk":["Gebäude","Konzerthallee","Stadion"],
        "at":[["Straße"]],
        "atomar":[["Straße","Straße","Hausnummer"]]
    }
]



export const combination = [
    {
        "metaSchema":["Person","Veranstaltung","Ort"],
        "nnf":["pk1","a1","pk2","a2","pk3","a3"],
        "nf2":[["pk1","a1"],["pk1","pk2","a2"],["pk2","a2","pk3","a3"]],
        "nf3":[["pk1","a1"],["pk1","pk2","a2"],["pk2","a2","pk3"],["pk3","a3"]],
        "nbc":[["pk1","a1"],["pk1","pk2"],["pk2","a2","pk3"],["pk3","a3"],["pk2","a2"]]
    }


]





