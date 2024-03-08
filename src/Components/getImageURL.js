export function getImageUrl(imageName) {
    const basePath = import.meta.env.VITE_PUBLIC_URL || '';
    return `/assets/${imageName}`;
  }