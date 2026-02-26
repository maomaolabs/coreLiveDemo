/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // El Image Optimizer de Next.js no funciona en exports estáticos.
    // GitHub Pages requiere imágenes sin optimización server-side.
    unoptimized: true,
  },
};

export default nextConfig;

