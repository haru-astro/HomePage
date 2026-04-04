'use client';

import { useState, useEffect } from 'react';

interface LikeButtonProps {
  id: string; // どの記事のボタンかを識別するためのID
  initialCount?: number;
}

export function SophisticatedLikeButton({ id, initialCount = 0 }: LikeButtonProps) {
  // 1. 複数のステート管理
  const [count, setCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 2. 初期化処理（マウント時に保存されたデータを読み込む）
  useEffect(() => {
    const savedStatus = localStorage.getItem(`liked-${id}`);
    if (savedStatus === 'true') {
      setIsLiked(true);
    }
    setIsMounted(true); // クライアントサイドでの準備完了を記録
  }, [id]);

  // 3. クリック時の処理（ロジック）
  const handleToggle = () => {
    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);
    setCount((prev) => (newLikedStatus ? prev + 1 : prev - 1));

    // ローカルストレージに状態を保存
    localStorage.setItem(`liked-${id}`, String(newLikedStatus));
  };

  // サーバーサイドとクライアントサイドの表示のズレ（Hydration Error）を防ぐ
  if (!isMounted) return <div className="h-10 w-24 bg-gray-200 animate-pulse rounded" />;

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleToggle}
        className={`
          flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all duration-300
          ${isLiked 
            ? 'bg-pink-500 text-white scale-105 shadow-lg' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }
        `}
      >
        <span className={`transform transition-transform ${isLiked ? 'scale-125' : 'scale-100'}`}>
          {isLiked ? '❤️' : '🤍'}
        </span>
        <span>{count}</span>
      </button>
      
      <p className="text-xs text-gray-400">
        {isLiked ? 'あなたはこの記事を高く評価しました' : 'ボタンを押して応援してください'}
      </p>
    </div>
  );
}