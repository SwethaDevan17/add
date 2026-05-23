import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Generic from './pages/Generic';
import Forms from './pages/Forms';
import { services } from './utils/data';
const facilities=['Spacious Rooms','Private Rooms','Shared Rooms','Medical Room','Garden Area','Walking Track','Dining Hall','Meditation Space','Prayer Hall','TV Lounge','Library','Recreation Hall','CCTV Security','Emergency Alert System','Wheelchair Accessibility'];
const life=['Morning Tea','Yoga','Breakfast','Health Check-Up','Reading Time','Group Activities','Lunch','Afternoon Rest','Games','Evening Walk','Meditation','Dinner','Music Time','Sleep'];
const wellness=['Regular Health Checkups','Physiotherapy','Mental Wellness Programs','Medication Support','Diet Planning','Emergency Response','Senior Fitness'];
const gallery=['Rooms','Events','Daily Activities','Meals','Medical Care','Celebrations'];
const testimonials=['Resident Stories','Family Voices','Caregiver Moments'];
const blog=['Healthy Aging','Mental Health for Seniors','Nutrition Tips','Elder Care Guidance','Family Bonding'];
export default function App(){return <Layout><Routes><Route path='/' element={<Home/>}/><Route path='/about' element={<Generic title='About Us' items={['Mission','Vision','Core Values','Leadership','Our Story']}/>}/><Route path='/services' element={<Generic title='Services & Care' items={services}/>}/><Route path='/facilities' element={<Generic title='Facilities' items={facilities}/>}/><Route path='/life' element={<Generic title='Life at VAgeWell' items={life}/>}/><Route path='/wellness' element={<Generic title='Health & Wellness' items={wellness}/>}/><Route path='/gallery' element={<Generic title='Gallery' items={gallery}/>}/><Route path='/testimonials' element={<Generic title='Testimonials' items={testimonials}/>}/><Route path='/blog' element={<Generic title='Blog / Resources' items={blog}/>}/><Route path='/admission' element={<Forms title='Admission / Enquiry'/>}/><Route path='/contact' element={<Forms title='Contact Us'/>}/></Routes></Layout>}
