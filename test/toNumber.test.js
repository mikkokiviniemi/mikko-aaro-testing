// node 12 and up
//import chai from "chai"
//import sum from "../sum.js"
// below for node 10
import chai from "chai"
import toNumber from "../src/toNumber.js";
const expect = chai.expect

describe("toNumber", () => {
    it("Should return number", ()=>{
           expect(toNumber(3.2)).to.equal(3.2);
    });
    it("Should return number", ()=>{
        const result = toNumber(Number.MIN_VALUE);
        expect(result).to.equal(5e-324);
    });
    it("Should return number", ()=>{
        const result = toNumber(Infinity);
        expect(result).to.equal(Infinity);
    });
    it("Should return number", ()=>{
        const result = toNumber('3.2');
        expect(result).to.equal(3.2);
    });
    
})