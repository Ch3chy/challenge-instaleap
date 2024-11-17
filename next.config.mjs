/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/orders",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
