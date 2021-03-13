import { prmt5 } from "./projects_detail/Bioinformatics";
import { disney } from "./projects_detail/Disney";
import { game } from "./projects_detail/Game";
import { deepCloth } from "./projects_detail/DeepCloth";
import { movieApp } from "./projects_detail/MovieApp";
import { objectDetection } from "./projects_detail/ObjectDetection";
import { imageCompression } from "./projects_detail/ImageCompression";
import { multipleClassifiers } from "./projects_detail/MultipleClassifiers";
import { personalWebsite } from "./projects_detail/PersonalWebsite";

import { ProjectsInfo } from "./TypeProjectsInfo";

export const projectsInfo: ProjectsInfo = {
    deepCloth,
    disney,
    game,

    prmt5,
    personalWebsite,
    movieApp,

    objectDetection,
    imageCompression,
    multipleClassifiers,
};
