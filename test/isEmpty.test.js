import chai from "chai";
import isEmpty from "../src/isEmpty.js";
const expect = chai.expect;




describe("isEmpty", ()=>{
    it("Should return true", ()=>{
           const result = isEmpty(null);
           expect(result).to.equal(true);
    });
    it("Should return true", ()=>{
        const result = isEmpty(true);
        expect(result).to.equal(true);
    });
    it("Should return true", ()=>{
        const result = isEmpty(1);
        expect(result).to.equal(true);
    });
    it("Should return false", ()=>{
        const result = isEmpty([1, 2, 3]);
        expect(result).to.equal(false);
    });
    it("Should return false", ()=>{
        const result = isEmpty('abc');
        expect(result).to.equal(false);
    });
    it("Should return false", ()=>{
        const result = isEmpty({ 'a': 1 });
        expect(result).to.equal(false);
    });
    
    
    
});