let num_of_rows = 7;
let entitys_database;
let combinationArr=[];
let combinationTables = 2;
let METAarr;
let taskarr;

const generade = async () => {

    console.log("GENERADE"+ entitys_database)
    console.log(entitys_database)
    await selectEntitys();
    await getHeader()
}
const getHeader = () => {

    taskarr[0]=[]



}

const getGeneradeExample = (database) => {

    taskarr = []
    entitys_database = database["entitys"];
    generade();



    return taskarr;
}



const selectEntitys = () =>{

    for(let i = 0;i<combinationTables;i++){
        combinationArr[i]=entitys_database[rand(entitys_database)]
    }

}

/**
 * HELP FUNCTIONS
 */

const rand = (max) => {
    return Math.floor(Math.random()*max.length);
}