export const checkDocker = () => {
    if (process.env.NODE_ENV === "production") {
        return "https://www.598623u-no-on.fr/server-be";
        // return "10.5.0.5";
    } else {
        return "http://10.5.0.5/server-be";
    }
};