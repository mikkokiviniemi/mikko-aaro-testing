import chai from "chai"
import get from "../src/get.js";
const expect = chai.expect

describe("get", ()=>{
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    it("Should return number", ()=>{
           const result = get(object, 'a[0].b.c');
           expect(result).to.equal(3);
    });
    it("Should return number", ()=>{
        const result = get(object, ['a', '0', 'b', 'c']);
        expect(result).to.equal(3);
    });
    it("Should return true", ()=>{
        const result = get(object, 'a.b.c', 'default');
        expect(result).to.equal('default');
    });
    
    
    
});