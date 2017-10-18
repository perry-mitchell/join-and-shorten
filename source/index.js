/**
 * Setting to remove whole items when shortening
 * @readonly
 * @type {String}
 * @memberof join
 */
const STRIP_MODE_REMOVE_WHOLE = "removeWhole";
/**
 * Setting to remove a character at a time when shortening
 * @readonly
 * @type {String}
 * @memberof join
 */
const STRIP_MODE_REMOVE_CHARACTER = "removeChars";

/**
 * A basic join item
 * @typedef {String} JoinItemBasic
 */

/**
 * A join item with parameters
 * Such items can have parameters, in order:
 *   0: The string to join
 *   1: The priority of the item (higher is more important)
 * @typedef {Array} JoinItemWithParams
 */

/**
 * An item to join
 * @typedef {JoinItemBasic|JoinItemWithParams} JoinItem
 */

/**
 * Get the length of the joined string
 * @param {Array.<JoinItem>} items An array of items to join
 * @param {String} joiner The string to join the strings with
 * @returns {Number} The total length
 */
function getLength(items, joiner) {
    return items
        .map(item => item[0])
        .join(joiner)
        .length;
}

/**
 * Check if the joined string is too long
 * @param {Array.<JoinItem>} items An array of items to join
 * @param {String} joiner The string to join items with
 * @param {Number} limit The string length limit
 * @returns {Boolean} True if too long, false if OK
 */
function isTooLong(items, joiner, limit) {
    return getLength(items, joiner) > limit;
}

/**
 * Join a set of strings together
 * Can join regular strings in an array, or an array of arrays where
 * string priorities can be set.
 * @example
 *      // Basic join:
 *      join(["one", "two", "three"]); // "one_two_three"
 *      // With options:
 *      join(["one", "two", "three"], "-", 8); // "one-two"
 *      // With priorities:
 *      join([
 *          ["one", 2],
 *          ["two", 1],
 *          ["three", 3]
 *      ], ".", 11); // "one.three"
 * @param {Array.<JoinItem>} items An array of items to join
 * @param {String=} joiner The string to join the items with
 * @param {Number=} limit The string length limit
 * @param {String=} stripMode The mode with which to strip items
 * @returns {String} The final joined string
 */
function join(items, joiner = "_", limit = Infinity, stripMode = STRIP_MODE_REMOVE_WHOLE) {
    // clone items
    const workingItems = JSON
        .parse(JSON.stringify(items))
        .map(item => Array.isArray(item) ? item : [item])
        // Reverse the array so that automatically stripped items are removed from
        // the least-significant end
        .reverse();
    while (isTooLong(workingItems, joiner, limit)) {
        shorten(workingItems);
    }
    return workingItems
        .map(item => item[0])
        // Put items back in original order
        .reverse()
        .join(joiner);
}

/**
 * Shorten the items array (destructive)
 * @param {Array.<JoinItemWithParams>} items An array of items with priorties
 */
function shorten(items) {
    let lowestIndex = -1,
        lowestPrio = Infinity;
    items.forEach((item, index) => {
        const prio = item[1] || 0;
        if (prio < lowestPrio) {
            lowestPrio = prio;
            lowestIndex = index;
        }
    });
    if (lowestIndex < 0) {
        lowestIndex = items.length - 1;
    }
    items.splice(lowestIndex, 1);
}

Object.assign(join, {
    STRIP_MODE_REMOVE_WHOLE,
    STRIP_MODE_REMOVE_CHARACTER
});

module.exports = join;
