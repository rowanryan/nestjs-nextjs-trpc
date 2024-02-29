const { join } = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
        outputFileTracingRoot: join(__dirname, "../../"),
    },
};
