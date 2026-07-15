import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div>
            this is blogs route <br /> 
            <Link className='border-b' href={`/blogs/5`}>Blogs</Link>
        </div>
    );
};  

export default BlogsPage;