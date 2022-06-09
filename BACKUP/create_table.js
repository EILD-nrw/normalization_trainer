

document.addEventListener('DOMContentLoaded',function() {

    var count = 0; //Counter for id
    var svg = document.querySelector('svg');
    var svgn = 'http://www.w3.org/2000/svg';


    const createTable = () => {

        let xpos=10,
            ypos=10,
            width=100,
            height=30,
            col = 8,
            row = 8;

        for(let i=0;i<col;i++){
            for(let j=0;j<row;j++){
                createRectangle(xpos + width * i, ypos + height * j, width, height)
                createText(xpos + width * i + width/2, ypos + height * j + height/2,i+" "+j)
                count++;
            }
        }

    }

    function createRectangle(xpos, ypos, width, height) {
        let cell = getNode('rect', {
            id: 'rect' + count,
            x: xpos,
            y: ypos,
            width: width,
            height: height,
            fill:'snow',
            isSelect:false
        });
        svg.appendChild(cell);
    }

    function createText(xpos, ypos, text) {
        let mytext = getNode('text', {
            id: 'text' + count,
            x: xpos,
            y: ypos,
        })
        mytext.textContent = text;
        svg.appendChild(mytext);
    }

    function getNode(elem, v) {
        elem = document.createElementNS(svgn, elem);
        for (var p in v)
            elem.setAttribute(p, v[p]);
        return elem;
    }

    function selectZell(event) {
        var elem = event.target;
            if('rect'==elem.nodeName) {
                let cell = document.getElementById(elem.id)
                if ((cell.getAttribute('fill')) == 'snow') {
                    cell.setAttribute('fill', 'yellow')
                    cell.setAttribute('isSelect', true)
                } else {
                    cell.setAttribute('fill', 'snow')
                    cell.setAttribute('isSelect', false)
                }
            }
    }

    function getSelectMatrix(){
        let col = 8, row=8;
        let isSelect_count=0;
        let isSelect_arr = []


        for(let i=0;i<col;i++){
                isSelect_arr[i]=[]
            for(let j=0;j<row;j++){
                let isSelect_value = document.getElementById('rect'+isSelect_count).getAttribute('isSelect');
                isSelect_arr[i][j]=isSelect_value;
                isSelect_count++;
            }
        }
        console.log(isSelect_arr)

    }

  document.querySelector('svg').addEventListener('click',selectZell)
  document.getElementById('createButton').addEventListener('click',createTable)
  document.getElementById('selectButton').addEventListener('click',getSelectMatrix);


})

