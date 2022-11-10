import React ,{useState, useEffect} from 'react';
import './home.css'
import Logo from './Capture.PNG';
import defultImage from './computer-icons-information-png-favpng-g8DtjAPPNhyaU9EdjHQJRnV97_t.jpg';
import axiosInstance from "./../../axiosConfig/instance";




const Home = () => {
  var [pageStart, setpageStart] = useState(1);

  const [Gym , setGym] = useState([]);

  console.log(pageStart)
  useEffect(() => {
    axiosInstance
      .get("/gyms?lat=31.2475504&long=29.963676&page_number="+pageStart+"&page_size=3&search_diameter=1000" )
      .then((res) => {
        console.log(res)
        setGym(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageStart]);
  
  function prev() {
    debugger;
    if (pageStart > 1) {
      setpageStart(--pageStart);
    }
  }
  function next() {
    debugger;
    setpageStart(++pageStart);
    //   }
  }


    return (
        <div className='container-fluid'>
            <div className="row" id='navBAr'>
                <div className='col-2'>
                <img id='img' className='logo' src={Logo} alt=""/>
                </div>
                <div className='col-1'>
                    <p>Home</p>
                </div>
                <div className='col-1'>
                    <p>HotDeals</p>
                </div>
                <div className='col-4'><span></span></div>
                <div className="col-1">
                <p>العربية</p>
                </div>
                <div className='col-1'>
                <p id='signIn'> Sign in</p>
                </div>
                <div className='col-2'>
                <p id='signUp'> Sign up</p>
                </div>
            </div>
            <br></br>
            <div className="container">
            <div className='row'>
            <div className='col-1'> <span> </span></div>
            <div className='col-5'>
            <form id='srch' class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search by gym name" aria-label="Search"/>
        <button id='btn2' class="btn btn-outline-danger" type="submit">Filters</button>

        <button id='btn' class="btn btn-outline-danger" type="submit">FindGyms</button>
      </form>
            </div>

            <div className='col-2'><span> </span> </div>
            <div  className='col-3'>
            <div  class="d-grid gap-2">
  <button id='btnn' class="btn btn-primary btn-lg" type="button">Swith to map view</button>
</div>
                 </div>
            </div>
            </div>
            <div className="row g-5 mt-3 container-fluid mx-auto bg-light">
              <p id='all'>All.</p>
            {Gym.map((g) => {
          return (
            <>
            <div  className="col-md-4">
            <div id='card' className="card" >
  <img id='imgcard'  src={g.logo_img_url ?g.logo_img_url:defultImage} className="card-img-top-rounded" alt="..."/>
  <div className="card-body">
    <h5 id='tittle' className="card-title">{g.name}</h5>
    {g.is_hot_deal ?<div id='deals' className="card-text" >Hot Deals.</div> : ''}
    
  </div>
</div>
            </div>
         
            </>
          );
        })}
        </div>


<div className='row'>
  <div className='col-4'><span></span></div>
  <div className='col-4'>
  <p id='pagination'>
      <button id='lastbtn' onClick={() => prev()}>  Prev</button>
      {pageStart}
      <button  id='lastbtn'  onClick={() => next()}> Next </button>
    </p>
  </div>
  <div className='col-4'><span></span></div>
</div>

            <div id='footer' className="row">
                <p id='foot' > © 2020 ALGYM All Rights Reserved.Developed by INOVA LLC</p>
            </div>
            
   
        </div>
    );
}

export default Home;
