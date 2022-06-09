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
                [
                    "./libs/bootstrap-5/css/bootstrap.css",
                    "./resources/styles.css"
                ],
                { "url": "./libs/bootstrap-5/css/bootstrap-fonts.css", "context": "head" }
            ],
            "html":["ccm.load",{"url":"./frontend/table.js","type":"module"}],
        },
        Instance: function (){

        }
    }
}) ();