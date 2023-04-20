export interface PurchaseDTO {
    record: {
        userEmail: string;
        voucherAmount: number;
        currency: string;
        purchaseID: string;
        expiresAt: string;
    }

    metadata: {
        id: string,
        private: boolean,
        createdAt: string;
    }
}