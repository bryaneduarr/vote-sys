import Input from "../../components/input";
import "../../styles/pages/sign-up.css";

export default function SignUp() {
	return (
		<div className="sign-up-container">
			{/* HEADER */}
			<div className="sign-up-header">
				<h2>Create an account</h2>
				<p className="sign-up-redirect-suggestion">
					Already have an account? <span className="sign-up-link">Sign up</span>
				</p>
			</div>

			{/* MAIN CONTENT */}
			<form className="sign-up-form-container">
				{/* INPUT COMPONENTS */}
				<div className="sign-up-input-container">
					{/* EMAIL FIELD*/}
					<Input
						placeholder="Email"
						htmlFor="email"
						label="What's your email address?"
						type="email"
						name="email"
						id="email"
					/>

					{/* FIRST PASSWORD FIELD */}
					<div className="sign-up-password-container">
						<Input
							placeholder="Password"
							htmlFor="password"
							label="Create a password"
							type="password"
							name="password"
							id="password"
						/>
						<p>
							Use 8 or more characters with a mix of letters, numbers & symbols
						</p>
					</div>

					{/* CONFIRM PASSWORD FIELD */}
					<Input
						placeholder="Password"
						htmlFor="password"
						label="Enter your password again"
						type="password"
						name="password"
						id="password"
					/>
				</div>

				{/* SUBMIT SIGN UP BUTTON */}
				<div className="sign-up-submit-container">
					<p className="sign-up-terms">
						By creating an account, you agree to the{" "}
						<span className="sign-up-terms-service">Terms of Service </span>
						and <span className="sign-up-privacy-policy">Privacy Policy</span>
					</p>
					<button className="sign-up-submit-button" type="submit">
						Sign up
					</button>
				</div>
			</form>
		</div>
	);
}
