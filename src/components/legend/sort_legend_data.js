'use strict';

/**
 * This function sorts legend data by legendIndex custom data property.
 */
module.exports = function sortLegendData(legendTraces, reverse) {
    var sortedTraces = legendTraces.sort(comparelegendIndex)
    if (reverse) {
        sortedTraces = sortedTraces.reverse()
    }
    return sortedTraces;
}

function comparelegendIndex(a, b) {
    var indexGetter = val => val[0].hasOwnProperty('data') && val[0].data.hasOwnProperty('legendIndex') ? val[0].data.legendIndex : -1;
    var aIndex = indexGetter(a);
    var bIndex = indexGetter(b);
    if (aIndex < bIndex) {
        return -1;
    }
    if (aIndex > bIndex) {
        return 1;
    }
    return 0;
}
