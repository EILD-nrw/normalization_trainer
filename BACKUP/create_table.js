


document.addEventListener('DOMContentLoaded',function() {

    let count = 0; //Counter for id
    let svg = document.querySelector('svg');
    let width = 100;
    let height = 30;
    let x_pos = 5;
    let y_pos = 5;
    let a_col = 0;
    let a_row = 0;
    let svgn = 'http://www.w3.org/2000/svg';
    let  task_array =[{
       "Student":[{"KundenID": "1", "Name": "Tobisa Hansen"}]
    }]
    let  task_array2 =[{
        "Student":[
            {"Matr": "1", "Name": "Tobisa Hansen"}
            ],
        "Vorlesung":[
            {"VorlNr":"16","Vorlesung":"Datenbanken"},
            {"VorlNr":"08","Vorlesung":"IT-Systeme"}
        ],
        "Belegunsplan":[
            {"Matr":"1","VorlNr":"16"},
            {"Matr":"1","VorlNr":"08"}
        ]
    }]


    function createTask(){

    let array=[]

        for(let tables in task_array[0]) {
            array.push(tables)
        }

        let num_of_tables = array.length;

       for(let i=0;i<task_array.length;i++){
           for(let j=0;j<num_of_tables;j++){
               createTable(task_array[i][array[j]])
           }
       }


    }

    async function createTable(task){


          let data = createArray(task);
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
            "font-size":10
        })
        mytext.textContent=text;
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


        for(let j=0;j<col;j++){
                isSelect_arr[i]=[]
            for(let i=0;i<row;i++){
                let isSelect_value = document.getElementById('rect'+isSelect_count).getAttribute('isSelect');
                isSelect_arr[i][j]=isSelect_value;
                isSelect_count++;
            }
        }
        console.log(isSelect_arr)

    }

    function createArray(task){

            var array_col = [];
            var array = []
            var rowHash = task[0];
            var temp_count=0;


            for(let key in rowHash){
                array_col.push(key);
            }

            var arr_length = array_col.length;

            for(let i=0;i<task.length;i++){
                for(let j=0;j<arr_length;j++){
                      array_col.push(task[i][array_col[j]]);
                }
            }

            console.table(array_col)

        //TODO: Fix Array Creation
            for(let i=0; i<task.length+1; i++) {
                array[i] = [];
                for (let j = 0; j <arr_length;  j++) {

                    array[i][j] = array_col[temp_count];
                    temp_count++;
                }

            }



            return array;


    }

  document.querySelector('svg').addEventListener('click',selectZell)
  document.getElementById('createButton').addEventListener('click',createTask)
  document.getElementById('selectButton').addEventListener('click',getSelectMatrix);


})

