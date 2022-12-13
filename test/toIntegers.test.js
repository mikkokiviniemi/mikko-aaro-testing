import chai from "chai"
import toInteger from "../src/toInteger.js";
const expect = chai.expect


describe("toInteger()", ()=>{
    it("Should return integer", ()=>{
           const result = toInteger(3.2);
           expect(result).to.equal(3);
    });
    it("Should return integer", ()=>{
        const result = toInteger(Number.MIN_VALUE);
        expect(result).to.equal(0);
    
    });
    it("Should return integer", ()=>{
        const result = toInteger('3.2');
        expect(result).to.equal(3);

    });
    it("Should return integer", ()=>{
        const result = toInteger(Infinity);
        expect(result).to.equal(1.7976931348623157e+308);

    });
 
    
    
    
});