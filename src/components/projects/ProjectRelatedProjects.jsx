import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = ({ id }) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const currentProject = singleProjectData.find(project => project.id === id);

	if (!currentProject) return null;

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{currentProject.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{currentProject.RelatedProject.Projects.map((project) => {
					return (
						<Link to={`/projects/single-project/${project.id}`} aria-label="Single Project">
							<img
								src={project.img}
								className="rounded-xl cursor-pointer"
								alt={project.title}
								key={project.id}
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
