// node 12 and up
//import chai from "chai"
//import sum from "../sum.js"
// below for node 10
import chai from "chai"
import toNumber from "../src/toNumber.js";
const expect = chai.expect



describe("toNumber", () => {
 it("testing this", () =>{
     expect(toNumber(9)).to.equal(9)
 });
})