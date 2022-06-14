const generade = () => {

    console.log("TEST")

    /*TODO:: Beispiel von Database nehmen
             Beispiel mit daten füllen
             Beispiel bis zum BCNF Form füllen
             InCompakten Array Packen
     */

}
const rand = () => {}
const create_redundazce = () => {}

const get_example = () => {

    let test_example =  []
    let nnf =[
        ["persID", "name", "VorlID", "lecture", "rooms", "street"],
        ["13478", "Diloo", "1238", "Datenbank", "B 431", "Am Schwimmbad"],
        ["13478", "Diloo", "1153", "Englisch I", "D 123", "Blechhammer"],
        ["12481", "Wilke", "1352", "Analysis", "C 231", "Blechhammer"],
        ["12496", "Schmidt", "1543", "Systemanalyse", "B 23", "Am Schwimmbad"],
        ["13477", "Grau", "1238", "Datenbanken", "B 431", "Am Schwimmbad"],
        ["13477", "Grau", "1352", "Analysis", "C 231", "Blechhammer"],
        ["12462", "Schmidt", "1421", "WWS I", "C 250", "Blechhammer"]
    ];
    let nf1 = [
        ["persID", "name", "VorlID", "lecture", "gebäude","rooms", "street"],
        ["13478", "Diloo", "1238", "Datenbank", "B"," 431", "Am Schwimmbad"],
        ["13478", "Diloo", "1153", "Englisch I", "D"," 123", "Blechhammer"],
        ["12481", "Wilke", "1352", "Analysis", "C"," 231", "Blechhammer"],
        ["12496", "Schmidt", "1543", "Systemanalyse", "B"," 23", "Am Schwimmbad"],
        ["13477", "Grau", "1238", "Datenbanken", "B"," 431", "Am Schwimmbad"],
        ["13477", "Grau", "1352", "Analysis", "C"," 231", "Blechhammer"],
        ["12462", "Schmidt", "1421", "WWS I", "C"," 250", "Blechhammer"]
    ];
    let nf2_student = [
        ["Dilloo","13478"],
        ["Wike","12481"],
        ["Schmidth","12496"],
        ["Grau","13477"],
        ["Schmidt","12462"]
    ]
    let nf2_belegungsplan = [
        ["13478","1238","Datenbanken"],
        ["13478","1153","English I"],
        ["12481","1352","Analysis"],
        ["12496","1543","Systemanalyse"],
        ["13477","1238","Datenbanken"],
        ["13477","1352","Analysis"],
        ["12462","1421","WWS I"]
    ]
    let nf2_lehrveranstalltung = [
        [ "VorlID", "gebäude","rooms", "street"],
        ["1238", "B"," 431", "Am Schwimmbad"],
        ["1153", "D"," 123", "Blechhammer"],
        ["1352",  "C"," 231", "Blechhammer"],
        ["1543", "B"," 23", "Am Schwimmbad"],
        ["1421",  "C"," 250", "Blechhammer"]
    ]
    let nf3_student = [
        ["Dilloo","13478"],
        ["Wike","12481"],
        ["Schmidth","12496"],
        ["Grau","13477"],
        ["Schmidt","12462"]
    ]
    let nf3_belegungsplan = [
        ["13478","1238","Datenbanken"],
        ["13478","1153","English I"],
        ["12481","1352","Analysis"],
        ["12496","1543","Systemanalyse"],
        ["13477","1238","Datenbanken"],
        ["13477","1352","Analysis"],
        ["12462","1421","WWS I"]
    ]
    let nf3_lehrveranstalltung = [
        [ "VorlID", "gebäude","rooms", "street"],
        ["1238", "B"," 431", "Am Schwimmbad"],
        ["1153", "D"," 123", "Blechhammer"],
        ["1352",  "C"," 231", "Blechhammer"],
        ["1543", "B"," 23", "Am Schwimmbad"],
        ["1421",  "C"," 250", "Blechhammer"]
    ]
    let nf3_gebauede = [
        [ "gebäude", "street"],
        [ "B", "Am Schwimmbad"],
        [ "D", "Blechhammer"],
        [ "C", "Blechhammer"],
        ["B", "Am Schwimmbad"],
        ["C", "Blechhammer"]
    ]

    test_example[0] = [];
    test_example[0][0]=nnf;

    test_example[1] = []
    test_example[1][0]=nf1;

    test_example[2]=[]
    test_example[2][0]=nf2_student;
    test_example[2][1]=nf2_belegungsplan
    test_example[2][2]=nf2_lehrveranstalltung;

    test_example[3] = []
    test_example[3][0] = nf3_student
    test_example[3][1] = nf3_belegungsplan
    test_example[3][2] = nf3_lehrveranstalltung
    test_example[3][3] = nf3_gebauede

    return test_example;
}


