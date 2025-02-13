const getPathList = (pathname: string): string[] =>
  pathname.split('/').filter(Boolean);

export default getPathList;
