export const useGetQueryParam = (param: string) => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }
  return null;
};
