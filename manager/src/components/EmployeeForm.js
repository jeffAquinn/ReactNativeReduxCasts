import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, CardSectionButton, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSectionButton style={{ flexDirection: 'column', marginBottom: 10 }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
            <CardSectionButton>
              <Agenda
                // the list of items that have to be displayed in agenda.
                // the value of date key kas to be an empty array [].
                // considered that the date in question is not yet loaded
                items={{ '2012-05-22': [{ text: 'shift 1 - {}' }],
                   '2012-05-23': [{ text: 'shift 2 - {}' }],
                   '2012-05-24': [],
                   '2012-05-25': [{ text: 'shift 3' }, { text: '' }],
                   '2012-05-26': [{ text: 'shift 4' }, { text: '' }],
                   '2012-05-27': [{ text: 'shift 5' }, { text: '' }]
                  }}
                //items for a certain month should be loaded (month became visible)
                loadItemsForMonth={() => { }}
                // callback that gets called on day press
                onDayPress={() => { }}
                // callback that gets called when day changes while scrolling agenda list
                onDayChange={() => { }}
                // initially selected day
                selected={''}
                // specify how each item should be rendered in agenda
                renderItem={() => { return (<View />); }}
                //Day can be undefined if the item is not first in that day.
                renderDay={() => { return (<View />); }}
                // specify how empty date content with no items should be rendered
                renderEmptyDate={() => { return (<View />); }}
                // specify your item comparison function for increased performance
                rowHasChanged={(r1, r2) => { return r1.text !== r2.text; }}
                // style={{
                //   agendaDayTextColor: 'yellow',
                //   agendaDayNumColor: 'green',
                //   agendaTodayColor: 'red'
                // }}
              />
            </CardSectionButton>
          </CardSectionButton>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 16,
    paddingLeft: 21,
    paddingTop: 10,
    paddingBottom: 10,
    fontStyle: 'italic'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
