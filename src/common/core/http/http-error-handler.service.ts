import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Translations } from '../translations/translations.service';
import { Injectable } from '@angular/core';
import { Toast } from '@common/core/toast/toast/toast.service';



@Injectable({
  providedIn: 'root'
})
export abstract class HttpErrorHandlerService {
  protected constructor(
    protected i18n: Translations,
    protected toast: Toast,
) {}

public handle(response: HttpErrorResponse, uri?: string, options: {[key: string]: any} = {}): Observable<never> {
    const errResponse = ((typeof response.error === 'object' && response.error !== null) ? response.error : {});
    errResponse.status = response.status;
    errResponse.type = 'http';

    if ( ! errResponse.errors) {
        errResponse.errors = {};
    }

    Object.keys(errResponse.errors).forEach(key => {
        const message = errResponse.errors[key];
        errResponse.errors[key] = Array.isArray(message) ? message[0] : message;
    });


    return throwError(errResponse);
}

/**
 * Redirect user to login page or show toast informing
 * user that he does not have required permissions.
 */
protected abstract handle403Error(response: any);
}
