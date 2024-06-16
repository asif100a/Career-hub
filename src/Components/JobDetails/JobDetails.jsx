import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getItem, saveToLS } from "../../Utility/localStorage";
import { Helmet } from "react-helmet";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyBtn = (id) => {
        saveToLS(id)
        toast('You have applied successfully')
        // console.log(id);
        const storedData = getItem()
        console.log(storedData);
    };

    return (
        <div>
            <Helmet>
                <title>Career Hub: {id}</title>
            </Helmet>
            <h1 className="text-4xl">Job Details</h1>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="cols-span-3 border">

                </div>
                <div>
                    <div className="border">
                        <h3>Job Details</h3>
                        <hr className="my-4" />
                        <div><p></p>
                            <p>Salary : 100K - 150K (Per Month)</p>
                        </div>
                        <div><p></p>
                            <p>Job Title : Product Designer</p>
                        </div>
                    </div>

                    <div className="border">
                        <h3>Contact Information</h3>
                        <hr className="my-4" />
                        <div><p></p>
                            <p>Phone : 01750-00 00 00</p>
                        </div>
                        <div><p></p>
                            <p>Email : info@gmail.com</p>
                        </div>
                        <div><p></p>
                            <p>Address : Dhanmondi 32, Sukrabad
                                Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <button onClick={() => handleApplyBtn(id)} className="btn">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;