import chai from "chai";
import isEmpty from "../src/isEmpty.js";
const expect = chai.expect;




describe("isEmpty", ()=>{
    it("Testing with null", ()=>{
           const result = isEmpty(null);
           expect(result).to.equal(true);
    });
    it("Testing with true", ()=>{
        const result = isEmpty(true);
        expect(result).to.equal(true);
    });
    it("Testing with 1", ()=>{
        const result = isEmpty(1);
        expect(result).to.equal(true);
    });
    it("Testing with array", ()=>{
        const result = isEmpty([1, 2, 3]);
        expect(result).to.equal(false);
    });
    it("Testing with string", ()=>{
        const result = isEmpty('abc');
        expect(result).to.equal(false);
    });
    it("Testing with { 'a': 1 }", ()=>{
        const result = isEmpty({ 'a': 1 });
        expect(result).to.equal(false);
    });
    
    
    
});