/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // needed for next/image on pages
};

module.exports = nextConfig;
