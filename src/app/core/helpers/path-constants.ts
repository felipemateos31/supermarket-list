import { environment } from 'src/environments/environment';

export class PathConstants {
  // auth
  static LOGIN = 'auth/signin';
  static CLOSE_SESSION = 'auth/logout';
  static RECOVERY_PASSWORD = '';
  static CHANGE_PASSWORD = '';
  static REFRESH_TOKEN = '';

  // return API endpoint
  public static getPath(path: string): string {
    return `${environment.basePath}${path}`;
  }
}
