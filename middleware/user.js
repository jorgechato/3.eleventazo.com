export default async function({route, $storage, redirect}) {
  let token = $storage.getUniversal('token')
  if (token) {
    // let user in
  } else {
    let query = route.query;
    if(query && query.token) {
      $storage.syncUniversal('token', query.token)
      // let user in
    } else {
      redirect('/')
    }
  }
}
