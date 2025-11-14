import React from 'react'
import style from "../styles/Contact.module.css"
import img1 from "../image/a1.png"
import img2 from "../image/a6.png"
import loc from "../image/lock.png"
import img3 from "../image/a10.png"
export default function Contact() {

  return (
//     <div>
//         <h1 className={style.h2}></h1>
//         <div className="text-center" style={{color:"red",fontSize:"23px"}}>
//             welcome
//         </div>
//         <div class="card" style={{width: "20rem"}}>
//   <img src={img1} class="card-img-top" alt="..." />
//   <div class="card-body">
//     <h5 class="card-title" id={style.jh}>Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
<div>
    <div className="container-fluid">
<div className="row">
    <div className="col m-5">
        <span>INFORMATION 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </span>
        <span className='text-secondary'>SHIPPING 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
            </span>
        <span className='text-secondary'>PAYMENT 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </span>
        <div className={style.divide}>
            <p className='p-4'>Already have an account? <a href="#">Log in</a> for faster checkout</p>
        </div>
        <h3 className='mb-3'>1 Contact information</h3>
        <input type="text" class="form-control light-subtle" id="exampleFormControlInput1" placeholder="Your Name"/><br />
        <input type="text" class="form-control light-subtle" id="exampleFormControlInput1" placeholder="Your Email"/><br />
        <input type="text" class="form-control light-subtle" id="exampleFormControlInput1" placeholder="Your Phone number *"/><br />
        <button type="button" class="btn btn-dark w-100">Continue to shipping</button><br />
        <hr />
        <span id={style.sp1} >2 Shipping details</span><br /><br /><hr />
        <span id={style.sp1} >3 Payment</span><br /><br /><hr />
    </div>
    
    <div className="col m-5">
        <span>ORDER SUMMARY</span>
        <div className={style.right}>
            <div className='mt-4 d-flex' id={style.con}>
                <div>
                    <img src={img2} alt="" />
                </div>
               
                <div className='d-inline' id={style.two}>
                    <span className="h5 inline-block">Snowfall</span>
                    <span className="span"> Quantity(1)</span>
                </div>
                <div className='' id={style.symbol}><span className="h5">$100</span></div>
            </div>
            
        </div>
        <hr />
        <p>If you have our gift card, enter the code to get discounts</p>
        <div className='d-flex justify-content-around'>
            <button id={style.but} className='btn btn-light ' >Gift card</button>
            <button id={style.but} className='btn btn-dark '>Apply</button>
        </div>
        <hr />
        <div className='d-flex justify-content-between pl-2' >
            <p className="span">Subtotal</p>
            <p className="span">$100.00</p>
        </div>
        <div className='d-flex justify-content-between ' >
            <p className="span">Shipping</p>
            <p className="span">Calculated at next step</p>
        </div>
        <hr />
        <div className='d-flex justify-content-between ' >
            <p className="h5">Total</p>
            <p className="h5">$100.00</p>
        </div>
        <p className="code" id={style.foot}>Secure Checkout<svg id={style.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
  <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
  <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"/>
</svg></p>
    </div>
</div>
    </div>
   
</div>
  )
}
