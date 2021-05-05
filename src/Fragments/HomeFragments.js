import {
	Avatar,
	Backdrop,
	CircularProgress,
	Container,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { category, HomeOutlined, Title } from "@material-ui/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCategories } from "../Components/Actions/categoryActions";
import { loadCategoryPage } from "../Components/Actions/categoryPageActions";
import BannerSlider from "../Components/BannerSlider";
import GridView from "../Components/GridView";
import HorizontalScroller from "../Components/HorizontalScroller";
import StripAdView from "../Components/StripAdView";

export class HomeFragments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			value: 0,
			Page: "HOME",
		};
	}
	handleChange = (event, newValue) => {
		this.setState({
			value: newValue,
		});
	};

	componentDidMount() {
		if (this.props.categories === null) {
			this.props.loadCategories(
				() => {
					//this.setState({ page: "HOME" });
					this.props.loadPage(
						"HOME",
						() => {
							this.setState({ loading: false });
						},
						() => {
							this.setState({ loading: false });
							//error
						}
					);
				},
				() => {
					this.setState({ loading: false });
					//error
				}
			);
		}
	}
	render() {
		return (
			<div>
				<Container maxWidth="md" fixed>
					<AppBar position="static" color="white">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							variant="scrollable"
							scrollButtons="auto"
							aria-label="scrollable auto tabs example"
						>
							{this.props.categories
								? this.props.categories.map((category) => (
										<Tab
											icon={
												<CategoryTab
													icon={category.icon}
													title={category.categoryName}
												/>
											}
										/>
								  ))
								: null}
						</Tabs>
					</AppBar>

					{this.props.categoryPages
						? this.props.categoryPages[this.state.Page].map((item, index) => {
								switch (item.view_type) {
									case 0:
										let banners = [];
										for (
											let index = 1;
											index < item.no_of_banners + 1;
											index++
										) {
											const banner = item["banner_" + index];
											const background =
												item["banner_" + index + "_background"];
											banners.push({ banner, background });
										}
										return <BannerSlider Images={banners} />;
									case 1:
										return (
											<StripAdView
												image={item.strip_ad_banner}
												background={item.background}
											/>
										);
									default:
										break;
								}
						  })
						: null}
					<HorizontalScroller />
					<StripAdView />
					<GridView />
				</Container>

				<Backdrop style={{ zIndex: 1500 }} open={this.state.loading}>
					<CircularProgress color="primary" />
				</Backdrop>
			</div>
		);
	}
}

export const CategoryTab = ({ icon, title }) => {
	return (
		<Box textAlign="center">
			{icon !== "null" ? (
				<img src={icon} style={{ height: "30px", width: "30px" }} />
			) : (
				<HomeOutlined />
			)}
			<Typography variant="body2">{title}</Typography>
		</Box>
	);
};

const mapStateToProps = (state) => {
	return {
		categories: state.categories,
		categoryPages: state.categoryPages,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		loadCategories: (onSuccess, onError) =>
			dispatch(loadCategories(onSuccess, onError)),
		loadPage: (category, onSuccess, onError) =>
			dispatch(loadCategoryPage(category, onSuccess, onError)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeFragments);
