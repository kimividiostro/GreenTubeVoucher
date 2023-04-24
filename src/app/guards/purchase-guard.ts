import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "../services/auth.service";


export const purchaseGuard = () => {
    const router = inject(Router);
    const service = inject(AuthService);
    return service.isUserAuthenticated() ? true : router.navigate(['']);
}