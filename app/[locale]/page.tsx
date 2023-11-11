import {useTranslations} from 'next-intl';
import Navbar from '@/components/Navbar'
import Catalog from '@/components/Catalog';
export default function Index() {
  const t = useTranslations('Index');
  return (
		<>
		 <Navbar lang={t('title')}/>
		 <Catalog />
		</>
	)
}