import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
        <Image
            src="/milkyway.jpg" // publicフォルダからのパス
            alt="天の川の写真"
            width={1600} // 画像の元の幅
            height={900} // 画像の元の高さ
            className="w-full h-auto my-8"
          />
      <h1 className="mb-8 text-2xl font-semibold">
        Welcome to my Portfolio!
      </h1>
      <p className="mb-2 ">ご覧いただきありがとうございます！</p>
      <p className="mb-2 ">早川晴のホームページです。</p>
      <Link href="/aboutme" className="text-blue-500 hover:underline">詳細</Link>はこちらからご覧ください。
      <h2 className="mb-4 mt-8 text-xl font-semibold">
        お知らせ・更新履歴
      </h2>
      <p className="mb-2">
        2025年8月16日: サイトをアップデートしました。
      </p>
      <p className="mb-2">
        2024年5月12日: サイトを公開しました。
      </p>
    </section>
  )
}
