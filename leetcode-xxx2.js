const merge = (intervals) => {
    const newList = intervals.sort((a, b) => a[0] - b[0]);
    let list = [newList[0]];
    for (let i = 0; i < newList.length; i++) {
        const curEl = list[list.length - 1];
        const nextEl = newList[i + 1];
        if (nextEl) {
            if (curEl[1] >= nextEl[0] && curEl[1] >= nextEl[1]) {
                continue
            } else if (curEl[1] >= nextEl[0] && curEl[1] < nextEl[1]) {
                list[list.length - 1][1] = nextEl[1];
            } else {
                list.push(nextEl)
            }
        }
    }
    return list;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,4],[1,4]]));
console.log(merge([[1,4],[2,3]]));
