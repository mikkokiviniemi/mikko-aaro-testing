import chai from "chai"
import isDate from "../src/isDate.js";
const expect = chai.expect


describe("isDate", ()=>{
    it("Testing with new Date", ()=>{
           const result = isDate(new Date);
           expect(result).to.equal(true);
    });
    it("Testing with string date", ()=>{
        const result = isDate('Mon April 23 2012');
        expect(result).to.equal(false);
    });
    it("Testing with string", ()=>{
        const result = isDate('Hello');
        expect(result).to.equal(false);
    });
    
    
});