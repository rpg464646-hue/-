import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif-tc text-xl font-bold text-stone-100">
              天和閣精品雀莊
            </span>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              台北市頂級旗艦休閒棋牌社交會館。備有日本雀友四口過山車自動靜音麻將機、獨立醫療級新風排煙VIP包廂、私廚茶點，致力打造尊榮沉靜的對弈新境界。
            </p>
            <div className="text-[11px] text-stone-500">
              合法登記休閒棋牌場所 · 全館嚴格禁菸與恪守牌品規範
            </div>
          </div>

          {/* Nav Mirror */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-semibold text-stone-200 text-xs">快速導覽</div>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => scrollTo('tables')} className="hover:text-amber-400 cursor-pointer transition-colors">
                  包廂環境與即時桌況
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('matchmaking')} className="hover:text-amber-400 cursor-pointer transition-colors">
                  三缺一揪牌大廳
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-amber-400 cursor-pointer transition-colors">
                  台灣16張台數計算器
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('menu')} className="hover:text-amber-400 cursor-pointer transition-colors">
                  雀友特選茶點菜單
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-amber-400 cursor-pointer transition-colors">
                  透明收費與儲值優惠
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2 text-stone-400">
            <div className="font-semibold text-stone-200 text-xs">營業與聯絡資訊</div>
            <div>營業時間：24 小時 全年無休</div>
            <div>訂位專線：(02) 2712-8888</div>
            <div>官方 LINE：@tianhe_club</div>
            <div>會館地址：台北市中山區南京東路三段88號B1</div>
            <div>鄰近交通：捷運南京復興站 2 號出口 (步行約3分鐘)</div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
          <div>
            © {new Date().getFullYear()} 天和閣精品雀莊 Tian He Mahjong Lounge. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>隱私權條款</span>
            <span aria-hidden="true">·</span>
            <span>棋牌場所使用須知</span>
            <span aria-hidden="true">·</span>
            <span>防制賭博共同宣言</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
