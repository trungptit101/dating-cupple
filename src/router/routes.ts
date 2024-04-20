import { LayoutPortal } from '@/components/Layouts'
import type { RouteRecordRaw } from 'vue-router'
import { RouterView } from 'vue-router'
import { I18nUtils } from '@/utils'

export const routes: RouteRecordRaw[] = [
  {
    path: '/admin/:locale?',
    component: RouterView,
    beforeEnter: I18nUtils.routeMiddleware,
    children: [
      {
        path: '',
        name: 'LayoutPortal',
        component: LayoutPortal,
        children: [
          {
            path: '',
            name: 'Home',
            component: () => import('../views/Home.vue'),
          },
          // Nhân viên và phân quyền -> Quản lý nhân viên
          {
            path: 'employees',
            name: 'Employees',
            component: () => import('../views/Employees/EmployeesList.vue'),
          },

          {
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('../views/Dashboard.vue'),
          },
          // Quản lý sản phẩm -> Sản phẩm
          {
            path: 'products',
            name: 'Products',
            component: () => import('../views/Products/ProductsList.vue'),
          },
          {
            path: 'products/form/:id?',
            name: 'ProductsForm',
            component: () => import('../views/Products/ProductsForm.vue'),
          },
          {
            path: 'products/:id',
            name: 'ProductsDetail',
            component: () => import('../views/Products/ProductsDetail.vue'),
          },
          // Quản lý sản phẩm -> Sản xuất
          {
            path: 'manufacturers',
            name: 'Manufacturers',
            component: () =>
              import('../views/Manufacturers/ManufacturersList.vue'),
          },
          {
            path: 'manufacturers/form/:id?',
            name: 'ManufacturersForm',
            component: () =>
              import('../views/Manufacturers/ManufacturersForm.vue'),
          },
          // Quản lý sản phẩm -> Lô hàng
          {
            path: 'consignments',
            name: 'Consignments',
            component: () =>
              import('../views/Consignments/ConsignmentsList.vue'),
          },
          {
            path: 'consignments/form/:id?',
            name: 'ConsignmentsForm',
            component: () =>
              import('../views/Consignments/ConsignmentsForm.vue'),
          },
          {
            path: 'consignments/coppy/:id?',
            name: 'ConsignmentsFormCoppy',
            component: () =>
              import('../views/Consignments/ConsignmentsForm.vue'),
          },
          {
            path: 'consignments/detail/:id?',
            name: 'ConsignmentsDetail',
            component: () =>
              import('../views/Consignments/ConsignmentsDetail.vue'),
          },
          // Quản lý kho hàng
          {
            path: 'warehouse',
            name: 'Warehouse',
            component: () => import('../views/Warehouse/WarehouseList.vue'),
          },
          {
            path: 'warehouse/form/:id?',
            name: 'WarehouseForm',
            component: () => import('../views/Warehouse/WarehouseForm.vue'),
          },
          {
            path: 'warehouse/detail/:id?',
            name: 'WarehouseDetail',
            component: () => import('../views/Warehouse/WarehouseDetail.vue'),
          },
        ],
      },
      {
        path: 'auth',
        name: 'LayoutAuth',
        component: () => import('@/components/Layouts/LayoutAuth.vue'),
        redirect: 'login',
        children: [
          {
            path: 'login',
            name: 'Login',
            component: () => import('@/views/Login.vue'),
          },
          {
            path: 'register',
            name: 'Register',
            component: () => import('@/views/Register.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: () => import('@/views/Client/HomeComponent.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/Client/Login.vue'),
  },
  {
    path: '/payment/upgrade',
    component: () => import('@/views/Client/UpgradePayment.vue'),
  },
]
