const storageKeys = {
  currentPage: "currentPage",
  currentViewType: "currentViewType",
  currentCommentPage: "currentComentPage",
  UUID: "UUID",
} as const;

export const storageManage = () => {
  const currentSession = {
    currentPage: sessionStorage.getItem(storageKeys.currentPage),
    currentViewType: sessionStorage.getItem(storageKeys.currentViewType),
    currentCommentPage: sessionStorage.getItem(storageKeys.currentCommentPage),
  };
  const currentLocal = {
    UUID: localStorage.getItem(storageKeys.UUID),
  };

  const { currentPage, currentViewType } = currentSession;
  const { UUID } = currentLocal;

  const saveCurrentCommentPageSessionStorage = (page: number) => {
    sessionStorage.setItem(storageKeys.currentCommentPage, page + "");
  };

  const saveCurrentPageSessionStorage = (page: number) => {
    sessionStorage.setItem(storageKeys.currentPage, page + "");
  };

  const saveCurrentViewTypeSessionStorage = (type: string) => {
    sessionStorage.setItem(storageKeys.currentViewType, type);
  };

  const saveUUIDLocalStorage = (id: string) => {
    localStorage.setItem(storageKeys.UUID, id);
  };

  /** 세션스토리지 키값으로 스토리지 삭제 */
  const removeSessionData = (key: keyof typeof storageKeys) => {
    sessionStorage.removeItem(storageKeys[key]);
  };

  return {
    currentPage,
    currentViewType,
    saveCurrentCommentPageSessionStorage,
    UUID,
    saveCurrentPageSessionStorage,
    saveCurrentViewTypeSessionStorage,
    saveUUIDLocalStorage,
    removeSessionData,
  };
};
