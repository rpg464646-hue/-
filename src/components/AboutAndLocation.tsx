import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Car, ChevronDown, ChevronUp, ExternalLink, Sparkles } from 'lucide-react';

export const AboutAndLocation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: '請問是否一定要預約才能入場？可以現場直接來嗎？',
      a: '歡迎直接蒞臨現場入座！但週末晚間與深夜時段為雀友熱門巔峰，強烈建議提早透過本官網「線上預約」保留心儀的包廂或桌位，以節省現場等候時間。'
    },
    {
      q: '會館是否可以自帶外食或手搖飲料？',
      a: '可以！天和閣開放外帶飲品與輕食點心（為維護包廂清爽，請避免攜帶重味道如臭豆腐、榴槤等食物）。同時館內提供由專人烹製之現煮牛肉麵、港式蝦餃點心與高山冷萃烏龍，歡迎隨時在桌邊點選。'
    },
    {
      q: '全自動麻將桌的牌子尺寸是哪一種？會卡牌嗎？',
      a: '全館統一採用日本原裝雀友第四代過山車靜音自動機，洗牌發牌僅需 3 秒。牌具採用 42mm 烏金晶瓷重感牌與 36mm 經典翡翠牌，觸感溫潤扎實。每場對局前均經過酒精高溫紫外線除菌維護。'
    },
    {
      q: '現場支援哪些結帳支付方式？',
      a: '我們支援現金、各大銀行信用卡、LINE Pay、Apple Pay、街口支付。您也可以選擇辦理會員儲值卡，享儲值滿額贈禮金與免費停車折抵優惠。'
    },
    {
      q: '館內有吸菸區嗎？可以抽菸嗎？',
      a: '包廂內部全面嚴格禁菸（包含各類電子煙），以維持空氣清新與最高品質之對弈環境。本館於 1 樓外側與館內設有合格獨立負壓抽風吸菸專區，需抽菸的雀友請多加利用。'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-stone-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story & Equipment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl relative bg-stone-900 group">
            <img
              src="/src/assets/images/mahjong_craft_tiles_1793957192556.jpg"
              alt="天和閣玉石手工刻字麻將牌"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-stone-300 bg-stone-950/80 p-3 rounded-lg border border-stone-800">
              <span className="font-semibold text-amber-300">極致細節工藝：</span>
              每一副麻將均符合人體工學厚度雕琢，碰牌音清亮不刺耳，洗牌槽均勻微波除菌。
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              匠心空間 · 重構現代棋牌美學
            </div>
            <h2 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-100">
              給深諳牌道者的一處淨心雅境
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              麻將，是智謀、定力與風雅的交匯。天和閣自創立之初，便立志摒棄傳統棋牌社陰暗、雜亂與喧鬧的刻板印象。
            </p>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              我們在台北核心地段構築這座當代美學館舍——運用胡桃原木、吸音格柵、低奢柔和間接照明，並全面引進日本頂規降噪自動機型與專業排煙換氣。無論商務洽談、摯友相聚或同好切磋，皆能沉浸在最純粹舒暢的牌局樂趣中。
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-800">
                <div className="text-xs text-stone-400">降噪隔音工程</div>
                <div className="text-sm font-bold text-stone-200 mt-1">日本吸音岩棉雙層隔音門</div>
              </div>
              <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-800">
                <div className="text-xs text-stone-400">空氣品質淨化</div>
                <div className="text-sm font-bold text-stone-200 mt-1">全熱交換大金新風循環機</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Location Info Card (5 Cols) */}
          <div className="lg:col-span-5 bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                交通指引與服務時間
              </div>
              <h3 className="font-serif-tc text-2xl font-bold text-stone-100 mt-1">
                天和閣會館位置
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-100">台北市中山區南京東路三段88號B1</div>
                  <div className="text-xs text-stone-400 mt-0.5">捷運南京復興站 2 號出口，步行約 3 分鐘即達</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-100">24 小時 全年無休</div>
                  <div className="text-xs text-stone-400 mt-0.5">深夜、清晨或連續假期皆有專人現場竭誠服務</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-100">(02) 2712-8888</div>
                  <div className="text-xs text-stone-400 mt-0.5">提供電話即時留桌與包場諮詢</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-100">官方 LINE：@tianhe_club</div>
                  <div className="text-xs text-stone-400 mt-0.5">加入好友享有專屬優惠券與揪牌推播</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-100">特約地下停車場</div>
                  <div className="text-xs text-stone-400 mt-0.5">宏盛國際金融大樓地下停車場，包廂消費可折抵停車費</div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-800 flex gap-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Google 地圖導航</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Mockup (7 Cols) */}
          <div className="lg:col-span-7 bg-stone-900/60 border border-stone-800 rounded-2xl overflow-hidden relative min-h-[360px] flex flex-col justify-between p-6">
            
            {/* Map Background Aesthetic Graphic */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-stone-950/90 border border-stone-800 px-3 py-1.5 rounded-lg text-xs text-stone-300">
                <span className="text-emerald-400 font-bold">●</span> 南京復興商圈核心・交通極其便利
              </div>
              <div className="text-xs text-stone-400">
                附設代客叫車服務
              </div>
            </div>

            {/* Stylized schematic venue locator */}
            <div className="relative z-10 my-auto py-10 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-xl animate-pulse">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="font-serif-tc text-2xl font-bold text-stone-100">
                  天和閣精品雀莊
                </div>
                <p className="text-xs text-amber-400 font-medium">
                  台北市中山區南京東路三段88號B1 (華南銀行大樓旁專屬樓梯下)
                </p>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-3 text-center text-xs text-stone-400 bg-stone-950/80 p-3 rounded-xl border border-stone-800">
              <div>
                <span className="block text-stone-200 font-semibold">捷運松山新店線</span>
                <span className="text-[11px] text-stone-500">南京復興站步行3分</span>
              </div>
              <div className="border-x border-stone-800">
                <span className="block text-stone-200 font-semibold">捷運文湖線</span>
                <span className="text-[11px] text-stone-500">2號出口直行即達</span>
              </div>
              <div>
                <span className="block text-stone-200 font-semibold">公車站牌</span>
                <span className="text-[11px] text-stone-500">南京龍江路口</span>
              </div>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-8">
            <h3 className="font-serif-tc text-2xl font-bold text-stone-100">
              雀友常見問題 (FAQ)
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              為您整理了初次到訪雀友最常詢問的規定與細節。
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-stone-900/70 border border-stone-800 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-900/90"
                  >
                    <span className="text-sm font-semibold text-stone-200">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 bg-stone-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
