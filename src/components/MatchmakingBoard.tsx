import React, { useState } from 'react';
import { GamePost } from '../types';
import { Users, UserPlus, Clock, Shield, PlusCircle, Check, Flame } from 'lucide-react';

interface MatchmakingBoardProps {
  games: GamePost[];
  onJoinGame: (gameId: string, playerName: string) => void;
  onCreateGame: (newGame: Omit<GamePost, 'id' | 'signedUpUsers' | 'currentPlayers'>) => void;
}

export const MatchmakingBoard: React.FC<MatchmakingBoardProps> = ({ games, onJoinGame, onCreateGame }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [joinModalGame, setJoinModalGame] = useState<GamePost | null>(null);
  const [joinPlayerName, setJoinPlayerName] = useState('');
  const [joinPlayerPhone, setJoinPlayerPhone] = useState('');
  const [joinSuccess, setJoinSuccess] = useState(false);

  // New Game Modal state
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newHost, setNewHost] = useState('');
  const [newType, setNewType] = useState<GamePost['gameType']>('台麻16張');
  const [newStakes, setNewStakes] = useState('300底 / 100台');
  const [newStartTime, setNewStartTime] = useState('今晚 21:00');
  const [newRoom, setNewRoom] = useState('雅閣 03 舒適包廂');
  const [newRule1, setNewRule1] = useState('打二將 (四圈)');
  const [newRule2, setNewRule2] = useState('有鐵八、見光死');

  const filteredGames = games.filter((g) => {
    if (filterType === 'all') return true;
    return g.gameType === filterType;
  });

  const handleConfirmJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinModalGame || !joinPlayerName.trim()) return;

    onJoinGame(joinModalGame.id, joinPlayerName.trim());
    setJoinSuccess(true);
    setTimeout(() => {
      setJoinSuccess(false);
      setJoinModalGame(null);
      setJoinPlayerName('');
      setJoinPlayerPhone('');
    }, 1400);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newHost.trim()) return;

    onCreateGame({
      title: newTitle.trim(),
      hostName: newHost.trim(),
      gameType: newType,
      stakes: newStakes,
      ruleNotes: [newRule1, newRule2, '禁菸包廂', '守時敬請準時到場'],
      targetPlayers: 4,
      startTime: newStartTime,
      roomName: newRoom,
      isSmoking: false,
      tag: '誠徵雀友 · 虛位以待'
    });

    setIsCreating(false);
    setNewTitle('');
    setNewHost('');
  };

  return (
    <section id="matchmaking" className="py-16 sm:py-20 bg-stone-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              三缺一救星 · 隨時湊桌無負擔
            </div>
            <h2 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-100 mt-1">
              雀友即時揪牌大廳
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-2xl">
              朋友時間湊不齊？來天和閣現場與牌友同歡！即時報名補位或自行發起牌局，以牌會友，乾淨、舒適、透明。
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-400 border border-amber-500/50 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>發起新牌局</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {['all', '台麻16張', '台麻16張快打', '日麻四人東'].map((typeKey) => {
            const label = typeKey === 'all' ? '全部牌局' : typeKey;
            return (
              <button
                key={typeKey}
                onClick={() => setFilterType(typeKey)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  filterType === typeKey
                    ? 'bg-amber-500 text-stone-950 font-semibold'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGames.map((game) => {
            const needed = game.targetPlayers - game.currentPlayers;
            const isFull = needed <= 0;

            return (
              <div
                key={game.id}
                className="bg-stone-900/80 border border-stone-800 rounded-xl p-6 flex flex-col justify-between hover:border-stone-700 transition-all shadow-md"
              >
                <div className="space-y-4">
                  
                  {/* Card Title & Stakes */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-stone-400 mb-1">
                        <span className="text-amber-400 font-medium">{game.gameType}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-stone-200 tabular-nums">{game.stakes}</span>
                      </div>
                      <h3 className="font-serif-tc text-lg font-bold text-stone-100">
                        {game.title}
                      </h3>
                    </div>

                    {/* Needed players badge */}
                    <div className={`text-xs font-bold px-2.5 py-1 rounded-md shrink-0 ${
                      isFull 
                        ? 'bg-stone-800 text-stone-400' 
                        : 'bg-amber-950/80 border border-amber-800 text-amber-300'
                    }`}>
                      {isFull ? '已滿員' : `缺 ${needed} 位雀友`}
                    </div>
                  </div>

                  {/* Location & Time info unboxed */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-stone-400 bg-stone-950/70 p-3 rounded-lg border border-stone-800/80">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>開局：{game.startTime}</span>
                    </div>
                    <span aria-hidden="true">·</span>
                    <div>桌位：{game.roomName}</div>
                    <span aria-hidden="true">·</span>
                    <div>發起人：{game.hostName}</div>
                  </div>

                  {/* Current seated players */}
                  <div>
                    <div className="text-xs text-stone-400 mb-2 flex items-center justify-between">
                      <span>當前入座席位 ({game.currentPlayers}/{game.targetPlayers})</span>
                      <span className="text-[11px] text-stone-500">禁菸局 · 嚴禁現金賭博</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: game.targetPlayers }).map((_, idx) => {
                        const player = game.signedUpUsers[idx];
                        const isHost = idx === 0;

                        return (
                          <div
                            key={idx}
                            className={`p-2 rounded-lg border text-center text-xs ${
                              player
                                ? 'bg-stone-950 border-stone-700 text-stone-200'
                                : 'bg-stone-900/40 border-dashed border-stone-800 text-stone-500'
                            }`}
                          >
                            <div className="truncate font-medium">
                              {player ? player : '虛位以待'}
                            </div>
                            <div className="text-[10px] text-stone-500 mt-0.5">
                              {isHost ? '主揪' : player ? '已加入' : '待補'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Rules tag list */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {game.ruleNotes.map((rule, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-stone-300 bg-stone-950 px-2 py-0.5 rounded border border-stone-800"
                      >
                        {rule}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action */}
                <div className="pt-5 mt-5 border-t border-stone-800/80 flex items-center justify-between">
                  <div className="text-xs text-stone-400">
                    到店簽到即可入座 · 提供置物櫃與茶水
                  </div>

                  <button
                    disabled={isFull}
                    onClick={() => setJoinModalGame(game)}
                    className={`py-2 px-4 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isFull
                        ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 shadow'
                    }`}
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>{isFull ? '席位已滿' : '立即補位報名'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Join Game Modal */}
      {joinModalGame && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <span className="text-xs text-amber-400 font-semibold">{joinModalGame.gameType}</span>
                <h3 className="font-serif-tc text-lg font-bold text-stone-100">報名加入牌局</h3>
              </div>
              <button
                onClick={() => setJoinModalGame(null)}
                className="text-stone-400 hover:text-white p-1 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {joinSuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-lg font-bold text-stone-100">報名成功！已為您保留席位</div>
                <p className="text-xs text-stone-400">請於開局前10分鐘到達會館櫃檯出示報名名字即可。</p>
              </div>
            ) : (
              <form onSubmit={handleConfirmJoin} className="space-y-4">
                <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 text-xs space-y-1 text-stone-300">
                  <div><span className="text-stone-500">牌局：</span>{joinModalGame.title}</div>
                  <div><span className="text-stone-500">底台：</span>{joinModalGame.stakes}</div>
                  <div><span className="text-stone-500">時間：</span>{joinModalGame.startTime}</div>
                  <div><span className="text-stone-500">桌號：</span>{joinModalGame.roomName}</div>
                </div>

                <div>
                  <label className="block text-xs text-stone-300 mb-1">您的暱稱 / 雀友稱呼 <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="例如：東區摸王 / 小林"
                    value={joinPlayerName}
                    onChange={(e) => setJoinPlayerName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-stone-300 mb-1">連絡電話 (方便店員席位確認)</label>
                  <input
                    type="tel"
                    placeholder="09xx-xxx-xxx"
                    value={joinPlayerPhone}
                    onChange={(e) => setJoinPlayerPhone(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>

                <div className="text-[11px] text-stone-500">
                  註：本館為合法休閒棋牌場域，請遵守場館牌風禮儀與禁菸規範。
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setJoinModalGame(null)}
                    className="flex-1 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold rounded-lg cursor-pointer"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold rounded-lg cursor-pointer"
                  >
                    確認入座
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Create New Game Modal */}
      {isCreating && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <h3 className="font-serif-tc text-lg font-bold text-stone-100">發起揪牌局</h3>
              <button
                onClick={() => setIsCreating(false)}
                className="text-stone-400 hover:text-white p-1 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-stone-300 mb-1">牌局標題 <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="例如：今晚歡樂16張 300/100 歡迎同好"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 mb-1">主揪大名 <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="如：王大山"
                    value={newHost}
                    onChange={(e) => setNewHost(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 mb-1">麻將賽制</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as GamePost['gameType'])}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  >
                    <option value="台麻16張">台麻 16 張 (標準)</option>
                    <option value="台麻16張快打">台麻 16 張 (快打8秒)</option>
                    <option value="日麻四人東">日麻 (四人東南戰)</option>
                    <option value="港麻13張">港式 13 張</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 mb-1">底台設定</label>
                  <select
                    value={newStakes}
                    onChange={(e) => setNewStakes(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  >
                    <option value="100底 / 20台">100底 / 20台 (新手休閒)</option>
                    <option value="300底 / 100台">300底 / 100台 (經典熱門)</option>
                    <option value="500底 / 200台">500底 / 200台 (進階刺激)</option>
                    <option value="1000底 / 300台">1000底 / 300台 (旗艦高手)</option>
                    <option value="以點棒計 (純技術)">以點棒計 (純技術)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-300 mb-1">預計開局時間</label>
                  <input
                    type="text"
                    value={newStartTime}
                    onChange={(e) => setNewStartTime(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-300 mb-1">約定包廂/區域</label>
                  <input
                    type="text"
                    value={newRoom}
                    onChange={(e) => setNewRoom(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 mb-1">圈數規定</label>
                  <input
                    type="text"
                    value={newRule1}
                    onChange={(e) => setNewRule1(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 mb-1">補充規則</label>
                <input
                  type="text"
                  value={newRule2}
                  onChange={(e) => setNewRule2(e.target.value)}
                  placeholder="如：見光死、連莊無上限、鐵八"
                  className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div className="flex gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="flex-1 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold rounded-lg cursor-pointer"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold rounded-lg cursor-pointer"
                >
                  立即發布牌局
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
