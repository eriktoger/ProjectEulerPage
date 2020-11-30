
const jwtHandler = () => {
    let inMemoryJWT:String | null = null;

    const getToken = () => inMemoryJWT;

    const setToken = (token:String) => {
        inMemoryJWT = token;
        return true;
    };

    const eraseToken = () => {
        inMemoryJWT = null;
        return true;
    }

    return {
        eraseToken,
        getToken,
        setToken,
    }
};

export default jwtHandler();
