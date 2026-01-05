
import { coursesData } from "../data"
import Course from "./Course";
import SectionHeader from "./SectionHeader"


function Courses() {
  return (
    <section id='courses'>
    <div className="container">
        <SectionHeader  title="Make Online education acessible" 
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
    </div>
    <div className="courses-container">
        {coursesData.map((course) => {
           const { img, department, title, id, rating, description, sales, price, discount, duration, lessons } = course;
            return (
            <Course key={id} img={img} department={department} title={title} rating={rating} description={description} sales={sales} price={price} discount={discount} duration={duration} lessons={lessons}/>
        );
        })}
    </div>
    </section>
  )
}

export default Courses
