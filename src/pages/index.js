import Navbar from '../../components/Navbar'
import InformCard from '../../components/InformCard';
import ResumeCard from '../../components/ResumeCard';

export default function Home() {
  return (
    <div className=''>
      <Navbar / >
      <InformCard/>
      <ResumeCard/>
    </div>
  );
}
