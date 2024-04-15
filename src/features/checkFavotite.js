const checkFavorite = (specialist, favoriteList) => {
  const index = favoriteList.findIndex((item) => item.id === specialist.id);

  if (index !== -1) {
    return "favorite";
  }
  return;
};
export default checkFavorite;
