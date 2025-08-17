import { promises as fs } from 'fs';
import path from 'path';
import { CustomMDX } from 'app/components/mdx';
import Image from 'next/image';

export const metadata = {
  title: 'About me',
  description: 'Details about me.',
};

export default async function AboutPage() {
  const content = await fs.readFile(
    path.join(process.cwd(), 'app/aboutme/aboutme.mdx'),
    'utf8'
  );

  return (
    <section>
      <Image
          src="/hoshinomura.jpg" // publicフォルダからのパス
          alt="星の村天文台"
          width={1600} // 画像の元の幅
          height={900} // 画像の元の高さ
          className="w-full h-auto my-8"
        />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        About me
      </h1>
      <article className="prose mt-8">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}