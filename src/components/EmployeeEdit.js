import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textWithoutEncoding } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete, employeeClear } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    
    componentWillUnmount() {
        this.props.employeeClear();
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        
        textWithoutEncoding(phone, `Your upcoming shift is on ${shift}`);
    }

    onFirePress() {
        this.setState({ showModal: true });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this employee?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete, employeeClear })(EmployeeEdit);
