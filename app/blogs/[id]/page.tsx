import React from 'react';

const SingleBlog = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
      const { slug } = await params

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")

    const postData = await posts.json();

    console.log(postData);

    return (
        <div>
            this is dynamic blog page 
            this is page number : {slug}
        </div>
    );
};

export default SingleBlog;