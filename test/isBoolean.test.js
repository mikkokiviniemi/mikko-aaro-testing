import chai from "chai"
import isBoolean from "../src/isBoolean.js";
const expect = chai.expect


describe("isBoolean", ()=>{
    it("Should return true", ()=>{
           const result = isBoolean(false);
           expect(result).to.equal(true);
    });
    it("Should return false", ()=>{
        const result = isBoolean(null);
        expect(result).to.equal(false);
    });
    it("Should return false", ()=>{
        const result = isBoolean('Hello');
        expect(result).to.equal(false);
    });
    
    
});