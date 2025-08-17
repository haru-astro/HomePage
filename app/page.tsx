import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';

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
        Haru HAYAKAWA's portfolio
      </h1>
      <p className="mb-4 font-semibold">
        Welcome to my Portfolio!
      </p>
      <p className="mb-2 ">ご覧いただきありがとうございます！</p>
      <p className="mb-2 ">東京大学理科一類2年生の早川晴の個人ページです。</p>
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
