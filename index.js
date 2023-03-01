"use strict";

import axios from "axios";

var connectToDB = function (dbName, dbOwner, options) {
    var returning;
    axios.get(`https://repldb.goodnessdavid.repl.co/database?name=${dbName}&owner=${dbOwner ? dbOwner : ""}, `, options ? options : undefined)
        .then(res => returning = res)
        .catch(err => { throw err })
    console.log(typeof returning);
    return returning;
};

console.log(connectToDB("test-db-name", "GoodnessDavid"));

export {
    connectToDB
};