let solution_arr;
let atomar_arr;
let functional_arr;
let db;


const check_solution = (database,phrase_nr,user_solution) =>{




    let isCorrect = true;
    createSolution(database,phrase_nr);
    for(let i=0;i<user_solution.length;i++){
        if(user_solution[i]!=solution_arr[i])
            isCorrect=false;
    }
    alert(isCorrect)



}

const createSolution = (database,phrase_nr) => {

    solution_arr = null;
    solution_arr = [];
    db = database;
    atomar_arr = database.atomar;
    functional_arr = database.functional;


    switch(phrase_nr-1) {
        case 0:
            nf1(count);
            break;
        case 1:
            nf2_redunance(count);
            break;
        case 2:
            nf2_functional(count);
            break;
        case 3:
            nf3_transitiv(count);

    }

}

const show_solution = (database,phrase_nr) =>{

    createSolution(database,phrase_nr);
    solution_arr.forEach((f_cell,index)=>{
        let cell = svg.getElementById('rect'+index);
            if(f_cell==1)
                cell.setAttribute('fill','lightgreen');
    })



}


const nf1 = (count) => {


    for(let i=0;i<count;i++){
            let cell = svg.getElementById('text'+i);


            solution_arr[i]=0;
            atomar_arr.forEach((att)=> {
                console.log(att)
                if(att == cell.textContent)
                   solution_arr[i]=1;
            })
    }

}
//CHECK FOR REDUNDANCE IN 2NF
const findDuplicates = (value, index, self) =>{
    return self.indexOf(value) != index;
}

const checkDublicateIdIsEqual = (dup,table_arr,table_header) =>{

    let main_pk = db.start_pk;
    //Zu vergleichende Spalten
    let func_pk_arr = [];
    let db_func_arr = db.functional;


    let id = table_header.indexOf(main_pk);
    db_func_arr.forEach((col)=>{
        if(col.pk == main_pk){
            col.at.forEach((at)=>{
                func_pk_arr.push(table_header.indexOf(at))
            })
        }
    })

    func_pk_arr.forEach((col)=>{
        for(let i = 0;i<table_arr[col].length;i++)
        {
            dup.forEach((dup1)=>{
                if(table_arr[col][i]==dup1){
                    for(let j=i;j<table_arr[col].length;j++){
                        if(table_arr[col][j]==dup1){
                           if(table_arr[id][i]!=table_arr[id][j]){
                               dup = dup.filter(function (f) {return f !== dup1})
                           }
                        }
                    }
                }

            })
        }
    })


    console.log(dup);
    return dup;

}

const   nf2_redunance =  async (count) =>  {

    let temp_arr = [];
    let table_arr = [];

    let table_header = db['1nnf'];

    //create Mul-Array
    for(let i=0;i<table_header.length;i++)
        temp_arr[i]=[]

    for(let i=0;i<count;i++){
        let row = i%table_header.length;
        let content = svg.getElementById('text'+i).textContent
        temp_arr[row].push(content)
        table_arr.push(content)
    }


    let duplicate = table_arr.filter(findDuplicates)
    duplicate = checkDublicateIdIsEqual(duplicate,temp_arr,table_header)

    let tmp=0;
    table_arr.forEach((cell)=>{
        solution_arr[tmp]=0;
        duplicate.forEach((dup)=>{
            if(dup==cell){
                solution_arr[tmp]=1;
            }

        })
        tmp++;
    })



}
const nf2_functional = (count) => {}
const nf3_transitiv = (count) => {}
