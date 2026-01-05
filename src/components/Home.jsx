import { cardData } from "../data";
import Card from "./Card";
function Home() {
return (
    <section id="home">
        <div className="container">
            <div className="home-header">
                <span>Join Us</span>
                <h1>Best Learning Opportunities</h1>
                <p>Access a wide range of courses and resources to enhance your skills and knowledge.
                    join our community of learners today!
                </p>
                <a href="#" className="btn btn-red ">Get Started</a>
                <a href="#" className="btn btn-transparent ">Learn More </a>
            </div>
            <div className="card-container">
                {
                    cardData.map((card) => {
                        const { title, id, bgColor, color, description, icon} = card;
                        return <Card key={id} title={title} bgColor={bgColor} color={color}
                        description={description} icon={icon} />;
                    })
                }
            </div>
        </div>
    </section>
)
}

export default Home;
