import { promises as fs } from 'fs';
import path from 'path';
import { CustomMDX } from 'app/components/mdx';

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
      <h1 className="title font-semibold text-2xl tracking-tighter">
        Outreach
      </h1>
      <article className="prose mt-8">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}