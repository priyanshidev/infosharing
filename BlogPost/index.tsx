import ArrorDownRight from "@/icons/ArrorDownRight";
import React from "react";
import Image from "next/image";

const BlogPost = () => {
  const DATA = [
    {
      username: "r/Indiangamers",
      time: "2 days ago",
      title: "Global Climate Summit Addresses Urgent Climate Action",
      detail:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ridiculus consectetur gravida maecenas. Cum vitae mi sit faucibus morbi nulla. Quis sed libero consectetur erat sed amet ipsum. Ut odio ultrices lacus duis convallis mauris nec amet.",
      img: "/Image/socialmedia.png",
      userimg: "/Image/gentlemanimg1.jpg",
    },
    {
      username: "r/Indiangamers",
      time: "2 days ago",
      title: "Global Climate Summit Addresses Urgent Climate Action",
      detail:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ridiculus consectetur gravida maecenas. Cum vitae mi sit faucibus morbi nulla. Quis sed libero consectetur erat sed amet ipsum. Ut odio ultrices lacus duis convallis mauris nec amet.",
      img: "/Image/leafBlog.png",
      userimg: "/Image/gentlemanimg1.jpg",
    },
    {
      username: "r/Indiangamers",
      time: "2 days ago",
      title: "Global Climate Summit Addresses Urgent Climate Action",
      detail:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ridiculus consectetur gravida maecenas. Cum vitae mi sit faucibus morbi nulla. Quis sed libero consectetur erat sed amet ipsum. Ut odio ultrices lacus duis convallis mauris nec amet.",
      img: "/Image/mettingblog.png",
      userimg: "/Image/gentlemanimg1.jpg",
    },
    {
      username: "r/Indiangamers",
      time: "2 days ago",
      title: "Global Climate Summit Addresses Urgent Climate Action",
      detail:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ridiculus consectetur gravida maecenas. Cum vitae mi sit faucibus morbi nulla. Quis sed libero consectetur erat sed amet ipsum. Ut odio ultrices lacus duis convallis mauris nec amet.",
      img: "/Image/socialmedia.png",
      userimg: "/Image/gentlemanimg1.jpg",
    },
    {
      username: "r/Indiangamers",
      time: "2 days ago",
      title: "Global Climate Summit Addresses Urgent Climate Action",
      detail:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ridiculus consectetur gravida maecenas. Cum vitae mi sit faucibus morbi nulla. Quis sed libero consectetur erat sed amet ipsum. Ut odio ultrices lacus duis convallis mauris nec amet.",
      img: "/Image/leafBlog.png",
      userimg: "/Image/gentlemanimg1.jpg",
    },
    {
      username: "r/Indiangamers",
      time: "2 days ago",
      title: "Global Climate Summit Addresses Urgent Climate Action",
      detail:
        "Lorem ipsum dolor sit amet consectetur. Vestibulum ridiculus consectetur gravida maecenas. Cum vitae mi sit faucibus morbi nulla. Quis sed libero consectetur erat sed amet ipsum. Ut odio ultrices lacus duis convallis mauris nec amet.",
      img: "/Image/mettingblog.png",
      userimg: "/Image/gentlemanimg1.jpg",
    },
  ];
  const topics = [{ text: "india" }, { text: "Architected" }];
  return (
    <>
      <div className="pt-8">
        <div className=" bg-slate-100 pt-8">
          <div className="container mx-auto flex flex-row justify-between">
            <div className="flex justify-between font-semibold md:text-4xl text-2xl leading-tight text-slate-950 px-4">
              All Blog Posts
            </div>
            <div className="flex">
              <div className="font-semibold md:text-base text-xs leading-6 text-white py-2 md:px-8 px-4 bg-primary rounded-md p-1 flex items-center justify-center text-regular duration-300 ease-in-outs">
                {" "}
                View All Post{" "}
              </div>
            </div>
          </div>
          <div className="container mx-auto w-full">
            <div className="relative mx-auto container mt-15 w-full">
              <div className="container mx-auto w-full flex flex-wrap justify-center gap-7 lg:flex-nowrap pt-8 ">
                {DATA?.map(
                  ({ userimg, title, detail, username, time, img }) => (
                    <div className="relative w-full">
                      <div className="overflow-hidden mb-7 px-4">
                        <Image
                          width={427}
                          height={260}
                          alt="image"
                          className="md:h-64 h-48 w-full duration-300 "
                          src={img}
                        />
                      </div>
                      <div className="flex flex-row gap-2 px-4">
                        <div>
                          <img
                            className="rounded-full h-30 w-30 "
                            src={userimg}
                          />
                        </div>
                        <div className="font-semibold text-base leading-6 text-slate-600 tracking-wide">
                          {username}
                        </div>
                        <div>
                          <li className="list-disc font-normal text-sm leading-5 text-slate-500 tracking-wide">
                            {time}
                          </li>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between px-4">
                        <div className="pt-4 mb-3 md:text-lg text-base xl:text-xl font-semibold leading-7 tracking-wide text-slate-950">
                          {title}
                        </div>
                        <div className="pt-4">
                          <ArrorDownRight />
                        </div>
                      </div>
                      <div className="border-b md:border-hidden">
                        <p className="font-normal md:text-base text-sm leading-6 tracking-wide px-4">
                          {detail}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-4 md:pb-12 pb-8 px-4">
                          {" "}
                          {topics.map((item, index) => (
                            <div
                              key={index}
                              className="gap-2 flex flex-row flex-wrap border border-slate-200 py-2 px-2 rounded-full border-1 text-sm"
                            >
                              <p className="font-medium text-sm leading-5 text-slate-500 px-4">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
