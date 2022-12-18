import chai from "chai"
import words from "../src/words.js";
const expect = chai.expect

describe("words()", ()=>{
    it("Testing with 'fred, barney, & pebbles'", ()=>{
           const result = words('fred, barney, & pebbles');
           expect(result).to.equal(['fred', 'barney', 'pebbles']);
    });
    it("Testing with 'fred, barney, & pebbles', /[^, ]+/g", ()=>{
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result).to.equal(['fred', 'barney', '&', 'pebbles']);
 });
    
    
});