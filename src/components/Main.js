import { Fragment } from "react"
import { Jumbotron } from "reactstrap"

export default function Main(props) {
	return (
		<Fragment>
			<Jumbotron>
				<div className="container">
					<div className="row row-header">
						<div className="col-12 col-sm-6">
							<h1>Company</h1>
							<p>We will use git API in order to fetch commits from a public uploaded project!!</p>
						</div>
					</div>
				</div>
			</Jumbotron>
		</Fragment>
	)
}