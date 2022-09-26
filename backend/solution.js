let soltion_arr;
let atomar_arr;



const check_solution = async (phrase_nr,userMatrix) =>{
    let isCorrect = true;
    await createSolution(phrase_nr);

    if(phrase_nr!=3) {
        for (let i = 0; i < soltion_arr.length; i++) {
            if (userMatrix[i] != soltion_arr[i])
                isCorrect = false;
        }
    }else{
        for (let i = 0; i < soltion_arr.length; i++) {
           let temp;

        }

    }
    alert(isCorrect)

}

const createSolution = async (phrases_nr)=>{


    soltion_arr = null;
    soltion_arr = [];
    await getAtomarAttributs();

    switch(phrases_nr-1) {
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
            break;
        case 4:
            bcnf_check(count);
            break;
    }
}

const get_solution = async (phrases_nr)=>{

    await createSolution(phrases_nr);

    soltion_arr.forEach((f_cell,index)=>{
        let cell = svg.getElementById('rect'+index);
        if(f_cell==1){
            cell.setAttribute('fill','lightgreen');
        }
        if(f_cell==2){
            cell.setAttribute('fill','grey');
        }
    })





}

const nf1=(count)=>{

    METAarr.forEach((row,index)=>{
        row.forEach((cell)=>{
            if(index==0){
                if(Array.isArray(cell)){
                    cell.forEach((att)=>{
                        if(Array.isArray(att))
                            soltion_arr.push(1)
                        else
                            soltion_arr.push(0)
                    })
                }
                else{
                    soltion_arr.push(0);
                }
            }
        })

    })
}

const nf2_functional=(count)=>{

    let abstractNf2solution = combination["nf2solution"];
    let NF2Solution = []

    abstractNf2solution.forEach((funct,index)=>{
        NF2Solution[index]=[]
        funct.forEach((att)=>{
            //NF2Solution[index].push(eval(att)[0])
            if(Array.isArray(eval(att)[0])){
                eval(att)[0].forEach((atomar)=>{
                    if(Array.isArray(atomar)){
                        NF2Solution[index].push(atomar[1])
                        NF2Solution[index].push(atomar[2])
                    }
                    else {
                        NF2Solution[index].push(atomar)
                    }
                })
            }else{
                NF2Solution[index].push(eval(att)[0])
            }

        })
    })



    taskArr[1][0][0].forEach((Matt,Mindex)=>{
        NF2Solution.forEach((func,index)=>{
                func.forEach((att)=>{
                    if(att==Matt){
                        soltion_arr.push(index+1)
                    }
                })
        })

    })

}

const getAtomarAttributs = ()=>{

    atomar_arr=[]
    entityArr.forEach((entity)=>{
        schema.forEach((schemaEntity)=>{
            if(entity["entityName"]==schemaEntity){
                entity["atomar"].forEach((atomar)=>{
                    atomar_arr.push(atomar)
                })
            }
        })
    })



}

const nf3_transitiv=(count)=>{

    let trans=[eval("pk3")[0],eval("a3")[0]];
    let counter=0;

    taskArr[2].forEach((tabel)=>{
        tabel.forEach((row)=>{
            row.forEach((col)=>{
                      soltion_arr[counter]=0;
                      trans.forEach((att)=>{
                          if(att==col)
                              soltion_arr[counter]=1;
                      })
                      counter++;
            })
        })
    })

}

const bcnf_check = (count)=>{

    let abstbcnfsolution = combination["bcnfsolution"];
    let BCNFSolution=[]
    let counter=0;

    abstbcnfsolution.forEach((att)=>{
        if(att.includes("a2")){
            let aArr = att.split(" ");
            if(aArr.length>1) {
                let temp = eval(aArr[0]);
                BCNFSolution.push(temp[0][aArr[1]])
            }else{
                BCNFSolution.push(eval(att)[0])
            }
        }
        else{
            BCNFSolution.push(eval(att)[0])
        }

    })

    taskArr[3].forEach((tabel)=>{
        tabel.forEach((row)=>{
            row.forEach((col)=>{
                soltion_arr[counter]=0;
                BCNFSolution.forEach((att)=>{
                    if(att==col)
                        soltion_arr[counter]=1;
                })
                counter++;
            })
        })
    })




}
/*************************************************************/

//CHECK FOR REDUNDANCE IN 2NF
const findDuplicates = (value, index, self) =>{
    return self.indexOf(value) != index;
}

const nf2_redunance =  async (count) =>  {

    let getTableData = [];

    taskArr[1][0].forEach((row)=>{
      row.forEach((att)=>{
          getTableData.push(att)
      })
    })

    let duplicate = getTableData.filter(findDuplicates)
    console.log(duplicate)

    let tmp=0;
    getTableData.forEach((cell)=>{
        soltion_arr[tmp]=0;
        duplicate.forEach((dup)=>{
            if(dup==cell){
                soltion_arr[tmp]=1;
            }
        })
        tmp++;
    })


}

/*

 */