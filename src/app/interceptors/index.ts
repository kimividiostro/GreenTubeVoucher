import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { KeyInterceptor } from "./key.interceptor";

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true }
];