/***
 * @override ccmjs-based web component
 * @author Tobias Hansen <tohan0510@gmail.com> 2022
 * @licence The MIT License (MIT)
 * @version latest (0.0.1)
 */

(()=>{

    const component = {
        name: 'normaliser',
        ccm: './libs/ccm/ccm.js',
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
            "phrases":["ccm.load",{"url":"./frontend/resources/resources.js#phrases","type":"module"}],
            "table":["ccm.load",{"url":"./backend/table.js"}],
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
             * when the instance is created, wenn all dependencies have been resolved and before the dependent sub-instances are initialized and ready
             *  @returns {Promise<void>}
             */
            this.init = async() =>{

                $ = Object.assign({},this.ccm.helper,this.helper);
                $.use(this.ccm);

                this.modal.title = "TEST";

                if($.isObject(this.phrases))
                    this.phrases = Object.values(this.phrases).map(phrases=>{delete phrases.key; return phrases; });
            };

            /**
             * when all dependencies are solved after creation and before the app starts
             * @returns {Promise<void>}
             */
            this.ready = async()=>{

                phrases = $.clone(this.phrases);
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



            }

            const nextPhrase = () =>{
                phrase_nr++;
                data.sections.push({
                    text:phrases[0].text
                });

                render();
            }

            const render = show_solution=>{
                this.html.render(this.html.main(this,data,events,phrases[0],phrase_nr,show_solution),this.element);
                this.element.querySelectorAll('[aria-selected]').forEach(option => option.selected = true);
            }
        }
    }
    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||[""])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){(c="latest"?window.ccm:window.ccm[c]).component(component);document.head.removeChild(a)};a.src=component.ccm.url}

}) ();