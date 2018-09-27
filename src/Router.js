import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Stack key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Login"
                        initial
                    />
                </Stack>
                <Stack key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate(); }}
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
