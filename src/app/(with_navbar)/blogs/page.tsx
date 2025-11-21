"use client";

import { useGetAllArticlesFromDbQuery } from "@/redux/api/articlesApi";
import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";

const BlogsPage = () => {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetch("articles.json")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, []);
  const { data: blogs, isLoading } = useGetAllArticlesFromDbQuery({});

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-[5.1%] py-[80px] md:py-[120px]">
      {/* title section */}
      <div className="relative w-full h-auto py-[20px] flex items-center gap-5">
        <h3 className="inline-flex items-center text-[20px] font-medium">
          Latest{" "}
          <span className="text-[14px] font-light ml-[10px] opacity-80">
            Articles
          </span>
        </h3>
        <i className="relative w-full h-px bg-text-gray"></i>
      </div>

      {/* all cards */}
      {!isLoading && (
        <div className="relative w-full h-auto mt-[30px] grid grid-cols-12 2xl:grid-cols-10 gap-[30px]">
          {blogs?.data.map((blog: TBlog) => (
            <Link
              key={blog._id}
              href={`/blogs/${blog._id}`}
              className="parent_card relative w-full h-auto block bg-white bg-opacity-10 rounded-[20px] overflow-hidden col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-2 shadow-my-shadow"
            >
              <div className="main-banner relative w-full h-auto">
                <Image
                  src={blog.image}
                  layout="fixed"
                  width={1000} // Set a large width for the initial rendering
                  height={230}
                  className="relative w-full h-[230px] object-cover object-center rounded-none filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                  alt="Article Image"
                />
              </div>
              <div className="relative w-full py-[20px] p-[20px]">
                <h3 className="mb-[15px] truncate line-clamp-2 overflow-hidden text-ellipsis relative w-full text-text text-[18px] md:text-[26px] font-medium">
                  {blog.title}
                </h3>
                <p className="relative w-full max-w-[46ch] text-text-gray text-[15px]">
                  {blog.desc.slice(0, 120)}...
                </p>
                <h4 className="relative mt-[30px] flex justify-between items-center text-[14px] font-light text-text-gray">
                  <span className="inline-flex items-center gap-[5px]">
                    {blog.date}
                  </span>
                  <span className="inline-flex items-center gap-[5px]">
                    <FaRegClock className="w-[14px] text-text" />

                    <span>{blog.readTime}</span>
                  </span>
                </h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
