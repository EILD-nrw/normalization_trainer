
let count = 0; //Counter for id
let width = 80;
let height = 30;
let x_pos = 5;
let y_pos = 15;
let a_col = 0;
let a_row = 0;
let svgn = 'http://www.w3.org/2000/svg';
let parent;

const createTable = (task) => {

    task.forEach((row)=>{
        row.forEach((col)=>{
            createRectangle(width*a_col+x_pos,y_pos+a_row*height,width,height)
            createText(width*a_col+x_pos+10,y_pos+a_row*height+15,col)
            a_col++;
            count++;
        })
        a_row++;
        a_col=0;
    })

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

    let select_arr=[]

    for(let i=0;i<count;i++){
        cell = svg.getElementById('rect'+i).getAttribute('fill');
        if(cell == 'yellow')
            select_arr[i]="1";
        else
            select_arr[i]="0";
    }

  //  console.log(count);
   // console.log(select_arr);
    return select_arr;

}

const  createTask = async (settask,pharse) => {

    let table_nr;

    if(count>0)
        await resetTable();

    switch (pharse-1){
        case 0:
            table_nr=0;
            break;
        case 1:
            table_nr=1;
            break;
        case 2:
            table_nr=1;
            break;
        case 3:
            table_nr=2;
            break;
        case 4:
            table_nr=3;
            break;
        case 5:
            table_nr=4;
            break;
    }


    let data = settask[table_nr];


    count = 0; //Counter for id
    width = 80;
    height = 30;
    x_pos = 5;
    y_pos = 5;
    a_col = 0;
    a_row = 0;

    data.forEach((tables)=>{

        createTable(tables);

        a_row=0;
        a_col=0;
        x_pos+=tables[0].length*width+5;


    })

}

const resetTable = () => {

    for(let i=0;i<count;i++){
        cell = svg.getElementById('rect'+i);
        tex = svg.getElementById('text'+i);
        svg.removeChild(cell);
        svg.removeChild(tex);

    }
}
