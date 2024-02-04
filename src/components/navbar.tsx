import { ModeToggle } from './toggle-theme';

export default function Navbar() {
  return (
    <div className=' flex w-screen pt-3 items-center top-0'>
      <div className='pl-5 m-0'>
        <p className=''>
          Creator<span className='text-primary'>Studio</span>
        </p>
      </div>
      <div className='flex font-semibold justify-center w-full items-center  md:gap-9 gap-4 md:justify-center'>
        <div>Home</div>
        <div>Dashboard</div>
        <div>Account</div>
        <div>Settings</div>
        <div className='flex justify-end'></div>
      </div>
      <div className='pr-2 md:pr-7'>
        <ModeToggle />
      </div>
    </div>
  );
}
