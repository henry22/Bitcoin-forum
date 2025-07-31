"use client";

import Post from "@/components/post";
import { useRouter } from "next/navigation";
import useQueryPost from "@/hooks/use-query-post";

const Content = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQueryPost();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && <Post post={data} />}
    </div>
  );
};

export default Content;
