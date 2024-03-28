import mysql from "mysql2";

export default mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "Toolbox"
});