// import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import Img1 from '../../Assets/Home/img1.jpg';
import Img2 from '../../Assets/Home/img2.jpg';
import Img3 from '../../Assets/Home/img3.jpg';
import Img4 from '../../Assets/Home/img4.jpg';


const Carousel = () => {
  const carouselImages = [Img1, Img2, Img3, Img4];



  return (
    <div className='w-full h-96 bg-slate-600   bg-contain   '  style={{'backgroundImage':`url(${carouselImages[2]})`}} >

    </div>
  );
};

export default Carousel;
