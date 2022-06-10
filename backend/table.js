

var count=0;
var svg = document.querySelector('svg');
var svgn = 'http://www.w3.org/2000/svg';

const createTable = () => {

    let xpos = 10,
        ypos = 10,
        width = 100,
        height = 30,
        col = 8,
        row = 8;

    for(let i=0;i<col;i++){
        for(let j=0;j<row;j++){
            createRectangle()
            createText()
            count++;
        }
    }

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
        y:ypos
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

const fillSelected = (event) => {
    var elem = event.target;
        if('rect'==elem.nodeName){
            let cell = document.getElementById(elem.id)
            if((cell.getAttribute('fill'))=='snow'){
                cell.setAttribute('fill','yellow')
                cell.setAttribute('isSelect',true)
            }else{
                cell.setAttribute('fill','snow')
                cell.setAttribute('isSelect',false)
            }
        }
}



