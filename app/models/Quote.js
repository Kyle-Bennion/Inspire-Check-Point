export default class Quote {
  constructor(data) {
    this.body = data.quote.body
    this.author = data.quote.author



  }

get QuoteTemplate(){
return `<div class="card" id = "quote-bar">
<div class="card-body">
    <blockquote class="blockquote mb-0">
        <p>${this.body}</p>
        <footer class="blockquote-footer">${this.author}<cite title=""></cite></footer>
    </blockquote>
</div>
</div>`


}


}