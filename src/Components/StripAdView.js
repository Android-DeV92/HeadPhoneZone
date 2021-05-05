import { Box } from "@material-ui/core";
import React from "react";

const StripAdView = ({ image, background }) => {
	return (
		<Box bgcolor="lightBlue">
			<img
				style={{
					height: "100px",
					width: "100%",
					background: background,
					objectFit: "scale-down",
				}}
				src={image}
			/>
		</Box>
	);
};

export default StripAdView;
