import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {

    return (
        <div>
            <div>
                <Helmet>
                    <title>Career Hub | Home</title>
                </Helmet>
                <Banner></Banner>
                <CategoryList></CategoryList>
            </div>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;