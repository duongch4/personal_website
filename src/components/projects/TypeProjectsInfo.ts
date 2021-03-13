type LinkName = {
    id: string;
    link: string;
};

export type ProjectLinks = {
    description?: string;
    repo?: LinkName;
    pdf?: LinkName;
    video?: LinkName;
    zipX64?: LinkName;
    zipX86?: LinkName;
};

export type ProjectInfo = {
    image: {
        webp: any;
        norm: any;
    };
    altStr: string;
    title: string;
    description: string[];
    languages: string[];
    icon: string;
    links: ProjectLinks;
};

export type ProjectsInfo = {
    [id: string]: ProjectInfo;
};
