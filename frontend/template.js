import {html,render} from './../libs/lit/lit.js'
export {render}

export function main(app,data,events,phrase,phrase_nr,show_solution){
    //const section = data.section[phrase_nr-1];
    return html `
        <div class="d-flex" justify-content-between align-items-center>
            <h1 class="mx-3">${app.text}</h1>
        </div>
       <main class="border rounded-bottom border-top-0">
            <div>
                <!--Phrasem -->
                <section class="lead text-nowrap px-2 py-3" ?data-hidden=${!phrase.text}>
                    <b>
                        <span>${phrase.text}</span>
        
                </section>
                <section>
                    <svg id="relation" viewBox="0 0 880 440"></svg>
                </section>
            </div>           
       </main>
    
    `


    function createTable(){

    }
}