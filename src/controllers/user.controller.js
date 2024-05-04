import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";

const testRoute = asyncHandler(async (req, res) => {
	res.status(200).json(new ApiResponse(200, null, "Hello Users"));
});

export { testRoute };
