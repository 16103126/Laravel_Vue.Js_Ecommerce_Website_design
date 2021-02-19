<style scoped>
 body{
    font-family: 'Montserrat'; 
 }

 .footer{
     text-align: center;
     color: #9b9b9b;
     padding: 0 0 80px 0;
 }

 .page-footer .footer-link ul li{
     border-radius: 100px;
 }

 .new-arrival{
    padding: 0 0 80px 0;
 }

 .new-arrival .title{
     color: #5c5c5c;
     margin-bottom: -10px;
 }

 .new-arrival .item a{
     margin-left: 40px;
     border-radius: 100px;
     border: 0;
     padding: 10px 28px 10px 28px;
 }

 .new-arrival .item .product-image{
     width: 262;
     margin-left: 20px;
     height: 200px;
 }

 .new-arrival .item .price{
     font-size: 16px;
     color: #0b0e0d;
     margin-left: 70px;
     margin-top: -10px;
 }

 .new-arrival .item .product-name{
     
     margin-left: 45px;
     margin-top: 20px;
    font-size: 18px;
    font-family: 'Montserrat-Light';
    color: #5c5c5c;
 }

 .featured-item{
    padding: 80px 0 80px 0;
 }

 .featured-item .right{
     
 }

 .featured-item .right .btn-warning{
     margin-top: 20px;
     color: white;
     background: #FFBB5D;
     border-radius: 100px;
     border: 0;
     padding: 8px 28px 8px 28px;
 }

 .featured-item .right .origin-price{
     color: #9b9b9b;
     font-size: 18px;
     text-decoration: line-through;
     margin-top: -20px;
 }

 .featured-item .right .disc-price{
     color: #1abc9c;
     font-size: 28px;
     font-family: 'Montserrat-Medium';
     margin-top: -10px;
 }

 .featured-item .right .title{
     font-size: 56px;
     font-family: 'Monserrat-ExtraLight';
     font-weight: 100px;
     color: #5C5C5C;
     line-height: 1.3;
     margin-bottom: 30px;
 }

  .featured-item .left .indicator{
     width: 300px;
     margin-left: 100px;
 }

 .featured-item .left img{
     height: 300px;
     margin-left: 100px;
 }

 .o-color{
     color: #FFBB5D;
 }

 .mynavbar{
     background: none;
 }

 .mynavbar .navbar-brand{
     font-weight: bold;
     font-size: 32px;
     color: #5C5C5C;
 }

 .mynavbar .navbar-nav li a{
     color: #5C5C5C;
 }

 .mynavbar .navbar-nav li{
     padding-right: 20px;
 }

 .mynavbar .navbar-nav{
     margin-top: 10px;
 }
</style>


<template>
<div>
        <nav class="mynavbar navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">Shop<span class="o-color">pye</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">PROMOS <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CATEGORIES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">MERCHANT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">MY CART</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container featured-item mt-50">
       <div class="row">
          <div class="left col-sm">
              <mdb-carousel
              Class="indicator"
    :items="thumbnailCarousel"
    thumbnails
    :interval="8000"
    :height="4000000"
  ></mdb-carousel>
  
                
              </div> 
              <div class="right col-sm">
                  <p class="title">
                      Apple Earpod on demand
                  </p>
                  <p class="origin-price">
                      $800,00
                  </p>
                  <p class="disc-price">
                      $299,99
                  </p>
                  <p>
                      <a class="btn btn-warning" href="#">BUY NOW</a>
                  </p>
              </div>
           </div> 
</div>

<div class=" container new-arrival">
    <div class="row">
        <div class="col-sm">
            <h5 class="title">NEW ARRIVAL</h5>
        </div>
    </div>
    <div class="row">
        <div v-for="product in productitem" class="item img-fluid col-sm-3">
        <div class="card mt-5">
            <div class="card-image">
                 <img class="product-image" v-bind:src="product.imgpath" alt="">
            </div>
            <div class="card-body">
                <p class="product-name">{{product.name}}</p>
                <p class="price">{{product.price}}</p>
                <a href="#" class="btn btn-info">Add to Cart</a>
            </div>
        </div>
    </div>
        </div>
    </div>
    
   
    <!-- Footer -->
  <mdb-footer color="stylish-color-dark" class="page-footer font-small pt-4 mt-4">
   
    <hr />
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item"><a href="#" class="btn btn-danger btn-rounded">Sign up!</a></li>
      </ul>
    </div>
    <hr />
    <div class="footer-link text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item"><a style="  border-radius: 50%; width: 50px; height:50px;" class="btn btn-danger"><i class="fab fa-facebook"> </i></a></li>
        <li class="list-inline-item"><a style="  border-radius: 50%; width: 50px; height:50px;" class="btn btn-primary"><i class="fab fa-twitter"> </i></a></li>
        <li class="list-inline-item"><a style="  border-radius: 50%; width: 50px; height:50px;" class="btn btn-warning"><i class="fab fa-google-plus"> </i></a></li>
        <li class="list-inline-item"><a style="  border-radius: 50%; width: 50px; height:50px;" class="btn btn-success"><i class="fab fa-linkedin-in"> </i></a></li>
        <li class="list-inline-item"><a style="  border-radius: 50%; width: 50px; height:50px;" class="btn btn-info"><i class="fab fa-dribbble"> </i></a></li>
      </ul>
    </div>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->

</div>

</template>

<script>

//NEW ARRIVAL PRODUCT CAROUSEL 
 import {
    mdbCarousel, mdbFooter, mdbContainer, mdbRow, mdbCol,mdbBtn
    
    } from "mdbvue";
  

export default {

    //NEW ARRIVAL PRODUCT CAROUSEL 
    name: "CarouselPage",  
    name: "FooterPage",
     name: 'ButtonPage',
    //Thumbnails
    components: {
        
      mdbCarousel,
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn
      
    },

     //FEATURE PRODUCT CAROUSEL
  
  
     
    data: function(){
        return{
            productitem:[
                {
                    name: 'Goody Speaker',
                    price: '$900,38',
                    imgpath: '/images/headphone4.jpg'
                },
                 {
                    name: 'Goody Speaker',
                    price: '$800,56',
                    imgpath: '/images/headphone1.jpg'
                },
                 {
                    name: 'Goody Speaker',
                    price: '$800,38',
                    imgpath: '/images/headphone3.jpg'
                },
                 {
                    name: 'Goody Speaker',
                    price: '$800,38',
                    imgpath: '/images/headphone2.jpg'
                },
                {
                    name: 'Goody Speaker',
                    price: '$900,38',
                    imgpath: '/images/headphone4.jpg'
                },
                 {
                    name: 'Goody Speaker',
                    price: '$800,56',
                    imgpath: '/images/headphone1.jpg'
                },
                 {
                    name: 'Goody Speaker',
                    price: '$800,38',
                    imgpath: '/images/headphone3.jpg'
                },
                 {
                    name: 'Goody Speaker',
                    price: '$800,38',
                    imgpath: '/images/headphone2.jpg'
                }
            ],
            thumbnailCarousel: [
          {
            img: true,
            src:
              "/images/headphone.jpg",
            thumbnail:
              "/images/headphone.jpg"
          },
          {
            img: true,
            src:
              "/images/headphone3.jpg",
            thumbnail:
              "/images/headphone3.jpg"
          },
          {
            img: true,
            src:
              "/images/headphone4.jpg",
            thumbnail:
              "/images/headphone4.jpg"
          }
        ],   
          
        }
    }
}
</script>