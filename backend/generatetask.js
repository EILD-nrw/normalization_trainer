let combination;
let combEntityObjs=[];
let schema;
let db;
let entityArr;
let nnf,nf2,nf3;
let bcnf;
let pk1=[],a1=[],
    pk2=[],a2=[],
    pk3=[],a3=[],
    tpk2=[],ta2=[];

let e1=[pk1,a1],e2=[pk2,a2],e3=[pk3,a3]
let te2=[tpk2,ta2]
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
   // console.table(e1)
   // console.table(e2)
   // console.table(e3)
    //console.table(METAarr)
    await createNNF();
    await createN1();
    await createN2();
    await createN3();
    await createBCN();

}

const createEntitys =  async ()=> {
    await createFirstEntity();
   // await createEntity();
    await createSecondEntity();
    await createThirdEntity();
    await createMETA();
    //onsole.log(METAarr)
}


/***
 * TESTING
 */
const createEntity = () => {

    let aCount=0;

    let randRowNum = minMaxRand(4,7);
    for(let i=0;i<randRowNum+1;i++){
        if(i==0)
            tpk2[i] = combEntityObjs[1]["pk"][rand(combEntityObjs[1]["pk"].length)];
        else
            //console.log(pk1[0])
            tpk2[i] = getData(tpk2[0]);
    }

    for(let i=0;i<randRowNum+1;i++){
        ta2[i]=[]

        if(i==0) {
            combEntityObjs[1]["at"].forEach((atObject) => {
                let selectAtt = atObject[rand(atObject.length)]
                combEntityObjs[1]["atomar"].forEach((atomar)=>{
                    if(atomar[0]==selectAtt){
                        ta2[i][aCount]=[];
                        ta2[i][aCount][0]=atomar[0];
                        ta2[i][aCount][1]=atomar[1]
                        ta2[i][aCount][2]=atomar[2]
                    }else{
                        ta2[i][aCount]=selectAtt;
                    }
                })
                aCount++;
            })
        }else{
            ta2[0].forEach((col)=>{
                console.log(col)
               if(Array.isArray(col)) {
                   ta2[i][aCount]=[];
                   ta2[i][aCount][1]=getData(col[1]);
                   ta2[i][aCount][2]=getData(col[2]);
                   ta2[i][aCount][0]=ta2[i][aCount][1]+" "+ta2[i][aCount][2];
               }else{
                 ta2[i][aCount]=getData(col);
               }
                aCount++;
            })

        }
        aCount=0;
    }

    console.table(te2);
}
/**
 *
 */

/**
 * Create and Fill Entitys
 */
const createFirstEntity = ()=>{

    let aCount=0;

    let randRowNum = minMaxRand(4,7);
    for(let i=0;i<randRowNum+1;i++){
        if(i==0)
            pk1[i] = combEntityObjs[0]["pk"][rand(combEntityObjs[0]["pk"].length)];
        else
            //console.log(pk1[0])
            pk1[i] = getData(pk1[0]);
    }

    for(let i=0;i<randRowNum+1;i++){
        a1[i]=[]

        if(i==0) {
            combEntityObjs[0]["at"].forEach((atObject) => {
                let selectAtt = atObject[rand(atObject.length)]
                combEntityObjs[0]["atomar"].forEach((atomar)=>{
                    if(atomar[0]==selectAtt  && rand(3)==0){
                        a1[i][aCount]=[];
                        a1[i][aCount][0]=atomar[0];
                        a1[i][aCount][1]=atomar[1]
                        a1[i][aCount][2]=atomar[2]
                    }else{
                        a1[i][aCount]=selectAtt;
                    }
                })
                aCount++;
            })
        }else{
            a1[0].forEach((col)=>{
                if(Array.isArray(col)) {
                    a1[i][aCount]=[];
                    a1[i][aCount][1]=getData(col[1]);
                    a1[i][aCount][2]=getData(col[2]);
                    a1[i][aCount][0]=a1[i][aCount][1]+" "+a1[i][aCount][2];
                }else{
                    a1[i][aCount]=getData(col);
                }
                aCount++;
            })

        }
        aCount=0;
    }


}
const createSecondEntity = ()=>{

    let aCount=0;

    let randRowNum = minMaxRand(4,7);
    for(let i=0;i<randRowNum+1;i++){
        if(i==0)
            pk2[i] = combEntityObjs[1]["pk"][rand(combEntityObjs[1]["pk"].length)];
        else
            //console.log(pk1[0])
            pk2[i] = getData(pk2[0]);
    }

    for(let i=0;i<randRowNum+1;i++){
        a2[i]=[]

        if(i==0) {
            combEntityObjs[1]["at"].forEach((atObject) => {
                let selectAtt = atObject[rand(atObject.length)]
                combEntityObjs[1]["atomar"].forEach((atomar)=>{
                    if(atomar[0]==selectAtt  && rand(3)==0){
                        a2[i][aCount]=[];
                        a2[i][aCount][0]=atomar[0];
                        a2[i][aCount][1]=atomar[1]
                        a2[i][aCount][2]=atomar[2]
                    }else{
                        a2[i][aCount]=selectAtt;
                    }
                })
                aCount++;
            })
        }else{
            a2[0].forEach((col)=>{
                if(Array.isArray(col)) {
                    a2[i][aCount]=[];
                    a2[i][aCount][1]=getData(col[1]);
                    a2[i][aCount][2]=getData(col[2]);
                    a2[i][aCount][0]=a2[i][aCount][1]+" "+a2[i][aCount][2];
                }else{
                    a2[i][aCount]=getData(col);
                }
                aCount++;
            })

        }
        aCount=0;
    }

}
const createThirdEntity = ()=>{

    let aCount=0;
    let randRowNum = minMaxRand(4,7);
    for(let i=0;i<randRowNum+1;i++){
        if(i==0)
            pk3[i] = combEntityObjs[2]["pk"][rand(combEntityObjs[2]["pk"].length)];
        else
            //console.log(pk1[0])
            pk3[i] = getData(pk3[0]);
    }
    for(let i=0;i<randRowNum+1;i++){
        a3[i]=[]

        if(i==0) {
            combEntityObjs[2]["at"].forEach((atObject) => {
                let selectAtt = atObject[rand(atObject.length)]
                combEntityObjs[2]["atomar"].forEach((atomar)=>{
                    if(atomar[0]==selectAtt  && rand(3)==0){
                        a3[i][aCount]=[];
                        a3[i][aCount][0]=atomar[0];
                        a3[i][aCount][1]=atomar[1]
                        a3[i][aCount][2]=atomar[2]
                    }else{
                        a3[i][aCount]=selectAtt;
                    }
                })
                aCount++;
            })
        }else{
            a3[0].forEach((col)=>{
                if(Array.isArray(col)) {
                    a3[i][aCount]=[];
                    a3[i][aCount][1]=getData(col[1]);
                    a3[i][aCount][2]=getData(col[2]);
                    a3[i][aCount][0]=a3[i][aCount][1]+" "+a3[i][aCount][2];
                }else{
                    a3[i][aCount]=getData(col);
                }
                aCount++;
            })

        }
        aCount=0;
    }



}
/**
 * Create META ARRY
 */
const createMETA = () => {
        for(let i=0;i<7;i++){
            METAarr[i]=[]
            nnf.forEach((col,index)=>{
                if(i==0){
                    METAarr[i][index]=eval(col)[0];
                }else{
                    METAarr[i][index]=eval(col)[minMaxRand(1,eval(col).length)]
                }
            })
        }
}

/**
 * Create NormalForm Arrays
 */
const createNNF = () => {
    let colIndex=0;
    let tempArr=[];

    METAarr.forEach((row,rowIndex)=>{
       // console.log(row)
        tempArr[rowIndex]=[]
        row.forEach((col)=>{
            if(Array.isArray(col)){
                col.forEach((atArr)=>{
                    if(Array.isArray(atArr))
                       tempArr[rowIndex][colIndex] = atArr[0]
                    else
                        tempArr[rowIndex][colIndex] = atArr;
                    colIndex++;
                })
            }else {
                tempArr[rowIndex][colIndex] =col;
            }
            colIndex++;
        })

        colIndex=0;
    })

    taskArr[0]=[]
    taskArr[0][0]=tempArr;
}
const createN1 = () => {

    let colIndex=0;
    let tempArr=[]

    METAarr.forEach((row,rowIndex)=>{
        tempArr[rowIndex]=[]
        row.forEach((col)=>{
            if(Array.isArray(col)){
                col.forEach((atArr)=>{
                    if(Array.isArray(atArr)) {
                        tempArr[rowIndex][colIndex] = atArr[1]
                        colIndex++
                        tempArr[rowIndex][colIndex] = atArr[2]
                    }
                    else
                        tempArr[rowIndex][colIndex] = atArr;

                    colIndex++;
                })
            }else {
                tempArr[rowIndex][colIndex] = col;
            }
            colIndex++;
        })

        colIndex=0;
    })

    taskArr[1]=[]
    taskArr[1][0]=tempArr;





}
const createN2 = () => {


    taskArr[2]=[]
    let colCounter =0;
    a2Count = 0;

    nf2.forEach((tables,eIndex)=>{
        let tempArray = []

        if(tables[0]=="e1"||tables[0]=="e2"||tables[0]=="e3"){
            //Iteriert durch die Entity
            let size = eval(tables[0])[0].length
            for(let i=0;i<size;i++){
                tempArray[i]=[]
                eval(tables[0]).forEach((col,index)=>{
                    tempArray[i][index]=col[i];
                })
            }
        }else{
            for(let i=0;i<METAarr.length;i++){
                tempArray[i]=[]
                tables.forEach((att,aindex)=>{
                    if(att.includes("a2")){
                        let aArr = att.split(" ");
                        let atIndex = nnf.indexOf(aArr[0])
                        tempArray[i][aindex]=METAarr[i][atIndex][aArr[1]];

                    }
                    else{
                        let atIndex = nnf.indexOf(att)
                        tempArray[i][aindex]=METAarr[i][atIndex]

                    }
                })
            }

        }

        taskArr[2][eIndex]=tempArray;
    })

}
const createN3 = ()=>{

    taskArr[3]=[]
    let colCounter =0;
    a2Count = 0;

    nf3.forEach((tables,eIndex)=>{
        let tempArray = []

        if(tables[0]=="e1"||tables[0]=="e2"||tables[0]=="e3"){
            //Iteriert durch die Entity
            let size = eval(tables[0])[0].length
            for(let i=0;i<size;i++){
                tempArray[i]=[]
                eval(tables[0]).forEach((col,index)=>{
                    tempArray[i][index]=col[i];
                })
            }
        }else{
            for(let i=0;i<METAarr.length;i++){
                tempArray[i]=[]
                tables.forEach((att,aindex)=>{
                    if(att.includes("a2")){
                        let aArr = att.split(" ");
                        let atIndex = nnf.indexOf(aArr[0])
                        tempArray[i][aindex]=METAarr[i][atIndex][aArr[1]];

                    }
                    else{
                        let atIndex = nnf.indexOf(att)
                        tempArray[i][aindex]=METAarr[i][atIndex]

                    }
                })
            }

        }

        taskArr[3][eIndex]=tempArray;
    })

}

const createBCN = ()=>{

    taskArr[4]=[]
    let colCounter =0;
    a2Count = 0;

    bcnf.forEach((tables,eIndex)=>{
        let tempArray = []

        if(tables[0]=="e1"||tables[0]=="e2"||tables[0]=="e3"){
            //Iteriert durch die Entity
            let size = eval(tables[0])[0].length
            for(let i=0;i<size;i++){
                tempArray[i]=[]
                eval(tables[0]).forEach((col,index)=>{
                    tempArray[i][index]=col[i];
                })
            }
        }else{
            for(let i=0;i<METAarr.length;i++){
                tempArray[i]=[]
                tables.forEach((att,aindex)=>{
                    if(att.includes("a2")){
                        let aArr = att.split(" ");
                        let atIndex = nnf.indexOf(aArr[0])
                        tempArray[i][aindex]=METAarr[i][atIndex][aArr[1]];

                    }
                    else{
                        let atIndex = nnf.indexOf(att)
                        tempArray[i][aindex]=METAarr[i][atIndex]

                    }
                })
            }

        }

        taskArr[4][eIndex]=tempArray;
    })

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