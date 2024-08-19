/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config, { dev }) {
      if (dev) {
        console.log('Webpack Dev Mode');
      } else {
        console.log('Webpack Prod Mode');
      }
      return config;
    },
  };
  
  export default nextConfig;
  