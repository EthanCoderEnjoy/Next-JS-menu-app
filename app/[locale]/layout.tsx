import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

const locales = ['en', 'zh-TW'];

export default function LocaleLayout({ children, params: { locale } }: {
  children: React.ReactNode, params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}