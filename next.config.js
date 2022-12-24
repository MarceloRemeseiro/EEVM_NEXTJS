/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
      "youtube.googleapis.com",
      "i.ytimg.com",
    ],
  },
};

module.exports = nextConfig;
