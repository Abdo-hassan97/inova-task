import React ,{useState, useEffect} from 'react';
import './home.css'
import Logo from './Capture.PNG';




const Home = () => {
  const [Gym , setGym] = useState([]);
  useEffect(()=>{
    fetch('https://staging.algym.com/api/v1/gyms?lat=31.2475504&long=29.963676&page_number=1&page_size=1000&search_diameter=1000').then((data)=>{
        console.log(Gym)
        setGym(Gym)
    }).catch((err)=>{
        console.log(err)
    })

  })


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
            <div className='row'>


            <div className="col-3">
            <div class="card" style="width: 18rem;">
  <img src={Gym.logo_img_url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
            </div>
            </div>






































            <div id='footer' className="row">
                <p id='foot' > © 2020 ALGYM All Rights Reserved.Developed by INOVA LLC</p>
            </div>
        </div>
    );
}

export default Home;
