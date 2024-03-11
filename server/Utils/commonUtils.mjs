
let userObject = {
    role: "",
    permissions: [],
    tokenExpiryTime: 0
}

export const generateToken = () => {
    userObject.role = "Administrator";
    userObject.permissions = ["ADD", "DELETE", "UPDATE"];
    userObject.tokenExpiryTime = 24;

    return userObject;
}

export const generateResponse  = (data, statusCode, statusMessage) => {
    let response = {
        statusCode: 0,
        statusMessage: "",
        data: {}
    }

    response.data = data;
    response.statusCode = statusCode;
    response.statusMessage = statusMessage;

    return response;
}