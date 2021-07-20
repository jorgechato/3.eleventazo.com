export default async function({route, $storage, redirect}) {
    let token = $storage.getUniversal('token')
    if (token) {
        //TODO: get user by token
        // if user in db
        // then redirect('/')
        // else let the user in
        redirect('/')
    } else {
        // let the user in
    }
}
