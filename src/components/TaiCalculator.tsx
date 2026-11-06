import React, { useState } from 'react';
import { TAI_RULES } from '../data/parlorData';
import { TaiRule } from '../types';
import { Calculator, RotateCcw, Copy, Check, Sparkles, Plus, Minus } from 'lucide-react';

export const TaiCalculator: React.FC = () => {
  const [basePoint, setBasePoint] = useState<number>(300);
  const [pointPerTai, setPointPerTai] = useState<number>(100);
  const [isDealer, setIsDealer] = useState<boolean>(false);
  const [dealerStreak, setDealerStreak] = useState<number>(0);
  const [selectedRuleIds, setSelectedRuleIds] = useState<Set<string>>(new Set(['tai-zimo']));
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copied, setCopied] = useState<boolean>(false);

  // Category labels
  const categories = [
    { id: 'all', label: '全部役種' },
    { id: 'common', label: '基本與自摸' },
    { id: 'patterns', label: '特殊牌型' },
    { id: 'honors', label: '風牌三元' },
    { id: 'flowers', label: '花牌系列' },
    { id: 'rare', label: '滿貫神牌' }
  ];

  const toggleRule = (id: string) => {
    const next = new Set(selectedRuleIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedRuleIds(next);
  };

  const handleReset = () => {
    setSelectedRuleIds(new Set(['tai-zimo']));
    setIsDealer(false);
    setDealerStreak(0);
  };

  const applyPreset = (presetName: string) => {
    const s = new Set<string>();
    if (presetName === 'pinghu_zimo') {
      s.add('tai-pinghu');
      s.add('tai-zimo');
      setIsDealer(false);
      setDealerStreak(0);
    } else if (presetName === 'qingyise_menqing_zimo') {
      s.add('tai-qingyise');
      s.add('tai-menqing');
      s.add('tai-zimo');
      s.add('tai-menqing-zimo');
      setIsDealer(false);
      setDealerStreak(0);
    } else if (presetName === 'dasanyuan_pengpeng') {
      s.add('tai-big-three-dragons');
      s.add('tai-pengpenghu');
      s.add('tai-zimo');
      setIsDealer(false);
      setDealerStreak(0);
    } else if (presetName === 'dasixi_ziyise') {
      s.add('tai-big-four-winds');
      s.add('tai-zi-yi-se');
      s.add('tai-menqing');
      s.add('tai-zimo');
      setIsDealer(true);
      setDealerStreak(1);
    }
    setSelectedRuleIds(s);
  };

  // Calculate Total Tai
  let totalTai = 0;
  const appliedRules: { name: string; tai: number }[] = [];

  if (isDealer) {
    totalTai += 1;
    appliedRules.push({ name: '莊家', tai: 1 });
    if (dealerStreak > 0) {
      const streakTai = dealerStreak * 2;
      totalTai += streakTai;
      appliedRules.push({ name: `連${dealerStreak}拉${dealerStreak}`, tai: streakTai });
    }
  }

  TAI_RULES.forEach((rule) => {
    if (selectedRuleIds.has(rule.id)) {
      totalTai += rule.tai;
      appliedRules.push({ name: rule.name, tai: rule.tai });
    }
  });

  // Taiwan Mahjong standard: Total payout per player = Base + (Tai * PointPerTai)
  const singlePlayerPayout = basePoint + totalTai * pointPerTai;
  const isZimo = selectedRuleIds.has('tai-zimo');
  const totalWinnings = isZimo ? singlePlayerPayout * 3 : singlePlayerPayout;

  const handleCopySummary = () => {
    const summaryText = `【天和閣麻將台數試算】
底台設定：${basePoint}底 / ${pointPerTai}台
胡牌型態：${isZimo ? '自摸' : '放銃胡牌'}
中洞/牌型：${appliedRules.map((r) => `${r.name} (+${r.tai}台)`).join('、')}
總計台數：${totalTai} 台
${isZimo ? `自摸三家給：每家 NT$ ${singlePlayerPayout} (總計進帳 NT$ ${totalWinnings})` : `放銃者單賠：NT$ ${singlePlayerPayout}`}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredRules = TAI_RULES.filter((r) => {
    if (activeCategory === 'all') return true;
    return r.category === activeCategory;
  });

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-stone-900/60 border-t border-b border-stone-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              雀友必備工具 · 算台從此不爭議
            </div>
            <h2 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-100 mt-1">
              台灣16張麻將台數計算器
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-2xl">
              符合正統台灣16張麻將規則，自訂底台、連莊拉莊與多種大牌牌型組合，點擊牌型即時結算應付點數。
            </p>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-400">熱門牌型範例：</span>
            <button
              onClick={() => applyPreset('pinghu_zimo')}
              className="px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 rounded border border-stone-700 cursor-pointer"
            >
              平胡自摸
            </button>
            <button
              onClick={() => applyPreset('qingyise_menqing_zimo')}
              className="px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 rounded border border-stone-700 cursor-pointer"
            >
              清一色門清自摸
            </button>
            <button
              onClick={() => applyPreset('dasanyuan_pengpeng')}
              className="px-2.5 py-1 text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 rounded border border-stone-700 cursor-pointer"
            >
              大三元碰碰胡
            </button>
            <button
              onClick={() => applyPreset('dasixi_ziyise')}
              className="px-2.5 py-1 text-xs bg-amber-950/80 hover:bg-amber-900 text-amber-300 border border-amber-800 rounded cursor-pointer"
            >
              大四喜字一色
            </button>
          </div>
        </div>

        {/* Main Grid: Settings & Tiles on Left, Live Scoreboard on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Config & Tiles (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Stake Configuration Box */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <span className="text-sm font-semibold text-stone-200">1. 設定底與台 (點數幣別 NT$)</span>
                <div className="flex items-center gap-2">
                  {[
                    { base: 100, tai: 20, label: '100/20' },
                    { base: 300, tai: 100, label: '300/100' },
                    { base: 500, tai: 200, label: '500/200' },
                    { base: 1000, tai: 300, label: '1000/300' }
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => {
                        setBasePoint(preset.base);
                        setPointPerTai(preset.tai);
                      }}
                      className={`px-2.5 py-1 text-xs rounded transition-colors cursor-pointer ${
                        basePoint === preset.base && pointPerTai === preset.tai
                          ? 'bg-amber-500 text-stone-950 font-bold'
                          : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-stone-400 mb-1">底數 (Base Points)</label>
                  <div className="flex items-center bg-stone-900 border border-stone-700 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-stone-500 mr-2">NT$</span>
                    <input
                      type="number"
                      value={basePoint}
                      onChange={(e) => setBasePoint(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-transparent text-stone-100 text-sm focus:outline-none tabular-nums"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone-400 mb-1">每台點數 (Per Tai)</label>
                  <div className="flex items-center bg-stone-900 border border-stone-700 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-stone-500 mr-2">NT$</span>
                    <input
                      type="number"
                      value={pointPerTai}
                      onChange={(e) => setPointPerTai(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-transparent text-stone-100 text-sm focus:outline-none tabular-nums"
                    />
                  </div>
                </div>
              </div>

              {/* Dealer & Streak Controls */}
              <div className="pt-3 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-200">
                    <input
                      type="checkbox"
                      checked={isDealer}
                      onChange={(e) => {
                        setIsDealer(e.target.checked);
                        if (!e.target.checked) setDealerStreak(0);
                      }}
                      className="w-4 h-4 rounded text-amber-500 bg-stone-900 border-stone-700 focus:ring-0"
                    />
                    <span className="font-semibold">我是莊家 (+1台)</span>
                  </label>
                </div>

                {isDealer && (
                  <div className="flex items-center gap-3 text-xs bg-stone-900/90 border border-stone-700 px-3 py-1 rounded-lg">
                    <span className="text-stone-400">連莊數 (連N拉N)：</span>
                    <button
                      onClick={() => setDealerStreak(Math.max(0, dealerStreak - 1))}
                      className="p-1 text-stone-300 hover:text-white bg-stone-800 rounded cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold text-amber-400 text-sm px-1 tabular-nums">
                      {dealerStreak === 0 ? '莊家原位' : `連 ${dealerStreak} (拉${dealerStreak}) +${dealerStreak * 2}台`}
                    </span>
                    <button
                      onClick={() => setDealerStreak(dealerStreak + 1)}
                      className="p-1 text-stone-300 hover:text-white bg-stone-800 rounded cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Pattern Selection Section */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-stone-200">2. 勾選胡牌條件與符合役種</span>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>重置所有勾選</span>
                </button>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === c.id
                        ? 'bg-stone-800 text-amber-400 border border-stone-700'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Rules Checkbox Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredRules.map((rule) => {
                  const isChecked = selectedRuleIds.has(rule.id);

                  return (
                    <div
                      key={rule.id}
                      onClick={() => toggleRule(rule.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-amber-950/40 border-amber-500/60 text-stone-100 shadow-sm'
                          : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-900'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold ${isChecked ? 'text-amber-300' : 'text-stone-200'}`}>
                            {rule.name}
                          </span>
                          <span className="text-[11px] font-semibold text-amber-400 tabular-nums">
                            +{rule.tai} 台
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 line-clamp-2">
                          {rule.description}
                        </p>
                      </div>

                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                        isChecked ? 'bg-amber-500 border-amber-500 text-stone-950' : 'border-stone-700 bg-stone-950'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Settlement Summary (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Calculator className="w-4 h-4" />
                  <span>即時結算成果</span>
                </div>
                <span className="text-[11px] text-stone-500">台灣16張正統計算法</span>
              </div>

              {/* Total Tai & Per Player Payout */}
              <div className="text-center bg-stone-900/80 p-5 rounded-xl border border-stone-800">
                <div className="text-xs text-stone-400 mb-1">累計總台數</div>
                <div className="font-serif-tc text-5xl font-black text-amber-400 tabular-nums">
                  {totalTai} <span className="text-lg font-normal text-stone-300">台</span>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-around">
                  <div>
                    <div className="text-[11px] text-stone-400">單家應付</div>
                    <div className="text-lg font-bold text-stone-100 tabular-nums">
                      NT$ {singlePlayerPayout}
                    </div>
                  </div>
                  <div className="w-px h-8 bg-stone-800" />
                  <div>
                    <div className="text-[11px] text-stone-400">{isZimo ? '三家總給 (自摸)' : '抓一家 (放銃)'}</div>
                    <div className="text-lg font-bold text-emerald-400 tabular-nums">
                      NT$ {totalWinnings}
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula Breakdown */}
              <div className="bg-stone-900/50 p-3.5 rounded-lg border border-stone-800 text-xs space-y-2">
                <div className="text-stone-400 font-medium">點數計算公式：</div>
                <div className="font-mono text-stone-300 bg-stone-950 p-2 rounded border border-stone-800 tabular-nums text-[11px]">
                  {basePoint} (底) + [{totalTai} (台) × {pointPerTai}] = <span className="text-amber-400 font-bold">NT$ {singlePlayerPayout}</span>
                </div>
                <div className="text-[11px] text-stone-500">
                  {isZimo ? '※ 判定為自摸：三家各付此點數' : '※ 判定為放銃：僅放銃者全額承擔'}
                </div>
              </div>

              {/* Applied Rules Tag Cloud */}
              <div>
                <div className="text-xs text-stone-400 mb-2">已計入之牌型清單 ({appliedRules.length})</div>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                  {appliedRules.length === 0 ? (
                    <span className="text-xs text-stone-500">尚未勾選任何役種</span>
                  ) : (
                    appliedRules.map((r, i) => (
                      <span
                        key={i}
                        className="text-xs bg-stone-900 text-stone-300 px-2.5 py-1 rounded border border-stone-800 flex items-center gap-1"
                      >
                        <span>{r.name}</span>
                        <span className="text-amber-400 font-bold">+{r.tai}</span>
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Copy Summary Action */}
              <button
                onClick={handleCopySummary}
                className="w-full py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-medium rounded-lg text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '已複製算台明細至剪貼簿！' : '複製台數明細分享牌友'}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
