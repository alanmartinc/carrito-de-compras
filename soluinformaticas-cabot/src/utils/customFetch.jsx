let resp = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (resp) ? resolve(task) : reject("Error");
        });
    }, time);
}

export default customFetch;