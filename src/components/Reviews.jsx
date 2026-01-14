import { ratingData } from "../data"
import Review from "./Review";
import SectionHeader from "./SectionHeader"


function Reviews() {
  return (
    <section id="reviews">
        <div className="container">
            <SectionHeader title={"Each and every client is important"}
            description={"Discover what our students are saying in the Reviews section ! Real feedback learners who have experienced and benefited from our courses"} />
            <div className="ratings">
                {ratingData.map((rating) => {
                    const {id, img, name, occupation, description, stars} = rating;
                    return <Review key={id} img={img} name={name} occupation={occupation} description={description} stars={stars}/>
                })}
            </div>
        </div>
      
    </section>
  )
}

export default Reviews
