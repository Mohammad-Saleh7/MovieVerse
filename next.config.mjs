import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

export default withNextIntl(nextConfig);
