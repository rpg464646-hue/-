import React from 'react';
import { ShieldAlert, Award, Clock, Sparkles, Check, Coffee, Cigarette, HelpCircle } from 'lucide-react';

export const PricingAndRules: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-stone-900/60 border-t border-b border-stone-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            公開透明計費 · 零抽成無暗費
          </div>
          <h2 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-100 mt-1">
            收費標準與貴賓儲值禮遇
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            計時制收費，依包廂等級計價。無論是好友歡聚打滿二將，或是通宵交流，皆享有最體面舒適的服務。
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Tier 1: Standard Table */}
          <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-stone-700 transition-all shadow-lg">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-stone-400">大廳休閒競技</span>
                <h3 className="font-serif-tc text-xl font-bold text-stone-100 mt-1">
                  競技開放桌
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-xs text-stone-400">NT$</span>
                  <span className="font-serif-tc text-4xl font-bold text-amber-400 tabular-nums">320</span>
                  <span className="text-xs text-stone-400">/ 桌 / 小時</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-1">
                  平均每位雀友僅需 NT$ 80 / 小時
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800/80 space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>日本原裝四口自動靜音洗牌桌</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>36mm 標準重量玉石麻將牌組</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>冷熱茶水與現磨咖啡自助暢飲</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>座位獨立USB與Type-C高速快充</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800">
              <button
                onClick={onBookNow}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 font-semibold text-xs rounded-lg border border-stone-700 transition-colors cursor-pointer"
              >
                預訂開放桌位
              </button>
            </div>
          </div>

          {/* Tier 2: Suite (Most Popular) */}
          <div className="bg-stone-950 border-2 border-amber-500/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              雀友最熱門首選
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-amber-400">私密隔音聚會</span>
                <h3 className="font-serif-tc text-xl font-bold text-stone-100 mt-1">
                  雅緻私密包廂
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-xs text-stone-400">NT$</span>
                  <span className="font-serif-tc text-4xl font-bold text-amber-400 tabular-nums">480</span>
                  <span className="text-xs text-stone-400">/ 桌 / 小時</span>
                </div>
                <div className="text-[11px] text-stone-400 mt-1">
                  平均每人僅需 NT$ 120 / 小時
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800/80 space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>雙層隔音降噪玻璃門，不受外界干擾</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>獨立變頻溫控冷暖空調 + HEPA空氣淨化</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>雀友過山車自動發牌機 (微波烘乾除菌)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>招待四季春冷萃茶一壺 (可免費回沖)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>桌邊置杯防傾架與皮質扶手</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800">
              <button
                onClick={onBookNow}
                className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs rounded-lg shadow-md transition-all cursor-pointer"
              >
                立即預訂私密包廂
              </button>
            </div>
          </div>

          {/* Tier 3: VIP Grand Suite */}
          <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-lg">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-amber-400">頂級招待社交</span>
                <h3 className="font-serif-tc text-xl font-bold text-stone-100 mt-1">
                  VIP 尊榮旗艦包廂
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-xs text-stone-400">NT$</span>
                  <span className="font-serif-tc text-4xl font-bold text-amber-400 tabular-nums">750</span>
                  <span className="text-xs text-stone-400">/ 桌 / 小時</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-1">
                  可容納 4-8 人 (含專屬觀戰休息沙發區)
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800/80 space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>專屬獨立衛浴設備，無需踏出包廂</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>醫療級獨立全熱交換負壓排煙系統</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>75吋 4K劇院電視 + Switch遊戲娛樂主機</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>日本進口 42mm 烏金晶瓷加重手感玉牌</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>每場招待特級功夫茶禮盒 + 主廚手作拼盤</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800">
              <button
                onClick={onBookNow}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/40 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                預訂旗艦 VIP 包廂
              </button>
            </div>
          </div>

        </div>

        {/* Member Stored Value & Perks Banner */}
        <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-amber-400">
                <Award className="w-4 h-4" />
                <span>天和閣尊榮會員卡 · 儲值回饋方案</span>
              </div>
              <h3 className="font-serif-tc text-2xl font-bold text-stone-100">
                常客雀友專屬：儲值即享超值禮金與包廂特權
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
                儲值 NT$ 5,000 贈 NT$ 800 (實得 5,800) · 儲值 NT$ 10,000 贈 NT$ 2,000 (實得 12,000)。全額可用於包廂場地費與餐飲抵用，永不過期。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-center">
                <div className="text-xs text-stone-400">特約停車優惠</div>
                <div className="text-sm font-bold text-amber-400 mt-0.5">每日折抵最高 4 小時</div>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-center">
                <div className="text-xs text-stone-400">專屬貴賓置物櫃</div>
                <div className="text-sm font-bold text-amber-400 mt-0.5">免費寄存私家茶具</div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Etiquette & Safety Regulations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-stone-950/80 border border-stone-800 rounded-2xl p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>合法純休閒場所規範</span>
            </div>
            <h4 className="font-serif-tc text-lg font-bold text-stone-100 mb-3">
              會館棋牌禮儀與管理規章
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">01.</span>
                <span>本會館為依法登記之正派休閒棋牌社交場所，全館嚴格禁止任何形式之公開金錢賭博與抽頭行為。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">02.</span>
                <span>棋道重品，對局期間請維持禮貌，禁止言語侮辱、敲桌摔牌等干擾其他包廂之舉措。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">03.</span>
                <span>全館均受高解析度防震防作弊監視系統保護，維護公正透明之對弈環境。</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase mb-2">
              <Cigarette className="w-4 h-4" />
              <span>環境整潔與吸菸規範</span>
            </div>
            <h4 className="font-serif-tc text-lg font-bold text-stone-100 mb-3">
              無菸清新空間之堅持
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">01.</span>
                <span>包廂與大廳全面禁止吸菸 (含電子煙)，違者將通報衛生局並加收包廂除味清潔費 NT$ 3,000。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">02.</span>
                <span>館內專設符合菸害防制法之獨立負壓換氣吸菸室，吸菸雀友請至專區使用。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">03.</span>
                <span>自動麻將機洗牌槽內嚴禁傾倒飲料、菸灰或外物，共同珍惜精密進口設備。</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
