import { promises as fs } from 'fs';
import path from 'path';
import { CustomMDX } from 'app/components/mdx';

export const metadata = {
  title: 'Activity',
  description: 'My activities and projects.',
};

export default async function ActivityPage() {
  const content = await fs.readFile(
    path.join(process.cwd(), 'app/activity/activity.mdx'),
    'utf8'
  );

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        Activity
      </h1>
      <article className="prose mt-8">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}