import chai from "chai"
import toString from "../src/toString.js";
const expect = chai.expect

describe("toString()", ()=>{
    it("Testing null", ()=>{

           const result = toString(null);
           expect(result).to.equal('');
    });
    it("Testing integer", ()=>{
        const result = toString(-0);
        expect(result).to.equal('-0');
    });
    it("Testing array", ()=>{
        const result = toString([1, 2, 3]);
        expect(result).to.equal('1,2,3');
    });
    it("Testing string", ()=>{
        const result = toString("moikka");
        expect(result).to.equal("moikka");
    });
    
    
});