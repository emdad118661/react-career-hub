
const Job = ({ job }) => {
    const { logo , job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div className="border border-gray-300 rounded-xl card card-compact bg-base-100">
            <figure className="mt-4"><img src={logo} width="117px" height="40px" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-2 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-2 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex text-[#757575]">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;