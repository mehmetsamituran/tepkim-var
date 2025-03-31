export interface Brand {
    id: string;
    name: string;
    category: string;
    description?: string;
}

export interface Vote {
    id: string;
    email: string;
    brandId: string;
    category: string;
    comment?: string;
    createdAt: Date;
}

export interface Category {
    id: string;
    name: string;
}