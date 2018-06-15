import React, { Component } from 'react'

class Countdown extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            total: +props.total,
            isStart: false
        }
        
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
    }

    render() {
        return (
            <div>
                <label>倒计时: {this.state.total}</label>
                {
                    this.state.total ? (
                        <button onClick={this.state.isStart ? this.stop : this.start}>{this.state.isStart ? '暂停' : '开始'}</button>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }

    start() {
        this.timerId = setInterval(()=>this.countDown(), 100)
    }

    stop() {
        clearInterval(this.timerId)
        this.setState({
            isStart: false
        })
    }

    countDown() {
        if (this.state.total <= 0) {
            this.setState({
                total: 0,
                isStart: false
            })

            clearInterval(this.timerId)
            return
        }

        this.setState((prevState, props) => {
            return {
                total: prevState.total - 100,
                isStart: true
            }
        })
    }
}

export default Countdown