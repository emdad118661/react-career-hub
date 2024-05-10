import { useLoaderData, useParams } from "react-router-dom";
const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    return (
        <div>
            <h2 className="text-4xl text-center">Job Details</h2>
            <br />
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3">
                    <p><b>Job Description: </b>{job.job_description}</p>
                    <br />
                    <p><b>Job Responsibility: </b>{job.job_responsibility}</p>
                    <br />
                    <p><b>Educational Requirements:</b></p>
                    <br />
                    <p>{job.educational_requirements}</p>
                    <br />
                    <p><b>Experiences:</b></p>
                    <br />
                    <p>{job.experiences}</p>
                    <br />
                    <br />
                </div>
                <div>
                    <div className="w-full mb-2 border border-gray-300 card bg-violet-100">
                        <div className="card-body">
                            <h2 className="font-bold">Job Details</h2>
                            <hr/>
                            <p><b>Salary: </b>{job.salary}</p>
                            <p><b>Job Title: </b>{job.job_title}</p>
                            <h2 className="font-bold">Contact Information</h2>
                            <hr />
                            <p><b>Phone: </b>{job.contact_information.phone}</p>
                            <p><b>Email: </b>{job.contact_information.email}</p>
                            <p><b>Address: </b>{job.contact_information.address}</p>
                        </div>
                    </div>
                    <button className="w-full btn btn-primary">Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;