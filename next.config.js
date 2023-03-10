/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      "cdn.pixabay.com",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
      "youtube.googleapis.com",
      "i.ytimg.com",
    ],
  },
  exportPathMap: async function () {
    return {
      "/actividades/[id]": { page: "/actividades/[id]" },
    };
  },
};

module.exports = nextConfig;
