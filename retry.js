const wait = (ms) => {
    return new Promise((resolve) => {
        const interval = setTimeout(() => {
            resolve()
        }, ms)
    })
}

const clickEachWithInterval = async (array, interval) => {
    console.log(`Please wait for ${array.length * (interval / 1000) / 60} minutes`)
    for (let el of array) {
        await wait(interval)
        await el.click()
    }
    alert("ready to check again")
}

const getRetryTags = () => Array.from(
    document.querySelectorAll("table a")
)

const $retryTags = getRetryTags().filter(tag => tag.innerText.trim() === "Retry")

clickEachWithInterval($retryTags, 500)


const check = () => {
    if (getRetryTags().length > 0) {
        alert("nope")
    } else {
        alert("good to go")
    }
}