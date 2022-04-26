
import React from 'react';
import './pricing.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Timer from './Timer';
function pricing() {
	const time = new Date();
  time.setSeconds(time.getSeconds() + 86400); // 10 minutes timer
  return (
	  <>
  <div class="card" style={{width:`16rem`}}>
  <div className='card-header'>
  <h2> FLAT 30% OFF</h2><br></br>
	<div class='container'>
	<div className='row'>
		<div className='col-8'>
							  {/* <h6> Offer closed</h6> <br/> */}
							  <Timer expiryTimestamp={time}/>
	  <p className='text-justify text-left"' ><small>weakend Plan Booked 100% with In 20 Minute</small></p>
		</div>
		<div className='col-4'>
							  <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" value="65"></div>
							  <center><small>Booked</small></center>
		</div>
	</div>
	</div>
	   </div>
  <div class="card-body">
  <div class="text-white bg-primary rounded p-1 badge">Weekly plan</div>
    <h5 class="card-title">Practice on weekends</h5>
    <p class="card-text">
	<ul className="tick">
   <li class="list-item"> This is included</li>
  <li class="list-item">And so is this</li>
  <li class="list-item">It's all included in two lines</li>
						  <li class="list-item">Me too</li>
						  <div class="container">
							  <p>
								  <i class="bi bi-lightbulb-fill m-2 text-primary mt-4"></i>
								  <small>
									This plan suits you if you're already busty with academics projects and other classes
								  </small>
								  <p className='b'>
									  Flat 30% OFF for being reffered by saurabh
								  </p>
							</p>
						  </div>
						  <br />
						  <div class="text-primary justify-text text-left">
							  <span>&#8377;</span> 1399 <small className='r'>Save 30%</small>
							  <small class="text-justify text-right"> <strike><span>&#8377;</span> 1999</strike> </small>
						  </div>
</ul>
	</p>
				  <button class="btn btn-secondary btn-sm col-12">80% Booked</button>
  </div>
</div>
  </>
  )
};

export default pricing;