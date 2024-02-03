import { Button } from '@/components/ui/button';

import { TextGenerateEffectDemo } from '@/components/sub-text';
import { Ghost } from 'lucide-react';
export default function Home() {
  return (
    <main className='flex px-5 min-h-screen w-screen md:mt-0 mt-40 flex-col md:justify-center md:align-middle'>
      <div className='flex'>
        <p className='md:text-9xl w-full text-5xl font-semibold'>
          Welcome to <br /> CreatorStudio
        </p>
      </div>
      <div className='w-3/4'>
        <TextGenerateEffectDemo />
      </div>
      <div className='flex flex-col gap-y-5  items-center  mt-24'>
        <p>what are you ?</p>
        <div className='flex w-full justify-around md:justify-center md:gap-11'>
        <Button variant={'outline'} size='lg'>
          creator
        </Button>
        <Button variant={'outline'} size='lg'>
          editor
        </Button>
        </div>
      </div>
    </main>
  );
}
