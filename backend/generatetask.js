let combination;
let combEntityObjs=[];
let schema;
let db;
let entityArr;
let nnf,nf2,nf3;
let bcnf;
let pk1=[],a1=[],
    pk2=[],a2=[],
    pk3=[],a3=[];
let e1=[pk1,a1],e2=[pk2,a2],e3=[pk3,a3]
let taskArr = []
/**METAarr ist grundlegen für die benötigten zwischen Tabellen bzw NNF und NF1
Tabelle ohne Redundanczen ist die e1,e2,e3 Array bzw. die einzelnen Entitys
NNF Pattern bildet die Meta Ebende mit aufgeteilten Attributen aus denn Entiteys
Atomare Attribute werden !!NICHT!! aufgeteilt
 */

let METAarr = []


/**
 *
 * @type {*[]}
 *  Define the Attributs of a Releasion
 *  pk = The PrimaryKey of an Entity
 *  a = the Attributs of an Entity
 *  pk3 = in an transitiv Obj of Attribut of an Other Relaion
 *  every a can be an nonAttomar Atribut
 */

const generade = async ()=>{

    combination = db["combination"][rand(db["combination"].length)]
    nnf = combination["nnf"];
    nf2 = combination["nf2"];
    nf3 = combination["nf3"];
    bcnf = combination["bcnf"];
    entityArr = db["entity"]
    //console.log(combination)
    schema = combination["metaSchema"][rand(combination["metaSchema"].length)]
    await getEntity();
    //console.log(combEntityObjs)
    await createEntitys ();
    //console.log(e1)
    //console.log(e2)
    //console.log(e3)


}

const createEntitys =  async ()=> {
    await createFirstEntity();
    await createSecondEntity();
    await createThirdEntity();
    await createMETA();

}

const createFirstEntity = ()=>{

    let randRowNum = minMaxRand(3,5);
    //console.log(randRowNum);
    //PrimaryKey
    for(let i=0;i<randRowNum;i++){
        if(i==0)
            pk1[i] = combEntityObjs[0]["pk"][rand(combEntityObjs[1]["pk"].length)];
        else
            //console.log(pk1[0])
            pk1[i] = getData(pk1[0]);
    }

    let attCount=0;
    combEntityObjs[0]["at"].forEach((attObject)=>{
        a1[attCount]=[];
        let selectAtt = attObject[rand(attObject.length)]
        combEntityObjs[0]["atomar"].forEach((atomar)=>{
            if(selectAtt==atomar[0]){
                for(let i=0;i<randRowNum+1;i++){
                    a1[attCount][i]=[]
                    if(i==0){
                        a1[attCount][i][0]=atomar[0]
                        a1[attCount][i][1]=atomar[1]
                        a1[attCount][i][2]=atomar[2]
                    }
                    else{
                        a1[attCount][i][1]=getData(atomar[1])
                        a1[attCount][i][2]=getData(atomar[2])
                        a1[attCount][i][0]=a1[attCount][i][1]+" "+a1[attCount][i][2];
                    }
                }

            }else{
                for(let i=0;i<randRowNum+1;i++){
                    if(i==0)
                        a1[attCount][i]=selectAtt;
                    else
                        a1[attCount][i]=getData(selectAtt)
                }
            }
        })
        attCount++;
    })


}
const createSecondEntity = ()=>{

    let randRowNum = minMaxRand(3,5);
    //console.log(randRowNum);
    //PrimaryKey
    for(let i=0;i<randRowNum;i++){
        if(i==0)
            pk2[i] = combEntityObjs[1]["pk"][rand(combEntityObjs[1]["pk"].length)];
        else
            //console.log(pk1[0])
            pk2[i] = getData(pk2[0]);
    }

    let attCount=0;
    combEntityObjs[1]["at"].forEach((attObject)=>{
        a2[attCount]=[];
        let selectAtt = attObject[rand(attObject.length)]
        combEntityObjs[1]["atomar"].forEach((atomar)=>{
            if(selectAtt==atomar[0] && rand(3)==0){
                for(let i=0;i<randRowNum+1;i++){
                    a2[attCount][i]=[]
                    if(i==0){
                        a2[attCount][i][0]=atomar[0]
                        a2[attCount][i][1]=atomar[1]
                        a2[attCount][i][2]=atomar[2]
                    }
                    else{
                        a2[attCount][i][1]=getData(atomar[1])
                        a2[attCount][i][2]=getData(atomar[2])
                        a2[attCount][i][0]=a2[attCount][i][1]+" "+a2[attCount][i][2];
                    }
                }

            }else{
                for(let i=0;i<randRowNum+1;i++){
                    if(i==0)
                        a2[attCount][i]=selectAtt;
                    else
                        a2[attCount][i]=getData(selectAtt)
                }
            }
        })
        attCount++;
    })


}
const createThirdEntity = ()=>{

    let randRowNum = minMaxRand(3,5);
    //console.log(randRowNum);
    //PrimaryKey
    for(let i=0;i<randRowNum;i++){
        if(i==0)
            pk3[i] = combEntityObjs[2]["pk"][rand(combEntityObjs[2]["pk"].length)];
        else
            //console.log(pk1[0])
            pk3[i] = getData(pk2[0]);
    }

    let attCount=0;
    combEntityObjs[2]["at"].forEach((attObject)=>{
        a3[attCount]=[];
        let selectAtt = attObject[rand(attObject.length)]
        combEntityObjs[2]["atomar"].forEach((atomar)=>{
            if(selectAtt==atomar[0] && rand(3)==0){
                for(let i=0;i<randRowNum+1;i++){
                    a3[attCount][i]=[]
                    if(i==0){
                        a3[attCount][i][0]=atomar[0]
                        a3[attCount][i][1]=atomar[1]
                        a3[attCount][i][2]=atomar[2]
                    }
                    else{
                        a3[attCount][i][1]=getData(atomar[1])
                        a3[attCount][i][2]=getData(atomar[2])
                        a3[attCount][i][0]=a3[attCount][i][1]+" "+a3[attCount][i][2];
                    }
                }

            }else{
                for(let i=0;i<randRowNum+1;i++){
                    if(i==0)
                        a3[attCount][i]=selectAtt;
                    else
                        a3[attCount][i]=getData(selectAtt)
                }
            }
        })
    })



}

const createMETA = () => {

    /** iteriere NNF Pattern */
    METAarr = []
    let col=0;
    for (let i = 0; i < 7; i++) {
        METAarr[i] = []
        nnf.forEach((phead) => {
            if(phead == "a1" || phead == "a2" || phead == "a3") {
                eval(phead).forEach((att)=>{
                    if(i==0)
                        METAarr[i][col]=att[i];
                    else
                        METAarr[i][col]=att[minMaxRand(1,att.length)]
                    col++;
                })
            }
            else {
                if(i==0)
                    METAarr[i][col] = eval(phead)[i]
                else
                    METAarr[i][col] = eval(phead)[minMaxRand(1,eval(phead).length)]
                col++;
            }
        })
        col=0;
    }
    console.table(METAarr)
    taskArr[0]=[]
    taskArr[0][0]=METAarr

}

const getEntity = ()=>{
    entityArr.forEach((entity)=>{
        schema.forEach((schemaEntity)=>{
            if(entity["entityName"]==schemaEntity)
                combEntityObjs.push(entity);
        })
    })



}

const getGeneradeExample = (database)=> {

    db = database;
    generade();
    return taskArr;


}



/**
 * HELP FUNCTIONS
 */

const rand = (max) => {
    return Math.floor(Math.random()*max);
}

const minMaxRand = (vmin,vmax)=>{
    return Math.floor(Math.random()*(vmax-vmin))+vmin;
}

const get_example = () => {

    let test_example =  []
    let nnf =[
        ["persID", "lastName", "VorlID", "lecture", "rooms", "street"],
        ["13478", "Diloo", "1238", "Datenbanken", "B 431", "Am Schwimmbad"],
        ["13478", "Diloo", "1153", "Englisch I", "D 123", "Blechhammer"],
        ["12481", "Wilke", "1352", "Analysis", "C 231", "Blechhammer"],
        ["12496", "Schmidt", "1543", "Systemanalyse", "B 23", "Am Schwimmbad"],
        ["13477", "Grau", "1238", "Datenbanken", "B 431", "Am Schwimmbad"],
        ["13477", "Grau", "1352", "Analysis", "C 231", "Blechhammer"],
        ["12462", "Schmidt", "1421", "WWS I", "C 250", "Blechhammer"]
    ];

    let nf1 = [
        ["persID", "lastName", "VorlID", "lecture", "buildings","rooms", "street"],
        ["13478", "Diloo", "1238", "Datenbanken", "B"," 431", "Am Schwimmbad"],
        ["13478", "Diloo", "1153", "Englisch I", "D"," 123", "Blechhammer"],
        ["12481", "Wilke", "1352", "Analysis", "C"," 231", "Blechhammer"],
        ["12496", "Schmidt", "1543", "Systemanalyse", "B"," 23", "Am Schwimmbad"],
        ["13477", "Grau", "1238", "Datenbanken", "B"," 431", "Am Schwimmbad"],
        ["13477", "Grau", "1352", "Analysis", "C"," 231", "Blechhammer"],
        ["12462", "Schmidt", "1421", "WWS I", "C"," 250", "Blechhammer"]
    ];

    let nf2_student = [
        ["lastName","Matrk"],
        ["Dilloo","13478"],
        ["Wike","12481"],
        ["Schmidth","12496"],
        ["Grau","13477"],
        ["Schmidt","12462"]
    ]
    let nf2_belegungsplan = [
        ["Matrk","Lv-Nr","Lehrveranstaltung"],
        ["13478","1238","Datenbanken"],
        ["13478","1153","English I"],
        ["12481","1352","Analysis"],
        ["12496","1543","Systemanalyse"],
        ["13477","1238","Datenbanken"],
        ["13477","1352","Analysis"],
        ["12462","1421","WWS I"]
    ]
    let nf2_lehrveranstalltung = [
        [ "VorlID", "buildings","rooms", "street"],
        ["1238", "B"," 431", "Am Schwimmbad"],
        ["1153", "D"," 123", "Blechhammer"],
        ["1352",  "C"," 231", "Blechhammer"],
        ["1543", "B"," 23", "Am Schwimmbad"],
        ["1421",  "C"," 250", "Blechhammer"]
    ]
    let nf3_student = [
        ["lastName","Matrk"],
        ["Dilloo","13478"],
        ["Wike","12481"],
        ["Schmidth","12496"],
        ["Grau","13477"],
        ["Schmidt","12462"]
    ]
    let nf3_belegungsplan = [
        ["Matrk","Lv-Nr","Lehrveranstaltung"],
        ["13478","1238","Datenbanken"],
        ["13478","1153","English I"],
        ["12481","1352","Analysis"],
        ["12496","1543","Systemanalyse"],
        ["13477","1238","Datenbanken"],
        ["13477","1352","Analysis"],
        ["12462","1421","WWS I"]
    ]
    let nf3_lehrveranstalltung = [
        [ "VorlID", "buildings","rooms"],
        ["1238", "B"," 431"],
        ["1153", "D"," 123"],
        ["1352",  "C"," 231"],
        ["1543", "B"," 23"],
        ["1421",  "C"," 250"]
    ]
    let nf3_gebauede = [
        [ "buildings", "street"],
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

const getData = (attType)=>{
    let list = db[attType];
    return list[rand(list.length)];
}