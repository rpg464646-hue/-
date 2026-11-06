import React, { useState } from 'react';
import { MenuItem, CartItem } from '../types';
import { Utensils, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, Clock } from 'lucide-react';

interface LoungeMenuProps {
  menuItems: MenuItem[];
}

export const LoungeMenu: React.FC<LoungeMenuProps> = ({ menuItems }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [targetTable, setTargetTable] = useState<string>('VIP 01 天字壹號');
  const [orderNote, setOrderNote] = useState<string>('');
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: '全部菜單' },
    { id: 'hot', label: '熱食御膳' },
    { id: 'snack', label: '精緻點心' },
    { id: 'tea', label: '極品茗茶' },
    { id: 'cold_drink', label: '冷萃飲品' },
  ];

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.menuItem.id === itemId) {
            const nextQty = ci.quantity + delta;
            return nextQty > 0 ? { ...ci, quantity: nextQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null)
    );
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setOrderSuccess(true);
    setTimeout(() => {
      setCart([]);
      setOrderSuccess(false);
      setIsCartOpen(false);
      setOrderNote('');
    }, 2200);
  };

  return (
    <section id="menu" className="py-16 sm:py-20 bg-stone-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              桌邊直送 · 免離席專人服務
            </div>
            <h2 className="font-serif-tc text-3xl sm:text-4xl font-bold text-stone-100 mt-1">
              雀友特選茶點與私廚御膳
            </h2>
            <p className="text-sm text-stone-400 mt-2 max-w-xl">
              精選台灣慢火牛肉麵、不沾手港式蒸點與高山冷萃烏龍。對局中直接點餐，專人悄聲直送包廂桌邊。
            </p>
          </div>

          {/* Cart Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>已選餐點</span>
              {totalItemCount > 0 && (
                <span className="bg-amber-500 text-stone-950 text-xs font-bold px-2 py-0.5 rounded-full tabular-nums">
                  {totalItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Atmosphere Banner & Category Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-center bg-stone-900/60 border border-stone-800 rounded-2xl p-6">
          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-stone-800 h-48 bg-stone-950">
            <img
              src="/src/assets/images/lounge_tea_refreshment_1793957192676.jpg"
              alt="天和閣功夫茶與點心"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-8 space-y-3">
            <h3 className="font-serif-tc text-xl font-bold text-amber-300">
              對局聚神，何須將就外送冷食？
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              天和閣設有獨立專屬料理空間，所有熱食堅持現點現煮、熱氣騰騰；點心與炸物經特殊研發，無油膩感、不沾手，專為四方棋牌弈者貼心打造。
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    activeCategory === c.id
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-stone-950 text-stone-400 hover:text-stone-200 border border-stone-800'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900/70 border border-stone-800 rounded-xl p-5 flex flex-col justify-between hover:border-stone-700 transition-all shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-amber-400 font-medium">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-serif-tc text-base font-bold text-stone-100 mt-0.5">
                      {item.name}
                    </h4>
                  </div>
                  <div className="text-base font-bold text-amber-300 tabular-nums shrink-0">
                    NT$ {item.price}
                  </div>
                </div>

                <p className="text-xs text-stone-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>備餐時間：{item.prepTime}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {item.tags?.map((t, idx) => (
                    <span key={idx} className="text-[10px] text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="py-1.5 px-3 bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-200 border border-stone-700 hover:border-amber-500 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>點餐</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Cart / Order Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                <h3 className="font-serif-tc text-lg font-bold text-stone-100">包廂桌邊點餐清單</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-stone-400 hover:text-white p-1 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {orderSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-stone-100">點餐已送達會館吧檯！</h4>
                <p className="text-xs text-stone-400">
                  餐點備好後將由服務人員直接送達「{targetTable}」，結帳將計入您的包廂總帳單。
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-10 text-center space-y-2 text-stone-400 text-sm">
                <ShoppingBag className="w-8 h-8 text-stone-600 mx-auto" />
                <div>目前餐車內尚無餐點</div>
                <div className="text-xs text-stone-500">點擊菜單上的「點餐」按鈕加入美味點心茶飲！</div>
              </div>
            ) : (
              <form onSubmit={handleSendOrder} className="space-y-4">
                
                {/* Cart Items List */}
                <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                  {cart.map(({ menuItem, quantity }) => (
                    <div
                      key={menuItem.id}
                      className="bg-stone-950 p-3 rounded-lg border border-stone-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex-1">
                        <div className="font-bold text-stone-200">{menuItem.name}</div>
                        <div className="text-stone-400 tabular-nums">NT$ {menuItem.price} / 份</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(menuItem.id, -1)}
                          className="w-6 h-6 bg-stone-800 text-stone-300 rounded flex items-center justify-center hover:bg-stone-700 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-amber-400 px-1 tabular-nums">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(menuItem.id, 1)}
                          className="w-6 h-6 bg-stone-800 text-stone-300 rounded flex items-center justify-center hover:bg-stone-700 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right w-16 font-semibold text-stone-100 tabular-nums">
                        NT$ {menuItem.price * quantity}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Destination Table & Note */}
                <div className="space-y-3 pt-2 border-t border-stone-800 text-xs">
                  <div>
                    <label className="block text-stone-300 mb-1">直送桌號 / 包廂</label>
                    <select
                      value={targetTable}
                      onChange={(e) => setTargetTable(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                    >
                      <option value="VIP 01 天字壹號">VIP 01 天字壹號旗艦包廂</option>
                      <option value="VIP 02 九蓮雅閣">VIP 02 九蓮私密景觀雅閣</option>
                      <option value="雅閣 01 清一色包廂">雅閣 01 清一色包廂</option>
                      <option value="雅閣 02 大三元包廂">雅閣 02 大三元包廂</option>
                      <option value="大廳 A01 雀聖桌">大廳 A01 雀聖桌</option>
                      <option value="大廳 A02 雀王桌">大廳 A02 雀王桌</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-300 mb-1">備註需求 (例如：麵硬、微辣、茶水回沖)</label>
                    <input
                      type="text"
                      placeholder="任何客製化偏好"
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 text-stone-100 text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Subtotal & Action */}
                <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                  <div className="text-xs text-stone-400">
                    合計金額：
                    <span className="text-lg font-bold text-amber-400 ml-1 tabular-nums">
                      NT$ {totalAmount}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCart([])}
                      className="p-2.5 text-stone-400 hover:text-red-400 bg-stone-950 border border-stone-800 rounded-lg text-xs cursor-pointer"
                      title="清空餐車"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      type="submit"
                      className="py-2.5 px-5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      送出訂單到吧檯
                    </button>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
