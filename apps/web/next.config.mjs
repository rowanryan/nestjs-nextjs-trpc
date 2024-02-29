import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

/** @type {import('next').NextConfig} */
export default {
    output: "standalone",
    experimental: {
        outputFileTracingRoot: path.dirname(__filename),
    },
};
