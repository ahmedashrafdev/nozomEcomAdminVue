import {
    groupFilter,
    BannerTypeFilter,
    ByWeightFilter,
    fromFilter,
    toFilter,
} from "@/common/Filters.js"

import { viewProduct, editProduct, editBanner , createBanner } from "@/common/dataTableActions.js"
export default class DatatableDirector {
    constructor(builder){
        this.builder = builder
    }
    
    makeProducts() {
        const  filters  =  [
            groupFilter(),
            ByWeightFilter()
        ]
        const  headers  =  [
            { text: 'name', value: 'ItemNameEn' , align: "center" },
            // { text: 'arabic name', value: 'ItemName' , align: "center" },
            { text: 'image', value: 'ItemImage' , align: "center" },
            { text: 'by weight', value: 'ByWeight' , align: "center" },
            // { text: 'package price', value: 'POSTP' , align: "center" },
            { text: 'price', value: 'POSPP' , align: "center"},
            // { text: 'minor per major', value: 'MinorPerMajor' , align: "center" },
            { text: 'in stock', value: 'InStock' , align: "center" },
            { text: 'actions', value: 'actions' , align: "center" },
        ]
        return this.builder
                .setTitle('products')
                .setUrl('products')
                .setCreateAble(false)
                .setEdit(editProduct)
                .setViewable(true)
                .setView(viewProduct)
                .setTable('products')
                .setHeaders(headers)
                .setFilters(filters)
                .build()
    }
        
    makeUsers() {
        const  filters  =  [
            
        ]
        
        const  headers  =  [
            { text: 'id', value: 'id' , align: "center" },
            { text: 'name', value: 'name' , align: "center" },
            { text: 'email', value: 'email' , align: "center"},
            { text: 'created at', value: 'created_at' , align: "center" },
            { text: 'actions', value: 'actions' , align: "center" },
        ]
        return this.builder
                .setTitle('users')
                .setTable('users')
                .setUrl('user/list/0')
                .setCreateLoading(false)
                .setEditable(false)
                .setViewable(true)
                .setHeaders(headers)
                .setFilters(filters)
                .build()
    }

    makeAdmins() {
        const  filters  =  [
            
        ]
        
        const  headers  =  [
            { text: 'id', value: 'id' , align: "center" },
            { text: 'name', value: 'name' , align: "center" },
            { text: 'email', value: 'email' , align: "center"},
            { text: 'created at', value: 'created_at' , align: "center" },
            { text: 'actions', value: 'actions' , align: "center" },
        ]
        return this.builder
                .setTitle('admins')
                .setTable('admins')
                .setUrl('user/list/1')
                .setCreateLoading(false)
                .setEditable(false)
                .setViewable(true)
                .setHeaders(headers)
                .setFilters(filters)
                .build()
    }

    makeBanners() {
        const  filters  =  [
            BannerTypeFilter
        ]
        
        const  headers  =  [
            { text: 'id', value: 'id' , align: "center" },
            { text: 'type', value: 'type' , align: "center" },
            { text: 'image', value: 'image' , align: "center"},
            { text: 'actions', value: 'actions' , align: "center" },
        ]
        return this.builder
                .setTitle('banners')
                .setTable('banners')
                .setUrl('banners')
                .setCreateLoading(false)
                .setEditable(true)
                .setEdit(editBanner)
                .setCreate(createBanner)
                .setViewable(false)
                .setHeaders(headers)
                .setFilters(filters)
                .build()
    }

    makeOrders() {
        const  filters  =  [
            toFilter(),
            fromFilter(),
        ]
        
        const  headers  =  [
            { text: 'id', value: 'id' , align: "center" },
            { text: 'user', value: 'user' , align: "center" },
            { text: 'shipping', value: 'shipping' , align: "center"},
            { text: 'subtotal', value: 'subtotal' , align: "center"},
            // { text: 'total', value: 'total' , align: "center"},
            // { text: 'discount_code', value: 'discount code' , align: "center" },
            { text: 'created at', value: 'created_at' , align: "center" },
            { text: 'closed at', value: 'closed_at' , align: "center" },
            { text: 'actions', value: 'actions' , align: "center" },
        ]
        return this.builder
                .setTitle('orders')
                .setTable('cart')
                .setUrl('orders/list')
                .setCreateLoading(false)
                .setEditable(false)
                .setViewable(true)
                .setHeaders(headers)
                .setFilters(filters)
                .build()
    }
};