import useFetch from "../useFetch";
import BlogList from "./BlogList";
function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <h1>Loading ....</h1>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
}

export default Home;
