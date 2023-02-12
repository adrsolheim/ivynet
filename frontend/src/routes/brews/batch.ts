export interface Recipe {
    name: string;
}

export interface Batch {
    _id: string;
    batchNo: number;
    brewDate: any;
    brewer?: any;
    name: string;
    recipe: Recipe;
    status: string;
}