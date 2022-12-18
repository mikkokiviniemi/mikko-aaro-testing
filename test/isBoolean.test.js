import chai from "chai"
import isBoolean from "../src/isBoolean.js";
const expect = chai.expect


describe("isBoolean", ()=>{
    it("Testing with false", ()=>{
           const result = isBoolean(false);
           expect(result).to.equal(true);
    });
    it("Testing with null", ()=>{
        const result = isBoolean(null);
        expect(result).to.equal(false);
    });
    it("Testing with string", ()=>{
        const result = isBoolean('Hello');
        expect(result).to.equal(false);
    });
    it("Testing with integer", ()=>{
        const result = isBoolean(5);
        expect(result).to.equal(false);
    });
    
    
});