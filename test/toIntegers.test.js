import chai from "chai"
import toInteger from "../src/toInteger.js";
const expect = chai.expect


describe("toInteger()", ()=>{
    it("Testing with 3.2", ()=>{
           const result = toInteger(3.2);
           expect(result).to.equal(3);
    });
    it("Testing with Number.MIN_VALUE", ()=>{
        const result = toInteger(Number.MIN_VALUE);
        expect(result).to.equal(0);
    
    });
    it("Testing with string 3.2", ()=>{
        const result = toInteger('3.2');
        expect(result).to.equal(3);

    });
    it("Testing with Infinity", ()=>{
        const result = toInteger(Infinity);
        expect(result).to.equal(1.7976931348623157e+308);

    });
 
    
    
    
});