/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: process.env.ENV === "build" ? "/pnchr" : undefined,
};

module.exports = nextConfig;
