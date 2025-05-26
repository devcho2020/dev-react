interface tsSubMenu {
    name: string;
    path: string;
}

export interface tsMenu {
    name: string;
    path?: string;
    subPath?: string;
    subMenuItems?: tsSubMenu[];
}