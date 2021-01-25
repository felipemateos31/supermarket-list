export interface IList {
    id: number;
    titleList: string;
    creatAt: Date;
    endAt?: Date;
    complete?: boolean;
    items?: IListItem[];
    total?: number;
}

export interface IListItem {
    id: number;
    description: string;
    price?: number;
    quantity: number;
    complete?: boolean;
}
