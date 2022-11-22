import React, { Component } from "react";

uploadImage = async (uri) => {
    const data = new Form Data();
    let filename = uri.split("/")[uri.split("/").length - 1]
    let type = `image/${uri.split('.')[uri.split('.').length-1]}`
    const fileToUpload = {
        uri : uri,
        name : filename,
        type : type,
    };
data.append("digit", filetoUpload);
fetch("https://f292a3137990.ngrok.io/predict-digit",{
    method: "POST",
    body: data,
    headers: {
        "content-type": "multipart/form-data",
    },
})
    .then((response) => response.json())
    .then((result) => {
        console.log("Success:", result);
    })
}

getPermissionAsync = async () => {
    if (Platform.OS !== "web"){
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
        }
    }
};