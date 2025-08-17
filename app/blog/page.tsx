import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <Image
          src="/bluepond.jpg" // publicフォルダからのパス
          alt="青い池@北海道美瑛町"
          width={1600} // 画像の元の幅
          height={900} // 画像の元の高さ
          className="w-full h-auto my-8"
        />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  )
}
