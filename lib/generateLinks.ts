export function extractItemId(url: string) {

  const patterns = [
    /itemID=(\d+)/i,
    /itemId=(\d+)/i,
    /id=(\d+)/i
  ];

  for (const pattern of patterns) {

    const match = url.match(pattern);

    if (match) {
      return match[1];
    }
  }

  return "";
}

export function generateLinks(
  weidianUrl: string
) {

  const itemId = extractItemId(weidianUrl);

  const encodedUrl =
    encodeURIComponent(weidianUrl);

  return {

    eastmallbuy:
      `https://eastmallbuy.com/web/#/item/index?tp=taobao&tid=&searchlang=en&url=${encodedUrl}&inviter=lih435602`,

    kakobuy:
      `https://www.kakobuy.com/item/details?url=${encodedUrl}`,

    oopbuy:
      `https://oopbuy.com/product/weidian/${itemId}?originKeywordUrl=${encodedUrl}`,

    joyagoo:
      `https://joyagoo.com/product?id=${itemId}&platform=WEIDIAN`,

    usfans:
      `https://www.usfans.com/product/3/${itemId}`,

    cssbuy:
      `https://www.cssbuy.com/item-micro-${itemId}.html`,

    hoobuy:
      `https://hoobuy.com/product/2/${itemId}`

  };
}