let arr2 = document.getElementsByClassName("bar");
let ln2 = parseInt(document.querySelector("#arr_sz").value);
let x2 = Math.floor((100 - ln2) / 2);
async function partition(arr, low, high) {
    const style = window.getComputedStyle(arr[high]);
    const newHeight = style.getPropertyValue("height");
    let num = parseInt(newHeight.substr(0, newHeight.length - 2));
    let pivot = num;
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        const style1 = window.getComputedStyle(arr[j]);
        const newHeight1 = style1.getPropertyValue("height");
        let num1 = parseInt(newHeight1.substr(0, newHeight1.length - 2));
        await waitforme(delay)
        if (num1 < pivot) {
            i++;

            arr[i].style.background = "#EA5455";
            arr[j].style.background = "#EA5455";                //red

            swap(arr[i], arr[j]);

            await waitforme(delay);

            arr[i].style.background = "#8785A2";
            arr[j].style.background = "#8785A2";                    //grey
        }
    }

    arr[i + 1].style.background = "#EA5455";                //red
    arr[high].style.background = "#EA5455";

    await waitforme(delay);
    swap(arr[i + 1], arr[high]);

    arr[high].style.background = "#8785A2";          //grey
    arr[i + 1].style.background = "#206A5D";        //black->dark green

    return (i + 1);
}

function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const newHeight1 = style1.getPropertyValue("height");
    const newHeight2 = style2.getPropertyValue("height");


    el1.style.height = newHeight2;
    el2.style.height = newHeight1;

}

async function quickSort(arr, low, high) {
    if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
    else {
        if (low >= x2 && high >= x2 && low < x2 + arr.length && high < x2 + arr.length) {
            arr[high].style.background = "#206A5D";      //black->dark green
            arr[low].style.background = "#206A5D";      //black->dark green
        }
    }
}

function waitforme(ms) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, ms);
    })
}


let quickbtn = document.querySelector("#QuickSort");
quickbtn.addEventListener("click", async function () {
    let arr = document.getElementsByClassName("bar");
    let len = parseInt(document.querySelector("#arr_sz").value);
    let start = Math.floor((100 - len) / 2);
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(arr, 0 + start, len - 1 + start);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
}
);
