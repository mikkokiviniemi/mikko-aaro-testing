import chai from "chai"
import words from "../src/words.js";
const expect = chai.expect

describe("words()", ()=>{
    it("Should return words", ()=>{
           const result = words('fred, barney, & pebbles');
           expect(result).to.equal(['fred', 'barney', 'pebbles']);
    });
    it("Should return words", ()=>{
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result).to.equal(['fred', 'barney', '&', 'pebbles']);
 });
    
    
});