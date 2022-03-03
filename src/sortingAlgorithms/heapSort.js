export function getHeapSortAnimations(array) {
    const animations = [];
    heapSort(array, animations);
    return animations;
}

function heapSort(arr, animations) {
    var arrLength = arr.length;
    for (var i = Math.floor(arrLength / 2); i >= 0; i--) {
        heapify(arr, i, arrLength, animations);
    }

    for (i = arrLength - 1; i > 0; i--) {
        swap(arr, 0, i, animations);
        arrLength--;
        heapify(arr, 0, arrLength, animations);
    }
}

function heapify(arr, idx, arrLength, animations) {
    var leftIdx = 2 * idx + 1;
    var rightIdx = 2 * idx + 2;
    var max = idx;
    if (leftIdx < arrLength && arr[leftIdx] > arr[max]) {
        animations.push([leftIdx, max]);
        animations.push([leftIdx, max]);
        animations.push([0, arr[0]]);
        animations.push([0, arr[0]]);
        max = leftIdx; 
    }
    if (rightIdx < arrLength && arr[rightIdx] > arr[max]) {
        animations.push([rightIdx, max]);
        animations.push([rightIdx, max]);
        animations.push([0, arr[0]]);
        animations.push([0, arr[0]]);
        max = rightIdx;
    }
    if (max !== idx) {
        swap(arr, idx, max, animations);
        heapify(arr, max, arrLength, animations);
    }
}

function swap(arr, firstIdx, lastIdx, animations) {
    animations.push([firstIdx, lastIdx]);
    animations.push([firstIdx, lastIdx]);
    animations.push([firstIdx, arr[lastIdx]]);
    animations.push([lastIdx, arr[firstIdx]]);
    var temp = arr[firstIdx];
    arr[firstIdx] = arr[lastIdx];
    arr[lastIdx] = temp; 
}