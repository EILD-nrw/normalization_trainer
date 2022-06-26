let combination;
let combEntityObjs=[];
let schema;
let db;
let relationArr = []
let entityArr;
let nnf;
let nf1;
let nf2;
let nf3;
let bcnf;
let pk1=[],a1=[],
    pk2=[],a2=[],
    pk3=[],a3=[];
let e1=[pk1,a1],e2=[pk2,a2],e3=[pk3,a3]
let taskArr = []


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
    nf1 = combination["nnf"];
    nf2 = combination["nf2"];
    nf3 = combination["nf3"];
    bcnf = combination["bcnf"];
    entityArr = db["entity"]
    //console.log(combination)
    schema = combination["metaSchema"]
    //console.log(schema)
    //console.log(entityArr)
    await getEntity();
   // console.log(combEntityObjs)
    await createEntitys ();
    await fillNFF();
    await fill1NF();

}

const createEntitys =  ()=> {
    createFirstEntity();
    createSecondEntity();
    createThirdEntity();
}

const createFirstEntity = ()=>{

    //Create Header
    pk1[0] = combEntityObjs[0]["pk"][rand(combEntityObjs[0]["pk"].length)];
    let attCount=0
    combEntityObjs[0]["at"].forEach((att)=>{
            a1[attCount]=[]
            let selectAtt = att[rand(att.length)]
            combEntityObjs[0]["atomar"].forEach((atomar)=>{
                if(selectAtt==atomar[0]){
                    a1[attCount][0]=atomar
                }
                else{
                   a1[attCount][0]= selectAtt;
                }
            })
        attCount++;
    })
}
const createSecondEntity = ()=>{

    pk2[0] = combEntityObjs[1]["pk"][rand(combEntityObjs[1]["pk"].length)];
    let attCount=0
    combEntityObjs[1]["at"].forEach((att)=>{
        a2[attCount]=[]
        let selectAtt = att[rand(att.length)]
        combEntityObjs[1]["atomar"].forEach((atomar)=>{
            if(selectAtt==atomar[0] && rand(1)==0){

                a2[attCount][0]=atomar
            }
            else{
                a2[attCount][0]= selectAtt;
            }

        })
        attCount++;
    })

}
const createThirdEntity = ()=>{

    pk3[0] = combEntityObjs[2]["pk"][rand(combEntityObjs[2]["pk"].length)];
    let attCount=0
    combEntityObjs[2]["at"].forEach((att)=>{
        a3[attCount]=[]
        let selectAtt = att[rand(att.length)]
        combEntityObjs[2]["atomar"].forEach((atomar)=>{
            if(selectAtt==atomar[0] && rand(3) == 0){
                a3[attCount][0]=atomar
            }
            else{
                a3[attCount][0]= selectAtt;
            }
        })
        attCount++;
    })


}

const fillNFF=()=>{

    //bei Atomaren Elementen Pos 0 Verwendet
    //Row 0: Header
    //Roe 1+: Data
    let tempArr=[]

    for(let i=0;i<7;i++){
        tempArr[i]=[]
       //Iteriert jedes Atribut ab
       nnf.forEach((atobj,index)=>{
           eval(atobj).forEach((att)=>{
               //Iterriert jedes Atribut im a1 Array
               if(Array.isArray(att)){
                   //Gibt den 0 Wert eines Atomaren Attributes aus
                    if(Array.isArray(att[0])){
                        let atomarat = att[0];
                        tempArr[i][index]=atomarat[0]
                    }
                    else{
                        tempArr[i][index]=att[0]
                    }
               }
               else{
                   tempArr[i][index]=att;
               }
           })
       })

        taskArr[0]=[]
        taskArr[0][0]=tempArr;
    }
}
const fill1NF=()=>{
    let col=0;

    let tempArr=[]

    for(let i=0;i<7;i++){
        tempArr[i]=[]
        //Iteriert jedes Atribut ab
        nnf.forEach((atobj)=>{
            eval(atobj).forEach((att)=>{
                //Iterriert jedes Atribut im a1 Array
                if(Array.isArray(att)){
                    //Gibt den 0 Wert eines Atomaren Attributes aus
                    if(Array.isArray(att[0])){
                        let atomarat = att[0];
                        tempArr[i][col]=atomarat[1]
                        col++;
                        tempArr[i][col]=atomarat[2]
                    }
                    else{
                        tempArr[i][col]=att[0]
                    }
                }
                else{
                    tempArr[i][col]=att;
                }
            })
            col++;
        })

       col=0;
    }


    console.table(tempArr)
    taskArr[1]=[]
    taskArr[1][0]=tempArr;



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
