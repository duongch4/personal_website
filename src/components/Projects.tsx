import React from "react";
import { projectsInfo, ProjectLinks, ProjectInfo } from "./ProjectsInfo";

export const Projects = () => {
    const renderSpanList = (spanList: string[]): React.ReactElement[] => (
        spanList.map((value, index) => (<span className="span-desc" key={index}><strong>{value}</strong></span>))
    );

    const renderDescription = (links: ProjectLinks, description: string[]): React.ReactElement => (
        links.description
            ? (<p><a href={links.description} target="blank" rel="noopener noreferer">{renderSpanList(description)}</a></p>)
            : <p>{renderSpanList(description)}</p>
    );

    const renderLink = (link: string, id: string, iconClassName: string): React.ReactElement => (
        <p><a href={link} target="_blank" rel="noopener noreferrer">
            {id} <i className={iconClassName} aria-hidden="true" />
        </a></p>
    );

    const renderLinks = (links: ProjectLinks): React.ReactElement => (
        <div>
            {links.repo ? (
                renderLink(links.repo.link, links.repo.id, "fab fa-github")
            ) : undefined}
            {links.pdf ? (
                renderLink(links.pdf.link, links.pdf.id, "fas fa-file-pdf")
            ) : undefined}
            {links.video ? (
                renderLink(links.video.link, links.video.id, "fas fa-video")
            ) : undefined}
            {links.zipX64 ? (
                renderLink(links.zipX64.link, links.zipX64.id, "fas fa-file-archive")
            ) : undefined}
            {links.zipX86 ? (
                renderLink(links.zipX86.link, links.zipX86.id, "fas fa-file-archive")
            ) : undefined}
        </div>
    );

    const renderProject = (project: ProjectInfo): React.ReactElement => (
        <div className="col-lg-4 mb-4">
            <div className="item col-md-12">
                <img src={project.image} className="thumb-img" alt={project.altStr} />
                <div className="overlay">
                    <div className="text">
                        {renderDescription(project.links, project.description)}
                        <p>{renderSpanList(project.languages)}</p>
                        {renderLinks(project.links)}
                    </div>
                </div>
            </div>
            <h5>
                <span>
                    <strong>{project.title}</strong>
                    &nbsp;
                    {project.icon.includes(".svg") ? <img src={project.icon} alt="Icon Image" /> : <i className={project.icon} />}
                </span>
            </h5>
        </div>
    );

    const renderProjects = (): React.ReactElement[] => {
        const projects: React.ReactElement[] = [];
        for (const id in projectsInfo) {
            projects.push(renderProject(projectsInfo[id]));
        }
        return projects;
    };

    return (
        <div id="projects" className="container-fluid">
            <div className="row header"><h2>Projects</h2></div>
            <div className="row">
                {renderProjects()}
            </div>
        </div>
    );
};
