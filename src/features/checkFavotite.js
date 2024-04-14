const checkFavorite = (specialist, favoriteList, userId) => {
  const item = favoriteList.filter(
    (item) => item.id === specialist.id && item.owner === userId
  );

  if (item.length > 0) {
    return "favorite";
  }
  return;
};
export default checkFavorite;
