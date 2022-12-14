/***
 * @override ccmjs-based web component
 * @author Tobias Hansen <tohan0510@gmail.com> 2022
 * @licence The MIT License (MIT)
 * @version latest (0.0.1)
 */

(()=>{

    const component = {
        name: 'normalisation_trainer',
        ccm: './libs/ccm/ccm.js',
        svgn: 'http://www.w3.org/2000/svg',
        config: {
            "css": ["ccm.load",
                [//serials
                    "./libs/bootstrap-5/css/bootstrap.css",
                    "./frontend/resources/styles.css"
                ],
                { "url": "./libs/bootstrap-5/css/bootstrap-fonts.css", "context": "head" }
            ],
            "helper":["ccm.load",{"url":"./libs/ccm/helper.js","type":"module"}],
            "html":["ccm.load",{"url":"./frontend/template.js","type":"module"}],
            "modal":[ "ccm.start","./libs/modal/ccm.modal.js",{
                "backdrop_close":true,
                "content":"",
                "closed":true,
                "buttons":""
            }],
            "database":["ccm.load",{"url":"./backend/database.js","type":"module"}],
            "phrases":["ccm.load",{"url":"./frontend/resources/resources.js#phrases","type":"module"}],
            "relation":["ccm.load",{"url":"./backend/table.js"}],
            "generateion":["ccm.load",{"url":"./backend/generatetask.js"}],
            "solution":["ccm.load",{"url":"./backend/solution.js"}],
            "text":"Normalisation Trainer"
        },
        Instance: function (){
            /**
            * shortcut to help functions
            * @type {Object.<string,Function>}
            */
            let $;
            /**
            * app state data
            * @type {Object}
             */
            let data;
            /**
            * current selected notaton
            * @type {number}
            */
            let phrase_nr;
            /**
             * phrases data
             * @type {Object}
             */
            let phrases;
            /**
             *  task data
             * @type {Object}
             */
            let task_data;
            /*CREATE TABLE*/
            let task_arr;
             /**
             * when the instance is created, wenn all dependencies have been resolved and before the dependent sub-instances are initialized and ready
             *  @returns {Promise<void>}
             */
            let shema;

            this.init = async() =>{

                $ = Object.assign({},this.ccm.helper,this.helper);
                $.use(this.ccm);


                this.modal.title = "TEST";

                schema = this.database["combination"][rand(this.database["combination"].length)]

                task_arr = await getGeneradeExample(this.database,schema);

                if($.isObject(this.phrases))
                    this.phrases = Object.values(this.phrases).map(phrases=>{delete phrases.key; return phrases; });
            };

            /**
             * when all dependencies are solved after creation and before the app starts
             * @returns {Promise<void>}
             */
            this.ready = async()=>{

                phrases = $.clone(this.phrases);
                task_data = $.clone(this.database)
                if (!this.number) this.number = this.phrases.length;
                this.onready && await this.onready({instance: this})

            };

            this.start = async()=>{
                data = await $.dataset(this.data);
                data = Object.assign(data,{
                    correct:0,
                    sections: [],
                    total:this.number
                });

                phrase_nr = 0; nextPhrase();

                // set content of modal dialog for legend table
                this.html.render(this.modal.element.querySelector('main'));

                //triger 'start' event
                this.onstart && await this.onstart({instance:this});

            }

            this.getValue = () => $.clone(data);

            const events = {
                selecetCell: (event) => {
                   //console.log(event.target.nodeName)
                    if('rect'==event.target.nodeName){
                        cell = svg.getElementById(event.target.id)
                        if ((cell.getAttribute('fill')) == 'snow') {
                            cell.setAttribute('fill', 'yellow')
                            cell.setAttribute('isSelect', true)
                        } else {
                            cell.setAttribute('fill', 'snow')
                            cell.setAttribute('isSelect', false)
                        }
                    }
                },

                onNext: async () =>{
                   if(phrase_nr === this.number) return;
                        reset();
                        phrases.shift(); nextPhrase();
                        this.onchange && this.onchange({event: 'next', instance:this,phrase:phrase_nr});
                },

                onSolution: () =>{
                    check_solution(phrase_nr,getSelectMatrix())
                },

                onShowSolution: () =>{
                    get_solution(phrase_nr);
                    render(true,true);
                },

                onGetHint: ()=>{
                    render(false,true)
                }

            }

            const nextPhrase = () =>{
                phrase_nr++;
                data.sections.push({
                    text:phrases[0].text,
                    hint:phrases[0].hint
                });

                render();
            }

            const render = (show_solution,show_hint) =>{
                this.html.render(this.html.main(this,data,events,phrases[0],phrase_nr,show_solution,show_hint),this.element);
                this.element.querySelectorAll('[selected]').forEach(option => option.selected = true);
                svg = this.element.querySelector('#relation');

                //createTask(get_example(),phrase_nr);
                createTask(task_arr,phrase_nr)
                //getGeneradeExample(this.database,shema)

                if(show_solution){
                    this.element.querySelector('svg').removeEventListener('click',events.selecetCell);
                }

                else
                    this.element.querySelector('svg').addEventListener('click',events.selecetCell);

            }


            const reset = () =>{

                this.element.classList.remove('correct','failed');
                this.element.querySelectorAll('[selected]').forEach(option => option.selected = false);
            }
        }
    }
    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||[""])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){(c="latest"?window.ccm:window.ccm[c]).component(component);document.head.removeChild(a)};a.src=component.ccm.url}

}) ();