/**
* Copyright 2012-2018, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

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
    var indexGetter = val => {
        if (val[0].trace.hasOwnProperty('customdata')) {
            for (let item of val[0].trace.customdata) {
                if (item.hasOwnProperty('legendIndex')) {
                    return item.legendIndex;
                }
            }
        };
        return -1;
    }
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