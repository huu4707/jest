const ERROR = {
    NAME_NOT_EMPTY: "Name not empty",
    NAME_NOT_EXSIT: "Name not exsit",
    NAME_IS_VALID: "Name not valid",
}

const arrayName = ["huu", "tham"]

function getName(name) {
    if(!name) {
        return ERROR.NAME_NOT_EMPTY
    }
    if(!arrayName.includes(name)) {
        return ERROR.NAME_NOT_EXSIT;
    }
    return name;
}


function getNamePromise(name) {
    return new Promise((resolve, reject) => {
        if(!name) {
            return reject(ERROR.NAME_NOT_EMPTY)
        }
        if(!arrayName.includes(name)) {
            return reject(ERROR.NAME_NOT_EXSIT);
        }
        return resolve(name);
    })
}
module.exports = {
    getName,
    ERROR,
    getNamePromise
}