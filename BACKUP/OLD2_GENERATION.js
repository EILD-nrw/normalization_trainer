let db;
let entity_arr;
let comb_arr=[];
let METArr=[];

let atomarObj;
let transitivObj;

let taskarr;


let pk1=[],a1=[],pk2=[],a2=[],at1=[],at2=[],ta1=[],ta2=[]


const generade = async () => {

    METArr = []
    taskarr = []
    rowNum=7;
    entity_arr = db["entitys"]
    await getEntitys();
    //console.log(comb_arr)
    await getAtomar();
    //console.log(atomarObj)
    await getTransitiv();
    await fillMeta();
    await getDatatoMeta();
    await nf3();
    await nf2();
    await nf1();
    await nnf();
    console.table(METArr)
}

const fillMeta = ()=>{
    pk1=comb_arr[0]["pk"]
    a1=comb_arr[0]["attributs"][rand(comb_arr[0]["attributs"])]
    pk2=comb_arr[1]["pk"]
    a2=comb_arr[1]["attributs"][rand(comb_arr[1]["attributs"])]
    at1=atomarObj[0][1]
    at2=atomarObj[0][2]
    ta1=transitivObj[0][0]
    ta2=transitivObj[0][1]
}

const getDatatoMeta = ()=>{

    METArr[0] = []
    METArr[0] = [pk1,a1,pk2,a2,at1,at2,ta1,ta2]
    console.log(METArr[0])

    for(let i = 1;i<rowNum;i++){
        METArr[i]=[]
        let tmpcount =0;
        METArr[0].forEach((typ)=>{
            console.log(typ)
            METArr[i][tmpcount]=getData(typ)
            tmpcount++;
        })
    }

}

const nnf=()=> {

    taskarr[0]=[]
    taskarr[0][0]=METArr


}
const nf1=()=>{

}
const nf2=()=>{}
const nf3=()=>{}

const getGeneradeExample = (database)=>{

    db=database;
    generade();
    return taskarr;

}

const getData = (attType)=>{

    let list = db[attType];
    console.log(list)
    return list[rand(list)];
}

const getTransitiv = ()=>{

    let getTranList = db["trans"];
    let possibleList=[];
    transitivObj=null

    console.log(getTranList)
    comb_arr.forEach((entity)=>{
        entity["attributs"].forEach((item)=>{
            getTranList.forEach((chT)=>{
                chT.forEach((chTatt)=>{
                    if(chTatt==item){

                        possibleList.push([chT,entity.entityname])
                    }
                })
            })
        })
    })

    transitivObj = possibleList[rand(possibleList)]




}
const getAtomar = () =>{
    allAtomar = []
    let atoArr = []
    //Get ALL ATOMAR
    comb_arr.forEach((ent)=>{
        ent["atomar"].forEach((ato)=>{
            allAtomar.push([ato,ent.entityname])
        })
    })
    //Select One Atomar
    atomarObj = allAtomar[rand(allAtomar)]

}
const getEntitys = () => {


    let res = rand(db["combination"]);
    let comb = db["combination"]
    let temparr = [comb[res]["e1"],comb[res]["e2"]]

    temparr.forEach((e)=>{
        entity_arr.forEach((ae)=>{
            if(e==ae["entityname"])
                comb_arr.push(ae)
        })
    })



}




/**
 * HELP FUNCTIONS
 */

const rand = (max) => {
    return Math.floor(Math.random()*max.length);
}