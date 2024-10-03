const resolvedPromise = new Promise((resolveMessage) => {
    setTimeout(() => {
        resolveMessage("success: promise resolved!");
    }, 500);
});

const rejectedPromise = new Promise(() => {
    setTimeout(() => {
        try {
            throw new Error ("error: promise rejected!");
        } catch (e) {
            console.error(e)
        }
    }, 500);
});

resolvedPromise.then(value => {console.log(value)});
rejectedPromise.then(value => {console.log(value)});
