import "index.css";
import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";

import {
  HeartSvg,
  CommentSvg,
  MessageSvg,
  SaveSvg,
} from "../../SVGs/SvgElements";

const Post = (props) => {
  const [randomNumsArr, setRandomNumsArr] = useState<number[]>([]);

  function generateRand() {
    const randomString = Math.random();
    return randomString;
  }

  useEffect(() => {
    setRandomNumsArr([generateRand(), generateRand()]);
  }, []);

  return (
    <div className="mt-4 flex min-h-[80vh] w-screen flex-col min-[470px]:w-[29.5rem]">
      <PostHeader username={props.username} />
      <div className="flex h-[62%] w-full cursor-pointer rounded-[0.2rem]">
        <img
          src={`${process.env.REACT_APP_PRIMARY_IMAGES_ENDPOINT}/?${props.category}`}
          alt=""
          className="load w-full rounded-t-[0.2rem] object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col gap-2 p-3">
        <div className="flex items-center justify-between gap-2 py-2">
          <div className="flex gap-4">
            <HeartSvg cursor="pointer" />
            <CommentSvg />
            <MessageSvg />
          </div>
          <SaveSvg />
        </div>
        <div className="flex items-center gap-2">
          <div className="loading h-5 w-5 cursor-pointer rounded-full border">
            <img
              src={`${process.env.REACT_APP_SECONDARY_IMAGES_ENDPOINT}?random=${randomNumsArr[1]}`}
              alt=""
              className="rounded-full"
              loading="lazy"
            />
          </div>
          <p className="text-sm font-medium text-white">
            Liked by <span className="cursor-pointer font-bold">cristiano</span>{" "}
            and <span className="cursor-pointer font-bold">75.6M others</span>
          </p>
        </div>
      </div>
      <div className="flex items-center px-2 py-1 text-white scrollbar-hide">
        {props.caption ? (
          <p className="text-sm">
            <span className="cursor-pointer font-bold">{props.username} </span>
            {props.caption}
          </p>
        ) : (
          <p className="text-sm text-white">
            <span className="cursor-pointer font-bold">{props.username} </span>
            Finally! Campeones Del Mundo!!!!!!! Vamos Argentina{" "}
            <span className="cursor-pointer text-[#bed1e9]">
              {" "}
              @afaseleccion,
            </span>{" "}
            This feels like shaking hands with Paradise! Thanks to all
            Supporters!
            <span className="cursor-pointer text-[#bed1e9]"> #banjogram</span>
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 border-b border-[#303030] bg-black px-2 pb-9 pt-2 text-white">
        <span className="cursor-pointer text-sm text-[#9b9b9b]">
          View all 10 comments
        </span>
        <p className="flex items-center justify-between text-sm">
          <span>
            <span className="font-bold">ihirwe_olis</span> USA is still #1
          </span>
          <HeartSvg />
        </p>
      </div>
    </div>
  );
};

export default Post;
