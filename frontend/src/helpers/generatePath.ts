export const generateResourcePath = (category: string) => {
  return `/resources?category=${encodeURIComponent(category)}`;
};
