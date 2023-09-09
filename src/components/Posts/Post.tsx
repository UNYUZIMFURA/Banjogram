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
  const [liked, setLiked] = useState(false);
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
      <div className="load flex h-[62%] w-full cursor-pointer rounded-[0.2rem]">
        <img
          src={`${process.env.REACT_APP_PRIMARY_IMAGES_ENDPOINT}/?${props.category}`}
          alt=""
          className="w-full rounded-t-[0.2rem] object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col gap-2 p-3">
        <div className="flex items-center justify-between gap-2 py-2">
          <div className="flex gap-4">
            <div
              className="cursor-pointer"
              onClick={() => setLiked((prevState) => !prevState)}
            >
              <svg
                aria-label=""
                cursor="pointer"
                fill={liked ? "rgb(255,48,64)" : "rgb(245,245,245)"}
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Like</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
            </div>
            <CommentSvg />
            <MessageSvg />
          </div>
          <SaveSvg />
        </div>
        <div className="flex items-center gap-2">
          {!props.likes && (
            <div className="load h-5 w-5 cursor-pointer rounded-full border">
              <img
                src={`${process.env.REACT_APP_SECONDARY_IMAGES_ENDPOINT}?random=${randomNumsArr[1]}`}
                alt=""
                className="rounded-full"
                loading="lazy"
              />
            </div>
          )}
          {props.likes ? (
            <p className="text-sm font-bold text-white">{props.likes} likes</p>
          ) : (
            <p className="text-sm font-medium text-white">
              Liked by{" "}
              <span className="cursor-pointer font-bold">cristiano</span> and{" "}
              <span className="cursor-pointer font-bold">75.6M others</span>
            </p>
          )}
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
          {`View all ${props.comments} comments`}
        </span>
        <p className="flex items-center justify-between text-sm">
          <span>
            <span className="font-bold">joy_kevin</span> The images make it look
            real!
          </span>
          <HeartSvg />
        </p>
      </div>
    </div>
  );
};

export default Post;
