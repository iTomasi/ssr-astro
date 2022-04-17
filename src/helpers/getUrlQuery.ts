const getUrlQuery = (url: string) => {
  const params: any = {};
  const splitUrl = url.split("?");
  const search = splitUrl[1]

  if (search) {
    search.split("&").forEach((value) => {
      const split = value.split("=");

      if (split.length === 2) {
        params[split[0]] = split[1]
      }
    })
  }

  return params
};

export default getUrlQuery;