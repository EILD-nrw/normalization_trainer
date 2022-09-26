import {html,render} from './../libs/lit/lit.js'
export {render}

export function main(app,data,events,phrase,phrase_nr,show_solution,show_hint){
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
                
                <section class="table_Content">
                    <svg id="relation" viewBox="0 0 1000 300"></svg>
                </section>


                
                <section ?data-hidden=${show_hint}>
                    ${phrase.hint}
                </section>
                
                <section id="buttons" class="d-flex justify-content-center flex-wrap px-2 py-3">
                    <button id="next" class="btn btn-primary m-1" @click=${events.onNext}> Weiter </button>
                    <button id="checkin"  class="btn btn-primary m-1" ?disabled=${show_solution} @click=${events.onSolution}> Abgeben </button>
                    <button id="showHint" class="btn btn-primary m-1" @click=${events.onGetHint}>Hinweis</button>
                    <button id="soulution"  class="btn btn-primary m-1" @click=${events.onShowSolution}> Lösung zeigen </button>
                </section>
                
            </div>           
       </main>
    
    `


}