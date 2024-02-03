import Image from 'next/image';
import { TextGenerateEffectDemo } from '@/components/sub-text';
export default function Home() {
  return (
    <main className='flex min-h-screen w-screen md:mt-0 mt-40 md:ml-9 ml-5  flex-col md:justify-center md:align-middle'>
      <div className='flex '>
        <p className='md:text-9xl w-full text-5xl font-semibold'>
          Welcome to <br /> CreatorStudio
        </p>
      </div>
      <div className="w-3/4">
        <TextGenerateEffectDemo/>
      </div>
    </main>
  );
}
