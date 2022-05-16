import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        // Warning: Each child in a list should have a unique "key" prop.
        // 고유한 id를 생성하여 고유한 key를 설정해준다
        habits : [
            { id : 1, name : 'Reading', count : 0 },
            { id : 2, name : 'Running', count : 0 },
            { id : 3, name : 'Coding', count : 0 },
        ]
    } 
    render() { 
        return (
            <ul>
                {
                    // habits 배열의 개수만큼 Habit(./habit) 출력
                    this.state.habits.map( eachHabit => (
                        // eachHabit = index 번째 habits 요소
                        // habitProps = 자식인 habit.jsx에 넘어갈 props
                        // key = 리스트에서 생성된 요소는 고유성을 가져야 한다.
                        <Habit key={eachHabit.id} habitProps={ eachHabit }/>
                    ))
                }
            </ul>
        );
    }
}

export default Habits;
