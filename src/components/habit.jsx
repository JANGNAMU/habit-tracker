import React, { Component } from 'react';

class Habit extends Component {
    state = {  count : 0 };

    // state 안에 존재하는 count 증가 후 state 업데이트
    handleIncrement = () => {
        this.setState({ count : this.state.count + 1 });
        // setState를 사용하지 않으면, 변화 여부를 인식하지 못하여 랜더() 하지 못함
    };

    handleDecrement = () => {
        // 연산을 먼저 실행, 0보다 작으면 0 출력
        const count = this.state.count - 1;
        this.setState({ count : count < 0 ? 0 : count });
    }

    render() {
        const { name, count } = this.props.habitProps;

        return (
            <li className="habit">
                <span className="habit-name">{ name }</span>
                <span className="habit-count">{ count }</span>

                <button 
                    className='habit-button habit-increase' 
                    onClick={ this.handleIncrement }>
                    <i className="fas fa-plus-square"></i> 
                </button> 
                <button 
                    className='habit-button habit-decrease'
                    onClick={ this.handleDecrement }>
                    <i className="fas fa-minus-square"></i> 
                </button>
                <button className='habit-button habit-delete'>
                    <i className="fas fa-trash"></i> 
                </button>
            </li>
        );
    }
}

export default Habit;