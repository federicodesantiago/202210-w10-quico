export type InfoGentlemanType = {
    id: number;
    name: string;
    status: string;
    profession: string;
    twitter: string;
    picture: string;
    alternativeText: string;
    selected: boolean;
    delete: false;
};

export type InfoGentleman = Array<InfoGentlemanType>;
