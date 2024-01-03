import { GlobeAltIcon,TrophyIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/font';
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <TrophyIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px] ">Acme</p>
    </div>
  );
}