import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fly Fishing Guide School',
    short_name: 'Guide School',
    description: '4-day fly fishing guide school in the Smoky Mountains of Western North Carolina.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#003366',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
