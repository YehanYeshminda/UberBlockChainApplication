/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['cdn.sanity.io', 'uberblogapi.10upcdn.com'],
	},
};

module.exports = nextConfig;
