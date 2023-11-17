/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'covers.openlibrary.org',
            port: '',
            pathname: '/b/**',
          },
          {
            protocol: 'https',
            hostname: 'books.google.com',
            port: '',
            pathname: '/books/**',
          },
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
            pathname: '/books/**',
          },
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            port: '',
            pathname: '/img/**',
          },
        ],
      },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}

module.exports = nextConfig
