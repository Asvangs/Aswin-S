import React, { useState } from 'react';
import { Heart, Coffee, Music, Crown, PhoneCall, Check, Ticket } from 'lucide-react';
import { APOLOGY_SECTIONS, CouponItem } from '../utils/content';
import { sound } from '../utils/audio';

export const LoveCoupons: React.FC = () => {
  const [coupons, setCoupons] = useState<CouponItem[]>(APOLOGY_SECTIONS.coupons);

  const iconMap: Record<string, React.ReactNode> = {
    Heart: <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />,
    Coffee: <Coffee className="h-5 w-5 text-amber-600" />,
    Music: <Music className="h-5 w-5 text-purple-600" />,
    Crown: <Crown className="h-5 w-5 text-amber-500 fill-amber-500" />,
    PhoneCall: <PhoneCall className="h-5 w-5 text-blue-600" />,
  };

  const redeemCoupon = (id: string) => {
    sound.playChime();
    setCoupons((prev) =>
      prev.map((c) => (c.id === id ? { ...c, redeemed: !c.redeemed } : c))
    );
  };

  return (
    <section id="coupons" className="mx-auto w-full max-w-4xl py-8 px-4 sm:px-6">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-rose-600 mb-1">
          <Ticket className="h-4 w-4" />
          <span>Apology Gift Vouchers</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
          Redeemable Love Coupons
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Tap any coupon to activate it. You hold 100% of the rights to redeem these anytime!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            onClick={() => redeemCoupon(coupon.id)}
            className={`relative rounded-2xl p-5 border transition-all cursor-pointer select-none active:scale-95 ${
              coupon.redeemed
                ? 'bg-rose-50/90 border-rose-300 shadow-inner'
                : 'bg-white border-rose-100 shadow-xs hover:border-rose-300 hover:shadow-md'
            }`}
          >
            {/* Stamp decoration */}
            <div className="flex items-center justify-between border-b border-dashed border-rose-200/80 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-rose-50">
                  {iconMap[coupon.iconName] || <Heart className="h-5 w-5 text-rose-500" />}
                </div>
                <span className="text-[11px] font-semibold text-rose-700 tracking-wider uppercase">
                  {coupon.tag}
                </span>
              </div>
              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                  coupon.redeemed
                    ? 'bg-rose-600 text-white font-bold'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                {coupon.redeemed ? 'CLAIMED! ❤️' : 'TAP TO CLAIM'}
              </span>
            </div>

            <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">
              {coupon.title}
            </h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              {coupon.reward}
            </p>

            {coupon.redeemed && (
              <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-rose-700">
                <Check className="h-3.5 w-3.5" />
                <span>Activated! Valid indefinitely</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
