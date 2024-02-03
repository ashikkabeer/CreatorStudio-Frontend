import { ModeToggle } from './toggle-theme';

export default function Navbar() {
  return (
    <div className='flex w-screen pt-3 items-center'>
      <div className='flex justify-center w-full items-center gap-4 md:justify-center'>
        <div>Home</div>
        <div>Dashboard</div>
        <div>Home</div>
        <div className='flex justify-end'></div>
      </div>
      <div className='pr-2'>
        <ModeToggle />
      </div>
    </div>
  );
}
