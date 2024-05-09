import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
            <CategoryList></CategoryList>
            <br />
            <FeaturedJobs></FeaturedJobs>
            <br />
        </div>
    );
};

export default Home;