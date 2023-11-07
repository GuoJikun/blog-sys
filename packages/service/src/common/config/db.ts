// import { Article } from "../entities/article.entity";

// const config: { [x: string]: any } = {
//     type: "mysql",
//     host: process.env.DATABASE_HOST,
//     port: parseInt(process.env.DATABASE_PORT),
//     username: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: "blogs",
//     entities: [],
//     autoLoadEntities: true,
//     synchronize: true,
// };
const config: { [x: string]: any } = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root123",
    database: "blogs",
    entities: ["../entities/*"],
    autoLoadEntities: true,
    synchronize: true,
};
export default config;
