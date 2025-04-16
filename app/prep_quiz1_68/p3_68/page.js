import { getBlogs } from '@/lib/db-blog';
import Blogs_68 from '@/components/demo_68/w06_blogs_68/Blogs_68';

export default async function P3Page_68() {
  const blogs = await getBlogs();
  console.log('blogs', JSON.stringify(blogs));
  return (
    <>
      <Blogs_68 blogs={blogs} />
    </>
  );
}
