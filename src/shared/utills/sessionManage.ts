const storageKeys = {
  currentPage: "currentPage",
  currentViewType: "currentViewType",
} as const;

export const sessionManage = () => {
  const currentSession = {
    currentPage: sessionStorage.getItem(storageKeys.currentPage),
    currentViewType: sessionStorage.getItem(storageKeys.currentViewType),
  };

  const { currentPage, currentViewType } = currentSession;

  const saveCurrentPageSessionStorage = (page: number) => {
    sessionStorage.setItem(storageKeys.currentPage, page + "");
  };

  const saveCurrentViewTypeSessionStorage = (type: string) => {
    sessionStorage.setItem(storageKeys.currentViewType, type);
  };

  /** 세션스토리지 키값으로 스토리지 삭제 */
  const removeSessionData = (key: keyof typeof storageKeys) => {
    sessionStorage.removeItem(storageKeys[key]);
  };

  return {
    currentPage,
    currentViewType,
    saveCurrentPageSessionStorage,
    saveCurrentViewTypeSessionStorage,
    removeSessionData,
  };
};
