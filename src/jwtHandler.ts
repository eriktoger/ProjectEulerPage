const jwtHandler = () => {
    let token: String | null = null;
    let isSuperAdmin = false;
    let isLoggedIn = false;
    const get = () => {
        return {token: token, isLoggedIn, isSuperAdmin};
    };

    const set = (newToken: String, superAdmin: boolean) => {
        token = newToken;
        isLoggedIn = token !== null;
        isSuperAdmin = superAdmin;
    };

    const erase = () => {
        token = null;
        isLoggedIn = false;
        isSuperAdmin = false;
    }

    return {
        erase,
        get,
        set,
    }
};

export default jwtHandler();
