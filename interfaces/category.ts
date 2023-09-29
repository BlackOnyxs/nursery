export interface ICategory {
    _id           : string;
    title         : string;
    imageUrl      : string;
    showOnWeb     : boolean;
    productsCount?: number;
    
    createdAt?    : string,
    updatedAt?    : string,
}