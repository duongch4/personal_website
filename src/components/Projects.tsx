import React from "react";
import { projectsInfo, ProjectLinks, ProjectInfo } from "./ProjectsInfo";

export const Projects = () => {
    const setSpanList = (spanList: string[]): React.ReactElement[] => (
        spanList.map((value, index) => (<span className="span-desc" key={index}><strong>{value}</strong></span>))
    );

    const setDescription = (links: ProjectLinks, description: string[]): React.ReactElement => (
        links.description
            ? (<p><a href={links.description} target="blank" rel="noopener noreferer">{setSpanList(description)}</a></p>)
            : <p>{setSpanList(description)}</p>
    );

    const setLinks = (links: ProjectLinks): React.ReactElement => (
        <div>
            {links.repo ? (
                <p><a href={links.repo.link} target="_blank" rel="noopener noreferrer">
                    {links.repo.id} <i className="fab fa-github" aria-hidden="true" />
                </a></p>
            ) : undefined}
            {links.pdf ? (
                <p><a href={links.pdf.link} target="_blank" rel="noopener noreferrer">
                    {links.pdf.id} <i className="fas fa-file-pdf" aria-hidden="true" />
                </a></p>
            ) : undefined}
            {links.video ? (
                <p><a href={links.video.link} target="_blank" rel="noopener noreferrer">
                    {links.video.id} <i className="fas fa-video" aria-hidden="true" />
                </a></p>
            ) : undefined}
            {links.zipX64 ? (
                <p><a href={links.zipX64.link} target="_blank" rel="noopener noreferrer">
                    {links.zipX64.id} <i className="fas fa-file-archive" aria-hidden="true" />
                </a></p>
            ) : undefined}
            {links.zipX86 ? (
                <p><a href={links.zipX86.link} target="_blank" rel="noopener noreferrer">
                    {links.zipX86.id} <i className="fas fa-file-archive" aria-hidden="true" />
                </a></p>
            ) : undefined}
        </div>
    );

    const setProject = (project: ProjectInfo): React.ReactElement => (
        <div className="col-lg-4 mb-4">
            <div className="item col-md-12">
                <img src={project.image} className="thumb-img" alt={project.altStr} />
                <div className="overlay">
                    <div className="text">
                        {setDescription(project.links, project.description)}
                        <p>{setSpanList(project.languages)}</p>
                        {setLinks(project.links)}
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

    const setProjects = (): React.ReactElement[] => {
        const projects: React.ReactElement[] = [];
        for (const id in projectsInfo) {
            projects.push(setProject(projectsInfo[id]));
        }
        return projects;
    };

    const renderProjects = (projects: React.ReactElement[]): React.ReactElement[] => {
        const result: React.ReactElement[] = [];
        for (let i = 0; i < projects.length; i += 3) {
            result.push(<div className="row">{projects[i]}{projects[i + 1]}{projects[i + 2]}</div>);
        }
        return result;
    };

    const render = () => {
        const projects: React.ReactElement[] = setProjects();
        return (
            <div id="projects" className="container-fluid">
                <div className="row header"><h2>Projects</h2></div>
                {renderProjects(projects)}
            </div>
        );
    };

    return render();
};
