<template>
    <div>
        <div class="astrology-responsive-nav">
            <div class="container-fluid">
                <div class="row">
                    <div class="astrology-responsive-menu">
                        <div class="logo">
                            <router-link to="/" tag="a"> <img :src="image"/></router-link>
                        </div>
                        <div class="others-option align-items-center">
                            <div class="option-item">
                                <div class="cart-btn">
                                    <router-link to="/cart" tag="a"><i class="fa fa-shopping-cart"></i><span>1</span>
                                    </router-link>
                                </div>
                            </div>

                            <div class="option-item">
                                <div class="search-btn-box">
                                    <router-link to="/cart" tag="a"><i class="search-btn fa fa-search"></i>
                                    </router-link>
                                </div>
                            </div>

                            <div class="option-item">
                                <router-link to="/contact" tag="a" class="btn"> Appointment</router-link>
                            </div>
                        </div>
                        <!--mobile Menu  -->

                        <div id="mySidenav" class="sidenav">
                            <div class="menu_slid_bg">
                                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>

                                <div class="col-sm-12" style="padding:0;">
                                    <h3>Categories</h3>

                                    <ul class="accordion" id="accordion-category">
                                        <li class="panel mobile_menu_li">
                                            <router-link to="/t" tag="a">Home</router-link>
                                        </li>
                                        <li class="panel mobile_menu_li">
                                            <router-link to="/about" tag="a">about us</router-link>
                                        </li>


                                        <li class="panel mobile_menu_li">
                                            <router-link to="/cart" tag="a">Our Services</router-link>
                                        </li>


                                        <li class="panel mobile_menu_li">
                                            <router-link to="/forecast" tag="a">Forecast</router-link>
                                        </li>

                                        <li class="panel mobile_menu_li">
                                            <router-link to="/cart" tag="a">Shop</router-link>
                                        </li>

                                        <li class="panel mobile_menu_li">
                                            <router-link to="/cart" tag="a">Blog</router-link>
                                        </li>
                                        <li class="panel mobile_menu_li">
                                            <router-link to="/cart" tag="a"> Contact Us</router-link>
                                        </li>
                                    </ul>
                                    <div class="clear"></div>
                                </div>

                            </div>
                        </div>

                        <span class="menu_open" onclick="openNav()">&#9776; Menu</span>
                        <!-- mobile Menu  end-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import imageLogo from "../assets/logo.png";

    export default {
        data() {
            return {
                image: imageLogo
            }
        }
    }
</script>