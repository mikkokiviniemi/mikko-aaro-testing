import chai from "chai"
import isDate from "../src/isDate.js";
const expect = chai.expect


describe("isDate", ()=>{
    it("Should return true", ()=>{
           const result = isDate(new Date);
           expect(result).to.equal(true);
    });
    it("Should return false", ()=>{
        const result = isDate('Mon April 23 2012');
        expect(result).to.equal(false);
    });
    it("Should return false", ()=>{
        const result = isDate('Hello');
        expect(result).to.equal(false);
    });
    
    
});