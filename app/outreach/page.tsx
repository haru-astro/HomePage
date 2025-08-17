import { promises as fs } from 'fs';
import path from 'path';
import { CustomMDX } from 'app/components/mdx';
import Image from 'next/image';

export const metadata = {
  title: 'Outreach',
  description: 'details about my outreach activities.',
};

export default async function OutreachPage() {
  const content = await fs.readFile(
    path.join(process.cwd(), 'app/outreach/outreach.mdx'),
    'utf8'
  );

  return (
    <section>
      <Image
          src="/planetarium.jpg" // publicフォルダからのパス
          alt="平塚市博物館のプラネタリウム"
          width={1600} // 画像の元の幅
          height={900} // 画像の元の高さ
          className="w-full h-auto my-8"
        />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        Outreach
      </h1>
      <article className="prose mt-8">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}