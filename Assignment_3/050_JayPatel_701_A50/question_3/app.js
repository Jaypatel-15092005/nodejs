const express = require("express");
const session = require("express-session");
const { createClient } = require("redis");
const { RedisStore } = require("connect-redis");

const app = express();

const PORT = 3000;


// =====================================
// MIDDLEWARE
// =====================================

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));


// =====================================
// EJS
// =====================================

app.set("view engine", "ejs");


// =====================================
// REDIS CLIENT
// =====================================

const redisClient = createClient({
    url: "redis://localhost:6379"
});


redisClient.on("error", (error) => {

    console.log("Redis Error:", error);

});


// =====================================
// START REDIS + SERVER
// =====================================

async function startServer() {

    try {

        await redisClient.connect();

        console.log("Redis connected successfully");


        // =====================================
        // SESSION
        // =====================================

        app.use(
            session({

                store: new RedisStore({
                    client: redisClient,

                    prefix: "question3:"
                }),

                secret: "my_redis_session_secret",

                resave: false,

                saveUninitialized: false,

                cookie: {

                    maxAge: 1000 * 60 * 60,

                    httpOnly: true

                }

            })
        );


        // =====================================
        // LOGIN PAGE
        // =====================================

        app.get("/", (req, res) => {

            if (req.session.user) {

                return res.redirect("/home");

            }

            res.render("login", {
                error: null
            });

        });


        // =====================================
        // LOGIN
        // =====================================

        app.post("/login", (req, res) => {

            const {
                username,
                password
            } = req.body;


            // Demo credentials
            if (
                username === "admin" &&
                password === "admin123"
            ) {

                req.session.user = {

                    username: username

                };


                return res.redirect("/home");

            }


            res.render("login", {

                error: "Invalid username or password"

            });

        });


        // =====================================
        // AUTHENTICATION MIDDLEWARE
        // =====================================

        function isAuthenticated(req, res, next) {

            if (req.session.user) {

                next();

            } else {

                res.redirect("/");

            }

        }


        // =====================================
        // PROTECTED ROUTE 1
        // =====================================

        app.get(
            "/home",
            isAuthenticated,
            (req, res) => {

                res.render("home", {

                    username:
                        req.session.user.username

                });

            }
        );


        // =====================================
        // PROTECTED ROUTE 2
        // =====================================

        app.get(
            "/profile",
            isAuthenticated,
            (req, res) => {

                res.render("profile", {

                    username:
                        req.session.user.username

                });

            }
        );


        // =====================================
        // LOGOUT
        // =====================================

        app.get("/logout", (req, res) => {

            req.session.destroy((error) => {

                if (error) {

                    console.log(
                        "Logout error:",
                        error
                    );

                    return res.send(
                        "Unable to logout"
                    );

                }


                res.redirect("/");

            });

        });


        // =====================================
        // SERVER
        // =====================================

        app.listen(PORT, () => {

            console.log(
                `Server running at http://localhost:${PORT}`
            );

        });

    } catch (error) {

        console.log(
            "Unable to start server:"
        );

        console.log(error.message);

    }

}


startServer();