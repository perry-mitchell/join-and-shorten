const join = require("../../source/index.js");

const { STRIP_MODE_REMOVE_CHARACTER } = join;

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

    it("strips items with lower priorities", function() {
        const joined = join([
            ["first", 2],
            ["second", 4],
            ["third", 3]
        ], "_", 14);
        expect(joined).to.equal("second_third");
    });

    it("supports stripping by character", function() {
        const joined = join([
            ["abcdef", 2],
            ["123456", 3]
        ], ":", 10, STRIP_MODE_REMOVE_CHARACTER);
        expect(joined).to.equal("abc:123456");
    });

    it("removes items with 0 length after stripping", function() {
        const joined = join([
            ["abcdef", 2],
            ["123456", 3]
        ], ":", 6, STRIP_MODE_REMOVE_CHARACTER);
        expect(joined).to.equal("123456");
    });

});
