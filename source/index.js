function getLength(items, joiner) {
    return items
        .map(item => item[0])
        .join(joiner)
        .length;
}

function isTooLong(items, joiner, limit) {
    return getLength(items, joiner) > limit;
}

function join(items, joiner = "_", limit = Infinity) {
    // clone items
    const workingItems = JSON.parse(JSON.stringify(items)).map(item => Array.isArray(item) ? item : [item]);
    while (isTooLong(workingItems, joiner, limit)) {
        shorten(workingItems);
    }
    return workingItems
        .map(item => item[0])
        .join(joiner);
}

function shorten(items) {
    let lowestIndex = -1,
        lowestPrio = 0;
    items.forEach((item, index) => {
        const prio = item[1] || 0;
        if (prio < lowestPrio) {
            lowestIndex = index;
        }
    });
    if (lowestIndex < 0) {
        lowestIndex = items.length - 1;
    }
    items.pop();
}

module.exports = join;
