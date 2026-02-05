/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true, // recommended for Pages
};

module.exports = nextConfig;
