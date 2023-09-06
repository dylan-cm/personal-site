/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/dylan-cm/blog/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
