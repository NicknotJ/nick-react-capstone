import React, {Component} from 'react';
import './Input.css';

export default class Input extends Component {

    render(){
        const Element = this.props.element;
        let error;
        //If form has been touched AND there is an error, define error
        if (this.props.meta.touched && this.props.meta.error){
            error =<div className='form-error'>Error:{this.props.meta.error}</div>
        }
        let warning;
        if(this.props.meta.touched && this.props.meta.warning){
            warning = <div className='form-warning'>Warning:{this.props.meta.warning}</div>
        }
        return(
            <div className='input'>
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <Element
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}>

                </Element>
            </div>
        )
    }
}