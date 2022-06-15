
let count = 0; //Counter for id
let width = 100;
let height = 30;
let x_pos = 5;
let y_pos = 15;
let a_col = 0;
let a_row = 0;
let svgn = 'http://www.w3.org/2000/svg';
let parent;

const createTable = (task) => {


    data = task;
    data.forEach((row)=>{
        row.forEach((col)=>{
            createRectangle(width*a_col+x_pos,y_pos+a_row*height,width,height)
            createText(width*a_col+x_pos+10,y_pos+a_row*height+15,col)
            a_col++;
            count++;
        })
        a_row++;
        a_col=0;
    })

    y_pos+=10;

}

const createRectangle = (xpos,ypos,width,height) => {
    let cell = getNode('rect',{
        id:'rect'+count,
        x: xpos,
        y: ypos,
        width: width,
        height: height,
        fill: 'snow',
        isSelect: false
    });
        svg.appendChild(cell);
}

const createText = (xpos,ypos,text) => {
    let mytext = getNode('text',{
        id: 'text'+count,
        x:xpos,
        y:ypos,
        "font-size":8,
        "font-family":"monospace",
        "stroke-width":"0.1"
    })
    mytext.textContent = text;
    svg.appendChild(mytext);
}

const getNode = (elem,v) => {
    elem = document.createElementNS(svgn,elem);
    for(var p in v)
        elem.setAttribute(p,v[p]);
    return elem;
}

const getSelectMatrix = () => {

}

const createTask = (settask,pharse) => {

    console.log(pharse)
    let data = settask[pharse-1];

    /*if(data.length==1){
        console.log("JOIN CRETE TABLE")
        createTable(data[0])
    }
    else {
        console.log(data[0])
        data.forEach((tables) => {
            tables.forEach((row) => {
                row.forEach((col) => {

                })
            })


        })
    }*/
    console.table(settask)
    console.log(pharse)
    data.forEach((tables)=>{
        createTable(tables);
    })

}

const createArray = (task) =>{

    var array_col = [];
    var array = []
    var rowHash = task[0];
    var temp_count=0;


    for(let key in rowHash){
        array_col.push(key);
    }

    var arr_length = array_col.length;

    for(let i=0;i<task.length;i++) {
        for (let j = 0; j < arr_length; j++) {
            array_col.push(task[i][array_col[j]]);
        }
    }

    for(let i=0; i<task.length+1; i++) {
        array[i] = [];
        for (let j = 0; j <arr_length;  j++) {

            array[i][j] = array_col[temp_count];
            temp_count++;
        }

    }

    return array;


}
