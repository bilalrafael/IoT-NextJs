import Navbar from '../../components/Navbar'
import CalendarPage from '../../components/Calendar'

export default function Home() {
  return (
    <div className='bg-white pb-8 pt-2'>
      <Navbar / >
      <CalendarPage />
    </div>
  );
}
