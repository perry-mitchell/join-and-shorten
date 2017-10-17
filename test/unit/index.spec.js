const join = require("../../source/index.js");

describe("join", function() {

    it("joins many without a limit", function() {
        const joined = join([
            "someLongItem", "xxxxxxxxxxxxxxxxxxxxxx", "1122345", "zzzzzz"
        ]);
        expect(joined).to.equal("someLongItem_xxxxxxxxxxxxxxxxxxxxxx_1122345_zzzzzz");
    });

    it("supports customising the joiner", function() {
        const joined = join(["1", "a", "2"], "-");
        expect(joined).to.equal("1-a-2");
    });

    it("strips the ending when too long", function() {
        const joined = join(["first", "second", "third", "fourth"], "_", 21);
        expect(joined).to.equal("first_second_third");
    });

});
