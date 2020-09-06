export default class Quote {
  constructor(data) {
    this.body = data.quote.body
    this.author = data.quote.author



  }

get QuoteTemplate(){
  return /*html*/ `<h5 class = "text-style" data-toggle="tooltip" data-placement="left" title="${this.author}">${this.body}</h5>`
  
}


}
// return /*html */ `<div class="card " id = "quote-bar">
// <div class="card-body">
//     <blockquote class="blockquote mb-0 sfoot">
//         <p class="">${this.body}</p>
//         <footer class="blockquote-footer sfoottext">${this.author}</footer>
//         </blockquote>
// </div>
// </div>`