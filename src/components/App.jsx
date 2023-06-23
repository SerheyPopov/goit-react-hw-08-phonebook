import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Container } from './App.styled';
import SharedLayout from './SharedLatout';
// import Registration from 'Pages/Registration';
// import Login from 'Pages/Login';
// import MainPage from 'Pages/Contacts';
// import Title from '../components/Title/Title';
import { currentUser } from '../redux/Operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from 'redux/Selectors';


const Title = lazy(() => import('../components/Title/Title'));
const Registration = lazy(() => import('Pages/Registration'));
const Login = lazy(() => import('Pages/Login'));
const MainPage = lazy(() => import('Pages/Contacts'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Title />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/registration"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<MainPage />} />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    )
  );
};
