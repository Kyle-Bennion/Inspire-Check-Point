import { ProxyState } from "../AppState.js";
import QuoteService from "../Services/QuoteService.js";
import quoteService from "../Services/QuoteService.js";

function _drawQuote() {
  console.log("THE Famous Person says:", ProxyState.quote);
  let quote = ProxyState.quote
  document.getElementById('quote-bar').innerHTML = quote.QuoteTemplate
}


//TODO Create methods for constructor, and rendering the quote to the page
export default class QuoteController {

  constructor() {
    ProxyState.on("",)
    this.getQuote()
  }

  getQuote() {
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error);
    }
  }


}