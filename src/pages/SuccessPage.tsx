import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { useAppSelector } from '@/app/store';
import PageTransition from '@/shared/components/PageTransition';
import LanguageToggle from '@/shared/components/LanguageToggle';

const SuccessPage = () => {
  const { t } = useTranslation();
  const orderNumber = useAppSelector((s) => s.checkout.orderNumber);

  return (
    <PageTransition>
      <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4"><LanguageToggle /></div>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-6 mx-auto"
        >
          <CheckCircle className="w-10 h-10 text-success" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="w-full max-w-sm mx-auto"
        >
          <h1 className="text-2xl font-bold text-foreground mb-2">{t('success.title')}</h1>
          <p className="text-muted-foreground mb-6">{t('success.message')}</p>

          {orderNumber && (
            <div className="bg-card border border-border rounded-xl px-6 py-4 mb-8 shadow-sm">
              <p className="text-sm text-muted-foreground">{t('success.orderNumber')}</p>
              <p className="text-xl font-bold text-primary mt-1">{orderNumber}</p>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-4 border-t border-border mt-4">
            <MessageCircle className="w-4 h-4 text-success" />
            <span>{t('success.whatsapp')}</span>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default SuccessPage;
