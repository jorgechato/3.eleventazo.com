export default async function({route, $storage, redirect}) {
    let query = route.query;
    if(query && query.code) {
        //TODO: get user by code
        // if user.invites > 0
        // then alert('Tu amig@ se ha quedado sin invitaciones') && redirect('/')
        // else
        // let the user in
    } else {
        alert('El enlace ha caducado o es incorrecto, pide a tu amig@ que hable con los admins')
        redirect('/')
    }
}
