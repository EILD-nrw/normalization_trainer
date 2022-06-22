let db;
let entity_arr;
let comb_arr=[];
let METArr;

let atomarObj;
let transitivObj;

let rowNum=7;
let colNum=7;


let cnf1=["pk1","a1","pk2","a2","at","ta"];
let cnf2=[["pk1","a1"],["pk1","pk2"],["pk2","a2","t2"]]
let cnf3=[["pk1","a1"],["pk1","pk2"],["pk2","a2"],["ta1","ta2"]];



const generade = async () => {

    entity_arr =  db["entitys"];
    await getEntitys();
    console.log(comb_arr)
    await getAtomar();
    console.log(atomarObj)
    await getTransitiv();
    console.log(transitivObj)
    await nf3();
    await nf2();
    await nf1();
    await nnf();


}

const nnf=()=> {}
const nf1=()=>{





}
const nf2=()=>{}
const nf3=()=>{






}

const createMETAArr = ()=>{}



const getGeneradeExample = (database)=>{

    db=database;
    generade();
    return taskArr;

}

const getData = (attType)=>{

    console.log(attType)
    let list = db[attType];
    console.log(list)

    return data;
}


const getTransitiv = ()=>{

    let getTranList = db["trans"];
    let possibleList=[];
    transitivObj=null

    comb_arr.forEach((entity)=>{
        entity["attributs"].forEach((item)=>{
            getTranList.forEach((chT)=>{
              chT.forEach((chTatt)=>{
                    if(chTatt==item){
                        possibleList.push(chT)
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
                allAtomar.push(ato)
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