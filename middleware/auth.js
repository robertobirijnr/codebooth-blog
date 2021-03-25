export default function(context){
    if(!context.store.getters.authenticated){
        context.redirect('/admin/auth')
    }
}