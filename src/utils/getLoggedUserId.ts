import type { User } from '../types/user';

// Default way to use a logged user
// Feel free to update the user ID for your tests
// or enhance it with better data source, or better user management
export const getLoggedUserId = (): User['id'] => 1;

// To better manage user, we would need a login route on the API that returns a token
// and then we use this token to access private routes and private API calls
// We can store this token in the cookies
// and in the file src/pages/api/[...all.ts] we can send this token for every request to the api
// and we can also check on each page with getServerSideProps if the token is in the cookies, if not we redirect to home page or login page
