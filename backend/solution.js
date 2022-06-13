const check_solution = () =>{

}

const task_solution = (solution) =>{

    let count = 0;
    solution.forEach((row)=>{
        row.forEach((col)=>{
                let cell = svg.getElementById('rect'+count);
                if(col==1)
                    cell.setAttribute('fill','lightgreen');
                count++;
        })
    })
}