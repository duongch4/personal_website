import * as React from "react";
import { projectsInfo, ProjectLinks, ProjectInfo, ProjectsInfo } from "./ProjectsInfo";

export class Projects extends React.Component<any, any> {

    public render() {
        const projects: React.ReactElement[] = this.setProjects();
        return (
            <div id="projects" className="container-fluid">
                <div className="row header"><h2>Projects</h2></div>
                {
                    this.renderProjects(projects)
                }
            </div>
        );
    }

    private setProjects(): React.ReactElement[] {
        const projects: React.ReactElement[] = [];
        for (const id in projectsInfo) {
            projects.push(this.setProject(projectsInfo[id]));
        }
        return projects;
    }

    private renderProjects = (projects: React.ReactElement[]): React.ReactElement[] => {
        const result: React.ReactElement[] = [];
        for (let i = 0; i < projects.length; i += 3) {
            result.push(<div className="row">{projects[i]}{projects[i + 1]}{projects[i + 2]}</div>);
        }
        return result;
    }

    private setProject = (project: ProjectInfo): React.ReactElement => {
        return (
            <div className="col-lg-4 mb-4">
                <div className="item col-md-12">
                    <img src={project.image} className="thumb-img" alt={project.altStr} />
                    <div className="overlay">
                        <div className="text">
                            {this.setDescription(project.links, project.description)}
                            <p>{this.setSpanList(project.languages)}</p>
                            {this.setLinks(project.links)}
                        </div>
                    </div>
                </div>
                <h5><strong>{project.title}</strong> <i className={project.icon} /></h5>
            </div>
        );
    }

    private setDescription(links: ProjectLinks, description: string[]): React.ReactElement {
        return (
            links.description ?
                <p><a href={links.description} target="blank" rel="noopener noreferer">
                    {this.setSpanList(description)}
                </a></p>
                :
                <p>{this.setSpanList(description)}</p>
        );
    }

    private setLinks = (links: ProjectLinks): React.ReactElement => {
        return (
            <div>
                {
                    links.repo ?
                        <p><a href={links.repo.link} target="_blank" rel="noopener noreferrer">
                            {links.repo.id} <i className="fab fa-github" aria-hidden="true" />
                        </a></p>
                        :
                        undefined
                }
                {
                    links.pdf ?
                        <p><a href={links.pdf.link} target="_blank" rel="noopener noreferrer">
                            {links.pdf.id} <i className="fas fa-file-pdf" aria-hidden="true" />
                        </a></p>
                        :
                        undefined
                }
                {
                    links.video ?
                        <p><a href={links.video.link} target="_blank" rel="noopener noreferrer">
                            {links.video.id} <i className="fas fa-video" aria-hidden="true" />
                        </a></p>
                        :
                        undefined
                }
                {
                    links.zip ?
                        <p><a href={links.zip.link} target="_blank" rel="noopener noreferrer">
                            {links.zip.id} <i className="fas fa-file-archive" aria-hidden="true" />
                        </a></p>
                        :
                        undefined
                }
            </div>
        );
    }

    private setSpanList = (spanList: string[]): React.ReactElement[] => {
        return (
            spanList.map((value) => {
                return (
                    <span className="span-desc"><strong>{value}</strong></span>
                );
            })
        );
    }
}
