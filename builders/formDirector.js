import {
    title,
    slug,
    password,
    email,
    isbn,
    description,
    price,
    thumbnail,
    author,
    language,
    website
} from '@/common/Inputs.js'
import {editAddProduct, login } from '@/common/FormActions.js'
export default class DatatableDirector {
    constructor(builder){
        this.builder = builder
    }
    
   
    makeEditAddProduct() {
        const  inputs  =  [
            title,
            slug,
            isbn,
            description,
            price,
            thumbnail,
            author,
            language,
            website
        ]
        return this.builder
            .setTitle('Create product')
            .setInputs(inputs)
            .setEditUrl('products/find/id')
            .setCols(12)
            .setErrors([])
            .setError('')
            .setLoadnng(false)
            .setHiddenable(true)
            .setAction(editAddProduct)
            .build()
    }

    makeLogin() {
        let loginEmail = {...email}
        loginEmail.enter = ctx => {
            ctx.$refs.password[0].focus()
        }
        let loginPassword = {...password}
        loginPassword.enter = ctx => {
            ctx.opts.action(ctx)
        }
        const  inputs  =  [
            loginEmail,
            loginPassword,
        ]
        return this.builder
            .setTitle('Login')
            .setInputs(inputs)
            .setCols(6)
            .setError('')
            .setErrors([])
            .setLoadnng(false)
            .setHiddenable(true)
            .setAction(login)
            .build()
    }

};