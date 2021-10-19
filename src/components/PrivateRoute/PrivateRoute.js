import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
        return <div class="spinner-grow text-primary my-5 text-center" role="status">
        <span class="sr-only text-center my-5">Loading...</span>
      </div>
    }
    return (
        <div>
            <Route
                {...rest}
                
                render={({location})=>user?.email?children
                :
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                >

                </Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;