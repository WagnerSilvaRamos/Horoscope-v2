<template>
  <div class="top-header">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-12">
          <ul class="top-header-contact-info">
            <li><i class="fa fa-envelope-o"> </i> info@yourcompany.com</li>
            <li>
              <i class="fa fa-phone"></i> Emergancy Helpline:
              <a href="tel:+44587154756">+55 123 456-7890</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12">
          <ul class="top-header-social header_account">
          <li><router-link to="/login" exact > <i class="fa fa-sign-in"></i> Login <span>/</span></router-link></li>
         <li><router-link to="/register" exact ><i class="fa fa-pencil-square-o"></i> Register</router-link></li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
