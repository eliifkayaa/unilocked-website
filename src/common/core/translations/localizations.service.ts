import {Injectable} from '@angular/core';
import { Settings } from '@common/auth/settings/settings.service';
import { AppHttpClient } from '@common/core/http/http.service';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class Localizations {
    constructor(private http: AppHttpClient, private settings: Settings) {}

    /**
     * Get all available  localizations.
     */
    public all(): Observable<{localizations: any[]}> {
        return this.http.get('localizations');
    }

    /**
     * Get localization by specified name.
     */
    public get(name: string): Observable<{localization: any}> {
        return this.http.get('localizations/' + name);
    }

    /**
     * Create new localization.
     */
    public create(params: object): Observable<{localization: any}> {
        return this.http.post('localizations', params);
    }

    /**
     * Update specified localization.
     */
    public update(id: number, params: object): Observable<{localization: any}> {
        return this.http.put('localizations/' + id, params);
    }

    /**
     * Delete specified localization.
     */
    public delete(id: number) {
        return this.http.delete('localizations/' + id);
    }

    /**
     * Set specified localization as default for new users.
     */
    public setDefault(localization: any): Observable<any> {
        const params = {server: {app_locale: localization.language}};
        return this.settings.save(params);
    }
}
