import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/signup'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'

class SignupFormContainer extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data)
	}

	render() {
        console.log(this.props.signup.success)
		if (this.props.signup.success) return <Redirect to='/login' />

		return (
			<div>
				<h1>Sign up</h1>
				<SignupForm onSubmit={this.handleSubmit} signup={this.props.signup}/>
				<p style={{color:'red'}}>{ this.props.signup.error }</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	signup: state.signup
})

export default connect(mapStateToProps, {postSignup: signup})(SignupFormContainer)
