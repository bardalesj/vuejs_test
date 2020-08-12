<template>
    <div class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <Aside/>
            <Header/>
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark"></h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link class="brand-link" :to="{name : 'Layout'}">Inicio</router-link></li>
                        </ol>
                    </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
                </div>
                <!-- /.content-header -->

                <!-- Main content -->
                <section class="content">
                    <div class="container-fluid">
                        <router-view>   </router-view>
                    </div><!-- /.container-fluid -->
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->
            <Footer/>
        </div>
    </div>
</template>
<script>
import Aside from '@/components/Layouts/Modules/Aside.vue'
import Header from '@/components/Layouts/Modules/Header.vue'
import Footer from '@/components/Layouts/Modules/Footer.vue'
export default {
  name: "app",
  components:{
        Aside,
        Header,
        Footer
    }
}
</script>
