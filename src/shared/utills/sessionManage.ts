const storageKeys = {
  currentPage: "currentPage",
} as const;

export const sessionManage = () => {
  const currentSession = {
    currentPage: sessionStorage.getItem(storageKeys.currentPage),
  };

  const { currentPage } = currentSession;

  const saveCurrentPageSessionStorage = (page: number) => {
    sessionStorage.setItem(storageKeys.currentPage, page + "");
  };

  /** 세션스토리지 키값으로 스토리지 삭제 */
  const removeSessionData = (key: keyof typeof storageKeys) => {
    sessionStorage.removeItem(storageKeys[key]);
  };

  return {
    currentPage,
    saveCurrentPageSessionStorage,
    removeSessionData,
  };
};
