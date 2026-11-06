import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Wind, VolumeX, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { RoomType } from '../types';

interface HeroProps {
  onQuickBook: (roomType: RoomType, timeSlot: string) => void;
  onExploreTables: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuickBook, onExploreTables }) => {
  const [selectedRoomType, setSelectedRoomType] = useState<RoomType>('vip');
  const [selectedTime, setSelectedTime] = useState('今晚 20:00');

  const timeOptions = ['下午 14:00', '傍晚 18:00', '今晚 20:00', '今晚 22:00', '深夜 00:00'];

  return (
    <section className="relative overflow-hidden bg-stone-950 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-950/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-900/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata separator */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-amber-400 uppercase">
              <span>台北旗艦・現代棋牌休閒會館</span>
              <span aria-hidden="true">·</span>
              <span>24小時全年無休</span>
              <span aria-hidden="true">·</span>
              <span>合法休閒社交場所</span>
            </div>

            <h1 className="font-serif-tc text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-[1.18] text-balance">
              方城對弈 · <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                方寸之間的靜心與風雅
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              告別傳統吵雜昏暗的牌室。天和閣引進日本原裝雀友四口過山車降噪自動桌、獨立醫療級新風排煙VIP包廂與現煮私廚茗茶，讓每一場四方對局皆如藝術般從容優雅。
            </p>

            {/* Hardware specifications list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-300">
              <div className="flex items-center gap-2 bg-stone-900/80 border border-stone-800/80 rounded-lg p-2.5">
                <VolumeX className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>35dB 靜音降噪洗牌</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/80 border border-stone-800/80 rounded-lg p-2.5">
                <Wind className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>獨立新風活性碳排煙</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/80 border border-stone-800/80 rounded-lg p-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>高解析防作弊鏡頭</span>
              </div>
            </div>

            {/* Quick Interactive Table Booking Card */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-5 shadow-2xl mt-4">
              <div className="text-xs font-semibold text-amber-300 mb-3 flex items-center justify-between">
                <span>快速預訂專屬牌桌</span>
                <span className="text-stone-400 font-normal">免會員費 · 到店即可入座</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-xs text-stone-400 mb-1">包廂規格</label>
                  <select
                    value={selectedRoomType}
                    onChange={(e) => setSelectedRoomType(e.target.value as RoomType)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  >
                    <option value="vip">VIP 獨立尊榮旗艦房 (750元/小時)</option>
                    <option value="suite">雅緻私密隔音包廂 (480元/小時)</option>
                    <option value="standard">大廳競技開放桌 (320元/小時)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-stone-400 mb-1">預計時段</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  >
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onQuickBook(selectedRoomType, selectedTime)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-semibold rounded-lg text-sm transition-all shadow-md cursor-pointer"
                >
                  <span>立即保留桌位</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onExploreTables}
                  className="py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium rounded-lg text-sm border border-stone-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  查看即時桌況
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl group">
              <img
                src="/src/assets/images/hero_mahjong_parlor_1793957191674.jpg"
                alt="天和閣精品麻將館高檔內部環境"
                referrerPolicy="no-referrer"
                className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
              
              {/* Bottom Scrim Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>天和閣實景 · 旗艦大廳與獨立包廂區</span>
                </div>
                <h3 className="font-serif-tc text-lg font-bold text-white">
                  全館日本特注 42mm 重感晶瓷玉石背牌
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2">
                  極佳手感，清脆碰牌音色，搭配過山車自動均勻出牌，大幅縮減理牌等待時間。
                </p>
              </div>
            </div>

            {/* Adjacency Trust Card */}
            <div className="mt-4 p-4 rounded-xl bg-stone-900/70 border border-stone-800/80 flex items-center justify-between text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>現煮茶飲點心桌邊直送</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>捷運南京復興站步行3分鐘</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item KPI Strip */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif-tc text-3xl font-bold text-amber-400 tabular-nums">24H</div>
            <div className="text-xs text-stone-400 mt-1">全年無休隨時開局</div>
          </div>
          <div>
            <div className="font-serif-tc text-3xl font-bold text-amber-400 tabular-nums">35dB</div>
            <div className="text-xs text-stone-400 mt-1">日本雀友靜音自動桌</div>
          </div>
          <div>
            <div className="font-serif-tc text-3xl font-bold text-amber-400 tabular-nums">100%</div>
            <div className="text-xs text-stone-400 mt-1">獨立新風無煙無異味</div>
          </div>
          <div>
            <div className="font-serif-tc text-3xl font-bold text-amber-400 tabular-nums">0抽成</div>
            <div className="text-xs text-stone-400 mt-1">透明計時/包廂定價</div>
          </div>
        </div>

      </div>
    </section>
  );
};
