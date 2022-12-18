import chai from "chai"
import get from "../src/get.js";
const expect = chai.expect

describe("get", ()=>{
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    it("Testing 'a[0].b.c'", ()=>{
           const result = get(object, 'a[0].b.c');
           expect(result).to.equal(3);
    });
    it("Testing ['a', '0', 'b', 'c']", ()=>{
        const result = get(object, ['a', '0', 'b', 'c']);
        expect(result).to.equal(3);
    });
    it("Testing 'a.b.c', 'default'", ()=>{
        const result = get(object, 'a.b.c', 'default');
        expect(result).to.equal('default');
    });
    
    
    
});