import React, { useState } from 'react';
import { MahjongTable, RoomType } from '../types';
import { Users, Clock, ShieldCheck, CheckCircle, Info, Sparkles, Tv, Wind } from 'lucide-react';

interface LiveTablesProps {
  tables: MahjongTable[];
  onSelectTableForBooking: (table: MahjongTable) => void;
}

export const LiveTables: React.FC<LiveTablesProps> = ({ tables, onSelectTableForBooking }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedDetailTable, setSelectedDetailTable] = useState<MahjongTable | null>(null);

  const filteredTables = tables.filter((t) => {
    const matchType = filterType === 'all' || t.roomType === filterType;
    const matchStatus = filterStatus === 'all' || t.status === filterStatus;
    return matchType && matchStatus;
  });

  const getStatusBadge = (status: MahjongTable['status'], estimatedAvailableTime?: string) => {
    switch (status) {
      case 'available':
        return (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2.5 py-1 rounded-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>空桌 · 立即可入座</span>
          </div>
        );
      case 'in_use':
        return (
          <div className="flex items-center gap-1.5 text-xs font-medium text-amber-300 bg-amber-950/70 border border-amber-800/80 px-2.5 py-1 rounded-md">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>牌局進行中 {estimatedAvailableTime ? `· 預計 ${estimatedAvailableTime}` : ''}</span>
          </div>
        );
      case 'reserved':
        return (
          <div className="flex items-center gap-1.5 text-xs font-medium text-stone-400 bg-stone-900 border border-stone-700 px-2.5 py-1 rounded-md">
            <span className="w-2 h-2 rounded-full bg-stone-500" />
            <span>已預訂 {estimatedAvailableTime ? `· ${estimatedAvailableTime}` : ''}</span>
          </div>
        );
    }
  };

  return (
    <section id="tables" className="py-16 sm:py-20 bg-stone-900/60 border-t border-b border-stone-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              即時桌況監控 · 隨時掌握包廂現狀
            </div>
            <h2 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-100 mt-1">
              包廂空間與即時桌位
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-xl">
              提供全館 6 間專屬包廂與大廳桌位即時狀況。所有牌桌均配置日本原裝靜音自動洗牌發牌機與頂級厚瓷牌。
            </p>
          </div>

          {/* Interactive filter controls - Buttons permitted per style guide */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center p-1 bg-stone-950 border border-stone-800 rounded-lg">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  filterType === 'all'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                全部區域
              </button>
              <button
                onClick={() => setFilterType('vip')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  filterType === 'vip'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                VIP旗艦包廂
              </button>
              <button
                onClick={() => setFilterType('suite')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  filterType === 'suite'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                雅緻私密包廂
              </button>
              <button
                onClick={() => setFilterType('standard')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  filterType === 'standard'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                競技開放桌
              </button>
            </div>
          </div>
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTables.map((table) => {
            const isAvailable = table.status === 'available';

            return (
              <div
                key={table.id}
                className="bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300"
              >
                <div>
                  {/* Image Container with single elevation & scrim */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-900">
                    <img
                      src={table.image}
                      alt={table.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    
                    {/* Top Status */}
                    <div className="absolute top-3 right-3">
                      {getStatusBadge(table.status, table.estimatedAvailableTime)}
                    </div>

                    <div className="absolute bottom-3 left-3 text-xs font-bold text-amber-300 bg-stone-950/80 px-2 py-0.5 rounded border border-stone-700">
                      {table.number} · {table.typeLabel}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="font-serif-tc text-lg font-bold text-stone-100 hover:text-amber-400 transition-colors">
                        {table.name}
                      </h3>
                      
                      {/* Unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-stone-400 mt-1">
                        <span>容納 {table.capacity}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-amber-400 tabular-nums">NT$ {table.hourlyRate}</span>
                        <span>/ 小時</span>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-1.5 text-xs text-stone-300">
                      {table.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hardware detail specs pill-free */}
                    <div className="pt-2 border-t border-stone-800/80 text-[11px] text-stone-400 space-y-1">
                      <div className="truncate">桌款：{table.specs.tableModel}</div>
                      <div className="truncate">牌具：{table.specs.tiles}</div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => onSelectTableForBooking(table)}
                    className="flex-1 py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-xs transition-colors text-center cursor-pointer"
                  >
                    {isAvailable ? '立即預約入座' : '預約候補 / 指定時段'}
                  </button>
                  <button
                    onClick={() => setSelectedDetailTable(table)}
                    className="p-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 rounded-lg text-xs transition-colors cursor-pointer"
                    title="查看包廂全套硬體配置"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Specs Modal */}
      {selectedDetailTable && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div>
                <span className="text-xs font-semibold text-amber-400">{selectedDetailTable.number}</span>
                <h3 className="font-serif-tc text-xl font-bold text-stone-100">{selectedDetailTable.name}</h3>
              </div>
              <button
                onClick={() => setSelectedDetailTable(null)}
                className="text-stone-400 hover:text-white p-1 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-stone-300">
              <div className="bg-stone-950 p-3 rounded-lg border border-stone-800 space-y-2 text-xs">
                <div><span className="text-stone-500">麻將桌型號：</span> {selectedDetailTable.specs.tableModel}</div>
                <div><span className="text-stone-500">專用牌具：</span> {selectedDetailTable.specs.tiles}</div>
                <div><span className="text-stone-500">新風排煙：</span> {selectedDetailTable.specs.ventilation}</div>
                <div><span className="text-stone-500">人體工學椅：</span> {selectedDetailTable.specs.seating}</div>
                {selectedDetailTable.specs.entertainment && (
                  <div><span className="text-stone-500">影音設備：</span> {selectedDetailTable.specs.entertainment}</div>
                )}
              </div>

              <div>
                <h4 className="text-xs font-semibold text-stone-400 mb-2">包廂全部特色與尊榮服務</h4>
                <ul className="space-y-1.5 text-xs">
                  {selectedDetailTable.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-xs text-stone-400 border-t border-stone-800 flex justify-between items-center">
                <span>每小時定價：NT$ {selectedDetailTable.hourlyRate}</span>
                <span>容納：{selectedDetailTable.capacity}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  const target = selectedDetailTable;
                  setSelectedDetailTable(null);
                  onSelectTableForBooking(target);
                }}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-sm transition-colors cursor-pointer"
              >
                預定此包廂
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
