import { promises as fs } from 'fs';
import path from 'path';
import { CustomMDX } from 'app/components/mdx';

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
      <h1 className="title font-semibold text-2xl tracking-tighter">
        About me
      </h1>
      <article className="prose mt-8">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}