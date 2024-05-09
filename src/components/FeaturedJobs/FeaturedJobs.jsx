import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { data } from "autoprefixer";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json(data))
        .then(data => setJobs(data));
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p className="mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <br />
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : "text-center"}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn bg-[#7E90FE]">See all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;