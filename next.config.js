/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoicmFqaW50aCIsImEiOiJjbDlwanp2YmMwc2tpM3BvNTlqODdtOHh3In0.kq0dTcA4tET9y7a7EfnkPA",
  },
};

module.exports = nextConfig;
