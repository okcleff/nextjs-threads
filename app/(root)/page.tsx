import { fetchPosts } from "@/lib/actions/thread.actions";

async function Home() {
  const postsResponse = await fetchPosts(1);
  console.log(postsResponse);

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
    </>
  );
}

export default Home;
