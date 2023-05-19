const isDev = process.env.NODE_ENV !== "production";

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: isDev,
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPWA(nextConfig);
