const parseHeroText = (text: string) => {
  return text.replace(
    /<bolder>(.*?)<\/bolder>/g,
    '<span class="font-bold text-green-300">$1</span>',
  );
};
export { parseHeroText };
