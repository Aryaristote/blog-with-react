import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {/* show the not find data and desable loading, give the error message */}
      {error && <div>{ error }</div>}
      {/* show the pending preview while the data is not ready */}
      {isPending && <div>Loading ...</div>}
      {/* setBlock is null by default, so while json data is not loarded do not show blocklist component */}
      {blogs && <BlogList blogs={blogs} title={ "All the blogs" } /> }
      {/* Initialize the props blogs = props store in array>const || title=props store directly into a string */}
    </div>
  );
}
 
export default Home;