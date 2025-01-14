

class LocalStorageManager {

  setLanguage(value: string) {
    localStorage.setItem('lang', value);
  }
  setToken(value: string) {
    localStorage.setItem('AcadamyToken', value);
  }
  setRole(value: string) {
    localStorage.setItem('AcadamyRole', value);
  }

  getLang(): string {
    const l = localStorage.getItem('lang');
    return l as string;
  }

  getToken(): string {
    const l = localStorage.getItem('AcadamyToken');
    return l as string;
  }
  getRole(): string {
    const l = localStorage.getItem('AcadamyRole');
    return l as string;
  }

  clearStorage() {
    localStorage.clear();
  }
}

export const Store = new LocalStorageManager();
