let solution_arr;
let atomar_arr;
let functional_err;
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
    functional_err = database.functional;


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

function findDuplicates(value, index, self)
{
    return self.indexOf(value) != index;
}

const nf2_redunance = (count) => {

    let temp_arr = [];
    let table_header = db['1nnf'];



    for(let i=0;i<count;i++)
        temp_arr.push(svg.getElementById('text'+i).textContent)

    let duplicates = temp_arr.filter(findDuplicates)


    //Markt all duplicated
    for(let i=0;i<count;i++) {
        solution_arr[i]=0;
        let cell = svg.getElementById('text' + i).textContent
            duplicates.forEach((item)=>{
                if(item == cell) {
                        solution_arr[i] = 1;
                    }


            })
    }









}
const nf2_functional = (count) => {}
const nf3_transitiv = (count) => {}
