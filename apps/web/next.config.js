const { join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingRoot: join(__dirname, "../../../.."),
    },
};

module.exports = nextConfig;
