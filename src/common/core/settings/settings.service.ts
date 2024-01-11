import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor() {}

  private _settings = [];

  public get settings() {
    return this._settings;
  }

  public set settings(value) {
    this._settings = value;
  }

  public get(key, defaultValue = undefined) {
    const val = this._settings.find((setting) => setting.name === key);
    if (val === undefined) {
      return defaultValue;
    }
    return val;
  }
}
