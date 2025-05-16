import Navbar from '../../components/Navbar'
import InformCard from '../../components/InformCard';
import ResumeCard from '../../components/ResumeCard';
import CuacaCard from '../../components/CuacaCard';

export default function Home() {
  return (
    <div className='bg-white pb-8 pt-2'>
      <Navbar / >
      <InformCard/>
      <ResumeCard/>
      <CuacaCard/>
    </div>
  );
}
