export interface EntityElement {
    entityName: string;
    id: string;
}

export interface BackEndContext {
    espace: string;
    entity: EntityElement;
}
