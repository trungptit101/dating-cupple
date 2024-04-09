import type { IRouterItem } from '@/types/layout'

export const AllRouter: IRouterItem[] = [
  {
    id: 1,
    label: 'Tổng quan',
    path: '/dashboard',
    icon: 'icon-Dashboard',
    children: null,
  },
  {
    id: 2,
    label: 'Nhân viên và phân quyền',
    path: null,
    icon: 'icon-profile-2user',
    children: [
      {
        id: 21,
        label: 'Quản lý nhân viên',
        path: '/employees',
        icon: null,
        children: [
          {
            id: 211,
            label: 'Thông tin sản phẩm',
            path: '/employees/:id',
            icon: null,
            children: null,
            parentId: 21,
            parentLabel: ['Nhân viên và phân quyền', 'Sản phẩm'],
          },
          {
            id: 212,
            label: 'Thêm mới sản phẩm',
            path: '/employees/form',
            icon: null,
            children: null,
            parentId: 21,
            parentLabel: ['Nhân viên và phân quyền', 'Sản phẩm'],
          },
          {
            id: 213,
            label: 'Cập nhật sản phẩm',
            path: '/employees/form/:id',
            icon: null,
            children: null,
            parentId: 21,
            parentLabel: ['Nhân viên và phân quyền', 'Sản phẩm'],
          },
        ],
        parentId: 2,
        parentLabel: ['Nhân viên và phân quyền'],
      },
      {
        id: 22,
        label: 'Quản lý phòng ban',
        path: '/manufacturers',
        icon: null,
        children: [
          {
            id: 221,
            label: 'Thông tin nhà sản xuất',
            path: '/manufacturers/form/:id',
            icon: null,
            children: null,
            parentId: 22,
            parentLabel: ['Nhân viên và phân quyền', 'Nhà sản xuất'],
          },
          {
            id: 222,
            label: 'Thêm mới nhà sản xuất',
            path: '/manufacturers/form',
            icon: null,
            children: null,
            parentId: 22,
            parentLabel: ['Nhân viên và phân quyền', 'Nhà sản xuất'],
          },
        ],
        parentId: 2,
        parentLabel: ['Nhân viên và phân quyền'],
      },
      {
        id: 23,
        label: 'Nhóm quyền',
        path: '/consignments',
        icon: null,
        children: [
          {
            id: 231,
            label: 'Sửa lô hàng',
            path: '/consignments/form/:id',
            icon: null,
            children: null,
            parentId: 23,
            parentLabel: ['Quản lý lô hàng', 'Lô hàng'],
          },
          {
            id: 232,
            label: 'Thêm mới lô hàng',
            path: '/consignments/form',
            icon: null,
            children: null,
            parentId: 23,
            parentLabel: ['Quản lý lô hàng', 'Lô hàng'],
          },
          {
            id: 233,
            label: 'Thông tin lô hàng',
            path: '/consignments/detail/:id',
            icon: null,
            children: null,
            parentId: 23,
            parentLabel: ['Quản lý lô hàng', 'Lô hàng'],
          },
          {
            id: 234,
            label: 'Nhân bản lô hàng',
            path: '/consignments/coppy/:id',
            icon: null,
            children: null,
            parentId: 23,
            parentLabel: ['Quản lý lô hàng', 'Lô hàng'],
          },
        ],
        parentId: 2,
        parentLabel: ['Quản lý lô hàng'],
      },
    ],
  },
  {
    id: 3,
    label: 'Quản lý sản phẩm',
    path: null,
    icon: 'icon-box-1',
    children: [
      {
        id: 31,
        label: 'Sản phẩm',
        path: '/products',
        icon: null,
        children: [
          {
            id: 311,
            label: 'Thông tin sản phẩm',
            path: '/products/:id',
            icon: null,
            children: null,
            parentId: 31,
            parentLabel: ['Quản lý sản phẩm', 'Sản phẩm'],
          },
          {
            id: 312,
            label: 'Thêm mới sản phẩm',
            path: '/products/form',
            icon: null,
            children: null,
            parentId: 31,
            parentLabel: ['Quản lý sản phẩm', 'Sản phẩm'],
          },
          {
            id: 313,
            label: 'Cập nhật sản phẩm',
            path: '/products/form/:id',
            icon: null,
            children: null,
            parentId: 31,
            parentLabel: ['Quản lý sản phẩm', 'Sản phẩm'],
          },
        ],
        parentId: 3,
        parentLabel: ['Quản lý sản phẩm'],
      },
      {
        id: 32,
        label: 'Sản xuất',
        path: '/manufacturers',
        icon: null,
        children: [
          {
            id: 321,
            label: 'Thông tin nhà sản xuất',
            path: '/manufacturers/form/:id',
            icon: null,
            children: null,
            parentId: 32,
            parentLabel: ['Quản lý sản phẩm', 'Nhà sản xuất'],
          },
          {
            id: 322,
            label: 'Thêm mới nhà sản xuất',
            path: '/manufacturers/form',
            icon: null,
            children: null,
            parentId: 32,
            parentLabel: ['Quản lý sản phẩm', 'Nhà sản xuất'],
          },
        ],
        parentId: 3,
        parentLabel: ['Quản lý sản phẩm'],
      },
      {
        id: 33,
        label: 'Lô hàng',
        path: '/consignments',
        icon: null,
        children: [
          {
            id: 331,
            label: 'Sửa lô hàng',
            path: '/consignments/form/:id',
            icon: null,
            children: null,
            parentId: 33,
            parentLabel: ['Quản lý lô hàng', 'Lô hàng'],
          },
          {
            id: 332,
            label: 'Thêm mới lô hàng',
            path: '/consignments/form',
            icon: null,
            children: null,
            parentId: 33,
            parentLabel: ['Quản lý lô hàng', 'Lô hàng'],
          },
          {
            id: 333,
            label: 'Thông tin lô hàng',
            path: '/consignments/detail/:id',
            icon: null,
            children: null,
            parentId: 33,
            parentLabel: ['Quản lý lô hàng', 'Lô hàng'],
          },
          {
            id: 334,
            label: 'Nhân bản lô hàng',
            path: '/consignments/coppy/:id',
            icon: null,
            children: null,
            parentId: 33,
            parentLabel: ['Quản lý lô hàng', 'Lô hàng'],
          },
        ],
        parentId: 3,
        parentLabel: ['Quản lý lô hàng'],
      },
    ],
  },
  {
    id: 4,
    label: 'Quản lý kho hàng',
    path: '/warehouse',
    icon: 'icon-house-2',
    hiddenChildren: true,
    children: [
      {
        id: 41,
        label: 'Sửa kho hàng',
        path: '/warehouse/form/:id',
        icon: null,
        children: null,
        parentId: 4,
        parentLabel: ['Quản lý kho hàng'],
      },
      {
        id: 42,
        label: 'Thêm mới kho hàng',
        path: '/warehouse/form',
        icon: null,
        children: null,
        parentId: 4,
        parentLabel: ['Quản lý kho hàng'],
      },
      {
        id: 43,
        label: 'Thông tin kho hàng',
        path: '/warehouse/detail/:id',
        icon: null,
        children: null,
        parentId: 4,
        parentLabel: ['Quản lý kho hàng'],
      },
    ],
    parentId: 4,
    parentLabel: ['Quản lý kho hàng'],
  },
]
export const PageSizesPagination = [10, 20, 30, 40, 50]
export const PageSize = 10

export enum EObjectFit {
  cover = 'cover',
  contain = 'contain',
}

export enum EModalConfirmType {
  delete = 'delete',
}
