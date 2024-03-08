export const getImageUrl = (imageName) => {
  // Assuming your build process places assets in the root /assets directory
  const baseUrl = import.meta.env.PROD ? '/assets/' : '/src/assets/';
  return new URL(`${baseUrl}${imageName}`, import.meta.url).href;
};