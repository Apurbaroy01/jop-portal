import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const JobApply = () => {
    const{id}=useParams();
    const {user}=useAuth();
    // console.log(id,user)


    const handleSubmit=(e)=>{
        e.preventDefault();
        const from=e.target;
        const linkedin=from.linkedin.value;
        const github=from.github.value;
        const resume=from.resume.value;

        console.log(linkedin, github, resume)

        const jobApplication ={
            job_id: id,
            applicant_email:user.email,
            linkedin,
            github,
            resume

        }

        fetch('http://localhost:5000/job-applications',{
            method: 'POST',
            headers:{
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold w-90 text-center">Apply Now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">LinkedIn</label>
                                <input type="text" className="input" placeholder="LinkedIn" name="linkedin"/>
                                <label className="label">GitHub</label>
                                <input type="text" className="input" placeholder="GitHub" name="github"/>
                                <label className="label">Resume</label>
                                <input type="text" className="input" placeholder="Resume" name="resume"/>

                                <button className="btn btn-neutral mt-4">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;