import React, { useState, useEffect } from 'react';
import { MahjongTable, BookingForm } from '../types';
import { X, Calendar, Clock, User, Phone, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tables: MahjongTable[];
  initialSelectedTable?: MahjongTable | null;
  initialTimeSlot?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  tables,
  initialSelectedTable,
  initialTimeSlot,
}) => {
  const [selectedTableId, setSelectedTableId] = useState<string>(
    initialSelectedTable?.id || tables[0]?.id || ''
  );
  const [bookingDate, setBookingDate] = useState<string>('2026-11-06');
  const [timeSlot, setTimeSlot] = useState<string>(initialTimeSlot || '20:00');
  const [durationHours, setDurationHours] = useState<number>(3);
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [lineId, setLineId] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(4);
  const [teaPreference, setTeaPreference] = useState<string>('高山烏龍冷泡茶');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialSelectedTable) {
      setSelectedTableId(initialSelectedTable.id);
    }
  }, [initialSelectedTable]);

  if (!isOpen) return null;

  const currentTable = tables.find((t) => t.id === selectedTableId) || tables[0];
  const totalPrice = (currentTable?.hourlyRate || 480) * durationHours;
  const deposit = 500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim()) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `TH-2611-${randomSuffix}`;
    setBookingCode(code);
    setBookingSubmitted(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`【天和閣預約確認單】
預約編號：${bookingCode}
包廂房號：${currentTable.name} (${currentTable.number})
預約日期：${bookingDate} ${timeSlot}
時長：${durationHours} 小時
姓名：${customerName}
電話：${phone}
總計金額：NT$ ${totalPrice} (現場結帳)
會館地址：台北市中山區南京東路三段88號B1`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const timeSlotOptions = [
    '10:00', '12:00', '14:00', '16:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '02:00'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              尊榮私密牌局預定
            </div>
            <h2 className="font-serif-tc text-2xl font-bold text-stone-100">
              線上預約天和閣包廂
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {bookingSubmitted ? (
          /* Confirmation State */
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif-tc text-2xl font-bold text-stone-100">
                包廂預約已完成！
              </h3>
              <p className="text-xs sm:text-sm text-stone-400">
                已為您保留「{currentTable.name}」，我們期待您的光臨。
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 text-left text-xs space-y-3 max-w-md mx-auto">
              <div className="flex justify-between items-center pb-2 border-b border-stone-800">
                <span className="text-stone-400">預約訂單編號</span>
                <span className="font-mono text-sm font-bold text-amber-400">{bookingCode}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-stone-300">
                <div><span className="text-stone-500">預訂房型：</span>{currentTable.number}</div>
                <div><span className="text-stone-500">預訂時長：</span>{durationHours} 小時</div>
                <div><span className="text-stone-500">日期時段：</span>{bookingDate} {timeSlot}</div>
                <div><span className="text-stone-500">預計人數：</span>{guestCount} 人</div>
                <div><span className="text-stone-500">聯絡雀友：</span>{customerName}</div>
                <div><span className="text-stone-500">聯絡電話：</span>{phone}</div>
              </div>
              <div className="pt-2 border-t border-stone-800 flex justify-between items-center font-semibold">
                <span className="text-stone-300">應收場地費 (到店結帳)：</span>
                <span className="text-amber-400 text-sm tabular-nums">NT$ {totalPrice}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleCopyCode}
                className="py-2.5 px-5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer border border-stone-700"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '已複製預約明細' : '複製預約明細保存'}</span>
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-lg cursor-pointer"
              >
                完成並返回首頁
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            
            {/* Step 1: Room Selection */}
            <div>
              <label className="block text-stone-300 font-semibold mb-2">1. 選擇包廂或桌位</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tables.map((tbl) => (
                  <div
                    key={tbl.id}
                    onClick={() => setSelectedTableId(tbl.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedTableId === tbl.id
                        ? 'bg-amber-950/40 border-amber-500 text-stone-100 ring-1 ring-amber-500'
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                    }`}
                  >
                    <div className="text-[11px] text-amber-400 font-semibold">{tbl.number}</div>
                    <div className="font-bold text-stone-200 mt-0.5 line-clamp-1">{tbl.name}</div>
                    <div className="text-[11px] text-stone-400 mt-1 tabular-nums">
                      NT$ {tbl.hourlyRate} / 小時
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-stone-300 font-semibold mb-1">預約日期</label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">起始時段</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                >
                  {timeSlotOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">預訂時長 (小時)</label>
                <select
                  value={durationHours}
                  onChange={(e) => setDurationHours(parseInt(e.target.value))}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                >
                  <option value={2}>2 小時 (一將體驗)</option>
                  <option value={3}>3 小時 (約一將半)</option>
                  <option value={4}>4 小時 (二將標準戰)</option>
                  <option value={6}>6 小時 (暢玩通宵包場)</option>
                  <option value={8}>8 小時 (全日頂級方案)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-stone-300 font-semibold mb-1">
                  預約大名 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="王先生 / 陳小姐"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">
                  行動電話 <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0912-345-678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Line ID (選填)</label>
                <input
                  type="text"
                  placeholder="便於接收預約提醒"
                  value={lineId}
                  onChange={(e) => setLineId(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Step 4: Amenities & Tea preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-300 font-semibold mb-1">招待茗茶偏好</label>
                <select
                  value={teaPreference}
                  onChange={(e) => setTeaPreference(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                >
                  <option value="高山烏龍冷泡茶">阿里山冷萃高山烏龍 (冰鎮解膩)</option>
                  <option value="熱泡原片金萱">現泡桂花金萱熱茶 (暖胃醇厚)</option>
                  <option value="冰滴單品黑咖啡">特級衣索比亞冰滴黑咖啡 (提神聚精)</option>
                  <option value="無糖高山綠茶">文山清香包種綠茶</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">特殊需求備註</label>
                <input
                  type="text"
                  placeholder="如：需多備2張觀賽皮椅、自備特殊牌具等"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 text-stone-200 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Real-time Calculation Summary */}
            <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-2">
              <div className="flex justify-between text-stone-400">
                <span>包廂定價：NT$ {currentTable.hourlyRate} × {durationHours} 小時</span>
                <span className="tabular-nums">NT$ {totalPrice}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>附贈服務：無限暢飲茶水、獨立空氣新風、置物櫃</span>
                <span className="text-emerald-400 font-medium">免費提供</span>
              </div>
              <div className="pt-2 border-t border-stone-800 flex justify-between items-center text-sm">
                <span className="font-semibold text-stone-200">結算預計金額 (現場離場付清)：</span>
                <span className="font-serif-tc text-xl font-bold text-amber-400 tabular-nums">
                  NT$ {totalPrice}
                </span>
              </div>
            </div>

            {/* Submit Actions */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-[11px] text-stone-500">
                ※ 預約成功後會館將為您保留15分鐘，若有異動請來電告知。
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold rounded-lg cursor-pointer"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold rounded-lg shadow-md transition-all cursor-pointer"
                >
                  確認預約
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
