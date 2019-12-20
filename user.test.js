const { getName, ERROR, getNamePromise } = require('./services/user')

test('get name', () => {
    expect(getName('huu')).toBe("huu")
    expect(getName('huu1')).toBe(ERROR.NAME_NOT_EXSIT)
    expect(getName('')).toBe(ERROR.NAME_NOT_EMPTY)
})

test('get name promise huu equals huu', async () => {
    let data = await getNamePromise("huu");
    expect(data).toBe("huu");
})

test('get name promise huu equals huu use resolves', async () => {
    await expect(getNamePromise("huu")).resolves.toBe("huu");
})

test('get name promise null equals "Name not empty"', async () => {
    try {
        let data = await getNamePromise();
    } catch (error) {
        expect(error).toBe(ERROR.NAME_NOT_EMPTY);
    }
})

test('get name promise null equals "Name not exsit"', async () => {
    await expect(getNamePromise("abcd")).rejects.toMatch(ERROR.NAME_NOT_EXSIT);
})
